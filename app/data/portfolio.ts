export interface Metric {
  value: string;
  label: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  points: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: "Production Systems" | "Open Source";
  summary: string;
  role: string;
  image?: string;
  metrics?: string[];
  sections: { label: string; text: string }[];
  technologies: { label: string; items: string[] }[];
  link?: { label: string; href: string };
}

export const metrics: Metric[] = [
  { value: "6+", label: "Years of Professional Experience" },
  { value: "10,000+", label: "Pebble Subscribers" },
  { value: "5", label: "Developers Led" },
  { value: "5", label: "SMEs Supported Through Traceable" },
  { value: "1", label: "Open-Source Authentication Package" },
];

export const principles = [
  {
    title: "Understand the Problem",
    text: "I focus on the underlying business problem before choosing the technical implementation.",
  },
  {
    title: "Design Before Implementation",
    text: "I use technical specifications and system design to establish clear implementation direction.",
  },
  {
    title: "Clean Architecture",
    text: "I favor maintainable structures that allow systems to evolve without becoming difficult to manage.",
  },
  {
    title: "Reliable Financial Workflows",
    text: "I pay attention to payment verification, webhooks, idempotency, database transactions, and data integrity.",
  },
  {
    title: "Production Support",
    text: "I debug real systems across application code, APIs, queues, Redis, storage, servers, and deployments.",
  },
  {
    title: "Reusable Software",
    text: "I build reusable components and tools where they provide value, including open-source software.",
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "April 2021 - Present",
    role: "Software Developer",
    company: "AgroCenta & Pebbles Inc.",
    points: [
      "Design, develop, and maintain production applications and backend services using PHP, Laravel, REST APIs, databases, and third-party integrations.",
      "Helped build and maintain Pebble, a production streaming platform for 10,000+ subscribers using Laravel APIs and Nuxt frontend features.",
      "Led a team of five developers in designing and delivering Traceable for five SMEs under a USAID-sponsored initiative.",
      "Work across payment workflows, Redis/Horizon queues, WebSockets, AWS S3 uploads, Docker, Linux/Ubuntu, Nginx, PM2, and production troubleshooting.",
    ],
  },
  {
    period: "September 2019 - April 2021",
    role: "Programming Assistant",
    company: "Weija-Gbawe Municipal Assembly",
    points: [
      "Developed and maintained web applications using PHP and Laravel based on organizational requirements.",
      "Supported database work, application maintenance, debugging, technical support, and digital systems used within the organization.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "pebble",
    title: "Pebble - Streaming & Digital Content Platform",
    category: "Production Systems",
    image: "/images/pebble-thumbnail.jpg",
    summary:
      "A production streaming platform for 10,000+ subscribers supporting podcasts, audio content, movies, series, creators, subscribers, payments, and premium content experiences.",
    role: "Software Developer / Backend & Full-Stack Engineering",
    metrics: [
      "10,000+ Subscribers",
      "Direct-to-S3 uploads",
      "Payment webhooks",
    ],
    sections: [
      {
        label: "Purpose",
        text: "Support authentication, content management, content discovery, creator workflows, payments, earnings, withdrawals, and media delivery.",
      },
      {
        label: "Technical Approach",
        text: "Laravel APIs, Sanctum, Spatie Permission, Redis, Horizon queues, WebSockets, Paystack, AWS signed URLs, chunked uploads over 100MB, Pinia state, and Nuxt frontend features.",
      },
      {
        label: "Production Work",
        text: "Troubleshot Nginx, PHP, Laravel, Redis, PM2, Supervisor, Laravel Octane, FrankenPHP, storage, queue, API, and deployment issues.",
      },
    ],
    technologies: [
      {
        label: "Backend",
        items: [
          "PHP",
          "Laravel 13",
          "REST APIs",
          "Sanctum",
          "Spatie Permission",
          "Redis",
          "Laravel Horizon",
        ],
      },
      {
        label: "Frontend",
        items: [
          "Vue.js",
          "Nuxt",
          "Nuxt 4",
          "TypeScript",
          "Pinia",
          "Tailwind CSS",
        ],
      },
      {
        label: "Media & Infrastructure",
        items: [
          "AWS S3",
          "Signed URLs",
          "Chunked uploads",
          "WebSockets",
          "Nginx",
          "Ubuntu",
        ],
      },
      {
        label: "Business Systems",
        items: [
          "Paystack",
          "Webhooks",
          "Withdrawals",
          "Creator earnings",
          "Subscriptions",
        ],
      },
    ],
    link: { label: "Visit Pebble", href: "http://trypebble.com" },
  },
  {
    slug: "traceable",
    title: "Traceable - Digital Traceability Platform",
    category: "Production Systems",
    image: "/images/traceable-thumbnail.jpg",
    summary:
      "A USAID-sponsored agricultural digital traceability platform built for 5 SMEs, delivered with a five-person development team.",
    role: "Software Developer / Technical Lead",
    metrics: ["5 Developers", "5 SMEs", "USAID-Sponsored Initiative"],
    sections: [
      {
        label: "Leadership",
        text: "Led a team of five developers and coordinated technical implementation across the development team.",
      },
      {
        label: "Technical Approach",
        text: "Participated in architecture, database design, debugging, integration, requirements analysis, technical documentation, and technical decision-making.",
      },
      {
        label: "Delivery",
        text: "Helped translate project requirements into practical technical tasks and production-ready software.",
      },
    ],
    technologies: [
      {
        label: "Engineering",
        items: [
          "PHP",
          "Laravel",
          "Backend development",
          "API development",
          "Database design",
          "System architecture",
        ],
      },
      {
        label: "Leadership",
        items: [
          "Technical direction",
          "Requirements analysis",
          "Technical documentation",
          "Team coordination",
        ],
      },
    ],
  },
  {
    slug: "kuzima",
    title: "Kuzima - USSD Application Workflows",
    category: "Production Systems",
    summary:
      "Laravel backend functionality supporting USSD-driven application workflows, external API integrations, database workflows, and asynchronous processing.",
    role: "Full-Stack / Backend Developer",
    sections: [
      {
        label: "Purpose",
        text: "Support USSD-focused application workflows with backend functionality and external integrations.",
      },
      {
        label: "Technical Approach",
        text: "Laravel backend development, API integrations, database workflows, and asynchronous processing.",
      },
      {
        label: "Focus",
        text: "Practical backend implementation for structured, workflow-driven user interactions.",
      },
    ],
    technologies: [
      {
        label: "Stack",
        items: [
          "PHP",
          "Laravel",
          "USSD",
          "APIs",
          "Database workflows",
          "Asynchronous processing",
        ],
      },
    ],
  },
  {
    slug: "pebble-cms",
    title: "Pebble CMS",
    category: "Production Systems",
    summary:
      "A comprehensive content management system supporting digital media publishing, creators, subscribers, content workflows, and platform operations.",
    role: "Software developer contributing to content, media, authentication, and API workflows.",
    sections: [
      {
        label: "Purpose",
        text: "Provide administrative tools for digital media, creators, subscribers, publishing workflows, and platform operations.",
      },
      {
        label: "Technical Approach",
        text: "CMS workflows backed by authentication, APIs, content management, creator management, and media management capabilities.",
      },
      {
        label: "Operations",
        text: "Supports the operational side of a media platform where content and creator workflows need structured management.",
      },
    ],
    technologies: [
      {
        label: "Platform",
        items: [
          "Digital media",
          "Content publishing",
          "Administrative tools",
          "Authentication",
          "APIs",
        ],
      },
      {
        label: "Workflows",
        items: [
          "Creators",
          "Subscribers",
          "Publishing workflows",
          "Media management",
        ],
      },
    ],
    link: { label: "Visit Pebble CMS", href: "http://cms.trypebble.com" },
  },
  {
    slug: "nuxt-bearer-auth",
    title: "Nuxt Bearer Auth",
    category: "Open Source",
    image: "/images/open-source-thumbnail.jpg",
    summary:
      "Reusable Nuxt authentication module for APIs issuing bearer tokens. Features Redis-backed server sessions, HTTP-only cookie security, nuxt-csurf integration, SSR auth hydration, and useBearerAuth() / useAuth() composables.",
    role: "Creator & Maintainer",
    sections: [
      {
        label: "Purpose",
        text: "Provide robust, reusable bearer-token authentication for Nuxt applications with server-side session management, route guards, and CSRF protection.",
      },
      {
        label: "Technical Architecture",
        text: "Nuxt module structure, Redis-backed server sessions, HTTP-only session cookies, response path mapping, SSR state hydration, and useBearerAuth() / useAuth() composables.",
      },
      {
        label: "Key Features",
        text: "Email/Mobile login, social auth, registration, OTP verification, password reset, active session revocation, route middleware, and nuxt-csurf integration.",
      },
    ],
    technologies: [
      {
        label: "Core Module",
        items: [
          "Nuxt",
          "TypeScript",
          "Redis",
          "nuxt-csurf",
          "Bearer Token APIs",
        ],
      },
      {
        label: "Composables & API",
        items: [
          "useBearerAuth()",
          "useAuth()",
          "SSR Hydration",
          "Route Middleware",
          "Session Management",
        ],
      },
    ],
    link: {
      label: "View GitHub Repository",
      href: "https://github.com/paaqwesilowelltetteh/nuxt-bearer-auth",
    },
  },
];

export const designProcess = [
  "Business Requirement",
  "Problem Analysis",
  "Technical Specification",
  "Architecture & Data Design",
  "API / System Design",
  "Implementation",
  "Testing & Deployment",
];

export const architectureNodes = [
  "Frontend\nNuxt / Vue / TypeScript",
  "REST API",
  "Laravel",
  "Services / Business Logic",
  "MySQL / PostgreSQL / Redis",
  "Queues / Horizon / Workers",
  "External APIs / S3 / Cloud Services",
];

export const skillGroups = [
  {
    title: "Backend",
    items: [
      "PHP",
      "Laravel",
      "RESTful APIs",
      "OOP",
      "Eloquent ORM",
      "MVC",
      "Middleware",
      "Authentication",
      "Authorization",
      "Validation",
      "Events & Jobs",
      "Webhooks",
    ],
  },
  {
    title: "Architecture",
    items: [
      "Clean Architecture",
      "SOLID Principles",
      "Separation of Concerns",
      "Service-layer Architecture",
      "Modular Design",
      "System Design",
      "API Design",
      "Technical Specifications",
      "Technical Documentation",
    ],
  },
  {
    title: "Databases & Data",
    items: [
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Database Design",
      "Migrations",
      "Relationships",
      "Indexing",
      "Query Optimization",
      "Transactions",
      "Database Locking",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Vue.js",
      "Nuxt.js",
      "Nuxt 4",
      "TypeScript",
      "JavaScript",
      "Pinia",
      "Tailwind CSS",
      "Vite",
      "Blade",
      "Responsive UI",
    ],
  },
  {
    title: "Async & Real-Time",
    items: [
      "Laravel Queues",
      "Laravel Horizon",
      "Queue Workers",
      "Scheduled Jobs",
      "Background Processing",
      "WebSockets",
      "Real-time Notifications",
      "Progress Tracking",
    ],
  },
  {
    title: "Infrastructure & Tools",
    items: [
      "Ubuntu",
      "Linux CLI",
      "Nginx",
      "AWS S3",
      "DigitalOcean",
      "Docker",
      "FrankenPHP",
      "Laravel Octane",
      "PM2",
      "Supervisor",
      "Git",
      "GitHub Actions",
      "Postman",
    ],
  },
  {
    title: "Payments",
    items: [
      "Paystack",
      "MTN Mobile Money APIs",
      "Hubtel",
      "Payment Verification",
      "Webhooks",
      "Callbacks",
      "Idempotency",
      "Withdrawals",
      "Disbursements",
      "Collections",
    ],
  },
];
