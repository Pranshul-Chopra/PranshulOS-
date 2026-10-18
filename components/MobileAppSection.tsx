"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  QrCode,
  Wifi,
  ShieldCheck,
  CheckCircle2,
  Download,
  RefreshCw,
  GitBranch,
  Layers,
  Bot,
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  FileText,
  Calendar,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function MobileAppSection() {
  const [activeTab, setActiveTab] = useState<"sync" | "parity" | "widgets" | "updater">("sync");

  const coreCapabilities = [
    {
      id: "sync",
      label: "P2P Port 5001 Sync",
      icon: Wifi,
      title: "Direct Peer-to-Peer Hub Connection",
      subtitle: "Zero third-party cloud servers. Your phone talks strictly to your workstation.",
      description:
        "The mobile companion connects directly to your desktop hub on Port 5001 over your local Wi-Fi or private encrypted mesh network (such as Tailscale or WireGuard). Data never routes through multi-tenant cloud storage, proprietary sync relays, or third-party servers.",
      bullets: [
        "Local Wi-Fi & WireGuard / Tailscale private mesh connectivity",
        "5-minute single-use vector SVG QR pairing handshake",
        "Authoritative hub warning: connecting replaces local device data with hub DB",
        "Modular onboarding sync: user name, theme tokens, and persona transfer seamlessly",
      ],
      badge: "Zero Cloud Middlemen",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      id: "parity",
      label: "Workspace Parity",
      icon: Layers,
      title: "Full Desktop Workspace in Your Pocket",
      subtitle: "Offline SQLite WAL engine with non-destructive document branching.",
      description:
        "Every core productivity tool is available on Android: check off Agenda tasks, log habit streak anchors, manage P0/P1/P2 personal Kanban tickets, and review sticky notes. Edits queue locally in an Android SQLite WAL database when away from your desk.",
      bullets: [
        "Today's Agenda with stack-preserved rollover awareness",
        "Monday–Sunday habit tracker with on-device streak calculations",
        "Personal Kanban ticket board with P0 / P1 / P2 priority flags",
        "Non-destructive doc branching: Title (Conflict from Mobile ...).md preserves concurrent work",
      ],
      badge: "Local SQLite WAL",
      badgeColor: "text-gold bg-gold/10 border-gold/20",
    },
    {
      id: "widgets",
      label: "Glance OS Widgets",
      icon: Smartphone,
      title: "Native Android Glance Home-Screen Widgets",
      subtitle: "Check off tasks and habits directly from your phone's launcher.",
      description:
        "You do not even need to launch the app to stay on track. Built with Jetpack Glance, PranshulOS delivers interactive widgets for your Today Agenda, Routine anchors, and Sticky Notes pinboard directly onto your Android home screen.",
      bullets: [
        "Interactive Daily Agenda widget with direct task completion",
        "Daily Habit & Routine anchor widget with streak counters",
        "Sticky Notes pinboard widget for fast thought retrieval",
        "Battery-efficient background WorkManager synchronization",
      ],
      badge: "Jetpack Glance",
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      id: "updater",
      label: "In-App Auto-Updater",
      icon: RefreshCw,
      title: "Direct GitHub Releases APK Updates",
      subtitle: "Free from Google Play Store fees, 14-day tester lockouts, and gatekeepers.",
      description:
        "No waiting for proprietary app store review queues. The mobile companion checks the official GitHub Releases API on demand, downloads new APK binaries directly, and invokes the standard Android Package Installer with full cryptographic integrity.",
      bullets: [
        "Direct GitHub Releases API version checking",
        "In-app one-tap APK download and Package Installer invocation",
        "Zero Google Play account requirements or developer fees",
        "Clean, standalone ~3.4 MB APK footprint with zero telemetry SDKs",
      ],
      badge: "Sovereign Sideloading",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
  ];

  const activeCap = coreCapabilities.find((c) => c.id === activeTab) || coreCapabilities[0];

  return (
    <section id="mobile" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08] relative">
      {/* Background glow accent */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 mb-4">
          <Smartphone className="w-3.5 h-3.5" />
          <span>NEW IN {SITE_CONFIG.version} · SOVEREIGN MOBILE COMPANION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Your workstation in your pocket.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
            Without the cloud.
          </span>
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          An Android Kotlin Multiplatform client engineered for local Wi-Fi and private mesh synchronization on Port 5001. No telemetry, no third-party accounts, and no monthly fees.
        </p>
      </div>

      {/* Capability Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
        {coreCapabilities.map((cap) => {
          const Icon = cap.icon;
          const isActive = cap.id === activeTab;
          return (
            <button
              key={cap.id}
              onClick={() => setActiveTab(cap.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                isActive
                  ? "bg-emerald-500/15 text-emerald-300 font-bold border-emerald-500/40 shadow-lg shadow-emerald-500/10 scale-[1.02]"
                  : "bg-surface text-zinc-400 hover:text-white border-white/10 hover:border-white/20 active:bg-white/5"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-zinc-500"}`} />
              <span>{cap.label}</span>
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Showcase Card */}
      <div className="spotlight-card rounded-2xl sm:rounded-3xl border border-white/15 bg-surface/90 overflow-hidden shadow-2xl shadow-black/80 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left: Deep Dive Spec & Concrete Capabilities */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-2.5 py-0.5 rounded text-[0.68rem] font-mono font-bold uppercase tracking-wider border ${activeCap.badgeColor}`}>
                  {activeCap.badge}
                </span>
                <span className="text-xs font-mono text-zinc-400">Port 5001 Peer Protocol</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                {activeCap.title}
              </h3>
              <p className="text-sm font-medium text-zinc-300 mb-4">
                {activeCap.subtitle}
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                {activeCap.description}
              </p>

              {/* Concrete Verified Bullets */}
              <div className="space-y-2.5 mb-8">
                <span className="text-[0.68rem] font-mono uppercase tracking-widest text-zinc-400 block">
                  Verified Implementation Details
                </span>
                {activeCap.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Spec Metrics Pill */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Kotlin Multiplatform + Compose</span>
              </div>
              <div className="text-zinc-300">
                APK Footprint: <span className="text-emerald-400 font-bold">~3.39 MB</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Architecture & Device UI Mockup */}
          <div className="lg:col-span-5 bg-[#0b0b0f] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Phone Screen Mockup Frame */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto rounded-[32px] border-2 border-white/15 bg-zinc-950 p-3 shadow-2xl relative">
              {/* Speaker notch */}
              <div className="w-20 h-4 bg-zinc-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-zinc-800" />
              </div>

              {/* Simulated Mobile UI */}
              <div className="rounded-2xl bg-[#121217] border border-white/10 p-3.5 space-y-3 font-mono">
                {/* Header inside phone */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[0.68rem]">
                  <div className="flex items-center gap-1.5 text-white font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>PranshulOS Mobile</span>
                  </div>
                  <span className="text-zinc-400">{SITE_CONFIG.mobileVersion}</span>
                </div>

                {/* Hub Connection Status Card */}
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[0.65rem] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Mesh Gateway</span>
                    <span className="text-emerald-400 font-bold">192.168.1.100:5001</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-500">
                    <span>Protocol</span>
                    <span>Direct LAN / WireGuard</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-500">
                    <span>Database</span>
                    <span>SQLite WAL (Synced)</span>
                  </div>
                </div>

                {/* Interactive Glance Widget Preview inside Phone */}
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[0.65rem] space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-emerald-300">
                    <span>Glance Agenda Widget</span>
                    <span className="text-[0.6rem] bg-emerald-500/20 px-1.5 py-0.5 rounded">HOME SCREEN</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span className="line-through text-zinc-500">Review PRD Architecture</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-200">
                    <div className="w-3 h-3 rounded border border-white/30" />
                    <span>Push v3.0.0 Release Binary</span>
                  </div>
                </div>

                {/* Conflict Branching Callout */}
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[0.6rem] text-zinc-400 flex items-center gap-2">
                  <GitBranch className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span className="truncate">Auto-branch: Docs (Conflict from Mobile).md</span>
                </div>

                {/* Chibi status pill */}
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[0.6rem] text-zinc-400 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Bot className="w-3 h-3 text-sky-400" />
                    <span>Chibi Proxy</span>
                  </div>
                  <span className="text-sky-300">Hub LLM Active</span>
                </div>
              </div>
            </div>

            {/* Warning disclosure note (faithful promise) */}
            <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[0.7rem] font-mono text-amber-300/90 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Pairing Notice:</strong> Linking your phone to the desktop hub replaces local app mock data with the authoritative workstation database.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Download Action Strip */}
      <div className="rounded-2xl bg-gradient-to-r from-zinc-900 via-surface to-zinc-900 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1">
            <span>Direct Sideload APK Available</span>
            <span>·</span>
            <span>{SITE_CONFIG.mobilePlatform}</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white">
            Install PranshulOS Companion {SITE_CONFIG.mobileVersion}
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
            Sideload directly without third-party app stores or fees. Automatic in-app updates query our GitHub releases directly.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <a
            href={SITE_CONFIG.mobileApkDownloadUrl}
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>Download APK (~3.4 MB)</span>
          </a>
          <a
            href={SITE_CONFIG.mobileAabDownloadUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
            title="Download Android App Bundle for custom signing / testing"
          >
            <Smartphone className="w-4 h-4 text-zinc-400" />
            <span>App Bundle (.aab)</span>
          </a>
          <a
            href={SITE_CONFIG.githubReleasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 text-xs font-mono text-zinc-400 hover:text-white transition-all"
          >
            <span>Releases</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
