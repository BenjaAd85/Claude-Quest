import React from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { notFound } from "next/navigation";
import CopyButton from "./CopyButton";
import Lesson1SetupSection from "./Lesson1SetupSection";

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

/* ─── Lesson 2 Illustrations ─────────────────────────────────── */

function NodeJSIllustration() {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden text-xs">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 border-b border-zinc-200">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <div className="ml-2 flex-1 bg-white border border-zinc-300 rounded px-2 py-0.5 text-[10px] text-zinc-500">nodejs.org</div>
      </div>
      <div className="p-5 font-sans">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">N</span>
          </div>
          <span className="font-bold text-zinc-800 text-sm">Node.js</span>
        </div>
        <div className="flex gap-3 items-start">
          <div className="flex-1 border-2 border-green-500 rounded-lg p-3 relative">
            <div className="text-[10px] text-green-700 font-semibold mb-1">Recommended For Most Users</div>
            <div className="text-sm font-bold text-zinc-900 mb-2">20.11.0 LTS</div>
            <div className="bg-green-500 text-white text-[10px] font-semibold px-3 py-1.5 rounded inline-block">
              Download Node.js (LTS)
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 pt-4">
            <div className="text-orange-500 font-bold text-base">←</div>
            <div className="text-[9px] text-orange-500 font-semibold text-center leading-tight">click<br/>this</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InstallConfirmIllustration() {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-zinc-500 text-[10px]">Terminal</span>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex gap-2">
          <span className="text-orange-400">$</span>
          <span className="text-zinc-300">sudo npm install -g @anthropic-ai/claude-code</span>
        </div>
        <div className="text-zinc-500">Password: <span className="tracking-widest">••••••••</span></div>
        <div className="pt-1 space-y-1">
          <div className="text-zinc-400">added 847 packages in 12s</div>
          <div className="text-green-400">✓ claude 2.1.80 installed</div>
        </div>
      </div>
    </div>
  );
}

function SplitScreenIllustration() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Terminal side */}
      <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="ml-1 text-zinc-500 text-[10px]">Terminal</span>
        </div>
        <div className="p-3 space-y-1.5">
          <div className="flex gap-2">
            <span className="text-orange-400">$</span>
            <span className="text-zinc-300">npm run dev</span>
          </div>
          <div className="text-zinc-500 text-[10px]">▲ Next.js 15</div>
          <div className="text-green-400 text-[10px]">✓ Ready on</div>
          <div className="text-zinc-400 text-[10px] pl-2">localhost:3000</div>
        </div>
      </div>
      {/* Browser side */}
      <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden text-xs font-sans">
        <div className="flex items-center gap-1 px-2 py-2 bg-zinc-100 border-b border-zinc-200">
          <span className="w-2 h-2 rounded-full bg-zinc-300" />
          <span className="w-2 h-2 rounded-full bg-zinc-300" />
          <span className="w-2 h-2 rounded-full bg-zinc-300" />
          <div className="ml-1 flex-1 bg-white border border-zinc-300 rounded px-1.5 py-0.5 text-[9px] text-zinc-500">localhost:3000</div>
        </div>
        <div className="p-3 space-y-2">
          <div className="h-2.5 bg-orange-400 rounded w-2/3" />
          <div className="h-1.5 bg-zinc-200 rounded w-full" />
          <div className="h-1.5 bg-zinc-200 rounded w-4/5" />
          <div className="h-5 bg-orange-500 rounded w-16 mt-2" />
        </div>
      </div>
    </div>
  );
}

function GitHubNewRepoIllustration() {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden text-xs font-sans">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 border-b border-zinc-200">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <div className="ml-2 flex-1 bg-white border border-zinc-300 rounded px-2 py-0.5 text-[10px] text-zinc-500">github.com/new</div>
      </div>
      <div className="p-4 space-y-3">
        <div className="text-sm font-semibold text-zinc-800">Create a new repository</div>
        <div>
          <div className="text-[10px] text-zinc-500 mb-1">Repository name</div>
          <div className="border border-blue-400 rounded px-2 py-1 text-[11px] text-zinc-800 bg-blue-50">my-first-app</div>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
            <span className="text-[11px] text-zinc-700">Public</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-zinc-300" />
            <span className="text-[11px] text-zinc-400">Private</span>
          </div>
        </div>
        <div className="bg-green-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded inline-block">
          Create repository
        </div>
      </div>
    </div>
  );
}

function GitHubTokenIllustration() {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden text-xs font-sans">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 border-b border-zinc-200">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <div className="ml-2 flex-1 bg-white border border-zinc-300 rounded px-2 py-0.5 text-[10px] text-zinc-500">github.com/settings/tokens</div>
      </div>
      <div className="p-4 space-y-3">
        <div className="text-sm font-semibold text-zinc-800">New personal access token</div>
        <div className="space-y-1.5">
          <div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-wide">Select scopes</div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-blue-500 flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">✓</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-800">repo</span>
            <span className="text-[10px] text-zinc-400">Full control of repositories</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded border border-zinc-300" />
            <span className="text-[11px] font-mono text-zinc-400">workflow</span>
          </div>
        </div>
        <div className="border border-zinc-200 rounded overflow-hidden">
          <div className="px-3 py-2 bg-zinc-50 font-mono text-[11px] text-zinc-400 blur-[2px] select-none">
            ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
          <div className="bg-red-500 text-white text-[10px] font-semibold px-3 py-1.5">
            ⚠ Only shown once — copy now
          </div>
        </div>
      </div>
    </div>
  );
}

