"use client";

import { motion } from "framer-motion";
import { HardDrive, UserCheck, Feather, Shield, Zap, Lock } from "lucide-react";

export function Philosophy() {
  const pillars = [
    {
      icon: HardDrive,
      title: "Local-First",
      tagline: "Your machine is the source of truth.",
      description:
        "Every byte of your data — tasks, journals, weekly routines, and personal documents — resides exclusively inside a local SQLite database on your hard drive. No internet disconnect will ever interrupt your thinking.",
      badge: "0ms Network Latency",
    },
    {
      icon: UserCheck,
      title: "Deeply Personal",
      tagline: "Adapts to you, not the enterprise.",
      description:
        "Corporate SaaS is designed for managers surveillance and endless stakeholder updates. PranshulOS is engineered for individual makers, students, and engineers who need deep, unfragmented focus.",
      badge: "Individual Sovereignty",
    },
    {
      icon: Feather,
      title: "Radically Lightweight",
      tagline: "No signups. No cloud logins. Zero bloat.",
      description:
        "Forget verification emails, forgotten passwords, and tracking pixels. Launch the app and immediately start working. No account is required, and no remote server holds your work hostage.",
      badge: "Zero Mandatory Accounts",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[0.7rem] font-mono uppercase tracking-[0.25em] text-gold block mb-3">
          CORE PHILOSOPHY
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Not another productivity app.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Most modern software treats your personal computer as a glorified dumb terminal for someone else's cloud. We built PranshulOS on the opposite conviction.
        </p>
      </div>

      {/* 3 Pillars Grid with Spotlight Card Interactions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="spotlight-card rounded-2xl p-6 sm:p-8 bg-surface border border-white/10 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[0.68rem] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-zinc-400 border border-white/10">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-gold-bright mb-4">
                  {pillar.tagline}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>On-device isolation</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Philosophy Diagram Callout */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-surface via-[#181820] to-surface border border-white/10 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <h4 className="text-lg font-bold text-white mb-2">
            Your data. Your workflow. Your environment.
          </h4>
          <p className="text-zinc-400 text-sm leading-relaxed">
            When software is hosted on a distant cloud, your thoughts are stored on someone else's server, subject to their pricing changes, terms of service, and downtime. PranshulOS guarantees enduring local access forever.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-center font-mono text-xs">
            <span className="text-zinc-400 block text-[0.65rem]">ENVIRONMENT</span>
            <span className="text-white font-bold">100% Personal</span>
          </div>
          <div className="text-gold font-bold text-sm">→</div>
          <div className="px-4 py-2 rounded-xl bg-gold/10 border border-gold/30 text-center font-mono text-xs">
            <span className="text-gold block text-[0.65rem]">CONTROL</span>
            <span className="text-gold-bright font-bold">Local Machine</span>
          </div>
        </div>
      </div>
    </section>
  );
}
