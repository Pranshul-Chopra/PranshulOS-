"use client";

import { useState } from "react";
import { FEATURES, FeatureItem } from "@/data/features";
import { Check, ArrowRight, Sparkles, Layers, Eye } from "lucide-react";

export function CoreFeatures() {
  const [filter, setFilter] = useState<"all" | "core" | "workflow" | "companion" | "customization">("all");

  const filteredFeatures =
    filter === "all" ? FEATURES : FEATURES.filter((f) => f.category === filter);

  return (
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-[0.7rem] font-mono uppercase tracking-[0.25em] text-gold block mb-3">
          SYSTEM ARCHITECTURE &amp; MODULES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Everything built for deliberate execution.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Every tool in PranshulOS was crafted to eliminate browser distraction, reduce cognitive friction, and preserve mental state.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {(
            [
              { id: "all", label: "All Modules (10)" },
              { id: "core", label: "Core Workspace" },
              { id: "workflow", label: "Workflow Engine" },
              { id: "companion", label: "AI Companion" },
              { id: "customization", label: "Theme Studio" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                filter === tab.id
                  ? "bg-gold text-zinc-950 font-bold border-gold shadow-md shadow-gold/20"
                  : "bg-surface text-zinc-400 hover:text-white border-white/10 hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Feature Cards Grid (Inspired by Aditya's Portfolio Stack & Spotlight Treatment) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredFeatures.map((feat, index) => (
          <div
            key={feat.id}
            className="spotlight-card rounded-2xl sm:rounded-3xl border border-white/10 hover:border-gold/40 bg-surface/80 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group"
          >
            <div>
              {/* Media Preview Box */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/10] bg-black/50 mb-6 group-hover:border-gold/30 transition-colors">
                {feat.video && (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={feat.image}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  >
                    <source src={feat.video} type="video/mp4" />
                  </video>
                )}
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/15 text-[0.65rem] font-mono text-gold-bright uppercase tracking-wider">
                  {feat.tag}
                </div>
              </div>

              {/* Tag & Number */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[0.68rem] font-mono uppercase tracking-widest text-gold font-semibold">
                  {feat.tag}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-gold-bright transition-colors">
                {feat.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                {feat.fullDesc}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {feat.pills.map((pill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[0.72rem] text-zinc-300 font-mono"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            {feat.stats && (
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="text-zinc-400">{feat.stats.label}</span>
                <span className="text-white font-semibold">{feat.stats.value}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