function VercelImportIllustration() {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden text-xs font-sans">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 border-b border-zinc-200">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <div className="ml-2 flex-1 bg-white border border-zinc-300 rounded px-2 py-0.5 text-[10px] text-zinc-500">vercel.com/new</div>
      </div>
      <div className="p-4 space-y-3">
        <div className="text-sm font-semibold text-zinc-800">Import Git Repository</div>
        <div className="border border-zinc-200 rounded-lg divide-y divide-zinc-100">
          {["my-first-app", "other-project", "old-repo"].map((repo, i) => (
            <div key={repo} className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3 text-zinc-500" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9z"/>
                </svg>
                <span className={`text-[11px] ${i === 0 ? "text-zinc-800 font-medium" : "text-zinc-400"}`}>{repo}</span>
              </div>
              <div className={`text-[10px] font-semibold px-2.5 py-1 rounded ${i === 0 ? "bg-black text-white" : "bg-zinc-100 text-zinc-400"}`}>
                Import
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VercelSuccessIllustration() {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden text-xs font-sans">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 border-b border-zinc-200">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <div className="ml-2 flex-1 bg-white border border-zinc-300 rounded px-2 py-0.5 text-[10px] text-zinc-500 flex items-center gap-1">
          <svg className="w-2.5 h-2.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          my-first-app.vercel.app
        </div>
      </div>
      <div className="p-4 text-center space-y-2">
        <div className="text-2xl">🎉</div>
        <div className="font-bold text-zinc-800 text-sm">Congratulations!</div>
        <div className="text-[11px] text-zinc-500">Your project has been deployed.</div>
        <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-[10px] font-semibold px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          Deployed
        </div>
        <div className="mt-2 border border-zinc-200 rounded px-3 py-1.5 text-[11px] font-mono text-orange-500">
          my-first-app.vercel.app
        </div>
      </div>
    </div>
  );
}

/* ─── Lesson 2 Custom Content ────────────────────────────────── */

function Lesson2Content() {
  return (
    <div className="space-y-14">

      {/* Intro */}
      <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
        <p className="text-orange-800 text-lg font-medium leading-relaxed">
          By the end of this lesson your app will be live at a real URL.
        </p>
      </div>

      {/* ── PART 0 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 0: Choose What to Build</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
          <h3 className="text-base font-bold text-zinc-900 mb-3">Before you install anything, decide what you&apos;re building.</h3>
          <p className="text-zinc-600 text-sm leading-relaxed mb-5">
            This makes every step feel real. Think of one small daily annoyance. Write it in one sentence. Some ideas to get you started:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { icon: "🧳", title: "A packing list generator", desc: "enter your destination and it tells you what to bring" },
              { icon: "✅", title: "A habit tracker", desc: "tick off daily habits and see your streak" },
              { icon: "📝", title: "A meeting notes formatter", desc: "paste messy notes and get them cleaned up" },
              { icon: "💰", title: "A price comparison tool", desc: "track prices of things you want to buy" },
              { icon: "🧾", title: "A simple invoice generator", desc: "fill in your details and download a PDF" },
            ].map(({ icon, title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="text-base shrink-0 mt-0.5">{icon}</span>
                <span className="text-sm text-zinc-700">
                  <span className="font-semibold">{title}</span>
                  <span className="text-zinc-500"> — {desc}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm font-bold text-zinc-900">Got your idea? Let&apos;s build it.</p>
        </div>
      </section>

      {/* ── PART 1 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 1: Install Everything</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 1 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 1 — Install Node.js</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Node.js is required to run Claude Code. Go to nodejs.org and click the green LTS button. Open the downloaded file and click Continue until it&apos;s done.
            </p>
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer"
              className="inline-block text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-lg hover:bg-zinc-700 transition-colors mb-5">
              nodejs.org →
            </a>
            <NodeJSIllustration />
            <p className="text-zinc-600 leading-relaxed mt-4 mb-3">To verify it worked, open Terminal and type:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">node --version</code>
              <CopyButton text="node --version" />
            </div>
            <p className="text-zinc-500 text-sm">You should see something like <code className="text-zinc-700 bg-zinc-100 px-1.5 py-0.5 rounded text-xs">v24.0.0</code></p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 2 — Install Claude Code</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">In Terminal, paste:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">sudo npm install -g @anthropic-ai/claude-code</code>
              <CopyButton text="sudo npm install -g @anthropic-ai/claude-code" />
            </div>
            <p className="text-zinc-500 text-sm mb-5">It will ask for your Mac password. Type it and hit enter — you won&apos;t see the characters appear, that&apos;s normal.</p>
            <InstallConfirmIllustration />
            <p className="text-zinc-600 leading-relaxed mt-4 mb-3">To verify:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">claude --version</code>
              <CopyButton text="claude --version" />
            </div>
            <p className="text-zinc-500 text-sm">You should see something like <code className="text-zinc-700 bg-zinc-100 px-1.5 py-0.5 rounded text-xs">2.1.80 (Claude Code)</code></p>
          </div>
        </div>
      </section>

      {/* ── PART 2 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 2: Build Your First Project</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 3 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 3 — Create a project folder</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">In Terminal, paste:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">mkdir ~/my-first-app && cd ~/my-first-app</code>
              <CopyButton text="mkdir ~/my-first-app && cd ~/my-first-app" />
            </div>
            <p className="text-zinc-500 text-sm">This creates a folder called <code className="text-zinc-700 bg-zinc-100 px-1.5 py-0.5 rounded text-xs">my-first-app</code> and opens it.</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 4 — Launch Claude Code</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Type:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">claude</code>
              <CopyButton text="claude" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">You&apos;ll see the Claude Code prompt appear.</p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">5</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 5 — Describe what you want</h3>
            <p className="text-zinc-600 leading-relaxed mb-5">Be specific. Here&apos;s the difference it makes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                <p className="text-red-500 text-xs font-semibold mb-3">❌ Weak prompt</p>
                <p className="text-red-700 text-sm font-mono leading-relaxed">&ldquo;Make me an app&rdquo;</p>
              </div>
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="text-green-600 text-xs font-semibold mb-3">✅ Strong prompt</p>
                <p className="text-green-800 text-sm font-mono leading-relaxed">&ldquo;Build me a simple packing list app as a Next.js web app. I enter my destination and trip length and it gives me a checklist of what to pack.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">6</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 6 — View your app locally</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Open a new Terminal window and run:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-5">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">npm run dev</code>
              <CopyButton text="npm run dev" />
            </div>
            <SplitScreenIllustration />
            <p className="text-zinc-600 text-sm mt-4">
              Then open your browser and go to{" "}
              <a href="http://localhost:3000" className="text-orange-500 hover:text-orange-600 font-mono text-xs">http://localhost:3000</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── PART 3 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 3: Put It on GitHub</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 7 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">7</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 7 — Create a GitHub account</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Go to GitHub and sign up for a free account.</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="inline-block text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-lg hover:bg-zinc-700 transition-colors">
              github.com →
            </a>
          </div>
        </div>

        {/* Step 8 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">8</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 8 — Create a new repository</h3>
            <p className="text-zinc-600 leading-relaxed mb-5">
              Click <span className="font-medium text-zinc-800">New repository</span>. Fill in the repository name, choose Public or Private, click Create repository.
            </p>
            <GitHubNewRepoIllustration />
          </div>
        </div>

        {/* Step 9 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">9</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 9 — Create a GitHub access token</h3>
            <a href="https://github.com/settings/tokens/new" target="_blank" rel="noopener noreferrer"
              className="inline-block text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-lg hover:bg-zinc-700 transition-colors mb-5">
              github.com/settings/tokens/new →
            </a>
            <div className="text-zinc-600 text-sm leading-relaxed mb-5 space-y-1">
              <p>Fill in: <span className="font-medium text-zinc-800">Note:</span> my-first-app</p>
              <p><span className="font-medium text-zinc-800">Expiration:</span> 90 days</p>
              <p>Tick the <code className="bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-xs">repo</code> checkbox. Click <span className="font-medium text-zinc-800">Generate token</span>.</p>
            </div>
            <GitHubTokenIllustration />
            {/* Warning box */}
            <div className="mt-4 flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
              <span className="text-yellow-500 text-base shrink-0">⚠️</span>
              <p className="text-yellow-800 text-sm font-medium">
                Copy your token immediately — GitHub only shows it once. Paste it into Notes.
              </p>
            </div>
          </div>
        </div>

        {/* Step 10 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">10</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 10 — Push your project to GitHub</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Run these one at a time:</p>
            {[
              "git init",
              "git add .",
              'git commit -m "first commit"',
              "git branch -M main",
            ].map((cmd) => (
              <div key={cmd} className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
                <code className="text-green-400 text-sm font-mono flex-1 select-all">{cmd}</code>
                <CopyButton text={cmd} />
              </div>
            ))}
            <p className="text-zinc-600 text-sm mt-5 mb-3">
              Then replace <code className="bg-zinc-100 text-zinc-700 px-1 rounded text-xs">YOUR_USERNAME</code>,{" "}
              <code className="bg-zinc-100 text-zinc-700 px-1 rounded text-xs">YOUR_TOKEN</code> and{" "}
              <code className="bg-zinc-100 text-zinc-700 px-1 rounded text-xs">YOUR_REPO_NAME</code>:
            </p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all">
                git remote add origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
              </code>
              <CopyButton text="git remote add origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/YOUR_REPO_NAME.git" />
            </div>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">git push -u origin main</code>
              <CopyButton text="git push -u origin main" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 4 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 4: Make It Live</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 11 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">11</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 11 — Create a Vercel account</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Go to Vercel and click Sign Up. Choose <span className="font-medium text-zinc-800">Continue with GitHub</span>.
            </p>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
              className="inline-block text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-lg hover:bg-zinc-700 transition-colors">
              vercel.com →
            </a>
          </div>
        </div>

        {/* Step 12 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">12</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 12 — Import your project</h3>
            <p className="text-zinc-600 leading-relaxed mb-5">
              Click <span className="font-medium text-zinc-800">Add New Project</span> then Import. Find your repository and click Import. Leave settings as default and click Deploy.
            </p>
            <VercelImportIllustration />
          </div>
        </div>

        {/* Step 13 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">13</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 13 — You&apos;re live</h3>
            <p className="text-zinc-600 leading-relaxed mb-5">
              Vercel gives you a real URL like{" "}
              <span className="font-mono text-sm text-zinc-800 bg-zinc-100 px-1.5 py-0.5 rounded">your-app.vercel.app</span>.
              {" "}Open it. Share it.
            </p>
            <VercelSuccessIllustration />
          </div>
        </div>
      </section>

      {/* ── PART 5 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 5: Making Updates</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 14 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">14</div>
          </div>
          <div className="flex-1 pb-2">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 14 — How to update your live app</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Tell Claude Code what to change. When happy, type:
            </p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Commit and push all changes to GitHub</code>
              <CopyButton text="Commit and push all changes to GitHub" />
            </div>
            <p className="text-zinc-500 text-sm">Vercel redeploys automatically.</p>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <div className="bg-orange-500 rounded-2xl p-6 text-white">
        <p className="text-sm font-semibold text-orange-200 uppercase tracking-wide mb-2">Key Takeaway</p>
        <p className="text-lg font-semibold leading-relaxed">
          Describe it → Claude Code builds it → GitHub stores it → Vercel makes it live. This is the loop you&apos;ll use for every project.
        </p>
      </div>

      {/* Next lesson button */}
      <div className="flex justify-end">
        <Link
          href="/lessons/3"
          className="inline-flex items-center gap-2 bg-zinc-900 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-zinc-700 transition-colors"
        >
          Next: Lesson 3 →
        </Link>
      </div>

    </div>
  );
}

/* ─── Lesson 3 Illustrations ─────────────────────────────────── */

function ErrorSplitIllustration() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Terminal with error */}
      <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="ml-1 text-zinc-500 text-[10px]">Terminal</span>
        </div>
        <div className="p-3 space-y-1.5">
          <div className="flex gap-1.5">
            <span className="text-orange-400">$</span>
            <span className="text-zinc-300">npm run dev</span>
          </div>
          <div className="text-red-400 leading-relaxed text-[10px]">
            Error: Cannot find module<br />
            &apos;./components/Header&apos;<br />
            at Function.Module.<br />
            _resolveFilename
          </div>
        </div>
      </div>
      {/* Claude Code chat */}
      <div className="bg-zinc-950 rounded-lg overflow-hidden text-xs font-sans">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="ml-1 text-zinc-500 text-[10px]">Claude Code</span>
        </div>
        <div className="p-3 space-y-2.5">
          <div className="bg-zinc-800 rounded-lg px-2.5 py-2 text-[10px] text-zinc-300 leading-relaxed">
            I got this error. Can you explain and fix it?
          </div>
          <div className="bg-zinc-900 border border-green-900 rounded-lg px-2.5 py-2 text-[10px] text-green-400 leading-relaxed">
            Found the issue. The Header component file is missing. Creating it now...
          </div>
        </div>
      </div>
    </div>
  );
}

function CtrlCIllustration() {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-zinc-500 text-[10px]">Terminal</span>
      </div>
      <div className="p-4 space-y-1.5">
        <div className="text-red-400 text-[10px] leading-relaxed">
          TypeError: Cannot read properties of undefined<br />
          at render (/app/page.tsx:42:18)<br />
          at processChild (/node_modules/react-dom/...)<br />
          at resolve (/node_modules/react-dom/...)
        </div>
        <div className="flex gap-2 pt-1">
          <span className="text-zinc-300">^C</span>
        </div>
        <div className="text-zinc-500 text-[10px]">Session stopped.</div>
        <div className="flex gap-2 pt-1">
          <span className="text-orange-400">$</span>
          <span className="text-zinc-400 animate-pulse">|</span>
        </div>
      </div>
    </div>
  );
}

