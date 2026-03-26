"use client";

import React from "react";
import MissionComplete from "@/components/MissionComplete";
import StepCheckbox from "@/components/StepCheckbox";
import CopyButton from "./CopyButton";

export default function Lesson8Section() {
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
    <>
      <MissionComplete lessonId={8} totalSteps={18} />

      <div className="space-y-0">
        {steps.map((step, idx) => (
          <React.Fragment key={step.number}>
            {/* Part header */}
            {step.part && (
              <div className={`${idx === 0 ? "mb-8" : "mt-12 mb-8"} pb-3 border-b-2 border-orange-100`}>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500">{step.part}</span>
              </div>
            )}

            <StepCheckbox lessonId={8} stepId={`step-${step.number}`} stepNumber={step.number} title={step.title}>
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
    </>
  );
}
