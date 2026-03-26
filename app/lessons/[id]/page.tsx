"use client";

import React from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { notFound, useParams } from "next/navigation";
import Lesson1SetupSection from "./Lesson1SetupSection";
import Lesson2Section from "./Lesson2Section";
import Lesson3Section from "./Lesson3Section";
import Lesson4Section from "./Lesson4Section";
import Lesson5Section from "./Lesson5Section";
import Lesson6Section from "./Lesson6Section";
import Lesson7Section from "./Lesson7Section";
import Lesson8Section from "./Lesson8Section";

const lessons: Record<string, { title: string; description: string; content: string }> = {
  "1": {
    title: "What Is Claude Code?",
    description: "Claude Code is an AI you talk to in plain English, and it builds real software for you.",
    content: "",
  },
  "2": {
    title: "Your First Build — From Zero to Live on the Internet",
    description: "By the end of this lesson your app will be live at a real URL.",
    content: "",
  },
  "3": {
    title: "When Things Break (And They Will)",
    description: "Errors are not failure. They are part of the process. Every developer hits errors. The difference is knowing what to do next.",
    content: "",
  },
  "4": {
    title: "Reading and Editing Files",
    description: "Before you change anything, understand what you have.",
    content: "",
  },
  "5": {
    title: "Running Commands",
    description: "You never have to memorise a terminal command again.",
    content: "",
  },
  "6": {
    title: "Debugging with Claude",
    description: "The difference between a quick fix and a real fix is understanding why it broke.",
    content: "",
  },
  "7": {
    title: "How to Write Better Prompts",
    description: "Small changes to how you describe things lead to dramatically better results.",
    content: "",
  },
  "8": {
    title: "How to Plan Bigger Projects",
    description: "The secret to building something real is deciding what you are building before you start.",
    content: "",
  },
};

/* ─── Illustrated Cards ─────────────────────────────────────── */

function TerminalIllustration() {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono">
      {/* title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-zinc-500 text-[10px]">Terminal</span>
      </div>
      {/* terminal body */}
      <div className="p-4 space-y-2">
        <div className="flex gap-2">
          <span className="text-orange-400">$</span>
          <span className="text-zinc-300">claude</span>
        </div>
        <div className="flex gap-2 mt-1">
          <span className="text-zinc-500">›</span>
          <span className="text-white">Build me a landing page</span>
        </div>
        <div className="pt-1 space-y-1">
          <div className="text-green-400">✓ Creating files...</div>
          <div className="text-zinc-400 pl-2">index.html</div>
          <div className="text-zinc-400 pl-2">styles.css</div>
          <div className="text-green-400">✓ Done</div>
        </div>
      </div>
    </div>
  );
}

