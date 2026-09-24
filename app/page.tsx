import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Philosophy } from "@/components/Philosophy";
import { CoreFeatures } from "@/components/CoreFeatures";
import { UnifiedWorkspace } from "@/components/UnifiedWorkspace";
import { EvolutionTimeline } from "@/components/EvolutionTimeline";
import { ArchitectureVisual } from "@/components/ArchitectureVisual";
import { PrivacyCompare } from "@/components/PrivacyCompare";
import { DesignPhilosophy } from "@/components/DesignPhilosophy";
import { CurrentState } from "@/components/CurrentState";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-zinc-100 relative selection:bg-gold/30 selection:text-white">
      {/* Persistent Frosted Glass Top Navigation */}
      <Navbar />

      {/* Hero Section with Live Desktop Window Mockup */}
      <Hero />

      {/* Infinite Architecture & Tech Primitives Marquee */}
      <TechMarquee />

      {/* Interactive Product Demonstration ("See it in action.") */}
      <ProductShowcase />

      {/* What is PranshulOS? The 3 Pillars */}
      <Philosophy />

      {/* All 10 Core Modules & Spotlight Feature Cards */}
      <CoreFeatures />

      {/* Unified Workspace Connection Pipeline */}
      <UnifiedWorkspace />

      {/* Product Evolution & Decision History */}
      <EvolutionTimeline />

      {/* Simple On Purpose Architecture Inspector */}
      <ArchitectureVisual />

      {/* Machine Sovereignty vs Cloud SaaS Matrix */}
      <PrivacyCompare />

      {/* Design Craft & Convictions */}
      <DesignPhilosophy />

      {/* Current Shipped Capabilities & Future Horizon */}
      <CurrentState />

      {/* Closing Call to Action */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
