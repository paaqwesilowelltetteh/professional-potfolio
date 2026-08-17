<script setup lang="ts">
defineProps<{ group: { title: string; items: string[] } }>()
</script>

<template>
  <article class="skill-group reveal-up">
    <h3>{{ group.title }}</h3>
    <div>
      <span v-for="item in group.items" :key="item">{{ item }}</span>
    </div>
  </article>
</template>
