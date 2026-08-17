<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{ items: { label: string; href: string }[] }>()
const isOpen = ref(false)
const activeHash = ref('#home')
const close = () => { isOpen.value = false }

const updateActive = () => {
  if (typeof document === 'undefined') return
  const sections = props.items
    .map((item) => document.querySelector(item.href))
    .filter((section): section is Element => Boolean(section))

  const current = sections.reduce((closest, section) => {
    const top = section.getBoundingClientRect().top
    return top <= 140 ? section.id : closest
  }, 'home')

  activeHash.value = `#${current}`
}

onMounted(() => {
  updateActive()
  window.addEventListener('scroll', updateActive, { passive: true })
  window.addEventListener('hashchange', updateActive)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActive)
  window.removeEventListener('hashchange', updateActive)
})
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#home" aria-label="Enoch Tetteh home">
      <span>ET</span>
      <strong>Enoch Tetteh</strong>
    </a>

    <nav class="desktop-nav" aria-label="Primary navigation">
      <a
        v-for="item in items"
        :key="item.href"
        :href="item.href"
        :class="{ active: activeHash === item.href }"
      >
        {{ item.label }}
      </a>
    </nav>

    <div class="header-actions">
      <ThemeToggle />
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        @click="isOpen = !isOpen"
      >
        <AppIcon name="menu" size="1.2em" />
      </button>
    </div>

    <nav id="mobile-menu" class="mobile-nav" :class="{ open: isOpen }" aria-label="Mobile navigation">
      <a
        v-for="item in items"
        :key="item.href"
        :href="item.href"
        :class="{ active: activeHash === item.href }"
        @click="close"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>
