"use client";

import { Compass, Sparkles, Layers, Sliders, Focus, ShieldCheck } from "lucide-react";

export function DesignPhilosophy() {
  const principles = [
    {
      title: "Eliminate Context Switching",
      desc: "Every second spent hunting across 20 browser tabs and 5 separate cloud tools is focus destroyed. PranshulOS holds your entire context in one unified desktop frame.",
      icon: Focus,
    },
    {
      title: "Useful Complexity over Shallow Simplicity",
      desc: "Toy to-do apps hide all controls behind empty white space. We believe tools should be information-dense, keyboard-navigable, and rich with real functionality.",
      icon: Layers,
    },
    {
      title: "Instant Discoverability",
      desc: "Global hotkeys (Ctrl + J), quick-launch tiles, and first-boot daily briefings surface what matters immediately without complex nesting or deep menu hierarchies.",
      icon: Compass,
    },
    {
      title: "Sovereign Aesthetic Craft",
      desc: "Software you look at for 8 hours a day should be visually respectful. Deep dark obsidian palettes, theme customizability, and delicate typography honor the craft of computing.",
      icon: Sliders,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[0.7rem] font-mono uppercase tracking-[0.25em] text-gold block mb-3">
          DESIGN CRAFT
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Software should feel like an environment, not a collection of tabs.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          When software feels like a cohesive operating environment, cognitive friction evaporates and real work can finally happen.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {principles.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="spotlight-card rounded-2xl p-6 sm:p-8 bg-surface border border-white/10 hover:border-gold/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold mb-5">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
