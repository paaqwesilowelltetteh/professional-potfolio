<script setup lang="ts">
import { metrics, projects, skillGroups, timeline, principles, architectureNodes, designProcess } from '@/data/portfolio'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const cvPath = '/Enoch_Tetteh_CV.pdf'
const hasCv = true

useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Enoch Tetteh | Full-Stack Software Developer & Laravel Specialist',
  meta: [
    { name: 'description', content: 'Enoch Tetteh is a Full-Stack Software Developer specializing in PHP, Laravel, APIs, system architecture, Vue.js, Nuxt, and scalable production systems.' },
    { property: 'og:title', content: 'Enoch Tetteh | Full-Stack Software Developer & Laravel Specialist' },
    { property: 'og:description', content: 'Backend-focused full-stack engineer building scalable APIs, production systems, technical specifications, and open-source Nuxt software.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Enoch Tetteh | Full-Stack Software Developer' },
    { name: 'twitter:description', content: 'PHP & Laravel specialist with full-stack Vue, Nuxt, TypeScript, APIs, databases, and cloud infrastructure experience.' },
    { name: 'theme-color', content: '#159a5b' },
  ],
  link: [{ rel: 'canonical', href: 'https://enochtetteh.dev/' }],
  script: [
    {
      innerHTML: "(() => { try { const stored = localStorage.getItem('portfolio-theme'); const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; const theme = stored === 'dark' || stored === 'light' ? stored : preferred; document.documentElement.dataset.theme = theme; document.documentElement.style.colorScheme = theme; } catch (_) {} })();",
      tagPosition: 'head',
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Enoch Tetteh',
        jobTitle: 'Full-Stack Software Developer',
        address: { '@type': 'PostalAddress', addressCountry: 'Ghana' },
        email: 'mailto:mrenochtetteh@outlook.com',
        telephone: '+233241372895',
        sameAs: [
          'https://github.com/paaqwesilowelltetteh',
          'https://www.linkedin.com/in/enoch-tetteh-b1b6371bb',
        ],
        knowsAbout: ['PHP', 'Laravel', 'REST APIs', 'System Architecture', 'Vue.js', 'Nuxt', 'Technical Specifications', 'Redis', 'Payment Integrations'],
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Pentecost University' },
      }),
    },
  ],
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <ClientOnly>
      <ThreeBackground />
    </ClientOnly>
    <AppNavbar :items="navItems" />

    <main>
      <section id="home" class="hero-section section-shell">
        <div class="hero-copy reveal-up">
          <div class="eyebrow-badge">
            <span class="status-dot"></span> Ghana · 6+ Years Building Production Software
          </div>
          <h1 class="gradient-text">Enoch Tetteh</h1>
          <h2>Full-Stack Software Developer</h2>
          <p class="hero-lede">Building scalable backend architecture, robust APIs, and modern web applications.</p>
          <p class="hero-subcopy">PHP & Laravel specialist with full-stack experience in Vue.js, Nuxt 4, TypeScript, APIs, databases, payment integrations, Redis, queues, WebSockets, and cloud infrastructure.</p>
          <div class="hero-actions">
            <a class="button primary" href="#projects">View My Work</a>
            <a class="button secondary" href="mailto:mrenochtetteh@outlook.com">Let's Talk</a>
          </div>
          <SocialLinks />
        </div>
        <HeroArchitecture />
      </section>

      <section class="metrics-strip section-shell" aria-label="Professional metrics">
        <MetricCard v-for="metric in metrics" :key="metric.label" :metric="metric" />
      </section>

      <section id="about" class="section-shell split-section">
        <SectionHeading eyebrow="About" title="Backend-focused, full-stack when the product needs it." />
        <div class="content-stack">
          <p>I am a software developer with 6+ years of professional experience designing, building, maintaining, and deploying production web applications and backend systems.</p>
          <p>My strongest area is PHP and Laravel backend engineering: REST APIs, authentication and authorization, relational database architecture, payment integrations, asynchronous processing, Redis-based systems, queues, WebSockets, and third-party integrations.</p>
          <p>I also work across Vue.js, Nuxt.js, TypeScript, and Tailwind CSS, which helps me connect backend architecture to user-facing interfaces and complete product workflows.</p>
          <div class="education-card">
            <span>Education</span>
            <strong>BSc Information Technology</strong>
            <p>Pentecost University · Second Class Honours · Graduated 2019</p>
          </div>
        </div>
      </section>

      <section class="section-shell dark-band" aria-labelledby="philosophy-title">
        <SectionHeading id="philosophy-title" eyebrow="How I Build Software" title="From requirement to reliable production system." />
        <div class="principle-grid">
          <EngineeringPrinciple v-for="principle in principles" :key="principle.title" :principle="principle" />
        </div>
      </section>

      <section id="experience" class="section-shell split-section">
        <SectionHeading eyebrow="Experience" title="Production systems, leadership, and practical delivery." />
        <ExperienceTimeline :items="timeline" />
      </section>

      <section id="projects" class="section-shell projects-section">
        <SectionHeading eyebrow="Featured Work" title="Case studies grounded in systems I have helped build." />
        <div class="project-grid">
          <ProjectCaseStudy v-for="project in projects.filter((project) => project.category === 'Production Systems')" :key="project.title" :project="project" />
        </div>
      </section>

      <section id="open-source" class="section-shell open-source-section">
        <SectionHeading eyebrow="Open Source" title="Reusable software for the developer community." />
        <div class="open-source-layout">
          <ProjectCaseStudy :project="projects.find((project) => project.slug === 'nuxt-bearer-auth')!" variant="open" />
          <div class="case-study-panel">
            <p class="eyebrow">Expanded Case Study</p>
            <h3>Nuxt Bearer Auth</h3>
            <dl>
              <div><dt>Overview</dt><dd>An open-source Nuxt Bearer Authentication package designed to simplify bearer-token authentication in Nuxt applications.</dd></div>
              <div><dt>My Role</dt><dd>Creator & Maintainer</dd></div>
              <div><dt>Technical Focus</dt><dd>Package architecture, Nuxt, TypeScript, authentication functionality, documentation, and reusable developer experience.</dd></div>
              <div><dt>Engineering Concepts</dt><dd>Authentication state, API integration, reusable package design, composables, and developer documentation.</dd></div>
              <div><dt>Community</dt><dd>The project is open source and publicly available on GitHub for use by other developers and projects.</dd></div>
            </dl>
            <a class="button primary" href="https://github.com/paaqwesilowelltetteh/nuxt-bearer-auth" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        </div>
      </section>

      <section class="section-shell split-section">
        <SectionHeading eyebrow="Technical Design & Engineering" title="I turn business requirements into implementation plans." />
        <div class="process-flow" aria-label="Engineering process">
          <div v-for="step in designProcess" :key="step" class="process-step">{{ step }}</div>
        </div>
      </section>

      <section class="section-shell backend-section">
        <SectionHeading eyebrow="Backend Engineering" title="Laravel systems, APIs, data models, and integrations." />
        <p class="section-lede">My strongest area is backend engineering. I design APIs, business logic, data models, integrations, authentication systems, and application architecture using PHP and Laravel, while applying clean architecture and scalable engineering practices.</p>
        <div class="backend-grid">
          <span v-for="item in ['API Architecture', 'Authentication', 'Authorization', 'Database Design', 'Business Logic', 'Laravel Queues', 'Redis', 'Laravel Horizon', 'WebSockets', 'Payment Systems', 'Webhooks', 'Technical Specifications']" :key="item">{{ item }}</span>
        </div>
      </section>

      <section class="section-shell architecture-section">
        <SectionHeading eyebrow="Architecture" title="Example of the architecture patterns I work with." />
        <ArchitectureDiagram :nodes="architectureNodes" />
      </section>

      <section id="skills" class="section-shell skills-section">
        <SectionHeading eyebrow="Skills" title="Organized around the systems I build." />
        <div class="skill-grid">
          <SkillGroup v-for="group in skillGroups" :key="group.title" :group="group" />
        </div>
      </section>

      <section class="section-shell cv-section">
        <div>
          <p class="eyebrow">Resume / CV</p>
          <h2>Want the full story?</h2>
          <p>Download my CV for a detailed overview of my experience, technical skills, projects, and engineering background.</p>
        </div>
        <a v-if="hasCv" class="button primary" :href="cvPath" download>Download CV</a>
        <span v-else class="button disabled" aria-disabled="true">CV coming soon</span>
      </section>

      <ContactSection id="contact" />
    </main>

    <AppFooter />
  </div>
</template>
