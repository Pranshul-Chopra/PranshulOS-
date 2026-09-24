"use client";

import { CheckCircle2, Sparkles, ArrowRight, Download, Github } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function CurrentState() {
  const currentFeatures = [
    "Time-blocked Agenda with automatic stack-preserving rollover",
    "Chibi AI Plan Mode with 1-Click direct SQLite apply",
    "Blueprints infinite node-graph workflow canvas with step runner",
    "Markdown Studio with Write, Split, and Live Preview viewports",
    "7-Day Monday–Sunday routine planner with daily habit anchors",
    "Personal Kanban tickets board with P0 / P1 / P2 priorities",
    "Multi-journal private logs with situational tagging",
    "Theme Studio with Google Fonts API live loader and token editor",
    "Daily Morning Briefing digest opening on first daily launch",
    "100% offline standalone Windows 10/11 application packaging",
  ];

  const futureRoadmap = [
    {
      phase: "01",
      title: "Local Semantic Memory",
      desc: "Embedded vector database (sqlite-vec) to index all notes and logs with on-device semantic search.",
    },
    {
      phase: "02",
      title: "Proactive Chibi Companion",
      desc: "Anticipates schedule crunches, suggests workload balancing, and flags missed commitments autonomously.",
    },
    {
      phase: "03",
      title: "Encrypted P2P Synchronizer",
      desc: "Optional device-to-device local Wi-Fi synchronization without third-party cloud servers.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Current Shipped Capabilities (Section 16) */}
        <div className="lg:col-span-7 spotlight-card rounded-3xl bg-surface/90 border border-white/15 p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[0.68rem] font-mono uppercase tracking-widest text-emerald-400 font-bold">
              CURRENT PRODUCTION RELEASE
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            PranshulOS {SITE_CONFIG.version} Stable
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
            Shipped, fully functional, and verified. Everything listed below is built, tested, and running on Windows desktop machines today.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {currentFeatures.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs font-mono text-zinc-300 p-2.5 rounded-xl bg-white/[0.02] border border-white/10"
              >
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
            <a
              href={SITE_CONFIG.downloadUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-bright text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-gold/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download {SITE_CONFIG.version} Setup</span>
            </a>
            <a
              href={SITE_CONFIG.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Inspect Code Repository</span>
            </a>
          </div>
        </div>

        {/* Future Vision (Section 17) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-zinc-950/60 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-sky-400 font-bold">
                EXPERIMENTAL · FUTURE HORIZON
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Where it goes next.
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Active engineering explorations designed to evolve PranshulOS into an autonomous, adaptive operating environment.
            </p>

            <div className="space-y-4">
              {futureRoadmap.map((item) => (
                <div
                  key={item.phase}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/10"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-sky-300 font-bold mb-1">
                    <span>PHASE {item.phase}</span>
                    <span>·</span>
                    <span className="text-white">{item.title}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-[0.7rem] font-mono text-zinc-500">
            Roadmap targets subject to active research and community feedback.
          </div>
        </div>
      </div>
    </section>
  );
}
