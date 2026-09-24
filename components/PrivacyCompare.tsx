"use client";

import { Shield, Check, X, HardDrive, CloudOff, Lock, EyeOff } from "lucide-react";

export function PrivacyCompare() {
  const comparison = [
    {
      feature: "Data Storage Location",
      local: "100% On-device NVMe/SSD inside user AppData",
      cloud: "Remote servers, third-party multi-tenant databases",
    },
    {
      feature: "Account & Authentication",
      local: "Zero accounts required. Launch and write instantly.",
      cloud: "Mandatory email signup, passwords, OAuth tokens",
    },
    {
      feature: "Offline Availability",
      local: "100% functional with Wi-Fi completely disabled",
      cloud: "Degrades or blocks access without internet connection",
    },
    {
      feature: "Data Portability & Backup",
      local: "Single portable .sqlite file — copy anywhere anytime",
      cloud: "Proprietary JSON dumps, lock-in, rate-limited exports",
    },
    {
      feature: "AI Processing",
      local: "Optional local Ollama models on localhost GPU/CPU",
      cloud: "Transmits all prompts and context to cloud servers",
    },
    {
      feature: "Telemetry & Tracking",
      local: "Zero trackers, zero analytics beacons, zero logging",
      cloud: "Session analytics, engagement telemetry, user tracking",
    },
  ];

  return (
    <section id="privacy" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[0.7rem] font-mono uppercase tracking-[0.25em] text-emerald-400 block mb-3">
          SECURITY &amp; PRIVACY GUARANTEE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Your data stays yours.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Productivity software should never be an ad network in disguise. Here is how PranshulOS compares to standard cloud subscription tools.
        </p>
      </div>

      {/* Comparison Table / Cards */}
      <div className="spotlight-card rounded-2xl sm:rounded-3xl border border-white/10 bg-surface/90 overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* PranshulOS Local Column */}
          <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-emerald-500/[0.03] to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">PranshulOS</h3>
                <span className="text-xs font-mono text-emerald-400">
                  Local-First Sovereign Architecture
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {comparison.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-zinc-400 mb-0.5">
                      {item.feature}
                    </div>
                    <div className="text-sm font-medium text-zinc-100">
                      {item.local}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Standard Cloud SaaS Column */}
          <div className="p-6 sm:p-8 lg:p-10 bg-zinc-950/40 opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <CloudOff className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-300">
                  Typical Cloud SaaS
                </h3>
                <span className="text-xs font-mono text-rose-400">
                  Centralized Subscription Platform
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {comparison.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-zinc-400 mb-0.5">
                      {item.feature}
                    </div>
                    <div className="text-sm font-medium text-zinc-300">
                      {item.cloud}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
