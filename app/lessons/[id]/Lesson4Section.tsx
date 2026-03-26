"use client";

import MissionComplete from "@/components/MissionComplete";
import StepCheckbox from "@/components/StepCheckbox";
import CopyButton from "./CopyButton";
import Link from "next/link";

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

export default function Lesson4Section() {
  return (
    <>
      <MissionComplete lessonId={4} totalSteps={14} />

      <div className="space-y-14">

        {/* ── PART 1 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 1: Ask Claude Code to Read Your Project</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={4} stepId="step-1" stepNumber={1} title="Navigate to your project folder">
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
          </StepCheckbox>

          <StepCheckbox lessonId={4} stepId="step-2" stepNumber={2} title="Ask Claude Code to explain your project">
            <p className="text-zinc-600 leading-relaxed mb-4">Before changing anything, type this:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Tell me how this project works. Explain it like I have no coding background.</code>
              <CopyButton text="Tell me how this project works. Explain it like I have no coding background." />
            </div>
            <ScanFilesIllustration />
            <p className="text-zinc-500 text-sm leading-relaxed mt-4">Claude Code will scan all your files and give you a plain English overview. This takes 1 to 2 minutes.</p>
          </StepCheckbox>

          <StepCheckbox lessonId={4} stepId="step-3" stepNumber={3} title="Ask follow up questions">
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
          </StepCheckbox>
        </section>

        {/* ── PART 2 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 2: Reference Specific Files</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={4} stepId="step-4" stepNumber={4} title="Point Claude Code to a specific file">
            <p className="text-zinc-600 leading-relaxed mb-4">
              Reference the exact file using the <code className="bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-xs font-mono">@</code> symbol:
            </p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Update the title in @src/pages/Home.tsx to say &quot;Welcome to My App&quot;</code>
              <CopyButton text='Update the title in @src/pages/Home.tsx to say "Welcome to My App"' />
            </div>
            <FileRefIllustration />
            <p className="text-zinc-500 text-sm mt-4">This tells Claude Code exactly where to look instead of guessing.</p>
          </StepCheckbox>

          <StepCheckbox lessonId={4} stepId="step-5" stepNumber={5} title="Review the diff before approving">
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
          </StepCheckbox>

          <StepCheckbox lessonId={4} stepId="step-6" stepNumber={6} title="Approve or reject the change">
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
          </StepCheckbox>
        </section>

        {/* ── PART 3 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 3: Give Claude Code a Memory with CLAUDE.md</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={4} stepId="step-7" stepNumber={7} title="What is CLAUDE.md?">
            <p className="text-zinc-600 leading-relaxed mb-4">
              Every new Claude Code session starts fresh with no memory of your project. CLAUDE.md fixes that.
            </p>
            <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
              <span className="text-blue-500 text-base shrink-0 mt-0.5">ℹ</span>
              <div className="text-blue-800 text-sm leading-relaxed">
                <span className="font-semibold">What is CLAUDE.md?</span> It is a file Claude Code reads automatically at the start of every session. Think of it as leaving a note for Claude Code every time it shows up for work. It can include your project description, your preferences, and rules for how you want it to behave.
              </div>
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={4} stepId="step-8" stepNumber={8} title="Create your CLAUDE.md file">
            <p className="text-zinc-600 leading-relaxed mb-4">In Claude Code, type:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">/init</code>
              <CopyButton text="/init" />
            </div>
            <InitIllustration />
            <p className="text-zinc-500 text-sm mt-4">Claude Code will scan your project and create the file automatically.</p>
          </StepCheckbox>

          <StepCheckbox lessonId={4} stepId="step-9" stepNumber={9} title="Add your own instructions">
            <p className="text-zinc-600 leading-relaxed mb-4">Tell Claude Code how you want it to work:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all">
                Update CLAUDE.md to include these rules: always explain what you are about to do before doing it, make one change at a time, write simple code a beginner can understand, always push to GitHub after completing a feature.
              </code>
              <CopyButton text="Update CLAUDE.md to include these rules: always explain what you are about to do before doing it, make one change at a time, write simple code a beginner can understand, always push to GitHub after completing a feature." />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={4} stepId="step-10" stepNumber={10} title="Check your CLAUDE.md file">
            <p className="text-zinc-600 leading-relaxed mb-4">Ask Claude Code to show you what is in it:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Show me what is in the CLAUDE.md file</code>
              <CopyButton text="Show me what is in the CLAUDE.md file" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">You can update it any time as your project grows.</p>
          </StepCheckbox>
        </section>

        {/* ── PART 4 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 4: Use Plan Mode Before Big Changes</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={4} stepId="step-11" stepNumber={11} title="What is Plan Mode?">
            <p className="text-zinc-600 leading-relaxed">
              Plan Mode tells Claude Code to think and plan without touching any files. Use it whenever you are about to make a big change.
            </p>
          </StepCheckbox>

          <StepCheckbox lessonId={4} stepId="step-12" stepNumber={12} title="Enter Plan Mode">
            <p className="text-zinc-600 leading-relaxed mb-4">
              Press <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Shift</kbd> and <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Tab</kbd> at the same time. You will see the mode switch to Plan. Now describe what you want:
            </p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-5">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all">I want to add a dark mode toggle to my app. Create a plan for how to do this without breaking anything.</code>
              <CopyButton text="I want to add a dark mode toggle to my app. Create a plan for how to do this without breaking anything." />
            </div>
            <PlanModeIllustration />
          </StepCheckbox>

          <StepCheckbox lessonId={4} stepId="step-13" stepNumber={13} title="Review the plan then approve">
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
          </StepCheckbox>

          <StepCheckbox lessonId={4} stepId="step-14" stepNumber={14} title="Push your changes">
            <p className="text-zinc-600 leading-relaxed mb-4">Once everything looks good in your browser:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Commit and push all changes to GitHub</code>
              <CopyButton text="Commit and push all changes to GitHub" />
            </div>
          </StepCheckbox>
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
    </>
  );
}
