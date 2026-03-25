"use client";

import React from "react";
import MissionComplete from "@/components/MissionComplete";
import StepCheckbox from "@/components/StepCheckbox";
import CopyButton from "./CopyButton";
import Link from "next/link";

export default function Lesson7Section() {
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
            Bugs almost always appear after something changes. This one sentence dramatically narrows Claude&apos;s investigation:
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
            Starting one task, asking something unrelated, then going back to the first task. Claude&apos;s context fills with irrelevant information and performance drops.
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
    <>
      <MissionComplete lessonId={7} totalSteps={18} />

      <div className="space-y-0">
        {steps.map((step, idx) => (
          <React.Fragment key={step.number}>
            {/* Part header */}
            {step.part && (
              <div className={`${idx === 0 ? "mb-8" : "mt-12 mb-8"} pb-3 border-b-2 border-orange-100`}>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500">{step.part}</span>
              </div>
            )}

            <StepCheckbox lessonId={7} stepId={`step-${step.number}`} stepNumber={step.number} title={step.title}>
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
            </StepCheckbox>
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
    </>
  );
}
