"use client";

import MissionComplete from "@/components/MissionComplete";
import StepCheckbox from "@/components/StepCheckbox";
import CopyButton from "./CopyButton";
import Link from "next/link";

export default function Lesson5Section() {
  return (
    <>
      <MissionComplete lessonId={5} totalSteps={19} />

      <div className="space-y-14">

        {/* ── PART 1 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 1: The Essential Commands</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={5} stepId="step-1" stepNumber={1} title="Start Claude Code">
            <p className="text-zinc-600 leading-relaxed mb-4">Navigate to your project and launch Claude Code:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">cd ~/my-first-app</code>
              <CopyButton text="cd ~/my-first-app" />
            </div>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">claude</code>
              <CopyButton text="claude" />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-2" stepNumber={2} title="Continue where you left off">
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
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-3" stepNumber={3} title="Run a quick one-off task">
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
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-4" stepNumber={4} title="Exit Claude Code">
            <p className="text-zinc-600 leading-relaxed mb-4">When you are done:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">exit</code>
              <CopyButton text="exit" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">
              or press <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Ctrl</kbd> and <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">C</kbd> at the same time.
            </p>
          </StepCheckbox>
        </section>

        {/* ── PART 2 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 2: Asking Claude Code to Run Things for You</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={5} stepId="step-5" stepNumber={5} title="Start your app">
            <p className="text-zinc-600 leading-relaxed mb-4">Instead of typing <code className="bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-xs font-mono">npm run dev</code> yourself, tell Claude Code:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Start the app locally</code>
              <CopyButton text="Start the app locally" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code will run the correct command and tell you what URL to open.</p>
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-6" stepNumber={6} title="Install a package">
            <p className="text-zinc-600 leading-relaxed mb-4">Describe what you need:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Install the package needed to add charts to my app</code>
              <CopyButton text="Install the package needed to add charts to my app" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code will figure out the correct package name and install it.</p>
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-7" stepNumber={7} title="Check what you changed">
            <p className="text-zinc-600 leading-relaxed mb-4">Ask:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">What files have I changed?</code>
              <CopyButton text="What files have I changed?" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code runs <code className="bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-xs font-mono">git status</code> behind the scenes and gives you a plain English summary.</p>
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-8" stepNumber={8} title="Commit and push in one step">
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Commit my changes with a descriptive message and push to GitHub</code>
              <CopyButton text="Commit my changes with a descriptive message and push to GitHub" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code stages the files, writes a commit message, commits, and pushes. All in one go.</p>
          </StepCheckbox>
        </section>

        {/* ── PART 3 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 3: Slash Commands</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={5} stepId="step-9" stepNumber={9} title="See all available commands">
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
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-10" stepNumber={10} title="Clear the conversation">
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
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-11" stepNumber={11} title="Create project memory">
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">/init</code>
              <CopyButton text="/init" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Creates a CLAUDE.md file so Claude Code remembers your project across sessions. Covered in detail in Lesson 4.</p>
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-12" stepNumber={12} title="Check Claude Code is working properly">
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">/doctor</code>
              <CopyButton text="/doctor" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code will check its own installation and tell you if anything needs fixing.</p>
          </StepCheckbox>
        </section>

        {/* ── PART 4 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 4: Git Commands Made Easy</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={5} stepId="step-13" stepNumber={13} title="Create a new branch">
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Create a new branch called feature/dark-mode</code>
              <CopyButton text="Create a new branch called feature/dark-mode" />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-14" stepNumber={14} title="See recent changes">
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Show me the last 5 commits</code>
              <CopyButton text="Show me the last 5 commits" />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-15" stepNumber={15} title="Undo a mistake">
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Undo the last change I made to the homepage file</code>
              <CopyButton text="Undo the last change I made to the homepage file" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code will figure out the right git command and ask for your approval before doing anything.</p>
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-16" stepNumber={16} title="Push everything live">
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
          </StepCheckbox>
        </section>

        {/* ── PART 5 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 5: Pro Tips</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={5} stepId="step-17" stepNumber={17} title="Be specific for better results">
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
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-18" stepNumber={18} title="Break big tasks into steps">
            <p className="text-zinc-600 leading-relaxed mb-4">Instead of one big request, give Claude Code a numbered list:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all whitespace-pre-line">{`1. Add a dark mode toggle to the navigation bar\n2. Make sure it saves the user preference\n3. Test that it works on mobile too`}</code>
              <CopyButton text={"1. Add a dark mode toggle to the navigation bar\n2. Make sure it saves the user preference\n3. Test that it works on mobile too"} />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={5} stepId="step-19" stepNumber={19} title="Ask Claude Code what it can do">
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Can you help me set up automated testing for my app?</code>
              <CopyButton text="Can you help me set up automated testing for my app?" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code will tell you what is possible and how to approach it.</p>
          </StepCheckbox>
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
    </>
  );
}
