<script setup lang="ts">
import type { Metric } from '../data/portfolio'
defineProps<{ metric: Metric }>()
</script>

<template>
  <article class="metric-card reveal-up">
    <strong>{{ metric.value }}</strong>
    <span>{{ metric.label }}</span>
  </article>
</template>
