import type { NuxtConfig } from 'nuxt/schema'

declare module 'nuxt/config' {
  interface DefineNuxtConfig {
    <T extends NuxtConfig>(config: T): T
  }
}

declare module '@nuxt/schema' {
  interface DefineNuxtConfig {
    <T extends NuxtConfig>(config: T): T
  }
}
