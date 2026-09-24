export interface WorkflowStep {
  step: string;
  name: string;
  headline: string;
  description: string;
  example: string;
  connector: string;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    name: "Goals",
    headline: "Define High-Level Direction",
    description: "Anchor broad quarterly objectives and academic or engineering milestones.",
    example: "Q4 Target: Ship PranshulOS v2.4.5 & Complete Causal Systems Architecture.",
    connector: "breaks down into recurring patterns",
  },
  {
    step: "02",
    name: "Routines",
    headline: "Structure Weekly Anchors",
    description: "Convert high-level direction into daily habits and day-specific weekly routines.",
    example: "Monday & Wednesday 08:00–10:00: Deep Work Systems Architecture block.",
    connector: "schedules precise time slots",
  },
  {
    step: "03",
    name: "Tasks & Agenda",
    headline: "Execute With Time-Blocked Focus",
    description: "Today's specific queue, ordered by time bounds and stacked with rollover items.",
    example: "11:00 AM: Implement SQLite schema migration for multi-journal logging.",
    connector: "generates concrete deliverables",
  },
  {
    step: "04",
    name: "Blueprints & Actions",
    headline: "Navigate Complex Workflows",
    description: "Step-by-step interactive runner nodes with verified checklist verification.",
    example: "Step 3/5: Compile Electron native bindings and test offline IPC fallback.",
    connector: "records historical telemetry",
  },
  {
    step: "05",
    name: "Logs & Analytics",
    headline: "Reflect & Maintain Momentum",
    description: "Private journal entries, habit streak feedback, and milestone celebrations with Chibi.",
    example: "Streak: 18 consecutive days. Milestone verified. Confetti particle celebration.",
    connector: "feeds forward into next quarter's goals",
  },
];
