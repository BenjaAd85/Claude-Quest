"use client";

import MissionComplete from "@/components/MissionComplete";
import StepCheckbox from "@/components/StepCheckbox";
import CopyButton from "./CopyButton";

export default function Lesson1SetupSection() {
  return (
    <>
      <MissionComplete lessonId={1} totalSteps={4} />

      <div className="space-y-4">

        {/* Step 1 */}
        <StepCheckbox lessonId={1} stepId="step-1" stepNumber={1} title="Install Node.js">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <p className="text-sm" style={{ color: "#a3aac4" }}>Required to run Claude Code on your computer.</p>
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
              style={{ background: "#192540", color: "#cc97ff", border: "1px solid rgba(204,151,255,0.3)" }}
            >
              nodejs.org →
            </a>
          </div>
        </StepCheckbox>

        {/* Step 2 */}
        <StepCheckbox lessonId={1} stepId="step-2" stepNumber={2} title="Create a GitHub account">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <p className="text-sm" style={{ color: "#a3aac4" }}>Free cloud storage for your project files.</p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
              style={{ background: "#192540", color: "#cc97ff", border: "1px solid rgba(204,151,255,0.3)" }}
            >
              github.com →
            </a>
          </div>
        </StepCheckbox>

        {/* Step 3 */}
        <StepCheckbox lessonId={1} stepId="step-3" stepNumber={3} title="Create a Vercel account">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <p className="text-sm" style={{ color: "#a3aac4" }}>Sign up with GitHub to connect both at once.</p>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
              style={{ background: "#192540", color: "#cc97ff", border: "1px solid rgba(204,151,255,0.3)" }}
            >
              vercel.com →
            </a>
          </div>
        </StepCheckbox>

        {/* Step 4 */}
        <StepCheckbox lessonId={1} stepId="step-4" stepNumber={4} title="Install Claude Code">
          <p className="text-sm mb-3" style={{ color: "#a3aac4" }}>Open Terminal and paste:</p>
          <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-4 py-3">
            <code className="text-green-400 text-xs font-mono flex-1 select-all">
              npm install -g @anthropic-ai/claude-code
            </code>
            <CopyButton text="npm install -g @anthropic-ai/claude-code" />
          </div>
        </StepCheckbox>

      </div>
    </>
  );
}