function ClearSessionIllustration() {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex gap-2">
          <span className="text-zinc-500">›</span>
          <span className="text-white">/clear</span>
        </div>
        <div className="border-t border-zinc-700 pt-2 space-y-1">
          <div className="text-green-400">✓ Conversation cleared. Starting fresh.</div>
          <div className="flex gap-2 pt-1">
            <span className="text-zinc-500">›</span>
            <span className="text-zinc-400 animate-pulse">|</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServerDownIllustration() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Browser error */}
      <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden text-xs font-sans">
        <div className="flex items-center gap-1 px-2 py-2 bg-zinc-100 border-b border-zinc-200">
          <span className="w-2 h-2 rounded-full bg-zinc-300" />
          <span className="w-2 h-2 rounded-full bg-zinc-300" />
          <span className="w-2 h-2 rounded-full bg-zinc-300" />
          <div className="ml-1 flex-1 bg-white border border-zinc-300 rounded px-1.5 py-0.5 text-[9px] text-zinc-500">localhost:3000</div>
        </div>
        <div className="p-3 space-y-1.5 text-center">
          <div className="text-2xl">⚠️</div>
          <div className="font-semibold text-zinc-800 text-[11px]">This site can&apos;t be reached</div>
          <div className="text-[9px] text-zinc-500 leading-relaxed">localhost refused to connect.</div>
          <div className="text-[9px] text-red-500 font-mono">ERR_CONNECTION_REFUSED</div>
        </div>
      </div>
      {/* Terminal fix */}
      <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono">
        <div className="flex items-center gap-1 px-2 py-2 bg-zinc-800 border-b border-zinc-700">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="ml-1 text-zinc-500 text-[10px]">Terminal</span>
        </div>
        <div className="p-3 space-y-1.5">
          <div className="flex gap-1.5">
            <span className="text-orange-400">$</span>
            <span className="text-zinc-300">npm run dev</span>
          </div>
          <div className="text-zinc-500 text-[10px]">▲ Next.js 15</div>
          <div className="text-green-400 text-[10px]">✓ Ready on</div>
          <div className="text-green-400 text-[10px] pl-2">localhost:3000</div>
        </div>
      </div>
    </div>
  );
}

function GitHubCommitBadgeIllustration() {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden text-xs font-sans">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 border-b border-zinc-200">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        <div className="ml-2 flex-1 bg-white border border-zinc-300 rounded px-2 py-0.5 text-[10px] text-zinc-500">github.com/you/my-first-app</div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span className="font-semibold text-zinc-800 text-[11px]">you / my-first-app</span>
        </div>
        <div className="flex items-center justify-between bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
              <circle cx="8" cy="8" r="3"/>
              <path d="M8 1v4M8 11v4M1 8h4M11 8h4"/>
            </svg>
            <span className="font-mono text-[11px] text-zinc-700">saving progress before reset</span>
          </div>
          <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">committed 2 minutes ago</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Lesson 3 Custom Content ─────────────────────────────────── */

function Lesson3Content() {
  return (
    <div className="space-y-14">

      {/* ── PART 1 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 1: Do Not Panic</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 1 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 1 - Read the error out loud</h3>
            <p className="text-zinc-600 leading-relaxed">
              Before doing anything, read the error message. You do not need to understand it. Just look for any words you recognise - a file name, a step you just did, a tool you used. Errors almost always tell you exactly what went wrong.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 2 - Do not close Terminal</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              When something breaks, the instinct is to close everything and start again. Do not. The error message in Terminal is your best clue. Keep it open.
            </p>
            <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
              <span className="text-yellow-500 text-base shrink-0">⚠️</span>
              <p className="text-yellow-800 text-sm font-medium">
                Do not close Terminal when you see an error. The message is your best clue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 2 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 2: Let Claude Code Fix It</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 3 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 3 - Paste the error into Claude Code</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Copy the full error message from Terminal and paste it into Claude Code:
            </p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-5">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all">
                I got this error. Explain what went wrong in simple terms and fix it:{"\n"}[paste your error here]
              </code>
              <CopyButton text={"I got this error. Explain what went wrong in simple terms and fix it:\n[paste your error here]"} />
            </div>
            <ErrorSplitIllustration />
            <p className="text-zinc-500 text-sm mt-4">Most errors are solved in one step.</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 4 - If you do not understand the fix, ask</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Type:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Can you explain what you just did and why in simple terms?</code>
              <CopyButton text="Can you explain what you just did and why in simple terms?" />
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">5</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 5 - Test it again</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Open your browser and go to:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">http://localhost:3000</code>
              <CopyButton text="http://localhost:3000" />
            </div>
            <p className="text-zinc-500 text-sm">If the app loads, the error is fixed. If you see a new error, repeat Step 3.</p>
          </div>
        </div>
      </section>

      {/* ── PART 3 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 3: When Claude Code Goes in Circles</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 6 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">6</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 6 - Stop Claude Code</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Press <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Ctrl</kbd> and <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">C</kbd> at the same time. This stops whatever Claude Code is doing.
            </p>
            <CtrlCIllustration />
          </div>
        </div>

        {/* Step 7 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">7</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 7 - Start a fresh session</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Type:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-5">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">/clear</code>
              <CopyButton text="/clear" />
            </div>
            <ClearSessionIllustration />
            <p className="text-zinc-500 text-sm mt-4">This clears the conversation so Claude Code starts fresh.</p>
          </div>
        </div>

        {/* Step 8 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">8</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 8 - Describe the problem from scratch</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Type:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all whitespace-pre-line">
                {"I was trying to [describe what you wanted].\nIt was working before but now [describe what is broken].\nHere is the error: [paste error]\nCan you fix this step by step?"}
              </code>
              <CopyButton text={"I was trying to [describe what you wanted].\nIt was working before but now [describe what is broken].\nHere is the error: [paste error]\nCan you fix this step by step?"} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 4 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 4: When Your App Will Not Start</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 9 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">9</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 9 - Check if your local server is running</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              If your browser shows &ldquo;This site can not be reached&rdquo; at localhost:3000, your server is not running. Open Terminal and type:
            </p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">cd ~/my-first-app</code>
              <CopyButton text="cd ~/my-first-app" />
            </div>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-5">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">npm run dev</code>
              <CopyButton text="npm run dev" />
            </div>
            <ServerDownIllustration />
            <p className="text-zinc-500 text-sm mt-4">Leave that Terminal window open and refresh your browser.</p>
          </div>
        </div>

        {/* Step 10 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">10</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 10 - If npm run dev shows an error</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Paste it into Claude Code:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all">When I run npm run dev I get this error. Please fix it: [paste error]</code>
              <CopyButton text="When I run npm run dev I get this error. Please fix it: [paste error]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 5 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 5: The Nuclear Option</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 11 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">11</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 11 - Save your work first</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Tell Claude Code:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-5">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all">Commit and push all current changes to GitHub even if things are broken</code>
              <CopyButton text="Commit and push all current changes to GitHub even if things are broken" />
            </div>
            <GitHubCommitBadgeIllustration />
          </div>
        </div>

        {/* Step 12 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">12</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 12 - Start a completely new Claude Code session</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Close Terminal. Reopen it and type:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">cd ~/my-first-app</code>
              <CopyButton text="cd ~/my-first-app" />
            </div>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">claude</code>
              <CopyButton text="claude" />
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">Then tell Claude Code:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all">I am building [describe your app]. Something broke. Look at the current state of the project and tell me what is wrong and how to fix it.</code>
              <CopyButton text="I am building [describe your app]. Something broke. Look at the current state of the project and tell me what is wrong and how to fix it." />
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 6 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 6: Save Your Progress</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 13 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">13</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 13 - Push your fixes to GitHub</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">In Claude Code type:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Commit and push all changes to GitHub</code>
              <CopyButton text="Commit and push all changes to GitHub" />
            </div>
            <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
              <span className="text-green-500 text-base shrink-0">✓</span>
              <p className="text-green-800 text-sm font-medium">
                Always push to GitHub after fixing a bug. Never lose a working state.
              </p>
            </div>
          </div>
        </div>

        {/* Step 14 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">14</div>
          </div>
          <div className="flex-1 pb-2">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 14 - Verify your live site</h3>
            <p className="text-zinc-600 leading-relaxed">
              Go to your Vercel URL, for example{" "}
              <span className="font-mono text-sm text-zinc-800 bg-zinc-100 px-1.5 py-0.5 rounded">your-app.vercel.app</span>,
              {" "}and confirm it looks correct.
            </p>
          </div>
        </div>
      </section>

      {/* ── PART 7 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 7: The One Phrase That Always Works</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        <p className="text-zinc-600 leading-relaxed mb-6">
          If you ever feel completely lost, type this into Claude Code:
        </p>

        {/* Magic Phrase card */}
        <div className="bg-zinc-950 border-2 border-orange-500 rounded-2xl overflow-hidden">
          <div className="px-6 pt-5 pb-2 flex items-center gap-2">
            <span className="text-xl">🔑</span>
            <span className="text-orange-400 font-bold text-base tracking-wide">The Magic Phrase</span>
          </div>
          <div className="px-6 pb-6">
            <div className="bg-zinc-900 rounded-xl px-4 py-4 border border-zinc-700">
              <div className="flex items-start gap-3">
                <code className="text-orange-300 text-sm font-mono flex-1 leading-relaxed select-all">
                  I am stuck and confused. Can you look at the current state of my project, explain what is going on in simple terms, and tell me the single next step I should take?
                </code>
                <CopyButton text="I am stuck and confused. Can you look at the current state of my project, explain what is going on in simple terms, and tell me the single next step I should take?" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <div className="bg-orange-500 rounded-2xl p-6 text-white">
        <p className="text-sm font-semibold text-orange-200 uppercase tracking-wide mb-2">Key Takeaway</p>
        <p className="text-lg font-semibold leading-relaxed">
          Errors are normal. Copy them, paste them into Claude Code, and ask for a simple explanation and a fix. That loop will unblock you 95% of the time. The other 5%? Start a fresh session and describe the problem from scratch.
        </p>
      </div>

      {/* Next lesson button */}
      <div className="flex justify-end">
        <Link
          href="/lessons/4"
          className="inline-flex items-center gap-2 bg-zinc-900 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-zinc-700 transition-colors"
        >
          Next: Lesson 4 →
        </Link>
      </div>

    </div>
  );
}

/* ─── Lesson 4 Illustrations ─────────────────────────────────── */

function ScanFilesIllustration() {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex gap-2">
          <span className="text-zinc-500">›</span>
          <span className="text-white">Tell me how this project works. Explain it like I have no coding background.</span>
        </div>
        <div className="pt-1 space-y-1 text-[11px]">
          <div className="text-zinc-500">Scanning project files...</div>
          <div className="text-zinc-500">Reading app/ layout.tsx page.tsx globals.css</div>
          <div className="text-zinc-500">Reading lessons/ [id]/ page.tsx</div>
          <div className="border-t border-zinc-700 mt-2 pt-2 text-zinc-300 leading-relaxed">
            This is a Next.js app with 4 main pages. The homepage shows your lessons. Each lesson page has its own content...
          </div>
        </div>
      </div>
    </div>
  );
}

