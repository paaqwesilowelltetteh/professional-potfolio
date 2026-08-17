<script setup lang="ts">
import type { Project } from '../data/portfolio'
defineProps<{ project: Project; variant?: 'open' }>()
</script>

<template>
  <article class="project-card reveal-up" :class="{ 'open-card': variant === 'open' }">
    <div v-if="project.image" class="project-thumb-box">
      <img :src="project.image" :alt="project.title" loading="lazy" />
    </div>

    <div class="project-topline">
      <span>{{ project.category }}</span>
      <a v-if="project.link" :href="project.link.href" target="_blank" rel="noreferrer">
        {{ project.link.label }} →
      </a>
    </div>

    <h3>{{ project.title }}</h3>
    <p>{{ project.summary }}</p>

    <div v-if="project.metrics?.length" class="mini-metrics">
      <span v-for="metric in project.metrics" :key="metric">{{ metric }}</span>
    </div>

    <div class="case-sections">
      <div v-for="section in project.sections" :key="section.label">
        <strong>{{ section.label }}</strong>
        <p>{{ section.text }}</p>
      </div>
    </div>

    <div class="tech-columns">
      <div v-for="tech in project.technologies" :key="tech.label">
        <strong>{{ tech.label }}</strong>
        <div>
          <span v-for="item in tech.items" :key="item">{{ item }}</span>
        </div>
      </div>
    </div>
  </article>
</template>
