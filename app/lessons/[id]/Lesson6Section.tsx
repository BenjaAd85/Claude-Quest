"use client";

import MissionComplete from "@/components/MissionComplete";
import StepCheckbox from "@/components/StepCheckbox";
import CopyButton from "./CopyButton";
import Link from "next/link";

export default function Lesson6Section() {
  return (
    <>
      <MissionComplete lessonId={6} totalSteps={17} />

      <div className="space-y-14">

        {/* ── PART 1 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 1: Investigate Before You Fix</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={6} stepId="step-1" stepNumber={1} title="Never jump straight to fixing">
            <p className="text-zinc-600 leading-relaxed mb-4">
              When something breaks, the instinct is to ask Claude Code to fix it immediately. Resist that.
            </p>
            <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
              <span className="text-yellow-500 text-base shrink-0">⚠️</span>
              <p className="text-yellow-800 text-sm font-medium">
                A fast fix often patches the symptom and leaves the real problem hiding underneath, ready to break again later. Always investigate first.
              </p>
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={6} stepId="step-2" stepNumber={2} title="Enter Plan Mode before touching anything">
            <p className="text-zinc-600 leading-relaxed mb-4">
              Press <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Shift</kbd> and <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Tab</kbd> at the same time to enter Plan Mode. You will see the blue PLAN MODE badge appear.
            </p>
            <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
              <span className="text-blue-500 text-base shrink-0 mt-0.5">ℹ</span>
              <div className="text-blue-800 text-sm leading-relaxed">
                <span className="font-semibold">Plan Mode cannot change any files.</span> Claude Code can read files and trace the problem but it cannot modify, create, or delete a single file. This is your safety net while investigating.
              </div>
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={6} stepId="step-3" stepNumber={3} title="Describe the bug clearly">
            <p className="text-zinc-600 leading-relaxed mb-4">The more context you give, the faster Claude Code finds the root cause:</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all whitespace-pre-line">{`There is a bug where [describe what is happening].\nIt started happening after [what you last changed].\nHere is the error message: [paste the full error]\nPlease investigate and tell me what is causing it before doing anything.`}</code>
              <CopyButton text={"There is a bug where [describe what is happening].\nIt started happening after [what you last changed].\nHere is the error message: [paste the full error]\nPlease investigate and tell me what is causing it before doing anything."} />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={6} stepId="step-4" stepNumber={4} title="Read the investigation report">
            <p className="text-zinc-600 leading-relaxed mb-4">Claude Code will give you a breakdown of what it found. If you do not understand something, ask:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Can you explain that in simpler terms?</code>
              <CopyButton text="Can you explain that in simpler terms?" />
            </div>
          </StepCheckbox>
        </section>

        {/* ── PART 2 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 2: The Two-Phase Approach</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={6} stepId="step-5" stepNumber={5} title="Phase 1: Investigate in Plan Mode">
            <p className="text-zinc-600 leading-relaxed mb-4">Always start here. Paste the error and ask Claude Code to trace it:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">Look at this error and trace where it comes from across all my files. Do not change anything yet.</code>
              <CopyButton text="Look at this error and trace where it comes from across all my files. Do not change anything yet." />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={6} stepId="step-6" stepNumber={6} title="Phase 2: Fix with approval">
            <p className="text-zinc-600 leading-relaxed mb-4">
              Once you understand what is wrong, exit Plan Mode by pressing <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Shift</kbd> and <kbd className="bg-zinc-100 border border-zinc-300 rounded px-1.5 py-0.5 text-xs font-mono text-zinc-700">Tab</kbd> again. Then tell Claude Code:
            </p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Go ahead and apply the fix we discussed</code>
              <CopyButton text="Go ahead and apply the fix we discussed" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">Claude Code will show you exactly what it plans to change. Review the diff, then approve.</p>
          </StepCheckbox>

          <StepCheckbox lessonId={6} stepId="step-7" stepNumber={7} title="Test it immediately">
            <p className="text-zinc-600 leading-relaxed mb-4">After every fix, check if it worked. Open your browser and go to:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">http://localhost:3000</code>
              <CopyButton text="http://localhost:3000" />
            </div>
            <p className="text-zinc-500 text-sm mt-3">If the bug is gone, great. If a new error appears, go back to Step 2.</p>
          </StepCheckbox>
        </section>

        {/* ── PART 3 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 3: How to Describe Bugs Well</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={6} stepId="step-8" stepNumber={8} title="Always include the full error message">
            <p className="text-zinc-600 leading-relaxed mb-4">Do not paraphrase the error. Copy the entire thing and paste it in. Even the parts that look like gibberish can point Claude Code to the exact line where things went wrong.</p>
            <div className="flex items-start gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 leading-relaxed select-all whitespace-pre-line">{`Here is the full error:\n[paste the complete error message]`}</code>
              <CopyButton text={"Here is the full error:\n[paste the complete error message]"} />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={6} stepId="step-9" stepNumber={9} title="Tell it what changed recently">
            <p className="text-zinc-600 leading-relaxed mb-4">Bugs almost always appear after something changes. This narrows the investigation dramatically:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">This error started happening after I added a login button to the homepage</code>
              <CopyButton text="This error started happening after I added a login button to the homepage" />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={6} stepId="step-10" stepNumber={10} title="Ask it to trace the execution path">
            <p className="text-zinc-600 leading-relaxed mb-4">For bugs that are hard to find, ask Claude Code to follow the code step by step:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">Trace through exactly what happens when a user clicks the submit button and tell me where it goes wrong</code>
              <CopyButton text="Trace through exactly what happens when a user clicks the submit button and tell me where it goes wrong" />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={6} stepId="step-11" stepNumber={11} title="Ask for the root cause, not just the fix">
            <p className="text-zinc-600 leading-relaxed mb-4">Always ask:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-4">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Explain why this bug happened and how to prevent it happening again</code>
              <CopyButton text="Explain why this bug happened and how to prevent it happening again" />
            </div>
            <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
              <span className="text-green-500 text-base shrink-0">✓</span>
              <p className="text-green-800 text-sm font-medium">Every bug you understand properly makes you a better builder.</p>
            </div>
          </StepCheckbox>
        </section>

        {/* ── PART 4 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 4: Common Bug Types</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={6} stepId="step-12" stepNumber={12} title="Something is not showing up on screen">
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">The user list is not showing on the page. Trace where the data comes from and find out why it is not displaying.</code>
              <CopyButton text="The user list is not showing on the page. Trace where the data comes from and find out why it is not displaying." />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={6} stepId="step-13" stepNumber={13} title="Something works sometimes but not always">
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">This bug only happens when I submit the form twice quickly. It does not happen when I submit slowly. Investigate why.</code>
              <CopyButton text="This bug only happens when I submit the form twice quickly. It does not happen when I submit slowly. Investigate why." />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={6} stepId="step-14" stepNumber={14} title="Something broke after an update">
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">Everything was working yesterday. Today I added dark mode and now the navigation is broken. Compare what changed and find the conflict.</code>
              <CopyButton text="Everything was working yesterday. Today I added dark mode and now the navigation is broken. Compare what changed and find the conflict." />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={6} stepId="step-15" stepNumber={15} title="You want to prevent future bugs">
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3 mb-2">
              <code className="text-green-400 text-sm font-mono flex-1 select-all leading-relaxed">What validation or error handling can we add to make sure this type of bug cannot happen again?</code>
              <CopyButton text="What validation or error handling can we add to make sure this type of bug cannot happen again?" />
            </div>
            <p className="text-zinc-500 text-sm my-3">Then:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Update CLAUDE.md with a note about this bug and how to prevent it</code>
              <CopyButton text="Update CLAUDE.md with a note about this bug and how to prevent it" />
            </div>
          </StepCheckbox>
        </section>

        {/* ── PART 5 ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Part 5: Save Your Work</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <StepCheckbox lessonId={6} stepId="step-16" stepNumber={16} title="Commit after every successful fix">
            <p className="text-zinc-600 leading-relaxed mb-4">The moment a bug is fixed and tested, save it immediately:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Commit this bug fix with a descriptive message and push to GitHub</code>
              <CopyButton text="Commit this bug fix with a descriptive message and push to GitHub" />
            </div>
          </StepCheckbox>

          <StepCheckbox lessonId={6} stepId="step-17" stepNumber={17} title="Write a clear commit message">
            <p className="text-zinc-600 leading-relaxed mb-4">Ask Claude Code to write a commit message that explains what was broken and how it was fixed:</p>
            <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
              <code className="text-green-400 text-sm font-mono flex-1 select-all">Write a commit message that explains the bug we just fixed and what caused it</code>
              <CopyButton text="Write a commit message that explains the bug we just fixed and what caused it" />
            </div>
          </StepCheckbox>
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
    </>
  );
}
