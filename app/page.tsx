import Link from "next/link";

const missions = [
  {
    number: 1,
    title: "What is Claude Code?",
    description: "Learn what Claude Code is, what GitHub and Vercel do, and how they work together.",
    xp: 100,
  },
  {
    number: 2,
    title: "Your First Build",
    description: "Choose what to build, install everything, and get your first app live on the internet.",
    xp: 100,
  },
  {
    number: 3,
    title: "When Things Break",
    description: "Learn how to read errors, get unstuck, and never lose your progress.",
    xp: 100,
  },
  {
    number: 4,
    title: "Reading and Editing Files",
    description: "Learn how Claude Code reads your project and makes precise changes across multiple files.",
    xp: 100,
  },
  {
    number: 5,
    title: "Running Commands",
    description: "Use Claude Code to run terminal commands on your behalf without typing them yourself.",
    xp: 100,
  },
  {
    number: 6,
    title: "Debugging with Claude",
    description: "Walk through a broken app and fix it together with Claude Code step by step.",
    xp: 100,
  },
  {
    number: 7,
    title: "How to Write Better Prompts",
    description: "Small changes to how you describe things lead to dramatically better results.",
    xp: 100,
  },
  {
    number: 8,
    title: "How to Plan Bigger Projects",
    description: "How to structure a real project so Claude Code builds exactly what you want.",
    xp: 100,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#060e20", color: "#dee5ff" }}>

      {/* ── Nav ─────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-20 backdrop-blur-md"
        style={{
          background: "rgba(6, 14, 32, 0.85)",
          borderBottom: "1px solid rgba(204, 151, 255, 0.2)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={{ color: "#cc97ff", fontWeight: 700, fontSize: "0.95rem" }}>›</span>
            <span
              style={{
                fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#cc97ff",
                letterSpacing: "0.05em",
              }}
            >
              CLAUDE_QUEST
            </span>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold"
            style={{ background: "#192540", color: "#6bff8f" }}
          >
            <span>⚡</span>
            <span>0 XP</span>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p
          className="uppercase tracking-widest text-sm mb-5"
          style={{ color: "#a3aac4", letterSpacing: "0.2em" }}
        >
          Mission Briefing
        </p>
        <h1
          className="text-5xl font-bold mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
            color: "#dee5ff",
          }}
        >
          Master Claude Code,<br />one mission at a time.
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: "#a3aac4" }}>
          Claude Quest is a hands-on training program for builders. Complete missions,
          earn XP, and become a Claude Code power user.
        </p>
        <Link
          href="/lessons/1"
          className="cta-button inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-lg"
        >
          Start Mission 1 →
        </Link>
      </section>

      {/* ── Mission Board ────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p
          className="uppercase tracking-widest text-sm mb-6"
          style={{ color: "#a3aac4", letterSpacing: "0.18em" }}
        >
          Mission Board
        </p>

        <div className="flex flex-col gap-3">
          {missions.map((mission) => (
            <Link
              key={mission.number}
              href={`/lessons/${mission.number}`}
              className="mission-card flex items-center gap-5 p-5 rounded-xl"
            >
              {/* Number badge */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{
                  fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
                  background: "rgba(156, 72, 234, 0.25)",
                  color: "#cc97ff",
                  border: "1px solid rgba(204,151,255,0.3)",
                }}
              >
                {String(mission.number).padStart(2, "0")}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3
                  className="font-bold mb-0.5"
                  style={{
                    fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
                    color: "#dee5ff",
                  }}
                >
                  {mission.title}
                </h3>
                <p className="text-sm truncate" style={{ color: "#a3aac4" }}>
                  {mission.description}
                </p>
              </div>

              {/* XP badge */}
              <div
                className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(107,255,143,0.12)", color: "#6bff8f" }}
              >
                +{mission.xp} XP
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer
        className="text-center py-10 px-6"
        style={{ borderTop: "1px solid rgba(204,151,255,0.1)" }}
      >
        <p className="text-sm mb-1" style={{ color: "#a3aac4" }}>
          Claude Quest — Built with Claude Code
        </p>
        <p className="text-xs" style={{ color: "#a3aac4", opacity: 0.6 }}>
          Every lesson on this platform was built using the exact tools you are learning.
        </p>
      </footer>

    </div>
  );
}