function GitHubIllustration() {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden text-xs font-mono">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 border-b border-zinc-200">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <div className="ml-2 flex-1 bg-white border border-zinc-300 rounded px-2 py-0.5 text-[10px] text-zinc-500">
          github.com/you/claude-quest
        </div>
      </div>
      {/* repo body */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span className="font-sans font-semibold text-zinc-800 text-[11px]">you / claude-quest</span>
        </div>
        <div className="border border-zinc-200 rounded divide-y divide-zinc-100">
          {["README.md", "index.js", "styles.css", "package.json"].map((file) => (
            <div key={file} className="flex items-center gap-2 px-3 py-1.5">
              <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 2h6l4 4v8a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z"/>
              </svg>
              <span className="font-sans text-[11px] text-zinc-700">{file}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VercelIllustration() {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden text-xs">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 border-b border-zinc-200">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <div className="ml-2 flex-1 bg-white border border-zinc-300 rounded px-2 py-0.5 text-[10px] text-zinc-500 flex items-center gap-1">
          <svg className="w-2.5 h-2.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          claude-quest.vercel.app
        </div>
      </div>
      {/* vercel body */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-sans font-semibold text-zinc-800 text-[11px]">claude-quest</span>
          <span className="font-sans text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">● Deployed</span>
        </div>
        <div className="border border-zinc-100 rounded bg-zinc-50 p-3 space-y-1.5">
          <div className="h-2 bg-orange-200 rounded w-3/4" />
          <div className="h-2 bg-zinc-200 rounded w-full" />
          <div className="h-2 bg-zinc-200 rounded w-5/6" />
          <div className="h-6 bg-orange-400 rounded w-24 mt-2" />
        </div>
        <div className="font-sans text-[10px] text-zinc-400">Last deployed just now</div>
      </div>
    </div>
  );
}

/* ─── Lesson 1 Custom Content ────────────────────────────────── */

function Lesson1Content() {
  return (
    <div className="space-y-12">

      {/* One sentence version */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
        <p className="text-orange-800 text-lg font-medium leading-relaxed">
          Claude Code is an AI you talk to in plain English, and it builds real software for you.
        </p>
      </div>

      {/* How it's different */}
      <section>
        <h2 className="text-xl font-bold text-zinc-900 mb-3">How it&apos;s different from regular Claude</h2>
        <p className="text-zinc-600 leading-relaxed">
          Regular Claude gives you text. Claude Code actually <em>does things</em> — it creates files, writes code, and builds working apps on your computer. Same brain, way more hands.
        </p>
      </section>

      {/* Before You Start */}
      <section>
        <h2 className="text-xl font-bold text-zinc-900 mb-2">Before You Start: Get Set Up</h2>
        <p className="text-zinc-500 text-sm mb-6">Four quick things to do before Mission 2.</p>

        <Lesson1SetupSection />

        <p className="mt-6 text-sm font-bold text-zinc-900">Done? Let&apos;s go.</p>
      </section>

      {/* What you'll use it with */}
      <section>
        <h2 className="text-xl font-bold text-zinc-900 mb-6">What you&apos;ll use it with</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Claude Code */}
          <div className="flex flex-col gap-4">
            <TerminalIllustration />
            <div>
              <div className="font-semibold text-zinc-900 text-sm mb-1">Claude Code</div>
              <p className="text-zinc-500 text-sm leading-relaxed">The AI that builds your stuff. You type, it creates.</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex flex-col gap-4">
            <GitHubIllustration />
            <div>
              <div className="font-semibold text-zinc-900 text-sm mb-1">GitHub</div>
              <p className="text-zinc-500 text-sm leading-relaxed">Cloud storage for your project files. Like Dropbox, but for code. Keeps everything safe and lets you roll back if something breaks.</p>
            </div>
          </div>

          {/* Vercel */}
          <div className="flex flex-col gap-4">
            <VercelIllustration />
            <div>
              <div className="font-semibold text-zinc-900 text-sm mb-1">Vercel</div>
              <p className="text-zinc-500 text-sm leading-relaxed">Puts your app on the internet. Gives it a real URL so anyone can use it.</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-zinc-500 bg-zinc-50 border border-zinc-100 rounded-xl p-4 leading-relaxed">
          <span className="font-medium text-zinc-700">You just experienced all three.</span> Claude Code built this app. GitHub stored the files. Vercel deployed it. That&apos;s the whole stack.
        </p>
      </section>

      {/* The Full Stack diagram */}
      <section>
        <h2 className="text-xl font-bold text-zinc-900 mb-5">The Full Stack</h2>
        <div className="flex items-center justify-between bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-5 gap-2 flex-wrap">
          {/* Claude Code */}
          <div className="flex flex-col items-center gap-1.5 text-center">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center">
              <span className="text-xl">⌨️</span>
            </div>
            <span className="text-xs font-semibold text-zinc-700">Claude Code</span>
            <span className="text-[10px] text-zinc-400">builds it</span>
          </div>

          <svg className="w-6 h-4 text-zinc-300 shrink-0" fill="none" viewBox="0 0 24 16">
            <path d="M0 8h22M16 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* GitHub */}
          <div className="flex flex-col items-center gap-1.5 text-center">
            <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </div>
            <span className="text-xs font-semibold text-zinc-700">GitHub</span>
            <span className="text-[10px] text-zinc-400">stores it</span>
          </div>

          <svg className="w-6 h-4 text-zinc-300 shrink-0" fill="none" viewBox="0 0 24 16">
            <path d="M0 8h22M16 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Vercel */}
          <div className="flex flex-col items-center gap-1.5 text-center">
            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 116 100" fill="currentColor">
                <path d="M57.5 0L115 100H0L57.5 0z"/>
              </svg>
            </div>
            <span className="text-xs font-semibold text-zinc-700">Vercel</span>
            <span className="text-[10px] text-zinc-400">deploys it</span>
          </div>

          <svg className="w-6 h-4 text-zinc-300 shrink-0" fill="none" viewBox="0 0 24 16">
            <path d="M0 8h22M16 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Live */}
          <div className="flex flex-col items-center gap-1.5 text-center">
            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
              <span className="text-xl">🌍</span>
            </div>
            <span className="text-xs font-semibold text-zinc-700">Live</span>
            <span className="text-[10px] text-zinc-400">on the internet</span>
          </div>
        </div>
      </section>

      {/* What you'll actually do */}
      <section>
        <h2 className="text-xl font-bold text-zinc-900 mb-4">What you&apos;ll actually do with Claude Code</h2>
        <div className="space-y-3">
          {[
            { step: "1", text: "Type what you want in plain English" },
            { step: "2", text: "Claude Code builds it" },
            { step: "3", text: "You review it, test it, tweak it" },
            { step: "4", text: "Repeat" },
          ].map(({ step, text }) => (
            <div key={step} className="flex items-center gap-4">
              <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center shrink-0">
                {step}
              </div>
              <span className="text-zinc-700">{text}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-zinc-400 italic">No typing code. No technical knowledge required. Just clear instructions.</p>
      </section>

      {/* Next up */}
      <div className="bg-orange-500 rounded-2xl p-6 text-white">
        <p className="text-sm font-medium text-orange-200 mb-1">Your first real task is next</p>
        <p className="text-lg font-semibold">In Mission 2 you&apos;ll open Claude Code, type your first prompt, and watch it build something live.</p>
      </div>

    </div>
  );
}
/* ─── Page ───────────────────────────────────────────────────── */

export default function LessonPage() {
  const params = useParams();
  const id = params.id as string;
  const lesson = lessons[id];

  if (!lesson) notFound();

  const lessonNumber = parseInt(id);
  const prevId = lessonNumber > 1 ? String(lessonNumber - 1) : null;
  const nextId = lessons[String(lessonNumber + 1)] ? String(lessonNumber + 1) : null;

  return (
    <div className="lesson-page min-h-screen" style={{ background: "#060e20", color: "#dee5ff" }}>

      {/* ── Nav ─────────────────────────────────────────────────── */}
      <NavBar />

      {/* ── Lesson Header ────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-8">
        <p
          className="uppercase text-sm mb-3"
          style={{ color: "#a3aac4", letterSpacing: "0.2em" }}
        >
          Mission {id.padStart(2, "0")}
        </p>
        <h1
          className="font-bold mb-3"
          style={{
            fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
            fontSize: "2.25rem",
            color: "#dee5ff",
            lineHeight: 1.2,
          }}
        >
          {lesson.title}
        </h1>
        <p className="mb-8" style={{ color: "#a3aac4", fontSize: "1.1rem", lineHeight: 1.6 }}>
          {lesson.description}
        </p>
        <div style={{ height: "1px", background: "linear-gradient(to right, rgba(204,151,255,0.5), transparent)" }} />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <main className="max-w-2xl mx-auto px-6 pb-20">
        {id === "1" ? (
          <Lesson1Content />
        ) : id === "2" ? (
          <Lesson2Section />
        ) : id === "3" ? (
          <Lesson3Section />
        ) : id === "4" ? (
          <Lesson4Section />
        ) : id === "5" ? (
          <Lesson5Section />
        ) : id === "6" ? (
          <Lesson6Section />
        ) : id === "7" ? (
          <Lesson7Section />
        ) : id === "8" ? (
          <Lesson8Section />
        ) : (
          <div>
            {lesson.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="leading-relaxed mb-6" style={{ color: "#a3aac4" }}>
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* ── Bottom Nav ───────────────────────────────────────── */}
        <div
          className="flex justify-between mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(204,151,255,0.2)" }}
        >
          {prevId ? (
            <Link href={`/lessons/${prevId}`} className="lesson-nav-btn">
              ← Mission {prevId}
            </Link>
          ) : (
            <span />
          )}
          {nextId ? (
            <Link href={`/lessons/${nextId}`} className="lesson-nav-btn">
              Mission {nextId} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </main>
    </div>
  );
}
