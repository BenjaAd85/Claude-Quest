"use client";

import MissionComplete from "@/components/MissionComplete";
import StepCheckbox from "@/components/StepCheckbox";
import CopyButton from "./CopyButton";
import Link from "next/link";

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

export default function Lesson3Section() {
  return (
    <>
      <MissionComplete lessonId={3} totalSteps={14} />

      <div className="space-y-14">

        {/* ── PART 1 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 1: Do Not Panic</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={3} stepId="step-1" stepNumber={1} title="Read the error out loud">
            <p className="text-zinc-600 leading-relaxed">
              Before doing anything, read the error message. You do not need to understand it. Just look for any words you recognise - a file name, a step you just did, a tool you used. Errors almost always tell you exactly what went wrong.
            </p>
          </StepCheckbox>

          <StepCheckbox lessonId={3} stepId="step-2" stepNumber={2} title="Do not close Terminal">
            <p className="text-zinc-600 leading-relaxed mb-4">
              When something breaks, the instinct is to close everything and start again. Do not. The error message in Terminal is your best clue. Keep it open.
            </p>
            <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
              <span className="text-yellow-500 text-base shrink-0">⚠️</span>
              <p className="text-yellow-800 text-sm font-medium">
                Do not close Terminal when you see an error. The message is your best clue.
              </p>
            </div>
          </StepCheckbox>
        </section>

        {/* ── PART 2 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 2: Let Claude Code Fix It</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={3} stepId="step-3" stepNumber={3} title="Paste the error into Claude Code">
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
          </StepCheckbox>

          <StepCheckbox lessonId={3} stepId="step-4" stepNumber={4} title="If you do not understand the fix, ask">
            <p className="text-zinc-600 leading-relaxed mb-4">Type:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Can you explain what you just did and why in simple terms?</code>
              <CopyButton text="Can you explain what you just did and why in simple terms?" />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={3} stepId="step-5" stepNumber={5} title="Test it again">
            <p className="text-zinc-600 leading-relaxed mb-4">Open your browser and go to:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">http://localhost:3000</code>
              <CopyButton text="http://localhost:3000" />
            </div>
            <p className="text-zinc-500 text-sm">If the app loads, the error is fixed. If you see a new error, repeat Step 3.</p>
          </StepCheckbox>
        </section>

        {/* ── PART 3 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 3: When Claude Code Goes in Circles</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={3} stepId="step-6" stepNumber={6} title="Stop Claude Code">
            <p className="text-zinc-600 leading-relaxed mb-4">
              Press <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Ctrl</kbd> and <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">C</kbd> at the same time. This stops whatever Claude Code is doing.
            </p>
            <CtrlCIllustration />
          </StepCheckbox>

          <StepCheckbox lessonId={3} stepId="step-7" stepNumber={7} title="Start a fresh session">
            <p className="text-zinc-600 leading-relaxed mb-4">Type:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-5">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">/clear</code>
              <CopyButton text="/clear" />
            </div>
            <ClearSessionIllustration />
            <p className="text-zinc-500 text-sm mt-4">This clears the conversation so Claude Code starts fresh.</p>
          </StepCheckbox>

          <StepCheckbox lessonId={3} stepId="step-8" stepNumber={8} title="Describe the problem from scratch">
            <p className="text-zinc-600 leading-relaxed mb-4">Type:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all whitespace-pre-line">
                {"I was trying to [describe what you wanted].\nIt was working before but now [describe what is broken].\nHere is the error: [paste error]\nCan you fix this step by step?"}
              </code>
              <CopyButton text={"I was trying to [describe what you wanted].\nIt was working before but now [describe what is broken].\nHere is the error: [paste error]\nCan you fix this step by step?"} />
            </div>
          </StepCheckbox>
        </section>

        {/* ── PART 4 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 4: When Your App Will Not Start</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={3} stepId="step-9" stepNumber={9} title="Check if your local server is running">
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
          </StepCheckbox>

          <StepCheckbox lessonId={3} stepId="step-10" stepNumber={10} title="If npm run dev shows an error">
            <p className="text-zinc-600 leading-relaxed mb-4">Paste it into Claude Code:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all">When I run npm run dev I get this error. Please fix it: [paste error]</code>
              <CopyButton text="When I run npm run dev I get this error. Please fix it: [paste error]" />
            </div>
          </StepCheckbox>
        </section>

        {/* ── PART 5 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 5: The Nuclear Option</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={3} stepId="step-11" stepNumber={11} title="Save your work first">
            <p className="text-zinc-600 leading-relaxed mb-4">Tell Claude Code:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-5">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all">Commit and push all current changes to GitHub even if things are broken</code>
              <CopyButton text="Commit and push all current changes to GitHub even if things are broken" />
            </div>
            <GitHubCommitBadgeIllustration />
          </StepCheckbox>

          <StepCheckbox lessonId={3} stepId="step-12" stepNumber={12} title="Start a completely new Claude Code session">
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
          </StepCheckbox>
        </section>

        {/* ── PART 6 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 6: Save Your Progress</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={3} stepId="step-13" stepNumber={13} title="Push your fixes to GitHub">
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
          </StepCheckbox>

          <StepCheckbox lessonId={3} stepId="step-14" stepNumber={14} title="Verify your live site">
            <p className="text-zinc-600 leading-relaxed">
              Go to your Vercel URL, for example{" "}
              <span className="font-mono text-sm text-zinc-800 bg-zinc-100 px-1.5 py-0.5 rounded">your-app.vercel.app</span>,
              {" "}and confirm it looks correct.
            </p>
          </StepCheckbox>
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
    </>
  );
}
