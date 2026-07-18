export const siteConfig = {
  name: "Anuj Anthwal",
  role: "Full-Stack Developer",
  email: "anujanthwal98765432@gmail.com",
  description:
    "Full-stack developer building scalable systems with Spring Boot, React, and PostgreSQL. Passionate about clean architecture, payments, and developer tooling.",
  portrait: "/portrait.jpg",
  socials: {
    github: "https://github.com/Anujanthwal-dotcom",
    linkedin: "https://linkedin.com/in/anuj-anthwal",
    leetcode: "https://leetcode.com/u/Strika_24/",
    email: "mailto:anujanthwal98765432@gmail.com",
  },
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "DSA", href: "#dsa" },
  { label: "System Design", href: "#system-design" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Years of engineering", value: "1+" },
  { label: "Projects shipped", value: "3" },
  { label: "DSA problems solved", value: "397" },
];

export const tags = [
  "Java",
  "NestJS",
  "TypeScript",
  "Spring Boot",
  "React",
  "PostgreSQL",
  "Docker",
  "Node.js",
];

export const recentWriting = [
  {
    title: "Building a Design System from Scratch",
    date: "May 20, 2026",
    category: "Engineering",
    slug: "building-design-system",
  },
  {
    title: "Why I Switched to Next.js App Router",
    date: "Apr 15, 2026",
    category: "Next.js",
    slug: "nextjs-app-router",
  },
  {
    title: "Lessons from Shipping 10 Products",
    date: "Mar 8, 2026",
    category: "Career",
    slug: "lessons-shipping-products",
  },
  {
    title: "Optimizing React Native Performance",
    date: "Feb 22, 2026",
    category: "React Native",
    slug: "react-native-performance",
  },
];

export const systemDesign = [
  {
    title: "Designing a Real-Time Chat System",
    date: "Jun 10, 2026",
    category: "System Design",
    description:
      "Deep dive into WebSocket architecture, message queues, and scaling strategies for a real-time messaging platform.",
    slug: "real-time-chat-system",
  },
  {
    title: "URL Shortener at Scale",
    date: "May 5, 2026",
    category: "System Design",
    description:
      "How to design a URL shortening service that handles billions of redirects with low latency.",
    slug: "url-shortener-scale",
  },
  {
    title: "Designing a Rate Limiter",
    date: "Apr 1, 2026",
    category: "System Design",
    description:
      "Exploring token bucket, sliding window, and fixed window algorithms for API rate limiting.",
    slug: "designing-rate-limiter",
  },
];

export const projects = [
  {
    title: "Ticketly — Ticket Booking Platform",
    description:
      "Architected a modular monolith with layered architecture for a ticket booking platform. Integrated Stripe payments with server-side validation, OAuth 2.0 authentication via Spring Security, and Redis caching with automatic invalidation. Built an AI-powered search layer using Spring AI for fuzzy event filtering.",
    tags: ["Java", "React", "PostgreSQL", "TypeScript", "Redis", "Docker"],
    link: "https://github.com/Anujanthwal-dotcom/Ticktetly",
    github: "https://github.com/Anujanthwal-dotcom/Ticktetly",
    featured: true,
    metrics: [
      { label: "Platform", value: "Web" },
      { label: "Role", value: "Solo Dev" },
      { label: "Status", value: "In Progress" },
    ],
  },
  {
    title: "Notes Buddy — Note-Sharing Platform",
    description:
      "A note-sharing platform with PDF upload/download via S3-compatible MinIO storage. Reduced malicious uploads by 98% through ClamAV integration. Deployed on a Linux VPS with Docker Compose, Nginx reverse proxy, rate limiting, and SSL/TLS.",
    tags: ["Spring Boot", "React", "PostgreSQL", "TypeScript", "Docker"],
    link: "https://github.com/Anujanthwal-dotcom/College-Notes-Sharing-Platform",
    github: "https://github.com/Anujanthwal-dotcom/College-Notes-Sharing-Platform",
    featured: false,
    metrics: [
      { label: "Platform", value: "Web" },
      { label: "Role", value: "Solo Dev" },
      { label: "Security", value: "98% safer" },
    ],
  },
  {
    title: "QuickStay — Hotel Booking Platform",
    description:
      "A full-stack hotel booking platform with Stripe payments, Clerk authentication with RBAC, Cloudinary image uploads, and real-time availability checks. Includes a dedicated owner dashboard for revenue tracking and property management.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "Cloudinary"],
    link: "https://github.com/Anujanthwal-dotcom/QuickStay-hotel-booking",
    github: "https://github.com/Anujanthwal-dotcom/QuickStay-hotel-booking",
    featured: false,
    metrics: [
      { label: "Platform", value: "Web" },
      { label: "Role", value: "Solo Dev" },
      { label: "Auth", value: "Clerk RBAC" },
    ],
  },
];

export const achievements = [
  {
    title: "Dev Katas — 4,000+ Developers Educated",
    description: "Creator of the Dev Katas YouTube channel teaching systems architecture to over 4,000 developers.",
    badge: "4,000+",
    organizer: "YouTube",
    image: "/oauth.png",
    link: "https://www.youtube.com/@DevKatas/featured",
  },
  {
    title: "AIR-104 — Unstop Weekly Coding Challenge",
    description: "Secured All India Rank 104 among 29,000+ participants in Unstop's weekly coding challenge.",
    badge: "AIR-104",
    organizer: "Unstop",
    image: "/unstop.png",
    link: "https://unstop.com/certificate-preview/cfa533c8-a094-49c7-bde7-34383b61210c",
  },
  {
    title: "Social Summer of Code 2025",
    description: "Ranked 108th overall in the Social Summer of Code 2025 open source program.",
    badge: "108th",
    organizer: "Social (Script Foundation)",
    image: "/ssoc.png",
  },
];

export const experience = [
  {
    company: "Synegrow",
    role: "Software Development Engineering Intern",
    period: "Oct 2025 — Feb 2026",
    type: "main" as const,
    badge: "SDE Intern",
    description:
      "Developed NestJS microservices and technical documentation for the Shopify OAuth 2.0 authentication flow, enabling secure merchant installation and authorization of the Shopify app.",
    highlights: [
      "Built a NestJS microservice for Shopify OAuth 2.0 authentication flow",
      "Designed a multi-tier MySQL schema with composite indexing, reducing query latency by 35%",
      "Built a checkout microservice for custom Shopify checkout extensions",
      "Created comprehensive technical documentation for the auth flow",
    ],
    tags: ["TypeScript", "NestJS", "MySQL", "REST APIs", "OAuth 2.0"],
    metrics: [
      { label: "Duration", value: "5 months" },
      { label: "Impact", value: "35% faster queries" },
      { label: "Stack", value: "NestJS + MySQL" },
    ],
  },
  {
    company: "Social (Formerly Script Foundation)",
    role: "Open Source Contributor — SSOC 2025",
    period: "Jun 2025 — Jul 2025",
    type: "supporting" as const,
    badge: "Open Source",
    description:
      "Engineered features and resolved vulnerabilities across open-source repositories via structured pull requests. Collaborated directly with maintainers on rigid code reviews.",
    highlights: [
      "Engineered features and resolved vulnerabilities across open-source repos",
      "Collaborated with maintainers on rigid code reviews, standardizing error handling",
      "Ranked 108th overall in Social Summer of Code 2025",
    ],
    tags: ["Python", "Rust", "Git", "GitHub"],
    metrics: [
      { label: "Duration", value: "2 months" },
      { label: "Languages", value: "Python, Rust" },
      { label: "Rank", value: "108th / 29k+" },
    ],
  },
];
