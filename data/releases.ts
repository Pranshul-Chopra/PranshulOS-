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
    version: "v3.0.1",
    badge: "CURRENT STABLE",
    title: "Sovereign Security Hardening & Data Integrity",
    tagline: "In-process ephemeral TLS with SHA-256 fingerprint pinning, monotonic sequence delta sync, soft-delete tombstones, and Crockford Base32 pairing.",
    date: "Oct 2026",
    decisionRationale:
      "As PranshulOS expanded into an active multi-device desktop and mobile companion ecosystem, cryptographic transport integrity and multi-device convergence invariants became critical. v3.0.1 hardens Port 5001 with zero-dependency pure-Python RSA-2048 X.509 v3 TLS certificates and SHA-256 fingerprint pinning, prevents dropped mutations with strictly monotonic sequence cursor pagination, shuts down offline resurrection with durable soft-delete tombstones, enforces server-authoritative clock-skew protection (60s ceiling), upgrades pairing to Crockford Base32 entropy with sliding-window rate limiting, and neutralizes injection vectors across shell navigation and AI markdown.",
    changes: [
      "Sovereign in-process TLS transport via cert_generator.py (pure Python RSA-2048 & X.509 v3 self-signed certs) wrapping Port 5001 WSGI",
      "SHA-256 certificate fingerprint pinning (fp=<sha256>) embedded in QR codes; cleartext HTTP disabled in mobile manifest",
      "Strictly monotonic sequence cursor pagination (change_id > cursor) in db.py eliminating missed mutations on concurrent writes",
      "Durable soft-delete tombstones (deleted_at INTEGER DEFAULT NULL) with conflict_tombstone_wins LWW resolution preventing offline resurrection",
      "Server-authoritative clock skew protection clamping timestamps to min(raw_ts, server_now + 60,000ms)",
      "Ticket and task timestamp millisecond integer epoch normalization replacing text datetime('now')",
      "PAIR-XXXX-XXXX Crockford Base32 pairing code entropy (~4.3B combinations) with persistent SQLite storage and sliding-window rate limiting (HTTP 429)",
      "Injection neutralization: Electron will-navigate regex validation, Markdown URL scheme allowlisting (http/https/mailto), and HTML pre-escaping in untrusted AI markdown",
      "Release verification: cryptographic SHA-256 checksums in /api/mobile/version, password-authenticated AES-256-GCM import in mobile, and localhost CORS reflection",
      "314 / 314 automated test cases verified passing with zero regressions",
    ],
    status: "current",
  },
  {
    version: "v3.0.0",
    badge: "SHIPPED",
    title: "Sovereign Mobile Ecosystem & Live Web Grounding",
    tagline: "Peer-to-peer Port 5001 Android companion, Glance home-screen widgets, doc conflict branching, and live web grounding.",
    date: "Oct 2026",
    decisionRationale:
      "Productivity shouldn't die when you step away from your desk, nor should mobile access require uploading your private database to a third-party cloud server. v3.0.0 pairs your Android phone directly to your desktop hub over Port 5001 (local Wi-Fi or private mesh) with 100% offline WAL persistence, Glance home-screen widgets, doc conflict branching, and zero cloud middlemen.",
    changes: [
      "Sovereign Mobile Companion (Kotlin Multiplatform + Jetpack Compose) with ultra-light ~3.4MB footprint",
      "Port 5001 P2P sync gateway over local Wi-Fi or private overlay mesh (Tailscale/WireGuard)",
      "5-Minute single-use vector SVG QR pairing with modular onboarding settings sync",
      "Non-destructive document conflict branching engine (Title (Conflict from Mobile ...).md)",
      "Native Android Glance home-screen widgets for Daily Agenda, Routines, and Sticky Notes",
      "In-App GitHub Releases APK auto-updater (bypasses Play Store gatekeepers and fees)",
      "Chibi AI live web grounding with DuckDuckGo + Reddit fallback and rate-limit guard",
      "314 / 314 automated test cases verified passing with zero regressions",
    ],
    status: "shipped",
  },
  {
    version: "v2.4.5",
    badge: "SHIPPED",
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
    status: "shipped",
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
    version: "v3.1.0",
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
      "Multi-device mesh topology with automatic mDNS satellite discovery",
    ],
    status: "future",
  },
];
