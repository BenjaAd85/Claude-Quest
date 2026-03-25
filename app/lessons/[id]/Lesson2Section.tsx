"use client";

import MissionComplete from "@/components/MissionComplete";
import StepCheckbox from "@/components/StepCheckbox";
import CopyButton from "./CopyButton";
import Link from "next/link";

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

export default function Lesson2Section() {
  return (
    <>
      <MissionComplete lessonId={2} totalSteps={14} />

      <div className="space-y-14">

        {/* ── PART 0 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 0: Choose What to Build</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={2} stepId="step-1" stepNumber={1} title="Decide what you're building">
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
          </StepCheckbox>
        </section>

        {/* ── PART 1 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 1: Install Everything</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={2} stepId="step-2" stepNumber={2} title="Install Node.js">
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
          </StepCheckbox>

          <StepCheckbox lessonId={2} stepId="step-3" stepNumber={3} title="Install Claude Code">
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
          </StepCheckbox>
        </section>

        {/* ── PART 2 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 2: Build Your First Project</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={2} stepId="step-4" stepNumber={4} title="Create a project folder">
            <p className="text-zinc-600 leading-relaxed mb-4">In Terminal, paste:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">mkdir ~/my-first-app && cd ~/my-first-app</code>
              <CopyButton text="mkdir ~/my-first-app && cd ~/my-first-app" />
            </div>
            <p className="text-zinc-500 text-sm">This creates a folder called <code className="text-zinc-700 bg-zinc-100 px-1.5 py-0.5 rounded text-xs">my-first-app</code> and opens it.</p>
          </StepCheckbox>

          <StepCheckbox lessonId={2} stepId="step-5" stepNumber={5} title="Launch Claude Code">
            <p className="text-zinc-600 leading-relaxed mb-4">Type:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">claude</code>
              <CopyButton text="claude" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">You&apos;ll see the Claude Code prompt appear.</p>
          </StepCheckbox>

          <StepCheckbox lessonId={2} stepId="step-6" stepNumber={6} title="Describe what you want">
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
          </StepCheckbox>

          <StepCheckbox lessonId={2} stepId="step-7" stepNumber={7} title="View your app locally">
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
          </StepCheckbox>
        </section>

        {/* ── PART 3 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 3: Put It on GitHub</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={2} stepId="step-8" stepNumber={8} title="Create a GitHub account">
            <p className="text-zinc-600 leading-relaxed mb-4">Go to GitHub and sign up for a free account.</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="inline-block text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-lg hover:bg-zinc-700 transition-colors">
              github.com →
            </a>
          </StepCheckbox>

          <StepCheckbox lessonId={2} stepId="step-9" stepNumber={9} title="Create a new repository">
            <p className="text-zinc-600 leading-relaxed mb-5">
              Click <span className="font-medium text-zinc-800">New repository</span>. Fill in the repository name, choose Public or Private, click Create repository.
            </p>
            <GitHubNewRepoIllustration />
          </StepCheckbox>

          <StepCheckbox lessonId={2} stepId="step-10" stepNumber={10} title="Create a GitHub access token">
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
          </StepCheckbox>

          <StepCheckbox lessonId={2} stepId="step-11" stepNumber={11} title="Push your project to GitHub">
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
          </StepCheckbox>
        </section>

        {/* ── PART 4 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 4: Make It Live</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={2} stepId="step-12" stepNumber={12} title="Create a Vercel account">
            <p className="text-zinc-600 leading-relaxed mb-4">
              Go to Vercel and click Sign Up. Choose <span className="font-medium text-zinc-800">Continue with GitHub</span>.
            </p>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
              className="inline-block text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-lg hover:bg-zinc-700 transition-colors">
              vercel.com →
            </a>
          </StepCheckbox>

          <StepCheckbox lessonId={2} stepId="step-13" stepNumber={13} title="Import your project">
            <p className="text-zinc-600 leading-relaxed mb-5">
              Click <span className="font-medium text-zinc-800">Add New Project</span> then Import. Find your repository and click Import. Leave settings as default and click Deploy.
            </p>
            <VercelImportIllustration />
          </StepCheckbox>
        </section>

        {/* ── PART 5 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 5: Making Updates</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={2} stepId="step-14" stepNumber={14} title="How to update your live app">
            <p className="text-zinc-600 leading-relaxed mb-4">
              Tell Claude Code what to change. When happy, type:
            </p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Commit and push all changes to GitHub</code>
              <CopyButton text="Commit and push all changes to GitHub" />
            </div>
            <p className="text-zinc-500 text-sm">Vercel redeploys automatically.</p>
          </StepCheckbox>
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
    </>
  );
}
