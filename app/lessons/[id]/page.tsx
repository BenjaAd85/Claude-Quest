import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import CopyButton from "./CopyButton";

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
    title: "Coming Soon",
    description: "The next lesson is on its way.",
    content: "Check back soon for Lesson 3.",
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

        <div className="space-y-4">

          {/* Step 1 */}
          <div className="flex gap-4 p-5 rounded-2xl border border-zinc-100 bg-white">
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-7 h-7 rounded-full bg-green-100 text-green-600 text-xs font-bold flex items-center justify-center">1</div>
              <div className="w-px flex-1 bg-zinc-100" />
            </div>
            <div className="flex-1 pt-0.5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-semibold text-zinc-900 text-sm">Install Node.js</p>
                  <p className="text-zinc-500 text-sm mt-0.5">Required to run Claude Code on your computer.</p>
                </div>
                <a
                  href="https://nodejs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  nodejs.org →
                </a>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 p-5 rounded-2xl border border-zinc-100 bg-white">
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-7 h-7 rounded-full bg-green-100 text-green-600 text-xs font-bold flex items-center justify-center">2</div>
              <div className="w-px flex-1 bg-zinc-100" />
            </div>
            <div className="flex-1 pt-0.5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-semibold text-zinc-900 text-sm">Create a GitHub account</p>
                  <p className="text-zinc-500 text-sm mt-0.5">Free cloud storage for your project files.</p>
                </div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  github.com →
                </a>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 p-5 rounded-2xl border border-zinc-100 bg-white">
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-7 h-7 rounded-full bg-green-100 text-green-600 text-xs font-bold flex items-center justify-center">3</div>
              <div className="w-px flex-1 bg-zinc-100" />
            </div>
            <div className="flex-1 pt-0.5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-semibold text-zinc-900 text-sm">Create a Vercel account</p>
                  <p className="text-zinc-500 text-sm mt-0.5">Sign up with GitHub to connect both at once.</p>
                </div>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  vercel.com →
                </a>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4 p-5 rounded-2xl border border-zinc-100 bg-white">
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-7 h-7 rounded-full bg-green-100 text-green-600 text-xs font-bold flex items-center justify-center">4</div>
            </div>
            <div className="flex-1 pt-0.5">
              <p className="font-semibold text-zinc-900 text-sm">Install Claude Code</p>
              <p className="text-zinc-500 text-sm mt-0.5 mb-3">Open Terminal and paste:</p>
              <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
                <code className="text-green-400 text-xs font-mono flex-1 select-all">
                  npm install -g @anthropic-ai/claude-code
                </code>
                <CopyButton text="npm install -g @anthropic-ai/claude-code" />
              </div>
            </div>
          </div>

        </div>

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

/* ─── Page ───────────────────────────────────────────────────── */

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

        {/* Lesson-specific content */}
        {id === "1" ? (
          <Lesson1Content />
        ) : id === "2" ? (
          <Lesson2Content />
        ) : (
          <div className="prose prose-zinc max-w-none">
            {lesson.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-zinc-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-16 pt-8 border-t border-zinc-100">
          {prevId ? (
            <Link href={`/lessons/${prevId}`} className="text-sm text-orange-500 hover:text-orange-600 font-medium">
              ← Lesson {prevId}
            </Link>
          ) : (
            <span />
          )}
          {nextId ? (
            <Link href={`/lessons/${nextId}`} className="text-sm text-orange-500 hover:text-orange-600 font-medium">
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
