"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURES } from "@/data/features";
import { Play, Sparkles, CheckCircle2, ArrowUpRight, Zap, ExternalLink } from "lucide-react";

export function ProductShowcase() {
  const [selectedId, setSelectedId] = useState<string>("plan-mode");
  const activeFeature = FEATURES.find((f) => f.id === selectedId) || FEATURES[0];

  return (
    <section id="demo" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-[0.7rem] font-mono uppercase tracking-[0.25em] text-gold block mb-3">
          INTERACTIVE PRODUCT DEMONSTRATION
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          See it in action.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Switch between actual operating modules to inspect how PranshulOS handles routines, planning, workflows, and markdown text without browser lag.
        </p>
      </div>

      {/* Module Navigation Tabs (Responsive & Touch-Friendly) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
        {FEATURES.slice(0, 7).map((feat) => {
          const isActive = feat.id === selectedId;
          return (
            <button
              key={feat.id}
              onClick={() => setSelectedId(feat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                isActive
                  ? "bg-gold text-zinc-950 font-bold border-gold shadow-lg shadow-gold/20 scale-[1.02]"
                  : "bg-surface text-zinc-400 hover:text-white border-white/10 hover:border-white/20 active:bg-white/5"
              }`}
            >
              <span>{feat.tag.split("·")[0].trim()}</span>
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Showcase Card */}
      <div className="spotlight-card rounded-2xl sm:rounded-3xl border border-white/15 bg-surface/90 overflow-hidden shadow-2xl shadow-black/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left: Interactive Media Viewport (Video + Image fallback) */}
          <div className="lg:col-span-7 bg-[#0b0b0f] p-4 sm:p-6 md:p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative">
            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/10] bg-black/60 shadow-xl group">
              {/* Optional Video with Fallback to Screenshot */}
              {activeFeature.video ? (
                <video
                  key={activeFeature.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={activeFeature.image}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Gracefully hide video and fallback to image if video hasn't been placed yet
                    (e.target as HTMLElement).style.display = "none";
                  }}
                >
                  <source src={activeFeature.video} type="video/mp4" />
                </video>
              ) : null}

              {/* High-res Image Screenshot Display */}
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full h-full object-cover object-top"
              />

              {/* Tag indicator overlay */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-[0.65rem] font-mono text-gold-bright uppercase tracking-wider">
                {activeFeature.tag}
              </div>
            </div>

            {/* Micro details bar below media */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Local SQLite sync</span>
              </div>
              {activeFeature.stats && (
                <div className="text-zinc-400">
                  {activeFeature.stats.label}:{" "}
                  <span className="text-white font-semibold">{activeFeature.stats.value}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Detailed Feature Explanation & Interactive Pills */}
          <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-gold/10 border border-gold/30 text-gold-bright text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                {activeFeature.tag}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-4">
                {activeFeature.title}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {activeFeature.fullDesc}
              </p>

              {/* Capabilities Pill List */}
              <div className="space-y-2.5 mb-6">
                <span className="text-[0.68rem] font-mono uppercase tracking-widest text-zinc-400 block">
                  Core Capabilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeFeature.pills.map((pill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-zinc-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                PranshulOS v2.4.5 Module
              </span>
              <a
                href="#features"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-bright uppercase tracking-wider transition-colors"
              >
                <span>Full Feature Index</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
