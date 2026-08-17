<script setup lang="ts">
type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

const applyTheme = (value: Theme) => {
  theme.value = value
  document.documentElement.dataset.theme = value
  document.documentElement.style.colorScheme = value
  localStorage.setItem('portfolio-theme', value)
}

onMounted(() => {
  const stored = localStorage.getItem('portfolio-theme') as Theme | null
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  applyTheme(stored === 'dark' || stored === 'light' ? stored : preferred)
})
</script>

<template>
  <button class="theme-toggle" type="button" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`" @click="applyTheme(theme === 'dark' ? 'light' : 'dark')">
    <span class="theme-toggle-track" aria-hidden="true">
      <span class="theme-toggle-thumb"></span>
    </span>
    <span>{{ theme === 'dark' ? 'Dark' : 'Light' }}</span>
  </button>
</template>
