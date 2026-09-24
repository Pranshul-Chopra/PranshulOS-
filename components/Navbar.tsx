"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Download, Menu, X, Terminal, MessageSquare, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Product", href: "#demo" },
    { name: "Features", href: "#features" },
    { name: "Workflow", href: "#workflow" },
    { name: "Evolution", href: "#evolution" },
    { name: "Architecture", href: "#architecture" },
    { name: "Privacy", href: "#privacy" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/60"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Version */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-surface border border-gold/30 flex items-center justify-center text-gold group-hover:border-gold transition-colors shadow-sm shadow-gold/10">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold tracking-tight text-white group-hover:text-gold transition-colors text-base sm:text-lg">
                  PranshulOS
                </span>
                <span className="text-[0.65rem] font-mono px-1.5 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/25 font-semibold">
                  {SITE_CONFIG.version}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Destinations */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-400 hover:text-white transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={SITE_CONFIG.feedbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-gold/40 transition-all duration-200"
              title="Share feedback on PranshulOS"
            >
              <MessageSquare className="w-3.5 h-3.5 text-gold" />
              <span>Feedback</span>
            </a>
            <a
              href={SITE_CONFIG.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-gold/40 transition-all duration-200"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={SITE_CONFIG.downloadUrl}
              download
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gold hover:bg-gold-bright transition-all duration-200 shadow-md shadow-gold/20 hover:shadow-gold/30 hover:scale-[1.02]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={SITE_CONFIG.feedbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/10 bg-white/[0.04] text-gold"
              aria-label="Feedback"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.downloadUrl}
              download
              className="px-3 py-1.5 rounded-md text-[0.7rem] font-bold uppercase tracking-wider bg-gold text-zinc-950"
            >
              Get OS
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-zinc-400 hover:text-white rounded-lg border border-white/10 bg-white/[0.03] active:bg-white/[0.08]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Accessible, High-Touch Target Layout) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-[#09090b]/98 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col justify-between overflow-y-auto sm:hidden"
          >
            <div className="flex flex-col gap-2 pt-2">
              <div className="text-[0.68rem] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-medium text-zinc-200 active:bg-white/10 border border-transparent active:border-white/10"
                >
                  <span>{link.name}</span>
                  <span className="text-gold text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <a
                href={SITE_CONFIG.feedbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/[0.05] border border-gold/30 text-sm font-semibold text-gold-bright"
              >
                <MessageSquare className="w-4 h-4 text-gold" />
                <span>Submit Feedback &amp; Ideas</span>
              </a>
              <a
                href={SITE_CONFIG.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-sm font-semibold text-white"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
              <a
                href={SITE_CONFIG.downloadUrl}
                download
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gold text-zinc-950 font-bold text-sm shadow-lg shadow-gold/25"
              >
                <Download className="w-4 h-4" />
                <span>Download PranshulOS {SITE_CONFIG.version}</span>
              </a>
              <div className="text-center text-[0.7rem] font-mono text-zinc-500 mt-2">
                100% Offline SQLite · {SITE_CONFIG.platform}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
