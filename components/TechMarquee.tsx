"use client";

import {
  Database,
  Monitor,
  Cpu,
  Layers,
  Sparkles,
  Lock,
  Zap,
  Terminal,
  FileCode,
  Palette,
  Workflow,
  CheckCircle2,
} from "lucide-react";

export function TechMarquee() {
  const itemsRow1 = [
    { name: "Embedded SQLite", desc: "ACID Local Storage", icon: Database },
    { name: "Electron Shell", desc: "Native Windowing", icon: Monitor },
    { name: "Flask Engine", desc: "Localhost 127.0.0.1", icon: Cpu },
    { name: "Ollama Offline LLM", desc: "100% On-Device AI", icon: Zap },
    { name: "Google Gemini API", desc: "Hybrid Reasoning", icon: Sparkles },
    { name: "Node-Graph Runner", desc: "SVG Bezier Canvas", icon: Workflow },
    { name: "Zero Telemetry", desc: "No Remote Logs", icon: Lock },
    { name: "Markdown Studio", desc: "GFM Live Preview", icon: FileCode },
  ];

  const itemsRow2 = [
    { name: "Theme Studio", desc: "Google Fonts API", icon: Palette },
    { name: "Global Hotkey", desc: "Ctrl + J Instant Launcher", icon: Terminal },
    { name: "Stack Preservation", desc: "Rollover Logic", icon: Layers },
    { name: "1-Click DB Apply", desc: "Zero Copy-Paste", icon: CheckCircle2 },
    { name: "Windows 10/11", desc: "Native Background Tray", icon: Monitor },
    { name: "Offline-First", desc: "Zero Auth / Cloud", icon: Lock },
    { name: "Daily Briefing", desc: "First-Boot Digest", icon: Sparkles },
    { name: "Chibi Mascot", desc: "Reactive State Physics", icon: Zap },
  ];

  return (
    <section className="py-12 border-y border-white/[0.08] bg-surface/40 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-[0.7rem] font-mono uppercase tracking-[0.25em] text-zinc-400">
          ARCHITECTURE PRIMITIVES &amp; CAPABILITIES
        </p>
      </div>

      {/* Row 1 - Infinite Left Scroll */}
      <div className="relative w-full overflow-hidden flex mb-4">
        <div className="animate-marquee-infinite flex gap-4">
          {[...itemsRow1, ...itemsRow1].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`r1-${idx}`}
                className="spotlight-card flex items-center gap-3.5 px-5 py-3 rounded-xl bg-surface border border-white/10 hover:border-gold/50 transition-colors shadow-sm shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-wide text-zinc-200">
                    {item.name}
                  </span>
                  <span className="text-[0.68rem] font-mono text-zinc-500">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2 - Infinite Right Scroll */}
      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee-infinite flex gap-4" style={{ animationDirection: "reverse" }}>
          {[...itemsRow2, ...itemsRow2].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`r2-${idx}`}
                className="spotlight-card flex items-center gap-3.5 px-5 py-3 rounded-xl bg-surface border border-white/10 hover:border-gold/50 transition-colors shadow-sm shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold-bright">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-wide text-zinc-200">
                    {item.name}
                  </span>
                  <span className="text-[0.68rem] font-mono text-zinc-500">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