function FileRefIllustration() {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex gap-2 flex-wrap">
          <span className="text-zinc-500">›</span>
          <span className="text-white">Update the title in </span>
          <span className="text-orange-400 bg-zinc-800 px-1.5 rounded">@src/pages/Home.tsx</span>
        </div>
        <div className="pt-1 space-y-1">
          <div className="text-zinc-500 text-[10px]">Reading src/pages/Home.tsx...</div>
          <div className="text-green-400">✓ Found the file. Ready to edit.</div>
        </div>
      </div>
    </div>
  );
}

function DiffIllustration() {
  return (
    <div className="rounded-xl overflow-hidden border border-zinc-200 font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 border-b border-zinc-200 font-sans">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Changes</span>
        <span className="text-xs text-zinc-400">src/pages/Home.tsx</span>
      </div>
      {/* Red line */}
      <div className="flex items-stretch bg-red-50">
        <div className="w-8 flex items-center justify-center bg-red-100 text-red-400 font-bold text-base select-none shrink-0">-</div>
        <div className="flex-1 px-4 py-2.5 text-red-700 text-[13px]">
          <span className="line-through opacity-60">Welcome to the App</span>
        </div>
        <div className="flex items-center pr-3">
          <span className="text-[10px] font-sans font-semibold text-red-400 bg-red-100 px-2 py-0.5 rounded-full">removed</span>
        </div>
      </div>
      {/* Green line */}
      <div className="flex items-stretch bg-green-50">
        <div className="w-8 flex items-center justify-center bg-green-100 text-green-500 font-bold text-base select-none shrink-0">+</div>
        <div className="flex-1 px-4 py-2.5 text-green-800 text-[13px]">
          Welcome to My App
        </div>
        <div className="flex items-center pr-3">
          <span className="text-[10px] font-sans font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">added</span>
        </div>
      </div>
    </div>
  );
}

function InitIllustration() {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex gap-2">
          <span className="text-zinc-500">›</span>
          <span className="text-white">/init</span>
        </div>
        <div className="pt-1 space-y-1 text-[11px]">
          <div className="text-zinc-500">Scanning project structure...</div>
          <div className="text-zinc-400">Creating CLAUDE.md</div>
          <div className="flex items-center gap-2 pt-1">
            <svg className="w-3 h-3 text-green-400 shrink-0" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
              <path d="M4 2h6l4 4v8a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z"/>
            </svg>
            <span className="text-zinc-300">CLAUDE.md</span>
          </div>
          <div className="text-green-400">✓ Project memory created.</div>
        </div>
      </div>
    </div>
  );
}

