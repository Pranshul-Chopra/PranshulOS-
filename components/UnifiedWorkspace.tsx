"use client";

import { useState } from "react";
import { WORKFLOW_STEPS } from "@/data/workflow";
import { ArrowRight, CheckCircle2, Workflow, Sparkles } from "lucide-react";

export function UnifiedWorkspace() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[0.7rem] font-mono uppercase tracking-[0.25em] text-gold block mb-3">
          SYSTEM INTERCONNECTIVITY
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Everything you need. One workspace.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          The power of PranshulOS isn't isolated features. The power is how they connect into a cohesive, uninterrupted execution loop.
        </p>
      </div>

      {/* Horizontal Interactive Pipeline Tracker (Desktop) */}
      <div className="hidden lg:grid grid-cols-5 gap-3 mb-10">
        {WORKFLOW_STEPS.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 relative ${
                isActive
                  ? "bg-surface border-gold shadow-lg shadow-gold/15"
                  : "bg-surface/50 border-white/10 hover:border-white/20 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-gold">
                  STEP {step.step}
                </span>
                {isActive && <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />}
              </div>
              <div className="text-sm font-bold text-white mb-1">{step.name}</div>
              <div className="text-[0.68rem] text-zinc-400 line-clamp-1">{step.headline}</div>

              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden lg:block text-zinc-600">
                  →
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Step Deep Dive Card */}
      <div className="spotlight-card rounded-2xl sm:rounded-3xl border border-white/15 bg-surface/90 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-gold/15 text-gold-bright font-mono text-xs font-bold">
                PHASE {WORKFLOW_STEPS[activeStep].step}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {WORKFLOW_STEPS[activeStep].name}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {WORKFLOW_STEPS[activeStep].headline}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/[0.08]"
            >
              ← Previous
            </button>
            <button
              onClick={() =>
                setActiveStep((prev) => Math.min(WORKFLOW_STEPS.length - 1, prev + 1))
              }
              disabled={activeStep === WORKFLOW_STEPS.length - 1}
              className="px-3.5 py-2 rounded-lg bg-gold text-zinc-950 text-xs font-mono font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gold-bright"
            >
              Next Phase →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6 font-normal">
              {WORKFLOW_STEPS[activeStep].description}
            </p>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[0.68rem] font-mono text-gold-bright uppercase tracking-wider block mb-1">
                Real-world Example In PranshulOS
              </span>
              <p className="text-xs sm:text-sm font-mono text-zinc-300">
                {WORKFLOW_STEPS[activeStep].example}
              </p>
            </div>
          </div>

          {/* Connection logic callout */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-center">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
              System Pipeline Continuity
            </span>
            <div className="flex items-center gap-3 text-sm text-zinc-200 mb-2">
              <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center font-mono text-xs font-bold">
                {WORKFLOW_STEPS[activeStep].step}
              </span>
              <span className="font-semibold text-white">
                {WORKFLOW_STEPS[activeStep].name}
              </span>
              <ArrowRight className="w-4 h-4 text-gold" />
              <span className="text-zinc-400 text-xs font-mono">
                {WORKFLOW_STEPS[activeStep].connector}
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mt-2">
              Data moves seamlessly through local SQLite foreign keys. No disconnected SaaS silos or copy-pasting between disparate browser apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
