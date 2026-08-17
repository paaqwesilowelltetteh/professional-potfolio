import type { ConfigLayerMeta, InputConfig, UserInputConfig } from 'c12'
import type { NuxtConfig } from 'nuxt/schema'

declare module 'three'

declare module 'nuxt/config' {
  interface DefineNuxtConfig {
    <T extends UserInputConfig = NuxtConfig>(config: InputConfig<T, ConfigLayerMeta>): InputConfig<T, ConfigLayerMeta>
  }
}

declare module '@nuxt/schema' {
  interface DefineNuxtConfig {
    <T extends UserInputConfig = NuxtConfig>(config: InputConfig<T, ConfigLayerMeta>): InputConfig<T, ConfigLayerMeta>
  }
}
