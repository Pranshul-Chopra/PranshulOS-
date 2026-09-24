"use client";

import { useState } from "react";
import { ARCHITECTURE_LAYERS, ArchitectureNode } from "@/data/architecture";
import { Monitor, Cpu, Database, HardDrive, ShieldCheck, ArrowDown, CheckCircle2 } from "lucide-react";

export function ArchitectureVisual() {
  const [selectedLayer, setSelectedLayer] = useState<string>("storage");
  const activeLayer =
    ARCHITECTURE_LAYERS.find((l) => l.id === selectedLayer) || ARCHITECTURE_LAYERS[2];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Monitor":
        return Monitor;
      case "Cpu":
        return Cpu;
      case "Database":
        return Database;
      default:
        return HardDrive;
    }
  };

  return (
    <section id="architecture" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[0.7rem] font-mono uppercase tracking-[0.25em] text-gold block mb-3">
          SYSTEM INTERNALS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Simple on purpose.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          The system is intentionally local. No distributed microservices. No cloud message queues. Just robust desktop primitives operating in deterministic isolation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Architecture Diagram Interactive Flow (Vertical/Horizontal) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
            Click Layer To Inspect Details:
          </div>
          {ARCHITECTURE_LAYERS.map((layer, idx) => {
            const Icon = getIcon(layer.icon);
            const isSelected = layer.id === selectedLayer;
            return (
              <div key={layer.id} className="flex flex-col">
                <button
                  onClick={() => setSelectedLayer(layer.id)}
                  className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? "bg-surface border-gold shadow-lg shadow-gold/20 scale-[1.02]"
                      : "bg-surface/50 border-white/10 hover:border-white/20 hover:bg-surface/80"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                        isSelected
                          ? "bg-gold text-zinc-950 border-gold"
                          : "bg-white/[0.04] text-zinc-400 border-white/10 group-hover:text-gold"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-white">
                        {layer.name}
                      </div>
                      <div className="text-[0.7rem] font-mono text-zinc-400">
                        {layer.tech}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-zinc-500">
                    {isSelected ? (
                      <span className="text-gold font-bold">ACTIVE →</span>
                    ) : (
                      "0" + (idx + 1)
                    )}
                  </div>
                </button>

                {/* Arrow connector between layers */}
                {idx < ARCHITECTURE_LAYERS.length - 1 && (
                  <div className="flex justify-center py-1.5 text-zinc-600">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Selected Layer Deep Dive Inspector */}
        <div className="lg:col-span-7 spotlight-card rounded-3xl bg-surface/90 border border-white/15 p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div>
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-gold-bright block mb-1">
                {activeLayer.role}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {activeLayer.name}
              </h3>
            </div>
            <div className="px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 font-mono text-xs text-zinc-300">
              {activeLayer.tech}
            </div>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 font-normal">
            {activeLayer.description}
          </p>

          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
              Architectural Invariants &amp; Guarantees
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeLayer.details.map((detail, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5 text-xs font-mono text-zinc-300"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Isolation Boundary: Windows Process Sandbox</span>
            <span className="text-emerald-400">Verified Local Only</span>
          </div>
        </div>
      </div>
    </section>
  );
}
