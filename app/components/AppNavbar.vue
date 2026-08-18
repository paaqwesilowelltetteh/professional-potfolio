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
      <span aria-hidden="true">ET</span>
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
      <a class="header-cv-link" href="/Enoch_Tetteh_CV.pdf" download aria-label="Download CV">
        <AppIcon name="arrow-top-right" size="0.85em" />
        Download CV
      </a>
      <ThemeToggle />
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
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
      <a class="mobile-nav-cv" href="/Enoch_Tetteh_CV.pdf" download @click="close">
        <AppIcon name="arrow-top-right" size="0.85em" />
        Download CV
      </a>
    </nav>
  </header>
</template>

<style scoped>
.mobile-nav-cv {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-md);
  color: var(--accent-strong);
  font-weight: 700;
  border-top: 1px solid var(--line);
  margin-top: 0.25rem;
}

.mobile-nav-cv:hover {
  background: var(--accent-soft);
}
</style>
