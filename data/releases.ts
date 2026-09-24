export interface ReleaseItem {
  version: string;
  badge: string;
  title: string;
  tagline: string;
  date: string;
  decisionRationale: string;
  changes: string[];
  status: "shipped" | "current" | "future";
}

export const RELEASES: ReleaseItem[] = [
  {
    version: "v2.4.5",
    badge: "CURRENT STABLE",
    title: "Polish, Resilience & Multi-Journal Architecture",
    tagline: "Stack-preserving rollover, local journal logs, and rock-solid SQLite persistence.",
    date: "Sep 2026",
    decisionRationale:
      "Task management breaks down when yesterday's tasks disappear into guilt. We engineered stack-preserving rollover logic so uncompleted work remains in order without manual reorganization. Added private multi-journal logs.",
    changes: [
      "Stack preservation rollover engine for unfinished agenda items",
      "Multi-journal logs system with situational tagging",
      "Instant 1-click DB schema migrations with zero data loss",
      "Enhanced Windows native tray integration and low-latency startup",
    ],
    status: "current",
  },
  {
    version: "v2.4.0",
    badge: "MAJOR MILESTONE",
    title: "AI Plan Mode & Markdown Studio",
    tagline: "Bridging unstructured thought with structured execution.",
    date: "Aug 2026",
    decisionRationale:
      "Most AI assistants produce text that you then have to manually copy-paste into your task manager. We replaced chat-only output with structured Action Plan Cards and an instant 'Apply to PranshulOS' button that directly modifies the database.",
    changes: [
      "Chibi AI Plan Mode with structured Action Cards",
      "1-Click SQLite Apply pipeline for instant habit/ticket creation",
      "Dual Ollama (local offline) + Gemini (cloud) AI engine integration",
      "Markdown Studio with 3 dynamic viewports: Write, Split, and Live Preview",
      "Theme Studio with custom Google Fonts live loader",
    ],
    status: "shipped",
  },
  {
    version: "v2.3.0",
    badge: "WORKFLOW ENGINE",
    title: "Blueprints & Node-Graph Workflows",
    tagline: "Mapping systems instead of flat, linear lists.",
    date: "May 2026",
    decisionRationale:
      "Linear to-do lists fail for complex multi-stage projects. We built Blueprints: an infinite 2D canvas with directional SVG connections and an interactive runner mode to step through procedures deterministically.",
    changes: [
      "Infinite canvas with pan, zoom, and hardware-accelerated rendering",
      "Directional SVG bezier links connecting process nodes",
      "Step Runner mode with isolated session state tracking",
      "Time-blocked Daily Agenda with start/end bounds",
    ],
    status: "shipped",
  },
  {
    version: "v2.0.0",
    badge: "THE RESET",
    title: "The Local-First Pivot",
    tagline: "Stripping cloud bloat to build an enduring desktop shell.",
    date: "Jan 2026",
    decisionRationale:
      "Cloud services add latency, break offline, and hold your data hostage. We made the bold architectural pivot to discard cloud backends entirely and rebuild PranshulOS as an offline-first Electron + Flask + SQLite desktop sanctuary.",
    changes: [
      "Complete elimination of cloud database and mandatory accounts",
      "Adoption of on-device SQLite database with sub-millisecond queries",
      "Electron desktop shell wrapping lightweight local Flask endpoints",
      "Re-engineered dark aesthetic with high-density information architecture",
    ],
    status: "shipped",
  },
  {
    version: "v1.0.0",
    badge: "ORIGIN",
    title: "Initial Desktop Widget Exploration",
    tagline: "The first prototype of a personal command center.",
    date: "Late 2025",
    decisionRationale:
      "Standard Windows desktop environments treat personal productivity as scattered browser tabs. v1.0 proved that a unified, dedicated desktop shell could radically diminish context switching.",
    changes: [
      "Initial task and reminder tracking prototype",
      "Desktop overlay launcher experiment",
      "Basic local file storage experiments",
    ],
    status: "shipped",
  },
  {
    version: "v3.0.0",
    badge: "FUTURE HORIZON",
    title: "Autonomous Adaptive Operating Environment",
    tagline: "Personal context embeddings, proactive Chibi, and local semantic memory.",
    date: "Future Vision",
    decisionRationale:
      "Moving from an active tool that waits for user input to a proactive companion that anticipates deadlines, surfaces relevant project blueprints, and synthesizes personal context securely on-device.",
    changes: [
      "Local vector embeddings via sqlite-vec for cross-document semantic search",
      "Proactive schedule balancing and workload risk detection",
      "Custom Chibi personality fine-tuning with local memory graph",
      "Cross-device peer-to-peer encrypted sync without central servers",
    ],
    status: "future",
  },
];
