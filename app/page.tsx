import Link from "next/link";
import NavBar from "@/components/NavBar";

const missionIcons: Record<number, string> = {
  1: "🤖",
  2: "🏗️",
  3: "🔥",
  4: "📂",
  5: "⚡",
  6: "🐛",
  7: "✍️",
  8: "🗺️",
};

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
      <NavBar />

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

      {/* ── Skill Tree ───────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pb-32">

        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="uppercase tracking-widest text-sm mb-3"
            style={{ color: "#a3aac4", letterSpacing: "0.18em" }}
          >
            Mission Board
          </p>
          <p className="text-base" style={{ color: "#a3aac4" }}>
            Complete all 8 missions to become a Claude Code power user.
          </p>
        </div>

        {/* Tree */}
        <div className="relative">

          {/* Vertical dashed path line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(to bottom, rgba(204,151,255,0.25) 0px, rgba(204,151,255,0.25) 8px, transparent 8px, transparent 18px)",
            }}
          />

          <div className="flex flex-col">
            {missions.map((mission, i) => {
              const isLeft = i % 2 === 0;
              const icon = missionIcons[mission.number];
              const numStr = String(mission.number).padStart(2, "0");

              return (
                <div key={mission.number} className="flex flex-col items-center">

                  {/* Card row — alternates left / right on md+ */}
                  <div
                    className={`w-full flex justify-center ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <Link
                      href={`/lessons/${mission.number}`}
                      className="mission-card-tree relative z-10 w-full max-w-xs rounded-2xl p-6 text-center"
                      style={{
                        background: "#0f1930",
                        border: "1px solid rgba(204, 151, 255, 0.15)",
                      }}
                    >
                      <div className="mb-3" style={{ fontSize: "3rem", lineHeight: 1 }}>{icon}</div>
                      <p
                        className="uppercase tracking-widest text-xs mb-1.5"
                        style={{ color: "#a3aac4", letterSpacing: "0.15em" }}
                      >
                        Mission {numStr}
                      </p>
                      <h3
                        className="font-bold text-base mb-2 leading-snug"
                        style={{
                          fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
                          color: "#dee5ff",
                        }}
                      >
                        {mission.title}
                      </h3>
                      <p
                        className="text-sm mb-4"
                        style={{
                          color: "#a3aac4",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {mission.description}
                      </p>
                      <div
                        className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                        style={{ background: "rgba(107,255,143,0.12)", color: "#6bff8f" }}
                      >
                        +{mission.xp} XP
                      </div>
                      <p className="text-xs font-medium" style={{ color: "#cc97ff" }}>
                        ENTER MISSION →
                      </p>
                    </Link>
                  </div>

                  {/* Diamond connector node between cards */}
                  {i < missions.length - 1 && (
                    <div
                      className="relative z-10 my-5 rotate-45 rounded-sm"
                      style={{ width: "12px", height: "12px", background: "rgba(204,151,255,0.55)" }}
                    />
                  )}

                </div>
              );
            })}
          </div>
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
