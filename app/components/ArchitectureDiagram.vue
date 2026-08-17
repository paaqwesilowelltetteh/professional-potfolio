<script setup lang="ts">
defineProps<{ nodes: string[] }>()
</script>

<template>
  <div class="architecture-diagram">
    <div v-for="(node, index) in nodes" :key="node" class="arch-node reveal-up" :style="{ '--delay': `${index * 80}ms` }">
      <span>{{ String(index + 1).padStart(2, '0') }}</span>
      <strong v-for="line in node.split('\n')" :key="line">{{ line }}</strong>
    </div>
  </div>
</template>