function PlanModeIllustration() {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
        <div className="ml-auto flex items-center gap-1.5 bg-blue-600 text-white text-[9px] font-sans font-bold px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
          PLAN MODE
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex gap-2 text-[11px] text-zinc-400 mb-1">
          <span className="text-blue-400 font-sans">Shift+Tab pressed. Switched to Plan Mode. No files will be changed.</span>
        </div>
        <div className="flex gap-2">
          <span className="text-zinc-500">›</span>
          <span className="text-white">I want to add a dark mode toggle...</span>
        </div>
        <div className="pt-1 border-t border-zinc-700 space-y-1.5 text-[11px]">
          <div className="text-zinc-400 font-sans mb-1">Here is my plan:</div>
          <div className="text-zinc-300">1. Add a dark mode state to layout.tsx</div>
          <div className="text-zinc-300">2. Create a toggle button component</div>
          <div className="text-zinc-300">3. Apply dark class to the root element</div>
          <div className="text-zinc-300">4. Update globals.css with dark styles</div>
          <div className="text-blue-400 font-sans mt-2">No files changed. Waiting for your approval.</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Lesson 4 Custom Content ────────────────────────────────── */

function Lesson4Content() {
  return (
    <div className="space-y-14">

      {/* ── PART 1 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 1: Ask Claude Code to Read Your Project</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 1 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 1 - Navigate to your project folder</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Open Terminal and go to your project:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">cd ~/my-first-app</code>
              <CopyButton text="cd ~/my-first-app" />
            </div>
            <p className="text-zinc-600 leading-relaxed my-4">Then launch Claude Code:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">claude</code>
              <CopyButton text="claude" />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 2 - Ask Claude Code to explain your project</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Before changing anything, type this:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Tell me how this project works. Explain it like I have no coding background.</code>
              <CopyButton text="Tell me how this project works. Explain it like I have no coding background." />
            </div>
            <ScanFilesIllustration />
            <p className="text-zinc-500 text-sm leading-relaxed mt-4">Claude Code will scan all your files and give you a plain English overview. This takes 1 to 2 minutes.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 3 - Ask follow up questions</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Not sure about something? Just ask:</p>
            {[
              "What does the src folder do?",
              "Explain the tech stack in simple terms",
              "Which file controls what the homepage looks like?",
            ].map((cmd) => (
              <div key={cmd} className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
                <code className="text-green-400 text-sm font-mono flex-1 select-all">{cmd}</code>
                <CopyButton text={cmd} />
              </div>
            ))}
            <p className="text-zinc-500 text-sm mt-3">You can ask anything. Claude Code knows your entire project.</p>
          </div>
        </div>
      </section>

      {/* ── PART 2 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 2: Reference Specific Files</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 4 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 4 - Point Claude Code to a specific file</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Reference the exact file using the <code className="bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-xs font-mono">@</code> symbol:
            </p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Update the title in @src/pages/Home.tsx to say &quot;Welcome to My App&quot;</code>
              <CopyButton text='Update the title in @src/pages/Home.tsx to say "Welcome to My App"' />
            </div>
            <FileRefIllustration />
            <p className="text-zinc-500 text-sm mt-4">This tells Claude Code exactly where to look instead of guessing.</p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">5</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 5 - Review the diff before approving</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Claude Code will show you what it plans to change before touching anything. Read it carefully before approving.
            </p>
            <DiffIllustration />
            <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 mt-4">
              <span className="text-green-500 text-base shrink-0 mt-0.5">ℹ</span>
              <div className="text-green-800 text-sm leading-relaxed">
                <span className="font-semibold">How to read a diff:</span> A line in red means something gets removed. A line in green means something gets added. You will often see both - the old version removed and the new version added.
              </div>
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">6</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 6 - Approve or reject the change</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Type <code className="bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-xs font-mono">y</code> to approve or <code className="bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-xs font-mono">n</code> to reject. Nothing happens to your files without your permission.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
                <code className="text-green-400 text-sm font-mono flex-1">y</code>
                <span className="text-zinc-500 text-xs">approve</span>
              </div>
              <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
                <code className="text-red-400 text-sm font-mono flex-1">n</code>
                <span className="text-zinc-500 text-xs">reject</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 3 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 3: Give Claude Code a Memory with CLAUDE.md</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 7 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">7</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 7 - What is CLAUDE.md?</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Every new Claude Code session starts fresh with no memory of your project. CLAUDE.md fixes that.
            </p>
            <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
              <span className="text-blue-500 text-base shrink-0 mt-0.5">ℹ</span>
              <div className="text-blue-800 text-sm leading-relaxed">
                <span className="font-semibold">What is CLAUDE.md?</span> It is a file Claude Code reads automatically at the start of every session. Think of it as leaving a note for Claude Code every time it shows up for work. It can include your project description, your preferences, and rules for how you want it to behave.
              </div>
            </div>
          </div>
        </div>

        {/* Step 8 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">8</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 8 - Create your CLAUDE.md file</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">In Claude Code, type:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">/init</code>
              <CopyButton text="/init" />
            </div>
            <InitIllustration />
            <p className="text-zinc-500 text-sm mt-4">Claude Code will scan your project and create the file automatically.</p>
          </div>
        </div>

        {/* Step 9 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">9</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 9 - Add your own instructions</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Tell Claude Code how you want it to work:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all">
                Update CLAUDE.md to include these rules: always explain what you are about to do before doing it, make one change at a time, write simple code a beginner can understand, always push to GitHub after completing a feature.
              </code>
              <CopyButton text="Update CLAUDE.md to include these rules: always explain what you are about to do before doing it, make one change at a time, write simple code a beginner can understand, always push to GitHub after completing a feature." />
            </div>
          </div>
        </div>

        {/* Step 10 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">10</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 10 - Check your CLAUDE.md file</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Ask Claude Code to show you what is in it:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Show me what is in the CLAUDE.md file</code>
              <CopyButton text="Show me what is in the CLAUDE.md file" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">You can update it any time as your project grows.</p>
          </div>
        </div>
      </section>

      {/* ── PART 4 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 4: Use Plan Mode Before Big Changes</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 11 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">11</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 11 - What is Plan Mode?</h3>
            <p className="text-zinc-600 leading-relaxed">
              Plan Mode tells Claude Code to think and plan without touching any files. Use it whenever you are about to make a big change.
            </p>
          </div>
        </div>

        {/* Step 12 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">12</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 12 - Enter Plan Mode</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Press <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Shift</kbd> and <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Tab</kbd> at the same time. You will see the mode switch to Plan. Now describe what you want:
            </p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-5">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all">I want to add a dark mode toggle to my app. Create a plan for how to do this without breaking anything.</code>
              <CopyButton text="I want to add a dark mode toggle to my app. Create a plan for how to do this without breaking anything." />
            </div>
            <PlanModeIllustration />
          </div>
        </div>

        {/* Step 13 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">13</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 13 - Review the plan then approve</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Read through the plan. If something looks too complex, say:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">That seems too complex. Can you simplify the plan?</code>
              <CopyButton text="That seems too complex. Can you simplify the plan?" />
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">When happy, type:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Go ahead and implement this</code>
              <CopyButton text="Go ahead and implement this" />
            </div>
          </div>
        </div>

        {/* Step 14 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">14</div>
          </div>
          <div className="flex-1 pb-2">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 14 - Push your changes</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Once everything looks good in your browser:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Commit and push all changes to GitHub</code>
              <CopyButton text="Commit and push all changes to GitHub" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <div className="bg-orange-500 rounded-2xl p-6 text-white">
        <p className="text-sm font-semibold text-orange-200 uppercase tracking-wide mb-2">Key Takeaway</p>
        <p className="text-lg font-semibold leading-relaxed">
          Read before you build. Ask Claude Code to explain your project, reference specific files with the @ symbol, create a CLAUDE.md so Claude always has context, and use Plan Mode before any big change. This is how you stay in control.
        </p>
      </div>

      {/* Next lesson button */}
      <div className="flex justify-end">
        <Link
          href="/lessons/5"
          className="inline-flex items-center gap-2 bg-zinc-900 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-zinc-700 transition-colors"
        >
          Next: Lesson 5 →
        </Link>
      </div>

    </div>
  );
}

/* ─── Lesson 5 Custom Content ────────────────────────────────── */

function Lesson5Content() {
  return (
    <div className="space-y-14">

      {/* ── PART 1 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 1: The Essential Commands</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 1 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 1 - Start Claude Code</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Navigate to your project and launch Claude Code:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">cd ~/my-first-app</code>
              <CopyButton text="cd ~/my-first-app" />
            </div>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">claude</code>
              <CopyButton text="claude" />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 2 - Continue where you left off</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Pick up from your last session:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">claude -c</code>
              <CopyButton text="claude -c" />
            </div>
            <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
              <span className="text-blue-500 text-base shrink-0 mt-0.5">ℹ</span>
              <div className="text-blue-800 text-sm leading-relaxed">
                <span className="font-semibold">What does -c do?</span> The <code className="bg-blue-100 px-1 rounded text-xs font-mono">-c</code> flag tells Claude Code to resume the most recent conversation in your current folder. No need to re-explain your project every time.
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 3 - Run a quick one-off task</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">If you just want Claude Code to do one thing and exit:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">claude &quot;fix the build error&quot;</code>
              <CopyButton text='claude "fix the build error"' />
            </div>
            <p className="text-zinc-500 text-sm my-3">or</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">claude -p &quot;explain what this project does&quot;</code>
              <CopyButton text='claude -p "explain what this project does"' />
            </div>
            <p className="text-zinc-500 text-sm">The <code className="bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-xs font-mono">-p</code> flag runs a single query and exits immediately.</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 4 - Exit Claude Code</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">When you are done:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">exit</code>
              <CopyButton text="exit" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">
              or press <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Ctrl</kbd> and <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">C</kbd> at the same time.
            </p>
          </div>
        </div>
      </section>

      {/* ── PART 2 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 2: Asking Claude Code to Run Things for You</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 5 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">5</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 5 - Start your app</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Instead of typing <code className="bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-xs font-mono">npm run dev</code> yourself, tell Claude Code:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Start the app locally</code>
              <CopyButton text="Start the app locally" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code will run the correct command and tell you what URL to open.</p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">6</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 6 - Install a package</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Describe what you need:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Install the package needed to add charts to my app</code>
              <CopyButton text="Install the package needed to add charts to my app" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code will figure out the correct package name and install it.</p>
          </div>
        </div>

        {/* Step 7 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">7</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 7 - Check what you changed</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Ask:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">What files have I changed?</code>
              <CopyButton text="What files have I changed?" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code runs <code className="bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-xs font-mono">git status</code> behind the scenes and gives you a plain English summary.</p>
          </div>
        </div>

        {/* Step 8 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">8</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 8 - Commit and push in one step</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Commit my changes with a descriptive message and push to GitHub</code>
              <CopyButton text="Commit my changes with a descriptive message and push to GitHub" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code stages the files, writes a commit message, commits, and pushes. All in one go.</p>
          </div>
        </div>
      </section>

      {/* ── PART 3 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 3: Slash Commands</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 9 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">9</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 9 - See all available commands</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">/help</code>
              <CopyButton text="/help" />
            </div>
            <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
              <span className="text-blue-500 text-base shrink-0 mt-0.5">ℹ</span>
              <div className="text-blue-800 text-sm leading-relaxed">
                <span className="font-semibold">What are slash commands?</span> Slash commands are built-in shortcuts that start with <code className="bg-blue-100 px-1 rounded text-xs font-mono">/</code>. They control Claude Code itself rather than asking it to do something. Type <code className="bg-blue-100 px-1 rounded text-xs font-mono">/help</code> at any time to see the full list.
              </div>
            </div>
          </div>
        </div>

        {/* Step 10 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">10</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 10 - Clear the conversation</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">If a session has gone on too long and Claude Code seems confused:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">/clear</code>
              <CopyButton text="/clear" />
            </div>
            <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
              <span className="text-yellow-500 text-base shrink-0">⚠️</span>
              <p className="text-yellow-800 text-sm font-medium">
                This resets the conversation without closing Claude Code. Your files are completely untouched.
              </p>
            </div>
          </div>
        </div>

        {/* Step 11 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">11</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 11 - Create project memory</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">/init</code>
              <CopyButton text="/init" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Creates a CLAUDE.md file so Claude Code remembers your project across sessions. Covered in detail in Lesson 4.</p>
          </div>
        </div>

        {/* Step 12 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">12</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 12 - Check Claude Code is working properly</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">/doctor</code>
              <CopyButton text="/doctor" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code will check its own installation and tell you if anything needs fixing.</p>
          </div>
        </div>
      </section>

      {/* ── PART 4 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 4: Git Commands Made Easy</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 13 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">13</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 13 - Create a new branch</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Create a new branch called feature/dark-mode</code>
              <CopyButton text="Create a new branch called feature/dark-mode" />
            </div>
          </div>
        </div>

        {/* Step 14 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">14</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 14 - See recent changes</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Show me the last 5 commits</code>
              <CopyButton text="Show me the last 5 commits" />
            </div>
          </div>
        </div>

        {/* Step 15 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">15</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 15 - Undo a mistake</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Undo the last change I made to the homepage file</code>
              <CopyButton text="Undo the last change I made to the homepage file" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code will figure out the right git command and ask for your approval before doing anything.</p>
          </div>
        </div>

        {/* Step 16 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">16</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 16 - Push everything live</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Commit and push all changes to GitHub</code>
              <CopyButton text="Commit and push all changes to GitHub" />
            </div>
            <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
              <span className="text-green-500 text-base shrink-0">✓</span>
              <p className="text-green-800 text-sm font-medium">
                Vercel picks this up automatically. Your live site updates within 60 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 5 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 5: Pro Tips</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 17 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">17</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 17 - Be specific for better results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                <p className="text-red-500 text-xs font-semibold mb-3">❌ Vague</p>
                <p className="text-red-700 text-sm font-mono">&ldquo;fix the bug&rdquo;</p>
              </div>
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="text-green-600 text-xs font-semibold mb-3">✅ Specific</p>
                <p className="text-green-800 text-sm font-mono leading-relaxed">&ldquo;fix the bug where users can submit the form with empty fields&rdquo;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 18 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">18</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 18 - Break big tasks into steps</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Instead of one big request, give Claude Code a numbered list:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all whitespace-pre-line">{`1. Add a dark mode toggle to the navigation bar\n2. Make sure it saves the user preference\n3. Test that it works on mobile too`}</code>
              <CopyButton text={"1. Add a dark mode toggle to the navigation bar\n2. Make sure it saves the user preference\n3. Test that it works on mobile too"} />
            </div>
          </div>
        </div>

        {/* Step 19 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">19</div>
          </div>
          <div className="flex-1 pb-2">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 19 - Ask Claude Code what it can do</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Can you help me set up automated testing for my app?</code>
              <CopyButton text="Can you help me set up automated testing for my app?" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code will tell you what is possible and how to approach it.</p>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <div className="bg-orange-500 rounded-2xl p-6 text-white">
        <p className="text-sm font-semibold text-orange-200 uppercase tracking-wide mb-2">Key Takeaway</p>
        <p className="text-lg font-semibold leading-relaxed">
          You do not need to memorise terminal commands. Describe what you want in plain English and Claude Code handles the rest. The only commands worth memorising are <code className="bg-orange-400 px-1.5 py-0.5 rounded text-sm">claude</code> to start, <code className="bg-orange-400 px-1.5 py-0.5 rounded text-sm">/clear</code> when confused, and &ldquo;Commit and push all changes to GitHub&rdquo; to save your work.
        </p>
      </div>

      {/* Next lesson button */}
      <div className="flex justify-end">
        <Link
          href="/lessons/6"
          className="inline-flex items-center gap-2 bg-zinc-900 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-zinc-700 transition-colors"
        >
          Next: Lesson 6 →
        </Link>
      </div>

    </div>
  );
}

/* ─── Lesson 6 Custom Content ────────────────────────────────── */

function Lesson6Content() {
  return (
    <div className="space-y-14">

      {/* ── PART 1 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 1: Investigate Before You Fix</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 1 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 1 - Never jump straight to fixing</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              When something breaks, the instinct is to ask Claude Code to fix it immediately. Resist that.
            </p>
            <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
              <span className="text-yellow-500 text-base shrink-0">⚠️</span>
              <p className="text-yellow-800 text-sm font-medium">
                A fast fix often patches the symptom and leaves the real problem hiding underneath, ready to break again later. Always investigate first.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 2 - Enter Plan Mode before touching anything</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Press <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Shift</kbd> and <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Tab</kbd> at the same time to enter Plan Mode. You will see the blue PLAN MODE badge appear.
            </p>
            <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
              <span className="text-blue-500 text-base shrink-0 mt-0.5">ℹ</span>
              <div className="text-blue-800 text-sm leading-relaxed">
                <span className="font-semibold">Plan Mode cannot change any files.</span> Claude Code can read files and trace the problem but it cannot modify, create, or delete a single file. This is your safety net while investigating.
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 3 - Describe the bug clearly</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">The more context you give, the faster Claude Code finds the root cause:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all whitespace-pre-line">{`There is a bug where [describe what is happening].\nIt started happening after [what you last changed].\nHere is the error message: [paste the full error]\nPlease investigate and tell me what is causing it before doing anything.`}</code>
              <CopyButton text={"There is a bug where [describe what is happening].\nIt started happening after [what you last changed].\nHere is the error message: [paste the full error]\nPlease investigate and tell me what is causing it before doing anything."} />
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 4 - Read the investigation report</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Claude Code will give you a breakdown of what it found. If you do not understand something, ask:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Can you explain that in simpler terms?</code>
              <CopyButton text="Can you explain that in simpler terms?" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 2 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 2: The Two-Phase Approach</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 5 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">5</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 5 - Phase 1: Investigate in Plan Mode</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Always start here. Paste the error and ask Claude Code to trace it:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">Look at this error and trace where it comes from across all my files. Do not change anything yet.</code>
              <CopyButton text="Look at this error and trace where it comes from across all my files. Do not change anything yet." />
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">6</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 6 - Phase 2: Fix with approval</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Once you understand what is wrong, exit Plan Mode by pressing <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Shift</kbd> and <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Tab</kbd> again. Then tell Claude Code:
            </p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Go ahead and apply the fix we discussed</code>
              <CopyButton text="Go ahead and apply the fix we discussed" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code will show you exactly what it plans to change. Review the diff, then approve.</p>
          </div>
        </div>

        {/* Step 7 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">7</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 7 - Test it immediately</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">After every fix, check if it worked. Open your browser and go to:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">http://localhost:3000</code>
              <CopyButton text="http://localhost:3000" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">If the bug is gone, great. If a new error appears, go back to Step 2.</p>
          </div>
        </div>
      </section>

      {/* ── PART 3 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 3: How to Describe Bugs Well</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 8 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">8</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 8 - Always include the full error message</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Do not paraphrase the error. Copy the entire thing and paste it in. Even the parts that look like gibberish can point Claude Code to the exact line where things went wrong.</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all whitespace-pre-line">{`Here is the full error:\n[paste the complete error message]`}</code>
              <CopyButton text={"Here is the full error:\n[paste the complete error message]"} />
            </div>
          </div>
        </div>

        {/* Step 9 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">9</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 9 - Tell it what changed recently</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Bugs almost always appear after something changes. This narrows the investigation dramatically:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">This error started happening after I added a login button to the homepage</code>
              <CopyButton text="This error started happening after I added a login button to the homepage" />
            </div>
          </div>
        </div>

        {/* Step 10 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">10</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 10 - Ask it to trace the execution path</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">For bugs that are hard to find, ask Claude Code to follow the code step by step:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">Trace through exactly what happens when a user clicks the submit button and tell me where it goes wrong</code>
              <CopyButton text="Trace through exactly what happens when a user clicks the submit button and tell me where it goes wrong" />
            </div>
          </div>
        </div>

        {/* Step 11 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">11</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 11 - Ask for the root cause, not just the fix</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Always ask:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Explain why this bug happened and how to prevent it happening again</code>
              <CopyButton text="Explain why this bug happened and how to prevent it happening again" />
            </div>
            <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
              <span className="text-green-500 text-base shrink-0">✓</span>
              <p className="text-green-800 text-sm font-medium">Every bug you understand properly makes you a better builder.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 4 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 4: Common Bug Types</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 12 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">12</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 12 - Something is not showing up on screen</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">The user list is not showing on the page. Trace where the data comes from and find out why it is not displaying.</code>
              <CopyButton text="The user list is not showing on the page. Trace where the data comes from and find out why it is not displaying." />
            </div>
          </div>
        </div>

        {/* Step 13 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">13</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 13 - Something works sometimes but not always</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">This bug only happens when I submit the form twice quickly. It does not happen when I submit slowly. Investigate why.</code>
              <CopyButton text="This bug only happens when I submit the form twice quickly. It does not happen when I submit slowly. Investigate why." />
            </div>
          </div>
        </div>

        {/* Step 14 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">14</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 14 - Something broke after an update</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">Everything was working yesterday. Today I added dark mode and now the navigation is broken. Compare what changed and find the conflict.</code>
              <CopyButton text="Everything was working yesterday. Today I added dark mode and now the navigation is broken. Compare what changed and find the conflict." />
            </div>
          </div>
        </div>

        {/* Step 15 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">15</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 15 - You want to prevent future bugs</h3>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">What validation or error handling can we add to make sure this type of bug cannot happen again?</code>
              <CopyButton text="What validation or error handling can we add to make sure this type of bug cannot happen again?" />
            </div>
            <p className="text-zinc-500 text-sm my-3">Then:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Update CLAUDE.md with a note about this bug and how to prevent it</code>
              <CopyButton text="Update CLAUDE.md with a note about this bug and how to prevent it" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 5 ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-zinc-100" />
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 5: Save Your Work</span>
          <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Step 16 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">16</div>
            <div className="w-px flex-1 bg-zinc-100 mt-2" />
          </div>
          <div className="flex-1 pb-10">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 16 - Commit after every successful fix</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">The moment a bug is fixed and tested, save it immediately:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Commit this bug fix with a descriptive message and push to GitHub</code>
              <CopyButton text="Commit this bug fix with a descriptive message and push to GitHub" />
            </div>
          </div>
        </div>

        {/* Step 17 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">17</div>
          </div>
          <div className="flex-1 pb-2">
            <h3 className="text-lg font-bold text-zinc-900 mb-3 mt-1">Step 17 - Write a clear commit message</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">Ask Claude Code to write a commit message that explains what was broken and how it was fixed:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Write a commit message that explains the bug we just fixed and what caused it</code>
              <CopyButton text="Write a commit message that explains the bug we just fixed and what caused it" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <div className="bg-orange-500 rounded-2xl p-6 text-white">
        <p className="text-sm font-semibold text-orange-200 uppercase tracking-wide mb-2">Key Takeaway</p>
        <p className="text-lg font-semibold leading-relaxed">
          Investigate before you fix. Use Plan Mode to understand the root cause, describe bugs with full context and recent changes, and always ask why it happened. Every bug you understand properly makes you a better builder.
        </p>
      </div>

      {/* Next lesson button */}
      <div className="flex justify-end">
        <Link
          href="/lessons/7"
          className="inline-flex items-center gap-2 bg-zinc-900 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-zinc-700 transition-colors"
        >
          Next: Lesson 7 →
        </Link>
      </div>

    </div>
  );
}

/* ─── Lesson 7 Custom Content ────────────────────────────────── */

function Lesson7Content() {
  const steps = [
    // PART 1
    {
      part: "PART 1: THE GOLDEN RULE",
      number: 1,
      title: "Vague in, vague out",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Claude Code is only as good as the instructions you give it. The single biggest improvement most beginners can make is being more specific. Not more technical. Just more specific.
          </p>
          <p className="text-zinc-600 font-medium mb-3">Compare these two prompts:</p>
          <div className="space-y-3 mb-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-red-500 font-bold text-sm">Vague</span>
              </div>
              <code className="text-sm text-red-700 font-mono">make the app look better</code>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-600 font-bold text-sm">Specific</span>
              </div>
              <code className="text-sm text-green-700 font-mono">the homepage button should be orange, centred, and say "Start Learning" instead of "Click Here"</code>
            </div>
          </div>
          <p className="text-zinc-700 leading-relaxed">Both are in plain English. One gets results. One gets guesses.</p>
        </>
      ),
    },
    {
      number: 2,
      title: "Tell Claude what success looks like",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Claude performs dramatically better when it knows what done looks like. Instead of just describing the task, describe what you want to see when it is finished:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text={`Add a search bar to the homepage. It should appear below the title, work on mobile, and show results as the user types. Test it works before telling me it is done.`} />
              <p className="text-zinc-300 leading-relaxed pr-8">Add a search bar to the homepage. It should appear below the title, work on mobile, and show results as the user types. Test it works before telling me it is done.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      number: 3,
      title: "Reference specific files",
      infoBox: { type: "blue", text: "Pointing Claude to a specific file eliminates guesswork. Claude reads your entire project but knowing exactly where to look makes it faster and more precise." },
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Instead of describing what you want changed, point directly at the file:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Update the button colour in @src/components/Header.tsx to orange" />
              <p className="text-zinc-300 pr-8">Update the button colour in @src/components/Header.tsx to orange</p>
            </div>
          </div>
          <p className="text-zinc-700 leading-relaxed">This tells Claude exactly where to look instead of searching the entire project.</p>
        </>
      ),
    },
    // PART 2
    {
      part: "PART 2: THE EXPLORE-PLAN-BUILD APPROACH",
      number: 4,
      title: "Never jump straight to building",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            For anything that touches more than one file, use Plan Mode first. Rushing into building without a plan leads to Claude making assumptions. Those assumptions compound. Before you know it, the whole approach is wrong.
          </p>
          <p className="text-zinc-700 leading-relaxed font-semibold">The best workflow is always: Explore first, Plan second, Build third.</p>
        </>
      ),
    },
    {
      number: 5,
      title: "Phase 1: Explore",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Enter Plan Mode with <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono">Shift</kbd> + <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono">Tab</kbd>. Ask Claude to read and understand before doing anything:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Read the homepage files and understand how the lessons are structured. Do not change anything yet." />
              <p className="text-zinc-300 pr-8">Read the homepage files and understand how the lessons are structured. Do not change anything yet.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      number: 6,
      title: "Phase 2: Plan",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Still in Plan Mode, ask for a clear plan:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-4">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="I want to add a progress bar that shows how many lessons the user has completed. What files need to change? Create a step by step plan." />
              <p className="text-zinc-300 pr-8">I want to add a progress bar that shows how many lessons the user has completed. What files need to change? Create a step by step plan.</p>
            </div>
          </div>
          <p className="text-zinc-700 leading-relaxed">Read the plan carefully. Remove anything you do not want.</p>
        </>
      ),
    },
    {
      number: 7,
      title: "Phase 3: Build",
      successBox: "The more Claude knows upfront, the less you correct later.",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Exit Plan Mode with <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono">Shift</kbd> + <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono">Tab</kbd> again. Tell Claude to implement:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Go ahead and build the progress bar from your plan. Test it works before telling me it is done." />
              <p className="text-zinc-300 pr-8">Go ahead and build the progress bar from your plan. Test it works before telling me it is done.</p>
            </div>
          </div>
        </>
      ),
    },
    // PART 3
    {
      part: "PART 3: GIVING BETTER CONTEXT",
      number: 8,
      title: "Describe the symptom, not just the problem",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            When asking Claude to fix something, describe what the user experiences rather than what you think the cause is:
          </p>
          <div className="space-y-3 mb-2">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <span className="text-red-500 font-bold text-sm block mb-1">Instead of</span>
              <code className="text-sm text-red-700 font-mono">fix the login bug</code>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <span className="text-green-600 font-bold text-sm block mb-1">Try</span>
              <code className="text-sm text-green-700 font-mono">users report they get logged out after 10 minutes even though they are still active. Check the session handling and fix it.</code>
            </div>
          </div>
        </>
      ),
    },
    {
      number: 9,
      title: "Tell Claude what recently changed",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Bugs almost always appear after something changes. This one sentence dramatically narrows Claude's investigation:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="This started happening after I added the dark mode toggle yesterday" />
              <p className="text-zinc-300 pr-8">This started happening after I added the dark mode toggle yesterday</p>
            </div>
          </div>
        </>
      ),
    },
    {
      number: 10,
      title: "Break big tasks into numbered steps",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            For complex features, give Claude a numbered list instead of one big description:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text={`1. Add a dark mode toggle to the top right of the navigation bar\n2. Save the user preference so it remembers on next visit\n3. Make sure it works on mobile\n4. Test all three before telling me it is done`} />
              <div className="text-zinc-300 space-y-1 pr-8">
                <p>1. Add a dark mode toggle to the top right of the navigation bar</p>
                <p>2. Save the user preference so it remembers on next visit</p>
                <p>3. Make sure it works on mobile</p>
                <p>4. Test all three before telling me it is done</p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    // PART 4
    {
      part: "PART 4: COMMON MISTAKES TO AVOID",
      number: 11,
      title: "The kitchen sink session",
      warningBox: "Starting one task, asking something unrelated, then going back to the first task fills Claude's context with noise. Performance drops. Use /clear between unrelated tasks.",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Starting one task, asking something unrelated, then going back to the first task. Claude's context fills with irrelevant information and performance drops.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Fix: use <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm font-mono">/clear</code> between unrelated tasks to reset the conversation.
          </p>
        </>
      ),
    },
    {
      number: 12,
      title: "Correcting over and over",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Claude does something wrong. You correct it. Still wrong. You correct again. After two failed corrections the context is polluted with failed approaches.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Fix: after two failed corrections, type <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm font-mono">/clear</code> and start fresh with a better prompt using what you learned.
          </p>
        </>
      ),
    },
    {
      number: 13,
      title: "Asking Claude to do everything at once",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Asking Claude to build an entire app in one prompt leads to partial results, missed details, and code that does not quite fit together.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Fix: break your project into small features. Build one at a time. Test each one before moving on.
          </p>
        </>
      ),
    },
    {
      number: 14,
      title: "Not telling Claude when to stop",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            If you do not give Claude a clear finishing point, it will keep going and make changes you did not ask for.
          </p>
          <p className="text-zinc-700 leading-relaxed mb-4">Fix: end every prompt with a clear stopping instruction:</p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Stop after completing these three steps and show me what you built." />
              <p className="text-zinc-300 pr-8">Stop after completing these three steps and show me what you built.</p>
            </div>
          </div>
        </>
      ),
    },
    // PART 5
    {
      part: "PART 5: PROMPTS THAT ALWAYS WORK",
      number: 15,
      title: "The project kickoff prompt",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Use this at the start of every new session to get Claude up to speed instantly:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Read the project and tell me what it does, what the main files are, and what was last worked on. Then wait for my instructions." />
              <p className="text-zinc-300 pr-8">Read the project and tell me what it does, what the main files are, and what was last worked on. Then wait for my instructions.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      number: 16,
      title: "The feature request prompt",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">Use this when adding something new:</p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="I want to add [describe feature]. Before building anything, tell me which files you will change and what the plan is. Wait for my approval before starting." />
              <p className="text-zinc-300 pr-8">I want to add [describe feature]. Before building anything, tell me which files you will change and what the plan is. Wait for my approval before starting.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      number: 17,
      title: "The stuck prompt",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">Use this when Claude seems confused or keeps going in circles:</p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Stop what you are doing. Summarise what we have been trying to do, what went wrong, and what you think the best next step is. Then wait for my instruction." />
              <p className="text-zinc-300 pr-8">Stop what you are doing. Summarise what we have been trying to do, what went wrong, and what you think the best next step is. Then wait for my instruction.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      number: 18,
      title: "The wrap up prompt",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">Use this at the end of every session:</p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Summarise what we built today, what is working, and what still needs to be done. Then commit and push everything to GitHub." />
              <p className="text-zinc-300 pr-8">Summarise what we built today, what is working, and what still needs to be done. Then commit and push everything to GitHub.</p>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="space-y-0">
      {steps.map((step, idx) => (
        <React.Fragment key={step.number}>
          {/* Part header */}
          {step.part && (
            <div className={`${idx === 0 ? "mb-8" : "mt-12 mb-8"} pb-3 border-b-2 border-orange-100`}>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-500">{step.part}</span>
            </div>
          )}

          {/* Step */}
          <div className="flex gap-6 pb-10">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {step.number}
              </div>
              {idx < steps.length - 1 && <div className="w-px flex-1 bg-zinc-100 mt-3" />}
            </div>
            <div className="flex-1 pt-1.5 pb-2">
              <h3 className="font-bold text-zinc-900 text-lg mb-3">{step.title}</h3>

              {/* Info box (blue) */}
              {"infoBox" in step && step.infoBox?.type === "blue" && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-blue-800 text-sm leading-relaxed">
                    <span className="font-bold">ℹ️ Note: </span>{step.infoBox.text}
                  </p>
                </div>
              )}

              {/* Warning box (yellow) */}
              {"warningBox" in step && step.warningBox && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <p className="text-yellow-800 text-sm leading-relaxed">
                    <span className="font-bold">⚠️ Watch out: </span>{step.warningBox}
                  </p>
                </div>
              )}

              {step.content}

              {/* Success box (green) */}
              {"successBox" in step && step.successBox && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                  <p className="text-green-800 text-sm leading-relaxed">
                    <span className="font-bold">✓ </span>{step.successBox}
                  </p>
                </div>
              )}
            </div>
          </div>
        </React.Fragment>
      ))}

      {/* Key Takeaway */}
      <div className="mt-4 bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🔑</span>
          <span className="font-bold text-orange-700 text-lg">Key Takeaway</span>
        </div>
        <p className="text-orange-900 leading-relaxed">
          Specific beats technical every time. You do not need to understand code to give great instructions. You just need to be clear about what you want, what files are involved, and what success looks like. The more Claude knows upfront, the less you correct later.
        </p>
      </div>

      {/* Next lesson button */}
      <div className="mt-8 flex justify-end">
        <Link
          href="/lessons/8"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Next: Lesson 8 <span>→</span>
        </Link>
      </div>
    </div>
  );
}

