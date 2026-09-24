"use client";

import { Download, Github, MessageSquare, ArrowRight, Terminal } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative overflow-hidden">
      {/* Ambient background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[400px] bg-gold/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-gold mb-6">
        <Terminal className="w-3.5 h-3.5" />
        <span>{SITE_CONFIG.version} SETUP EXE AVAILABLE</span>
      </div>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
        This is only the beginning.
      </h2>

      <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
        Experience a distraction-free, local-first computing environment built to respect your attention and preserve your sovereignty.
      </p>

      {/* Buttons Row with Download, GitHub Star, and Feedback Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={SITE_CONFIG.downloadUrl}
          download
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-zinc-950 bg-gold hover:bg-gold-bright transition-all duration-200 shadow-2xl shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Download className="w-4 h-4" />
          <span>Download PranshulOS {SITE_CONFIG.version} (.exe)</span>
        </a>

        <a
          href={SITE_CONFIG.githubRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-sm tracking-wide text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-gold/40 transition-all duration-200"
        >
          <Github className="w-4 h-4" />
          <span>Star on GitHub</span>
          <ArrowRight className="w-4 h-4 text-zinc-400" />
        </a>

        <a
          href={SITE_CONFIG.feedbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-xs tracking-wider text-zinc-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-gold/30 hover:border-gold transition-all"
        >
          <MessageSquare className="w-4 h-4 text-gold" />
          <span>Submit Feedback &amp; Ideas</span>
        </a>
      </div>

      <div className="mt-8 text-xs font-mono text-zinc-500">
        {SITE_CONFIG.platform} · Local SQLite database · Zero cloud accounts required
      </div>
    </section>
  );
}
