export const siteConfig = {
  name: "Anuj Anthwal",
  role: "Full-Stack Developer",
  email: "anujanthwal98765432@gmail.com",
  description:
    "Full-stack developer building scalable systems with NestJS, React, and PostgreSQL. Passionate about clean architecture, payments, and developer tooling.",
  portrait: "/portrait.jpg",
  socials: {
    github: "https://github.com/Anujanthwal-dotcom",
    linkedin: "https://linkedin.com/in/anuj-anthwal",
    leetcode: "https://leetcode.com/u/Strika_24/",
    email: "mailto:anujanthwal98765432@gmail.com",
  },
};

export const socialLinks = [
  { href: "https://github.com/Anujanthwal-dotcom", label: "GitHub" },
  { href: "https://linkedin.com/in/anuj-anthwal", label: "LinkedIn" },
  { href: "https://leetcode.com/u/Strika_24/", label: "LeetCode" },
  { href: "mailto:anujanthwal98765432@gmail.com", label: "Email" },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "DSA", href: "#dsa" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Years of engineering", value: "2+" },
  { label: "Projects shipped", value: "3" },
  { label: "DSA problems solved", value: "397" },
];

export const tags = [
  "TypeScript",
  "NestJS",
  "React",
  "LangChain",
  "LangGraph",
  "Node.js",
  "PostgreSQL",
  "Docker",
];



export const projects = [
  {
    title: "Ticketly — Ticket Booking System",
    description:
      "Implemented OAuth 2.0 (Google/Facebook) via Passport.js with ElastiCache Redis session storage and session fixation defense. Integrated Stripe PaymentElement with PaymentIntent workflows, webhook handlers, and 3-point verification checks. Built an AI search tool using Google Gemini & LangChain to parse natural queries into filters, with keyword fallbacks. Engineered pessimistic row locking in RDS PostgreSQL to prevent concurrent double-booking. Automated post-booking PDF ticket generation, AWS S3 storage, and email delivery via Nodemailer.",
    tags: ["React", "NestJS", "TypeScript", "AWS", "Redis", "LangChain"],
    link: "https://github.com/Anujanthwal-dotcom/Full-Stack-Event-Ticket-Booking-System",
    github: "https://github.com/Anujanthwal-dotcom/Full-Stack-Event-Ticket-Booking-System",
    featured: true,
    metrics: [
      { label: "Platform", value: "Web" },
      { label: "Role", value: "Solo Dev" },
      { label: "Payments", value: "Stripe" },
    ],
  },
  {
    title: "Actionify — AI Meeting Notes Processor",
    description:
      "Architected a 5-stage LangGraph AI pipeline processing transcripts down to structured Slack payloads. Implemented a dual-LLM fallback strategy, achieving 99.9% uptime for runtime extractions while guaranteeing type safety through Zod schemas. Integrated the Slack Block Kit API to programmatically deliver rich data payloads and structured action items.",
    tags: ["NestJS", "LangGraph", "React", "LangChain", "TypeScript"],
    link: "https://github.com/Anujanthwal-dotcom/actionify",
    github: "https://github.com/Anujanthwal-dotcom/actionify",
    featured: false,
    metrics: [
      { label: "Platform", value: "Web" },
      { label: "Role", value: "Solo Dev" },
      { label: "Pipeline", value: "5-stage" },
    ],
  },
  {
    title: "NotesBuddy — Notes Sharing Application",
    description:
      "Architected containerized file-management infrastructure via Docker, integrating MinIO object storage, ClamAV malware scanning, PostgreSQL for secure deployments and tested with 50+ beta users. Mitigated database load by 40% using an in-memory OTP cache, reducing auth latency by 180ms. Deployed the infrastructure on a Linux VPS, configuring Nginx as a reverse proxy with rate limiting, and hardened server defenses using UFW and SSL certificates.",
    tags: ["TypeScript", "React", "NestJS", "PostgreSQL", "Docker"],
    link: "https://github.com/Anujanthwal-dotcom/Notes-Sharing-Platform",
    github: "https://github.com/Anujanthwal-dotcom/Notes-Sharing-Platform",
    featured: false,
    metrics: [
      { label: "Platform", value: "Web" },
      { label: "Role", value: "Solo Dev" },
      { label: "Users", value: "50+ beta" },
    ],
  },
];

export const achievements = [
  {
    title: "Dev Katas — 4,000+ Developers Educated",
    description: "Creator of the Dev Katas YouTube channel teaching systems architecture to over 4,000 developers.",
    badge: "4,000+",
    organizer: "YouTube",
    image: "/images/oauth.png",
    link: "https://www.youtube.com/@DevKatas/featured",
  },
  {
    title: "AIR-104 — Unstop Weekly Coding Challenge",
    description: "Secured All India Rank 104 among 29,000+ participants in Unstop's weekly coding challenge.",
    badge: "AIR-104",
    organizer: "Unstop",
    image: "/images/unstop.png",
    link: "https://unstop.com/certificate-preview/cfa533c8-a094-49c7-bde7-34383b61210c",
  },
  {
    title: "Social Summer of Code 2025",
    description: "Ranked 108th overall in the Social Summer of Code 2025 open source program.",
    badge: "108th",
    organizer: "Social (Script Foundation)",
    image: "/images/ssoc.png",
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
