<script setup lang="ts">
import type { Project } from '../data/portfolio'
defineProps<{ project: Project; variant?: 'open' }>()
</script>

<template>
  <article class="project-card reveal-up" :class="{ 'open-card': variant === 'open' }">
    <div v-if="project.image" class="project-thumb-box">
      <img :src="project.image" :alt="project.title" loading="lazy" />
      <a v-if="project.link" :href="project.link.href" target="_blank" rel="noreferrer" class="thumb-link-btn" aria-label="Visit project">
        <AppIcon name="arrow-top-right" size="1.1em" />
      </a>
    </div>

    <div class="project-topline">
      <span>{{ project.category }}</span>
      <a v-if="project.link" :href="project.link.href" target="_blank" rel="noreferrer" class="inline-link-btn">
        {{ project.link.label }}
        <AppIcon name="arrow-top-right" size="0.9em" />
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

<style scoped>
.thumb-link-btn {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: color-mix(in srgb, var(--panel) 85%, transparent);
  border: 1px solid var(--line);
  color: var(--heading);
  display: grid;
  place-items: center;
  backdrop-filter: blur(10px);
  transition: all 0.25s ease;
}

.thumb-link-btn:hover {
  background: var(--accent);
  color: #ffffff;
  border-color: var(--accent);
  transform: scale(1.08) rotate(5deg);
}

.inline-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
</style>
