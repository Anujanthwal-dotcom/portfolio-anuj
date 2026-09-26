export const siteConfig = {
  name: "Anuj Anthwal",
  role: "Software Engineer | Full-Stack & Agentic AI",
  email: "anujanthwal98765432@gmail.com",
  phone: "+91 9389961153",
  location: "Uttarakhand, India",
  description:
    "Software Engineer specializing in scalable full-stack architectures, microservices, and Agentic AI workflows. Experienced in NestJS, Next.js, Google Gemini API, PostgreSQL, and distributed caching.",
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
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "DSA", href: "#dsa" },
  { label: "Achievements", href: "#achievements" },
];

export const stats = [
  { label: "Years of engineering", value: "2+" },
  { label: "Flagship projects", value: "3" },
  { label: "DSA problems solved", value: "400+" },
];

export const heroTags = [
  "TypeScript",
  "NestJS",
  "Next.js",
  "React",
  "Google Gemini",
  "LangChain",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Redis",
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Rust", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "Next.js",
      "React",
      "NestJS",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "Prisma",
    ],
  },
  {
    category: "Agentic AI",
    skills: [
      "Google Gemini API",
      "LangChain",
      "LangGraph",
      "LLM Orchestration",
      "Prompt Engineering",
      "Structured Outputs",
      "AI Agents",
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MongoDB",
      "MinIO",
      "AWS (RDS, S3, ElastiCache)",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "Linux",
      "Nginx",
      "Postman",
    ],
  },
  {
    category: "Concepts & Architecture",
    skills: [
      "REST APIs",
      "Microservices",
      "Asynchronous Processing",
      "OOP",
      "Rate Limiting",
      "Caching Strategies",
    ],
  },
];

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
  github: string;
  featured: boolean;
  metrics?: ProjectMetric[];
}

export const projects: Project[] = [
  {
    title: "MindFlow — Visual Knowledge & Architecture Graph Platform",
    subtitle: "Visual Knowledge & Architecture Graph Platform",
    period: "Sep 2026",
    description:
      "Architected an AI extraction pipeline utilizing Google Gemini and LangChain with strict Zod schema validation, parsing complex technical documents and GitHub codebases into connected Directed Acyclic Graphs (DAGs).",
    highlights: [
      "Architected an AI extraction pipeline utilizing Google Gemini and LangChain with strict Zod schema validation, parsing complex technical documents and GitHub codebases into connected Directed Acyclic Graphs (DAGs).",
      "Engineered a multi-model fallback cascade (Gemini 3.6/3.7 Flash) and heuristic recovery, ensuring 100% extraction uptime and zero schema violation failures during high-traffic bursts.",
      "Integrated an interactive infinite canvas with XYFlow and an iterative Dagre collision-resolution algorithm, resolving multi-node overlaps and dynamically laying out 30+ concept nodes in real time.",
      "Built an on-demand concept deep-dive micro-service leveraging Google Search Grounding, generating production gotchas, live doc citations, and syntax-highlighted code implementations in <2 seconds.",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Google Gemini",
      "LangChain",
      "Prisma",
      "XYFlow",
      "Dagre",
    ],
    link: "https://github.com/Anujanthwal-dotcom/mindflow",
    github: "https://github.com/Anujanthwal-dotcom/mindflow",
    featured: true,
    metrics: [
      { label: "AI Engine", value: "Gemini + LangChain" },
      { label: "Canvas", value: "XYFlow + Dagre" },
      { label: "Extraction Uptime", value: "100%" },
      { label: "Deep-Dive Latency", value: "< 2s Grounded" },
    ],
  },
  {
    title: "Ticketly — Distributed Ticket Booking System",
    subtitle: "Ticket Booking System",
    period: "Jun 2026 – Jul 2026",
    description:
      "Full-stack ticket booking platform built with high concurrency defense using PostgreSQL pessimistic row locking, Stripe PaymentElement workflows, Redis session caching, and Gemini-powered natural query filtering.",
    highlights: [
      "Implemented OAuth 2.0 (Google/Facebook) via Passport.js and ElastiCache Redis session storage with session fixation defense.",
      "Integrated Stripe PaymentElement with PaymentIntent workflows, webhook handlers, and 3-point verification checks.",
      "Built an AI search tool using Google Gemini & LangChain to parse natural queries into filters, with keyword fallbacks.",
      "Engineered pessimistic row locking in RDS PostgreSQL to prevent concurrent double-booking.",
      "Automated post-booking PDF ticket generation (pdfkit), AWS S3 storage, and email delivery via Nodemailer.",
      "Developed a custom in-memory bucket rate-limiter and cached show listings with automated invalidation.",
      "Hardened API security via Helmet, class-validator DTOs, CORS, exception filters, and raw-body Stripe verification.",
    ],
    tags: [
      "React",
      "NestJS",
      "TypeScript",
      "RDS PostgreSQL",
      "ElastiCache Redis",
      "AWS S3",
      "Stripe",
      "Google Gemini",
    ],
    link: "https://github.com/Anujanthwal-dotcom/Full-Stack-Event-Ticket-Booking-System",
    github: "https://github.com/Anujanthwal-dotcom/Full-Stack-Event-Ticket-Booking-System",
    featured: false,
    metrics: [
      { label: "Concurrency", value: "Pessimistic Locking" },
      { label: "Cache Layer", value: "ElastiCache Redis" },
      { label: "Payments", value: "Stripe Webhooks" },
      { label: "Search", value: "Gemini Natural Query" },
    ],
  },
  {
    title: "NotesBuddy — Notes Sharing Application",
    subtitle: "Notes Sharing Application",
    period: "Feb 2026 – Mar 2026",
    description:
      "Secure containerized file-management infrastructure via Docker, integrating MinIO object storage, ClamAV malware scanning, and PostgreSQL with high-throughput in-memory caching.",
    highlights: [
      "Architected containerized file-management infrastructure via Docker, integrating MinIO object storage, ClamAV malware scanning, and PostgreSQL for secure deployments tested with 50+ beta users.",
      "Mitigated database load by 40% using an in-memory OTP cache, reducing auth latency by 180ms.",
      "Deployed the infrastructure on a Linux VPS, configuring Nginx as a reverse proxy with rate limiting, and hardened server defenses using UFW and SSL certificates.",
    ],
    tags: [
      "TypeScript",
      "React",
      "NestJS",
      "PostgreSQL",
      "Docker",
      "MinIO",
      "ClamAV",
      "Nginx",
    ],
    link: "https://github.com/Anujanthwal-dotcom/Notes-Sharing-Platform",
    github: "https://github.com/Anujanthwal-dotcom/Notes-Sharing-Platform",
    featured: false,
    metrics: [
      { label: "File Security", value: "MinIO + ClamAV" },
      { label: "DB Load", value: "-40% via OTP cache" },
      { label: "Auth Latency", value: "-180ms" },
      { label: "Deployment", value: "Docker + Nginx VPS" },
    ],
  },
];

