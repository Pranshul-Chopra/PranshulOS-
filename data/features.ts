export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  video?: string;
  pills: string[];
  stats?: { label: string; value: string };
  category: "core" | "workflow" | "companion" | "customization";
}

export const FEATURES: FeatureItem[] = [
  {
    id: "plan-mode",
    tag: "AI PLAN MODE · CHIBI",
    title: "Collaborative planning with 1-click execution.",
    shortDesc: "Structure routines, tickets, goals, and notes naturally through local conversation.",
    fullDesc:
      "Transform high-level thoughts into structured Action Plan Cards. With a single click on 'Apply to PranshulOS', plans are committed directly to your local SQLite database without manual data entry. Supports offline local Ollama and cloud Gemini with an 8-domain advisory framework.",
    image: "/image.png",
    video: "/demo-plan-mode.mp4",
    pills: [
      "Plan Mode Action Cards",
      "1-Click SQLite Apply",
      "Dual Ollama / Gemini",
      "8-Domain Advisory Intelligence",
      "Global shortcut (Ctrl + J)",
    ],
    stats: { label: "Execution speed", value: "<10ms direct DB write" },
    category: "core",
  },
  {
    id: "docs",
    tag: "DOCS · MARKDOWN STUDIO",
    title: "Rich Markdown editor with Write, Split & Preview.",
    shortDesc: "Distraction-free writing, side-by-side editing, and interactive checklist synchronization.",
    fullDesc:
      "A powerhouse local markdown environment featuring three dynamic viewports: Pure Write, Side-by-Side Split, and Live Preview. Checklists sync instantly to raw markdown syntax, code snippets copy with one tap, and documents can be pinned or exported to DOCX/TXT.",
    image: "/docs.jpg",
    video: "/demo-docs.mp4",
    pills: [
      "Write / Split / Preview Modes",
      "Interactive Sync Checklists",
      "One-click Code Copy",
      "Document Pinning",
      "DOCX & TXT Exports",
    ],
    stats: { label: "Format support", value: "CommonMark + GFM" },
    category: "core",
  },
  {
    id: "dashboard",
    tag: "DASHBOARD · AGENDA & GOALS",
    title: "Time-blocked agenda, calendar & quarterly goals.",
    shortDesc: "Never lose unfinished work: automatic rollover with full stack preservation.",
    fullDesc:
      "Schedule today's tasks into precise HH:MM time slots. Uncompleted items roll over cleanly to the next day while maintaining your prioritised stack order. Connect micro-tasks directly to long-term quarterly goals.",
    image: "/dashboard.jpg",
    video: "/demo-agenda.mp4",
    pills: [
      "HH:MM Time-Slot Blocks",
      "Automatic Task Rollover",
      "Interactive Monthly Calendar",
      "Quarterly Milestone Tracking",
    ],
    stats: { label: "Rollover logic", value: "Zero-loss task queue" },
    category: "workflow",
  },
  {
    id: "blueprints",
    tag: "BLUEPRINTS · WORKFLOW ENGINE",
    title: "Visual node-graph builder with step execution.",
    shortDesc: "Map complex project flows on an infinite canvas with live checkbox step runners.",
    fullDesc:
      "Connect stages, branches, and deliverables with directional SVG bezier links on a smooth, infinite pan-and-zoom canvas. Enter 'Runner Mode' to step through your system live with isolated progress states and auto-framing camera controls.",
    image: "/Workflow.png",
    video: "/demo-blueprints.mp4",
    pills: [
      "Infinite Pan & Zoom Canvas",
      "Directional SVG Connectors",
      "Interactive Runner Mode",
      "Sidebar Global Quick-access",
    ],
    stats: { label: "Graph engine", value: "60 FPS hardware accelerated" },
    category: "workflow",
  },
  {
    id: "routines",
    tag: "ROUTINE · DAILY & WEEKLY",
    title: "Separate daily habits from weekly commitments.",
    shortDesc: "A dedicated Monday-Sunday column matrix alongside daily recurring anchors.",
    fullDesc:
      "Distinguish between non-negotiable daily habits and day-specific weekly commitments. Active-day highlights keep you anchored in the present moment, while local streak calculations reinforce steady consistency.",
    image: "/weekly.jpg",
    pills: [
      "7-Day Mon–Sun Matrix",
      "Daily Habit Tracker",
      "Active Day Highlight",
      "Local Streak Calculator",
    ],
    stats: { label: "Streak retention", value: "100% on-device SQLite" },
    category: "workflow",
  },
  {
    id: "tickets",
    tag: "TICKETS · PERSONAL KANBAN",
    title: "A personal ticket board built for real output.",
    shortDesc: "Lightweight, distraction-free cards with P0–P2 priority and clear deadlines.",
    fullDesc:
      "A fast, keyboard-friendly personal Kanban board. Tag critical tasks with P0 urgency, assign precise start/end bounds, track progress across Active and Done columns, and clear mental overhead without heavy SaaS overhead.",
    image: "/tickets.jpg",
    pills: [
      "P0 / P1 / P2 Priority Tags",
      "Due Date Deadlines",
      "Active & Completed Boards",
      "Instant Completion Toggles",
    ],
    stats: { label: "Latency", value: "Zero network roundtrips" },
    category: "core",
  },
  {
    id: "briefing",
    tag: "DAILY BRIEFING · MORNING DIGEST",
    title: "A personalized briefing for your morning coffee.",
    shortDesc: "Automatically launches on your first day boot to summarize all essential context.",
    fullDesc:
      "Start every day oriented and grounded. The Daily Briefing aggregates today's scheduled agenda, weekly commitments, high-priority P0 tickets, and quick scratchpad notes into an elegant 2-column executive digest.",
    image: "/BriefingPage.png",
    pills: [
      "Automatic First-boot Launch",
      "Unified Day Digest",
      "Urgent P0 Highlight",
      "One-click Instant Dismiss",
    ],
    stats: { label: "Cadence", value: "1× Daily smart trigger" },
    category: "core",
  },
  {
    id: "themes",
    tag: "THEME STUDIO · CUSTOM STYLING",
    title: "Infinite visual styles with Google Fonts integration.",
    shortDesc: "Classic Amber, Cyber Neon, Paper Craft, or build your own custom design system.",
    fullDesc:
      "PranshulOS adapts to your aesthetic. Switch between four curated high-contrast palettes, import any typography via the Google Fonts API, adjust RGB tokens, and enjoy theme-adaptive syntax highlighting across all markdown documents.",
    image: "/Themes.jpg",
    video: "/demo-themes.mp4",
    pills: [
      "Google Fonts Dynamic Loader",
      "4 Built-in System Presets",
      "Theme-Adaptive Markdown",
      "JSON Theme Export & Import",
    ],
    stats: { label: "Customization", value: "Full CSS token control" },
    category: "customization",
  },
  {
    id: "chibi",
    tag: "CHIBI · DESKTOP COMPANION",
    title: "Your reactive, autonomous workspace mascot.",
    shortDesc: "Reacts to completed milestones, celebrates wins with confetti, and tracks focus.",
    fullDesc:
      "A living companion anchored right inside your workspace. Chibi celebrates your completed tasks with physics-based particle confetti, changes expressions based on your workload, offers contextual encouragement, and houses the AI Companion Hub.",
    image: "/Chibi.jpg",
    pills: [
      "Reactive State Engine",
      "Confetti Particle Physics",
      "Contextual Speech Bubbles",
      "Companion Hub Drawer",
    ],
    stats: { label: "Companion state", value: "Contextually aware" },
    category: "companion",
  },
  {
    id: "logs",
    tag: "LOGS · PRIVATE JOURNAL",
    title: "A secure, local journal and situational logbook.",
    shortDesc: "Record raw thoughts, incident notes, and personal logs entirely offline.",
    fullDesc:
      "Capture private reflections, system debug logs, and milestone logs without risk of cloud leaks. Tag entries with situational labels, precise timestamps, and descriptions stored exclusively in local encrypted SQLite tables.",
    image: "/Logs.png",
    pills: [
      "Multiple Personal Journals",
      "Situational Categorization",
      "High-precision Timestamps",
      "Zero Cloud Sync",
    ],
    stats: { label: "Data privacy", value: "Machine-only storage" },
    category: "core",
  },
];
