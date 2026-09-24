"use client";

import { useState } from "react";
import { RELEASES, ReleaseItem } from "@/data/releases";
import { GitCommit, Sparkles, CheckCircle2, Milestone, Clock } from "lucide-react";

export function EvolutionTimeline() {
  const [filter, setFilter] = useState<"all" | "shipped" | "current" | "future">("all");

  const filteredReleases =
    filter === "all" ? RELEASES : RELEASES.filter((r) => r.status === filter);

  return (
    <section id="evolution" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[0.7rem] font-mono uppercase tracking-[0.25em] text-gold block mb-3">
          CHRONOLOGY &amp; DECISION ARCHITECTURE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Built in public. Iterated relentlessly.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          PranshulOS was not built overnight. Every version represents deliberate product pruning, architectural pivots, and a deepening commitment to local-first computing.
        </p>

        {/* Release Status Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {(
            [
              { id: "all", label: "Full Journey" },
              { id: "current", label: "Current (v2.4.5)" },
              { id: "shipped", label: "Shipped Milestones" },
              { id: "future", label: "Future Vision" },
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

      {/* Timeline Stream */}
      <div className="relative border-l border-white/15 ml-4 sm:ml-8 md:ml-32 space-y-12">
        {filteredReleases.map((release) => {
          const isCurrent = release.status === "current";
          const isFuture = release.status === "future";

          return (
            <div key={release.version} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Pin Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  isCurrent
                    ? "bg-gold border-white shadow-lg shadow-gold/50"
                    : isFuture
                    ? "bg-sky-500 border-sky-300"
                    : "bg-zinc-800 border-zinc-500"
                }`}
              />

              {/* Version & Date Flag */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
                  {release.version}
                </span>
                <span
                  className={`text-[0.65rem] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider border ${
                    isCurrent
                      ? "bg-gold/20 text-gold-bright border-gold/40"
                      : isFuture
                      ? "bg-sky-500/20 text-sky-300 border-sky-500/40"
                      : "bg-white/[0.05] text-zinc-400 border-white/10"
                  }`}
                >
                  {release.badge}
                </span>
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{release.date}</span>
                </span>
              </div>

              {/* Release Card */}
              <div className="spotlight-card rounded-2xl bg-surface/80 border border-white/10 hover:border-gold/40 p-6 sm:p-8 transition-all duration-300 shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {release.title}
                </h3>
                <p className="text-xs font-mono text-gold-bright mb-4">
                  {release.tagline}
                </p>

                {/* Decision Rationale Highlight Box */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
                  <span className="text-[0.65rem] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                    Product Decision &amp; Rationale
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                    {release.decisionRationale}
                  </p>
                </div>

                {/* Release Changes List */}
                <div className="space-y-2">
                  <span className="text-[0.68rem] font-mono uppercase tracking-wider text-zinc-400 block">
                    Key Implementations
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {release.changes.map((change, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-zinc-300 font-mono"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
