import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://anujanthwal.com")
  ),
  title: "Anuj Anthwal — Software Engineer | Full-Stack & Agentic AI",
  description:
    "Software Engineer specializing in scalable full-stack architectures, microservices, and Agentic AI workflows. Experienced in NestJS, Next.js, Google Gemini API, PostgreSQL, and distributed systems.",
  openGraph: {
    title: "Anuj Anthwal — Software Engineer | Full-Stack & Agentic AI",
    description:
      "Software Engineer specializing in scalable full-stack architectures, microservices, and Agentic AI workflows. Experienced in NestJS, Next.js, Google Gemini API, PostgreSQL, and distributed systems.",
    type: "website",
  },
  alternates: {
    types: {
      "text/markdown": "/llms.txt",
    },
  },
  verification: {
    google: "gZa6D5Gy1JN6k1e0uQI2Wwq3FjaS8leI5-Artgq1CEo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
