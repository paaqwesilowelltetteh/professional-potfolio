<script setup lang="ts">
import type { TimelineItem } from '../data/portfolio'
defineProps<{ items: TimelineItem[] }>()
</script>

<template>
  <div class="timeline">
    <article v-for="item in items" :key="item.period" class="timeline-item reveal-up">
      <p>{{ item.period }}</p>
      <h3>{{ item.role }}</h3>
      <strong>{{ item.company }}</strong>
      <ul>
        <li v-for="point in item.points" :key="point">{{ point }}</li>
      </ul>
    </article>
  </div>
</template>