export const experience = [
  {
    company: "Synegrow",
    role: "Software Development Engineering Intern",
    period: "Oct 2025 — Feb 2026",
    location: "Remote",
    type: "main" as const,
    badge: "SDE Intern",
    description:
      "Engineered payment microservices and high-throughput MySQL architectures for subscription and checkout workflows.",
    highlights: [
      "Developed a decoupled payment adapter in NestJS using custom Axios interceptors and automated retry backoffs, reducing webhook checkout failure rates to under 0.5%.",
      "Designed a multi-tier MySQL schema for subscription coupon logic, implementing composite indexing to lower query execution latency by 35% under concurrent loads.",
    ],
    tags: ["TypeScript", "NestJS", "MySQL", "REST APIs", "Axios"],
    metrics: [
      { label: "Duration", value: "5 months" },
      { label: "Failure Rate", value: "< 0.5% Webhooks" },
      { label: "Latency", value: "-35% Query Time" },
      { label: "Core Stack", value: "NestJS + MySQL" },
    ],
  },
  {
    company: "Social (Formerly Script Foundation)",
    role: "Open Source Contributor (SSOC 2025)",
    period: "Jun 2025 — Jul 2025",
    location: "Remote",
    type: "supporting" as const,
    badge: "Open Source",
    description:
      "Engineered features and resolved vulnerabilities across open-source repositories via structured pull requests during Social Summer of Code 2025.",
    highlights: [
      "Engineered features and resolved vulnerabilities across open-source repositories via structured pull requests.",
      "Collaborated directly with maintainers on rigid code reviews, standardizing error handling to optimize stability.",
      "Ranked 108th overall in Social Summer of Code 2025 among thousands of contributors.",
    ],
    tags: ["Python", "Rust", "Git", "GitHub"],
    metrics: [
      { label: "Duration", value: "2 months" },
      { label: "Standing", value: "108th Overall" },
      { label: "Languages", value: "Python, Rust" },
    ],
  },
];

export const achievements = [
  {
    title: "AIR-104 — Unstop Weekly Coding Challenge",
    description:
      "Secured All India Rank 104 among 29,000+ competitive programming participants in Unstop's weekly coding challenge.",
    badge: "AIR-104",
    organizer: "Unstop",
    image: "/images/unstop.png",
    link: "https://unstop.com/certificate-preview/cfa533c8-a094-49c7-bde7-34383b61210c",
  },
  {
    title: "Social Summer of Code 2025",
    description:
      "Ranked 108th overall in the Social Summer of Code 2025 open source program for impactful open-source contributions.",
    badge: "108th Rank",
    organizer: "Social (Script Foundation)",
    image: "/images/ssoc.png",
  },
  {
    title: "Dev Katas — 4,000+ Learners Educated",
    description:
      "Educated over 4,000+ developers through comprehensive technical video tutorials covering system architecture and engineering patterns.",
    badge: "4,000+ Learners",
    organizer: "Technical Education",
    image: "/images/oauth.png",
    link: "https://www.youtube.com/@DevKatas/featured",
  },
];

export const education = {
  institution: "Uttarakhand Technical University",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  period: "Aug. 2023 – May 2027",
  location: "Uttarakhand, India",
};

export const certifications = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Oct 2024",
    badge: "Student Expert",
    description:
      "Certified in REST API fundamentals, request orchestration, automated testing, mock servers, and API documentation workflows.",
  },
];
