export interface ArchitectureNode {
  id: string;
  name: string;
  role: string;
  tech: string;
  description: string;
  details: string[];
  icon: string;
}

export const ARCHITECTURE_LAYERS: ArchitectureNode[] = [
  {
    id: "shell",
    name: "Desktop Shell",
    role: "User Interface & System Windowing",
    tech: "Electron · Chromium · Modern Web Standards",
    description:
      "Provides native desktop privileges: seamless system tray docking, global hotkeys (Ctrl+J for instant AI execution), zero-flicker window management, and hardware-accelerated 60fps canvas rendering.",
    details: [
      "Hardware-accelerated rendering for infinite Blueprints canvas",
      "Native Windows global hotkey hooks",
      "Frameless, customized dark chrome titlebar",
      "Offline local asset caching",
    ],
    icon: "Monitor",
  },
  {
    id: "backend",
    name: "Local Service Engine",
    role: "Local Compute & Hub Orchestration",
    tech: "Python Flask · WSGI SSL · Port 5001 Gateway",
    description:
      "A lightweight local daemon running on loopback (127.0.0.1:5000) with an opt-in Port 5001 gateway for mobile pairing. Mediates local Ollama models, grounds live queries via DuckDuckGo/Reddit heuristic search, manages theme tokens, and handles file exports without third-party cloud intermediaries.",
    details: [
      "Core API binds strictly to 127.0.0.1; Port 5001 wraps WSGI socket with native SSL context",
      "In-process RSA-2048 & X.509 v3 TLS certificate generation (cert_generator.py)",
      "Sliding-window IP rate limiting (HTTP 429) & persistent SQLite pairing code vault",
      "Server-authoritative clock-skew protection (60,000ms ceiling) preventing DoS lockouts",
    ],
    icon: "Cpu",
  },
  {
    id: "storage",
    name: "Zero-Latency Persistence",
    role: "ACID Relational Storage",
    tech: "Embedded SQLite Engine",
    description:
      "Your entire digital workspace lives inside a single, portable .sqlite file on your drive. Zero setup, zero background cloud synchronizers stalling your CPU, and instant query execution.",
    details: [
      "Single-file database located directly in user AppData",
      "Zero account creation, authentication tokens, or expired sessions",
      "Instant backup, restore, or transfer via simple file copy",
      "Atomic transactions preventing data corruption on abrupt shutdowns",
    ],
    icon: "Database",
  },
  {
    id: "satellite",
    name: "Sovereign Mobile Satellite",
    role: "Local Mesh Satellite & Companion Sync",
    tech: "Port 5001 HTTPS · KMP Compose · Monotonic Cursor",
    description:
      "Extends your desktop sanctuary to Android without third-party cloud servers. An in-process TLS gateway on Port 5001 serves monotonic delta synchronization over local Wi-Fi or private WireGuard/Tailscale mesh, secured by Crockford Base32 pairing and SHA-256 certificate fingerprint pinning.",
    details: [
      "Zero cleartext traffic — enforced HTTPS with SHA-256 certificate fingerprint pinning",
      "PAIR-XXXX-XXXX Crockford Base32 entropy (~4.3B combinations) with 5-minute expiry",
      "Strictly monotonic sequence cursor pagination (change_id > cursor) guaranteeing zero dropped mutations",
      "Durable soft-delete tombstones (conflict_tombstone_wins) preventing offline zombie resurrection",
    ],
    icon: "Smartphone",
  },
  {
    id: "hardware",
    name: "Your Personal Machine",
    role: "Complete Sovereignty & Isolation",
    tech: "Windows 10 / 11 · Local NVMe / SSD",
    description:
      "No corporate telemetry. No subscription lock-in. No cloud outages. When you disconnect your Wi-Fi, PranshulOS functions at 100% full capacity without a single missing feature.",
    details: [
      "100% offline operational guarantee",
      "Zero phone-home telemetry or analytics scripts",
      "CPU and memory footprint capped for quiet background running",
      "Instant launch from local disk cache",
    ],
    icon: "HardDrive",
  },
];
