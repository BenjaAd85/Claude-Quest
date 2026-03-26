"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/supabase";

interface StepCheckboxProps {
  lessonId: number;
  stepId: string;
  stepNumber: number;
  title: string;
  children: React.ReactNode;
}

export default function StepCheckbox({
  lessonId,
  stepId,
  stepNumber,
  title,
  children,
}: StepCheckboxProps) {
  const { user, completeStep } = useAuth();
  const [checked, setChecked] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showSignInHint, setShowSignInHint] = useState(false);

  // Load saved progress when user is known
  useEffect(() => {
    if (!user) {
      setChecked(false);
      return;
    }
    supabase
      .from("user_progress")
      .select("id")
      .eq("user_id", user.id)
      .eq("lesson_id", lessonId)
      .eq("step_id", stepId)
      .maybeSingle()
      .then(({ data }) => {
        if (data) setChecked(true);
      });
  }, [user, lessonId, stepId]);

  const handleCheck = async () => {
    if (checked || saving) return;

    if (!user) {
      setShowSignInHint(true);
      setTimeout(() => setShowSignInHint(false), 3000);
      return;
    }

    setSaving(true);
    setChecked(true); // Optimistic

    await completeStep(lessonId, stepId);

    // Notify MissionComplete that a step was finished
    window.dispatchEvent(
      new CustomEvent("step-completed", { detail: { lessonId, stepId } })
    );

    setSaving(false);
  };

  return (
    <div
      className="rounded-2xl p-5 transition-all"
      style={{
        background: checked ? "rgba(107,255,143,0.04)" : "#091328",
        border: `1px solid ${checked ? "rgba(107,255,143,0.25)" : "rgba(204,151,255,0.15)"}`,
        transition: "border-color 0.3s, background 0.3s",
      }}
    >
      {/* Header row: checkbox + step label + title */}
      <div
        className="flex items-center gap-3 mb-4 cursor-pointer select-none"
        onClick={handleCheck}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        onKeyDown={(e) => e.key === " " && handleCheck()}
      >
        {/* Checkbox */}
        <div
          className="w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all duration-200"
          style={{
            border: `2px solid ${checked ? "#6bff8f" : "#cc97ff"}`,
            background: checked ? "rgba(107,255,143,0.18)" : "transparent",
          }}
        >
          {checked && (
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
              <path
                d="M1 3.5L3.5 6L9 1"
                stroke="#6bff8f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        {/* Step number */}
        <span
          className="text-[10px] font-bold uppercase tracking-widest shrink-0"
          style={{ color: "#a3aac4" }}
        >
          STEP {stepNumber}
        </span>

        {/* Title */}
        <span
          className="text-sm font-semibold transition-colors duration-200"
          style={{ color: checked ? "#6bff8f" : "#dee5ff" }}
        >
          {title}
        </span>

        {saving && (
          <span className="text-xs ml-auto" style={{ color: "#a3aac4" }}>
            saving…
          </span>
        )}
      </div>

      {/* Sign-in hint */}
      {showSignInHint && (
        <p
          className="text-xs mb-3 px-3 py-2 rounded-lg"
          style={{
            color: "#cc97ff",
            background: "rgba(204,151,255,0.1)",
            border: "1px solid rgba(204,151,255,0.2)",
          }}
        >
          Sign in to track your progress
        </p>
      )}

      {/* Step body */}
      <div style={{ opacity: checked ? 0.6 : 1, transition: "opacity 0.3s" }}>
        {children}
      </div>
    </div>
  );
}
