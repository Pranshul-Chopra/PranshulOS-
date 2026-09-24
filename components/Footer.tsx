"use client";

import Link from "next/link";
import { Terminal, Github, Linkedin, Mail, MessageSquare, ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-surface/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Creator */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-mono font-bold text-white text-sm tracking-tight">
              PranshulOS
            </span>
            <span className="text-[0.65rem] font-mono text-gold-bright bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
              {SITE_CONFIG.version}
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            A local-first personal productivity operating environment.
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            Engineered &amp; crafted by{" "}
            <span className="text-zinc-200 font-semibold">{SITE_CONFIG.creator}</span>.
          </p>
        </div>

        {/* Social, Feedback & Source Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
          <a
            href={SITE_CONFIG.feedbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gold-bright hover:text-white transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-gold" />
            <span>Send Feedback</span>
          </a>
          <a
            href={SITE_CONFIG.downloadUrl}
            download
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Download .exe</span>
          </a>
          <a
            href={SITE_CONFIG.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={SITE_CONFIG.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4 text-sky-400" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-gold" />
            <span>Email</span>
          </a>
        </div>

        {/* Tech Stack & Scroll to Top */}
        <div className="flex flex-col items-center md:items-end gap-2 text-xs font-mono text-zinc-400">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-gold transition-colors py-1 px-2.5 rounded-lg bg-white/[0.03] border border-white/10"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <span>© 2026 PranshulOS. All local rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
