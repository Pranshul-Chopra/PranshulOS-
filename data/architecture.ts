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
    role: "Local Compute & AI Gateway",
    tech: "Python Flask · Local Process Daemon",
    description:
      "A lightweight local daemon running exclusively on localhost (127.0.0.1). Mediates local Ollama models, executes data calculations, manages theme tokens, and handles file exports without ever routing data over the public internet.",
    details: [
      "Binds strictly to localhost with zero open external ports",
      "Direct integration with Ollama for 100% offline LLM inference",
      "Sub-millisecond API response times via local loopback",
      "Independent process lifecycle managed by the Electron shell",
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
