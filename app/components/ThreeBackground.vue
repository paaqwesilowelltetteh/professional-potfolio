<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref<HTMLDivElement | null>(null)
let animationFrameId: number | null = null
let cleanupFn: (() => void) | null = null

onMounted(async () => {
  if (!containerRef.value || typeof window === 'undefined') return

  try {
    const THREE = await import('three')

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 300

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.value.appendChild(renderer.domElement)

    const particleCount = 110
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const velocities: { x: number; y: number; z: number }[] = []

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 600
      positions[i3 + 1] = (Math.random() - 0.5) * 600
      positions[i3 + 2] = (Math.random() - 0.5) * 400
      velocities.push({
        x: (Math.random() - 0.5) * 0.35,
        y: (Math.random() - 0.5) * 0.35,
        z: (Math.random() - 0.5) * 0.2,
      })
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 3.5,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    })

    const particleSystem = new THREE.Points(geometry, particleMaterial)
    scene.add(particleSystem)

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    })

    const lineGeometry = new THREE.BufferGeometry()
    const maxLines = particleCount * 6
    const linePositions = new Float32Array(maxLines * 3)
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lineSystem)

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.08
      mouseY = (event.clientY - window.innerHeight / 2) * 0.08
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('resize', handleResize)

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      targetX += (mouseX - targetX) * 0.05
      targetY += (mouseY - targetY) * 0.05

      camera.position.x = targetX
      camera.position.y = -targetY
      camera.lookAt(scene.position)

      const posAttr = geometry.attributes.position as any
      const posArray = posAttr.array as Float32Array

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const vel = velocities[i]
        if (!vel) continue

        posArray[i3] = (posArray[i3] ?? 0) + vel.x
        posArray[i3 + 1] = (posArray[i3 + 1] ?? 0) + vel.y
        posArray[i3 + 2] = (posArray[i3 + 2] ?? 0) + vel.z

        if (Math.abs(posArray[i3] ?? 0) > 350) vel.x *= -1
        if (Math.abs(posArray[i3 + 1] ?? 0) > 350) vel.y *= -1
        if (Math.abs(posArray[i3 + 2] ?? 0) > 250) vel.z *= -1
      }
      posAttr.needsUpdate = true

      let lineVertexIndex = 0
      const linePosAttr = lineGeometry.attributes.position as any
      const linePosArray = linePosAttr.array as Float32Array
      const maxDistance = 95

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const x1 = posArray[i3] ?? 0
        const y1 = posArray[i3 + 1] ?? 0
        const z1 = posArray[i3 + 2] ?? 0

        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3
          const dx = x1 - (posArray[j3] ?? 0)
          const dy = y1 - (posArray[j3 + 1] ?? 0)
          const dz = z1 - (posArray[j3 + 2] ?? 0)
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < maxDistance && lineVertexIndex + 5 < linePosArray.length) {
            linePosArray[lineVertexIndex++] = x1
            linePosArray[lineVertexIndex++] = y1
            linePosArray[lineVertexIndex++] = z1
            linePosArray[lineVertexIndex++] = posArray[j3] ?? 0
            linePosArray[lineVertexIndex++] = posArray[j3 + 1] ?? 0
            linePosArray[lineVertexIndex++] = posArray[j3 + 2] ?? 0
          }
        }
      }

      lineGeometry.setDrawRange(0, lineVertexIndex / 3)
      linePosAttr.needsUpdate = true

      particleSystem.rotation.y += 0.0008
      lineSystem.rotation.y += 0.0008

      renderer.render(scene, camera)
    }

    animate()

    cleanupFn = () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      if (renderer.domElement && containerRef.value) {
        containerRef.value.removeChild(renderer.domElement)
      }
      geometry.dispose()
      particleMaterial.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      renderer.dispose()
    }
  } catch (err) {
    console.warn('Three.js canvas initialization:', err)
  }
})

onUnmounted(() => {
  if (cleanupFn) cleanupFn()
})
</script>

<template>
  <div ref="containerRef" class="three-background-canvas" aria-hidden="true"></div>
</template>

<style scoped>
.three-background-canvas {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.85;
}
</style>
