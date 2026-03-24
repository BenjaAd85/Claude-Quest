import Link from "next/link";

export default function Home() {
  const lessons = [
    {
      number: 1,
      title: "What is Claude Code?",
      description: "Learn what Claude Code is, what GitHub and Vercel do, and how they work together.",
      status: "available",
    },
    {
      number: 2,
      title: "Your First Build",
      description: "Choose what to build, install everything, and get your first app live on the internet.",
      status: "available",
    },
    {
      number: 3,
      title: "When Things Break",
      description: "Learn how to read errors, get unstuck, and never lose your progress.",
      status: "available",
    },
    {
      number: 4,
      title: "Reading and Editing Files",
      description: "Learn how Claude Code reads your project and makes precise changes across multiple files.",
      status: "available",
    },
    {
      number: 5,
      title: "Running Commands",
      description: "Use Claude Code to run terminal commands on your behalf without typing them yourself.",
      status: "available",
    },
    {
      number: 6,
      title: "Debugging with Claude",
      description: "Walk through a broken app and fix it together with Claude Code step by step.",
      status: "available",
    },
    {
      number: 7,
      title: "How to Write Better Prompts",
      description: "Small changes to how you describe things lead to dramatically better results.",
      status: "available",
    },
    {
      number: 8,
      title: "How to Plan Bigger Projects",
      description: "How to structure a real project so Claude Code builds exactly what you want.",
      status: "coming-soon",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="border-b border-orange-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚔️</span>
            <span className="font-bold text-xl text-orange-600">Claude Quest</span>
          </div>
          <span className="text-sm text-zinc-500">Beginner&apos;s Guide to Claude Code</span>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Interactive Learning
        </div>
        <h1 className="text-5xl font-bold text-zinc-900 mb-6 leading-tight">
          Master Claude Code,<br />one quest at a time.
        </h1>
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-10">
          Claude Quest is a hands-on learning platform for beginners. Complete short lessons, run real commands, and level up your AI-assisted coding skills.
        </p>
        <a
          href="#lessons"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg"
        >
          Start Learning →
        </a>
      </section>

      {/* Lessons */}
      <section id="lessons" className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-zinc-800 mb-8">Lessons</h2>
        <div className="flex flex-col gap-4">
          {lessons.map((lesson) => (
            <Link
              key={lesson.number}
              href={lesson.status === "available" ? `/lessons/${lesson.number}` : "#"}
              className={`flex items-start gap-5 p-6 rounded-2xl border transition-shadow ${
                lesson.status === "available"
                  ? "bg-white border-orange-200 hover:shadow-md cursor-pointer"
                  : "bg-zinc-50 border-zinc-200 opacity-60 cursor-not-allowed pointer-events-none"
              }`}
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  lesson.status === "available"
                    ? "bg-orange-500 text-white"
                    : "bg-zinc-300 text-zinc-500"
                }`}
              >
                {lesson.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-zinc-800">{lesson.title}</h3>
                  {lesson.status === "coming-soon" && (
                    <span className="text-xs bg-zinc-200 text-zinc-500 px-2 py-0.5 rounded-full">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="text-zinc-500 text-sm">{lesson.description}</p>
              </div>
              {lesson.status === "available" && (
                <span className="text-orange-400 text-xl self-center">→</span>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
