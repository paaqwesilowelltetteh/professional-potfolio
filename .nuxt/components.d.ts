
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AppFooter: typeof import("../app/components/AppFooter.vue")['default']
export const AppIcon: typeof import("../app/components/AppIcon.vue")['default']
export const AppNavbar: typeof import("../app/components/AppNavbar.vue")['default']
export const ArchitectureDiagram: typeof import("../app/components/ArchitectureDiagram.vue")['default']
export const ContactSection: typeof import("../app/components/ContactSection.vue")['default']
export const EngineeringPrinciple: typeof import("../app/components/EngineeringPrinciple.vue")['default']
export const ExperienceTimeline: typeof import("../app/components/ExperienceTimeline.vue")['default']
export const HeroArchitecture: typeof import("../app/components/HeroArchitecture.vue")['default']
export const MetricCard: typeof import("../app/components/MetricCard.vue")['default']
export const ProjectCaseStudy: typeof import("../app/components/ProjectCaseStudy.vue")['default']
export const SectionHeading: typeof import("../app/components/SectionHeading.vue")['default']
export const SkillGroup: typeof import("../app/components/SkillGroup.vue")['default']
export const SocialLinks: typeof import("../app/components/SocialLinks.vue")['default']
export const ThemeToggle: typeof import("../app/components/ThemeToggle.vue")['default']
export const ThreeBackground: typeof import("../app/components/ThreeBackground.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtAnnouncer: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAppFooter: LazyComponent<typeof import("../app/components/AppFooter.vue")['default']>
export const LazyAppIcon: LazyComponent<typeof import("../app/components/AppIcon.vue")['default']>
export const LazyAppNavbar: LazyComponent<typeof import("../app/components/AppNavbar.vue")['default']>
export const LazyArchitectureDiagram: LazyComponent<typeof import("../app/components/ArchitectureDiagram.vue")['default']>
export const LazyContactSection: LazyComponent<typeof import("../app/components/ContactSection.vue")['default']>
export const LazyEngineeringPrinciple: LazyComponent<typeof import("../app/components/EngineeringPrinciple.vue")['default']>
export const LazyExperienceTimeline: LazyComponent<typeof import("../app/components/ExperienceTimeline.vue")['default']>
export const LazyHeroArchitecture: LazyComponent<typeof import("../app/components/HeroArchitecture.vue")['default']>
export const LazyMetricCard: LazyComponent<typeof import("../app/components/MetricCard.vue")['default']>
export const LazyProjectCaseStudy: LazyComponent<typeof import("../app/components/ProjectCaseStudy.vue")['default']>
export const LazySectionHeading: LazyComponent<typeof import("../app/components/SectionHeading.vue")['default']>
export const LazySkillGroup: LazyComponent<typeof import("../app/components/SkillGroup.vue")['default']>
export const LazySocialLinks: LazyComponent<typeof import("../app/components/SocialLinks.vue")['default']>
export const LazyThemeToggle: LazyComponent<typeof import("../app/components/ThemeToggle.vue")['default']>
export const LazyThreeBackground: LazyComponent<typeof import("../app/components/ThreeBackground.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@4.5.2_@babel+plugin-syntax-jsx@7.29.7_@babel+core@7.29.7_supports-color@10.2.2___@_ba7449c105b05d1115711e8a0e5ac251/node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
