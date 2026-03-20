import Link from "next/link";
import { notFound } from "next/navigation";

const lessons: Record<string, { title: string; description: string; content: string }> = {
  "1": {
    title: "What is Claude Code?",
    description: "Learn what Claude Code is and how it can help you build software faster.",
    content: "Claude Code is an AI-powered coding assistant that lives in your terminal. You describe what you want in plain English, and Claude Code reads your files, writes code, runs commands, and helps you build software — all without leaving the command line.\n\nUnlike a chat interface, Claude Code works directly inside your project. It can open files, understand your codebase, make edits, and even run tests on your behalf.",
  },
  "2": {
    title: "Your First Prompt",
    description: "Ask Claude Code to create a file and see how it responds.",
    content: "The best way to get started with Claude Code is to just ask it to do something simple. Try asking it to create a new file, write a function, or explain a piece of code.\n\nFor example, you could type: \"Create a file called hello.txt with the message Hello, world!\" and Claude Code will do exactly that — no need to remember any commands.",
  },
};

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lesson = lessons[id];

  if (!lesson) notFound();

  const lessonNumber = parseInt(id);
  const prevId = lessonNumber > 1 ? String(lessonNumber - 1) : null;
  const nextId = lessons[String(lessonNumber + 1)] ? String(lessonNumber + 1) : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-orange-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl">⚔️</span>
            <span className="font-bold text-xl text-orange-600">Claude Quest</span>
          </Link>
          <span className="text-sm text-zinc-400">Lesson {id}</span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/" className="text-sm text-orange-500 hover:text-orange-600 mb-8 inline-block">
          ← Back to lessons
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
            {id}
          </div>
          <span className="text-sm text-zinc-400 font-medium uppercase tracking-wide">Lesson {id}</span>
        </div>

        <h1 className="text-4xl font-bold text-zinc-900 mb-4">{lesson.title}</h1>
        <p className="text-lg text-zinc-500 mb-10">{lesson.description}</p>

        <div className="prose prose-zinc max-w-none">
          {lesson.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-zinc-700 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-16 pt-8 border-t border-zinc-100">
          {prevId ? (
            <Link
              href={`/lessons/${prevId}`}
              className="text-sm text-orange-500 hover:text-orange-600 font-medium"
            >
              ← Lesson {prevId}
            </Link>
          ) : (
            <span />
          )}
          {nextId ? (
            <Link
              href={`/lessons/${nextId}`}
              className="text-sm text-orange-500 hover:text-orange-600 font-medium"
            >
              Lesson {nextId} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </main>
    </div>
  );
}