/* ─── Lesson 8 Custom Content ────────────────────────────────── */

function Lesson8Content() {
  const steps = [
    // PART 1
    {
      part: "PART 1: START ON PAPER, NOT IN THE TERMINAL",
      number: 1,
      title: "Decide what you are building before opening Claude Code",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            The biggest mistake beginners make with bigger projects is opening Claude Code and starting to build before they have a clear picture of what they want. Claude Code will build something. But it might not be the thing you actually wanted.
          </p>
          <p className="text-zinc-700 leading-relaxed mb-4">Before touching the terminal, answer these three questions in plain English:</p>
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 space-y-2 mb-4">
            <p className="text-zinc-700 text-sm">1. What does this app do in one sentence?</p>
            <p className="text-zinc-700 text-sm">2. Who is it for?</p>
            <p className="text-zinc-700 text-sm">3. What does a user actually do when they open it?</p>
          </div>
          <p className="text-zinc-700 leading-relaxed">Write the answers down. This is your foundation.</p>
        </>
      ),
    },
    {
      number: 2,
      title: "Sketch the screens before building them",
      infoBox: { type: "blue", text: "10 minutes of sketching saves hours of Claude Code going in the wrong direction. A rough drawing of your screens is worth more than 100 lines of code written too early." },
      content: (
        <p className="text-zinc-700 leading-relaxed">
          You do not need design skills. Just draw rough boxes on paper showing what each screen looks like. Label them. Draw arrows showing how a user moves from one screen to another. This takes 10 minutes and saves hours of Claude Code going in the wrong direction.
        </p>
      ),
    },
    {
      number: 3,
      title: "List your features, then cut half of them",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Write down every feature you want. Then ask: which three are absolutely essential for the app to work at all? Those three are your first version. Everything else goes on a separate list for later.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Claude Code works best when it builds one feature at a time, tests it, and moves on.
          </p>
        </>
      ),
    },
    // PART 2
    {
      part: "PART 2: WRITE A SPEC BEFORE YOU BUILD",
      number: 4,
      title: "What is a spec?",
      content: (
        <p className="text-zinc-700 leading-relaxed">
          A spec is a plain English document that describes exactly what you are building. It is not code. It is not technical. It is just a clear description of what the app does, how it works, and what it looks like. Think of it as the instructions you give Claude Code before it starts building. The better the spec, the better the result.
        </p>
      ),
    },
    {
      number: 5,
      title: "Let Claude Code write your spec for you",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            You do not have to write the spec yourself. Start a new session and paste this:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-4">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="I want to build [describe your app in one sentence]. Interview me about the details. Ask about the features, the user experience, what it looks like, and any technical requirements. Keep asking until you have everything you need, then write a complete spec and save it as spec.md in my project folder." />
              <p className="text-zinc-300 leading-relaxed pr-8">I want to build [describe your app in one sentence]. Interview me about the details. Ask about the features, the user experience, what it looks like, and any technical requirements. Keep asking until you have everything you need, then write a complete spec and save it as spec.md in my project folder.</p>
            </div>
          </div>
          <p className="text-zinc-700 leading-relaxed">Claude Code will ask you questions. Answer them. When done you will have a spec file to review and edit.</p>
        </>
      ),
    },
    {
      number: 6,
      title: "Review and simplify the spec",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Claude Code tends to include more features than you need. Open spec.md and read it. Cut anything too complicated for a first version. Then ask Claude Code to update it:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Update spec.md to remove [list what you want to remove] and simplify the scope to just the core features." />
              <p className="text-zinc-300 pr-8">Update spec.md to remove [list what you want to remove] and simplify the scope to just the core features.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      number: 7,
      title: "Use the spec as your source of truth",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Every time you start a new Claude Code session, begin by pointing at the spec:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Read spec.md and tell me what we are building. Then wait for my instructions." />
              <p className="text-zinc-300 pr-8">Read spec.md and tell me what we are building. Then wait for my instructions.</p>
            </div>
          </div>
          <p className="text-zinc-700 leading-relaxed mt-3">This means Claude Code always has full context even in a brand new session.</p>
        </>
      ),
    },
    // PART 3
    {
      part: "PART 3: BUILD FEATURE BY FEATURE",
      number: 8,
      title: "Never build everything at once",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            The fastest way to get a broken mess is to ask Claude Code to build your entire app in one go. Build one feature at a time. Test it. Then move on.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Think of it like building with Lego. One brick at a time. Each brick solid before the next one goes on.
          </p>
        </>
      ),
    },
    {
      number: 9,
      title: "Create a to-do list for Claude Code",
      warningBox: "Trying to build everything at once is the number one reason bigger projects fail. One feature. Tested. Committed. Then the next.",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Before building, ask Claude Code to create a task list based on your spec:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-4">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Read spec.md and create a to-do list of features to build, ordered from most essential to least essential. Save it as todo.md." />
              <p className="text-zinc-300 pr-8">Read spec.md and create a to-do list of features to build, ordered from most essential to least essential. Save it as todo.md.</p>
            </div>
          </div>
          <p className="text-zinc-700 leading-relaxed">Review the list. Reorder anything that feels wrong. Then start at the top.</p>
        </>
      ),
    },
    {
      number: 10,
      title: "Build one item, test it, tick it off",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            For each item on the list, follow this exact loop. Tell Claude Code what to build:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-4">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Build the first item on todo.md. When it is done, show me what it looks like at localhost:3000 and mark it as complete in todo.md." />
              <p className="text-zinc-300 pr-8">Build the first item on todo.md. When it is done, show me what it looks like at localhost:3000 and mark it as complete in todo.md.</p>
            </div>
          </div>
          <p className="text-zinc-700 leading-relaxed">Test it in the browser. If it works, move on. If not, use the debugging approach from Lesson 6.</p>
        </>
      ),
    },
    {
      number: 11,
      title: "Commit after every completed feature",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Every time a feature is working and tested, save your progress immediately:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-4">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Commit this completed feature with a descriptive message and push to GitHub" />
              <p className="text-zinc-300 pr-8">Commit this completed feature with a descriptive message and push to GitHub</p>
            </div>
          </div>
          <p className="text-zinc-700 leading-relaxed">Never move on to the next feature without committing the current one first.</p>
        </>
      ),
    },
    // PART 4
    {
      part: "PART 4: KEEP CLAUDE CODE ON TRACK",
      number: 12,
      title: "Update your CLAUDE.md as you build",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            As your project grows, add important context to CLAUDE.md so Claude Code never forgets how your project works:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Update CLAUDE.md to include: the tech stack we are using, the folder structure, and any important rules about how this project works." />
              <p className="text-zinc-300 pr-8">Update CLAUDE.md to include: the tech stack we are using, the folder structure, and any important rules about how this project works.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      number: 13,
      title: "Start fresh sessions for each new feature",
      content: (
        <p className="text-zinc-700 leading-relaxed">
          Do not use the same Claude Code session to build multiple features. When you finish one feature and commit it, type <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm font-mono">/clear</code> and start a new session for the next one. This keeps context clean and prevents Claude Code from getting confused by earlier work.
        </p>
      ),
    },
    {
      number: 14,
      title: "When something feels too complex, split it up",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            If Claude Code is struggling with a feature or keeps breaking things, the feature is probably too big. Break it into smaller pieces:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="The search feature is too complex to build at once. Split it into three smaller tasks: first build the search input field, then build the results display, then connect them together. Let us start with just the input field." />
              <p className="text-zinc-300 pr-8">The search feature is too complex to build at once. Split it into three smaller tasks: first build the search input field, then build the results display, then connect them together. Let us start with just the input field.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      number: 15,
      title: "Track your progress with a simple update",
      successBox: "A good plan makes Claude Code feel like a superpower.",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            At the end of every build session, ask Claude Code for a progress summary:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Look at todo.md and tell me what is complete, what is in progress, and what still needs to be done. Then commit everything and push to GitHub." />
              <p className="text-zinc-300 pr-8">Look at todo.md and tell me what is complete, what is in progress, and what still needs to be done. Then commit everything and push to GitHub.</p>
            </div>
          </div>
        </>
      ),
    },
    // PART 5
    {
      part: "PART 5: GETTING YOUR PROJECT LIVE",
      number: 16,
      title: "Deploy early, deploy often",
      content: (
        <p className="text-zinc-700 leading-relaxed">
          Do not wait until the entire app is finished before deploying it. Get it live on Vercel after your first feature is working. This means you always have a live version to share and test.
        </p>
      ),
    },
    {
      number: 17,
      title: "Share it with real people",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Once your first version is live, send the link to 3 people who would actually use it. Ask them one question:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-4">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="What is confusing or missing?" />
              <p className="text-zinc-300 pr-8">What is confusing or missing?</p>
            </div>
          </div>
          <p className="text-zinc-700 leading-relaxed">Real feedback from real users is worth more than any amount of planning. It will tell you exactly what to build next.</p>
        </>
      ),
    },
    {
      number: 18,
      title: "Keep a future features list",
      content: (
        <>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Every time you think of something new to add, write it in a file called ideas.md instead of building it immediately. This keeps your focus on finishing what you are currently working on while making sure good ideas do not get lost. Ask Claude Code to create it:
          </p>
          <div className="bg-zinc-900 rounded-lg overflow-hidden text-xs font-mono mb-2">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-zinc-500 text-[10px]">Claude Code</span>
            </div>
            <div className="p-4 relative">
              <CopyButton text="Create an ideas.md file with these future feature ideas: [list your ideas]" />
              <p className="text-zinc-300 pr-8">Create an ideas.md file with these future feature ideas: [list your ideas]</p>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="space-y-0">
      {steps.map((step, idx) => (
        <React.Fragment key={step.number}>
          {/* Part header */}
          {step.part && (
            <div className={`${idx === 0 ? "mb-8" : "mt-12 mb-8"} pb-3 border-b-2 border-orange-100`}>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-500">{step.part}</span>
            </div>
          )}

          {/* Step */}
          <div className="flex gap-6 pb-10">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {step.number}
              </div>
              {idx < steps.length - 1 && <div className="w-px flex-1 bg-zinc-100 mt-3" />}
            </div>
            <div className="flex-1 pt-1.5 pb-2">
              <h3 className="font-bold text-zinc-900 text-lg mb-3">{step.title}</h3>

              {"infoBox" in step && step.infoBox?.type === "blue" && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-blue-800 text-sm leading-relaxed">
                    <span className="font-bold">ℹ️ Note: </span>{step.infoBox.text}
                  </p>
                </div>
              )}

              {"warningBox" in step && step.warningBox && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <p className="text-yellow-800 text-sm leading-relaxed">
                    <span className="font-bold">⚠️ Watch out: </span>{step.warningBox}
                  </p>
                </div>
              )}

              {step.content}

              {"successBox" in step && step.successBox && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                  <p className="text-green-800 text-sm leading-relaxed">
                    <span className="font-bold">✓ </span>{step.successBox}
                  </p>
                </div>
              )}
            </div>
          </div>
        </React.Fragment>
      ))}

      {/* Key Takeaway */}
      <div className="mt-4 bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🔑</span>
          <span className="font-bold text-orange-700 text-lg">Key Takeaway</span>
        </div>
        <p className="text-orange-900 leading-relaxed">
          Plan before you build. Write a spec. Build one feature at a time. Test each one before moving on. Commit constantly. A project built this way is ten times more likely to actually get finished than one built by jumping straight in.
        </p>
      </div>

      {/* Celebration banner */}
      <div className="mt-8 bg-orange-500 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-white mb-3">You have completed Claude Quest!</h2>
        <p className="text-orange-100 leading-relaxed text-lg mb-1">You now have everything you need to build real things with Claude Code.</p>
        <p className="text-orange-100 leading-relaxed text-lg font-semibold">Start your next project. The world needs what you are going to build.</p>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
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
          <Lesson2Content />
        ) : id === "3" ? (
          <Lesson3Content />
        ) : id === "4" ? (
          <Lesson4Content />
        ) : id === "5" ? (
          <Lesson5Content />
        ) : id === "6" ? (
          <Lesson6Content />
        ) : id === "7" ? (
          <Lesson7Content />
        ) : id === "8" ? (
          <Lesson8Content />
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
