"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Terminal, ArrowRight, ShieldCheck, Cpu, Database, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "chibi" | "workflow" | "docs">("dashboard");

  const previews = {
    dashboard: {
      title: "Today's Agenda & Time-Blocking",
      image: "/dashboard.jpg",
      tag: "DASHBOARD",
      metric: "Stack-preserved task rollover",
    },
    chibi: {
      title: "Chibi AI Plan Mode & 1-Click SQLite Apply",
      image: "/image.png",
      tag: "AI PLAN MODE",
      metric: "1-Click direct DB execution",
    },
    workflow: {
      title: "Blueprints Infinite Node-Graph Runner",
      image: "/Workflow.png",
      tag: "BLUEPRINTS",
      metric: "60 FPS directional SVG canvas",
    },
    docs: {
      title: "Markdown Studio with Write, Split & Preview",
      image: "/docs.jpg",
      tag: "DOCS STUDIO",
      metric: "Interactive sync checklists",
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] lg:w-[850px] h-[340px] sm:h-[450px] bg-gold/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[240px] sm:w-[450px] h-[240px] sm:h-[450px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Live Status Pill */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-gold/40 text-xs text-zinc-300 mb-6 backdrop-blur-md transition-colors"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-mono text-[0.72rem] tracking-wider uppercase text-zinc-300">
          {SITE_CONFIG.version} Stable · 100% Offline SQLite · {SITE_CONFIG.platform}
        </span>
      </motion.div>

      {/* Main Big Typographic Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
          Your computer should work for you —{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-bright to-amber-200">
            not the other way around.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
          PranshulOS is a local-first productivity shell for Windows that unifies tasks, goals, routines, notes, and visual blueprints into one personal command center — with zero cloud dependency.
        </p>
      </motion.div>

      {/* Hero Action CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto"
      >
        <a
          href={SITE_CONFIG.downloadUrl}
          download
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide text-zinc-950 bg-gold hover:bg-gold-bright transition-all duration-200 shadow-xl shadow-gold/25 hover:shadow-gold/35 hover:-translate-y-0.5 active:translate-y-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PranshulOS {SITE_CONFIG.version}</span>
        </a>
        <a
          href={SITE_CONFIG.githubRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-gold/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          <Github className="w-4 h-4" />
          <span>Source</span>
          <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
        </a>
        <a
          href={SITE_CONFIG.feedbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs tracking-wider text-zinc-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-gold/30 transition-all duration-200"
        >
          <MessageSquare className="w-3.5 h-3.5 text-gold" />
          <span>Feedback</span>
        </a>
      </motion.div>

      {/* Trust & Architecture Pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7 text-xs text-zinc-400 font-mono"
      >
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Zero cloud telemetry</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-gold" />
          <span>Single-file SQLite storage</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-sky-400" />
          <span>Dual Ollama / Gemini AI</span>
        </div>
      </motion.div>

      {/* Hero Product Window Frame (Desktop Shell Mockup) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="w-full max-w-5xl mt-12 sm:mt-16 rounded-2xl border border-white/15 bg-surface/90 shadow-2xl shadow-black/80 overflow-hidden relative backdrop-blur-xl"
      >
        {/* Window Chrome Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#15151b] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-xs font-mono text-zinc-400 hidden sm:inline">
              PranshulOS Desktop · [127.0.0.1:5000 · Local SQLite]
            </span>
          </div>

          {/* Module Switcher Tabs inside Window Frame */}
          <div className="flex items-center gap-1 overflow-x-auto py-0.5 max-w-[280px] sm:max-w-none">
            {(
              [
                { id: "dashboard", label: "Agenda" },
                { id: "chibi", label: "AI Plan Mode" },
                { id: "workflow", label: "Blueprints" },
                { id: "docs", label: "Docs Studio" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1 rounded-md text-[0.68rem] font-mono tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gold text-zinc-950 font-bold shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Window Body with active preview */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0d0d12] flex items-center justify-center overflow-hidden">
          <img
            src={previews[activeTab].image}
            alt={previews[activeTab].title}
            className="w-full h-full object-cover object-top transition-opacity duration-300"
          />

          {/* Dynamic Floating Context Pill */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 z-10 flex items-center justify-between sm:justify-start gap-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-gold/20 text-gold-bright font-mono font-bold text-[0.65rem]">
                {previews[activeTab].tag}
              </span>
              <span className="text-zinc-200 font-medium hidden sm:inline">
                {previews[activeTab].title}
              </span>
            </div>
            <div className="text-[0.7rem] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{previews[activeTab].metric}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
