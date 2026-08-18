# Enoch Tetteh — Engineering Portfolio

A modern, high-performance portfolio website built with **Nuxt 4**, **Vue 3**, **TypeScript**, and **Three.js** showcasing the engineering career, system architectures, production platforms, and open-source contributions of **Enoch Tetteh** (Full-Stack Software Developer & Laravel Specialist).

---

## 🌟 Features

- **Interactive 3D Background**: Real-time interactive particle constellation system built with Three.js that responds dynamically to theme modes and user cursor movement.
- **Interactive System Architecture**: Visual architectural flow diagram mapping full-stack system topologies (Frontend Nuxt/Vue, REST APIs, Laravel service layers, Redis/PostgreSQL/MySQL databases, queues/Horizon workers, and cloud services).
- **Comprehensive Case Studies**:
  - **Pebble**: Production streaming platform for 10,000+ subscribers supporting audio, video, creator monetization, and chunked AWS S3 media uploads.
  - **Traceable**: USAID-sponsored digital agricultural traceability system built for 5 SMEs with a 5-developer engineering team.
  - **Kuzima**: USSD-driven backend application workflows and asynchronous integrations.
  - **Pebble CMS**: Administrative platform for publishing workflows, creator operations, and media asset management.
  - **Nuxt Bearer Auth**: Open-source authentication module for Nuxt applications featuring Redis session management, HTTP-only cookies, and CSRF protection.
- **Adaptive Dark / Light Theming**: Custom CSS design system with fluid theme transitions, persistent theme state, and system preference detection (`prefers-color-scheme`).
- **Comprehensive SEO & Structured Data**: Rich OpenGraph/Twitter social cards and JSON-LD `Person` Schema metadata for discoverability and SEO best practices.
- **Fast & Responsive**: Built with vanilla CSS design tokens for maximum performance, minimal bundle overhead, and fluid responsive layouts across all device sizes.

---

## 🛠️ Tech Stack

| Category            | Technology                                                                  |
| ------------------- | --------------------------------------------------------------------------- |
| **Framework**       | [Nuxt 4](https://nuxt.com/) (Vue 3, Vite, SSR / Static Generation)          |
| **Language**        | [TypeScript](https://www.typescriptlang.org/)                               |
| **3D Graphics**     | [Three.js](https://threejs.org/)                                            |
| **Styling**         | Custom Vanilla CSS Design System (CSS Custom Properties & Design Tokens)    |
| **Deployment**      | [Netlify](https://www.netlify.com/) (Static Generation via `pnpm generate`) |
| **Package Manager** | [PNPM](https://pnpm.io/)                                                    |

---

## 📁 Project Structure

```text
portfolio/
├── app/
│   ├── app.vue                   # Root application layout, head metadata & sections
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # Design system, CSS variables & global styles
│   ├── components/
│   │   ├── AppFooter.vue         # Footer component with branding & links
│   │   ├── AppIcon.vue           # Reusable SVG icon set
│   │   ├── AppNavbar.vue         # Responsive header navigation
│   │   ├── ArchitectureDiagram.vue # System architecture flowchart
│   │   ├── ContactSection.vue    # Contact information & quick links
│   │   ├── EngineeringPrinciple.vue # Core engineering philosophy cards
│   │   ├── ExperienceTimeline.vue   # Career history & achievements
│   │   ├── HeroArchitecture.vue  # Hero section with interactive architecture preview
│   │   ├── MetricCard.vue        # Key career metrics highlights
│   │   ├── ProjectCaseStudy.vue  # Detailed project case study cards
│   │   ├── SectionHeading.vue    # Standardized section headings
│   │   ├── SkillGroup.vue        # Categorized technical skill matrices
│   │   ├── SocialLinks.vue       # External social profiles
│   │   ├── ThemeToggle.vue       # Dark/light mode switcher
│   │   └── ThreeBackground.vue   # Three.js 3D particle canvas
│   └── data/
│       └── portfolio.ts          # Centralized portfolio data, metrics & projects
├── public/                       # Static assets, icons, favicons & CV download
├── netlify.toml                  # Netlify deployment configuration & security headers
├── nuxt.config.ts                # Nuxt configuration
├── package.json                  # Dependencies & scripts
└── tsconfig.json                 # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v22.x` or higher
- **PNPM**: `v11.x` (or `corepack enable pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/paaqwesilowelltetteh/portfolio.git
cd portfolio

# Install dependencies
pnpm install
```

### Development Server

Start the local development server with hot-module replacement on `http://localhost:3000`:

```bash
pnpm dev
```

### Production Build & Static Generation

```bash
# Generate static output (pre-rendered for SSG / Netlify)
pnpm generate

# Or build the server application
pnpm build

# Preview the production build locally
pnpm preview
```

---

## 🚢 Deployment

The project is preconfigured for continuous deployment with **Netlify** via `netlify.toml`:

```toml
[build]
  command = "pnpm generate"
  publish = ".output/public"

[build.environment]
  NODE_VERSION = "22.19.0"
  PNPM_VERSION = "11.19.0"
```

Security headers including `X-Frame-Options`, `X-Content-Type-Options`, and `Referrer-Policy` are enforced at the edge.

---

## 👤 Author

**Enoch Tetteh**

- **Website**: [enochtetteh.dev](https://enochtetteh.dev/)
- **GitHub**: [@paaqwesilowelltetteh](https://github.com/paaqwesilowelltetteh)
- **LinkedIn**: [Enoch Tetteh](https://www.linkedin.com/in/enoch-tetteh-b1b6371bb)
- **Email**: [mrenochtetteh@outlook.com](mailto:mrenochtetteh@outlook.com)
