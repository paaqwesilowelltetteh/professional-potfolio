<script setup lang="ts">
defineProps<{ principle: { title: string; text: string } }>()
</script>

<template>
  <article class="principle-card reveal-up">
    <h3>{{ principle.title }}</h3>
    <p>{{ principle.text }}</p>
  </article>
</template>
