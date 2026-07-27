"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mounted = theme !== undefined;

  return (
    <nav className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <a href="#" className="font-serif text-xl font-normal italic">
          {siteConfig.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md p-2 text-muted transition-colors hover:text-foreground"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="rounded-md p-2 text-muted transition-colors hover:text-foreground"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            className="p-2 text-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-card-border bg-background md:hidden"
          >
            <div className="px-6 pb-6 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 block rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
