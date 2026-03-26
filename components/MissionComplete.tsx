"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/supabase";

interface MissionCompleteProps {
  lessonId: number;
  totalSteps: number;
}

export default function MissionComplete({ lessonId, totalSteps }: MissionCompleteProps) {
  const { user, completedLessons, completeMission } = useAuth();
  const [completedCount, setCompletedCount] = useState(0);
  const [awarded, setAwarded] = useState(false);
  const [visible, setVisible] = useState(false);

  const alreadyComplete = completedLessons.includes(lessonId);

  const fetchProgress = useCallback(async () => {
    if (!user) return;
    const { data } = await supabase
      .from("user_progress")
      .select("step_id")
      .eq("user_id", user.id)
      .eq("lesson_id", lessonId);
    setCompletedCount(data?.length ?? 0);
  }, [user, lessonId]);

  // Load on mount / user change
  useEffect(() => {
    if (alreadyComplete) {
      setVisible(true);
      setAwarded(true);
    }
    fetchProgress();
  }, [fetchProgress, alreadyComplete]);

  // Listen for steps being completed on this page
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.lessonId === lessonId) {
        setCompletedCount((n) => n + 1);
      }
    };
    window.addEventListener("step-completed", handler);
    return () => window.removeEventListener("step-completed", handler);
  }, [lessonId]);

  // Listen for steps being uncompleted on this page
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.lessonId === lessonId) {
        setCompletedCount((n) => Math.max(0, n - 1));
      }
    };
    window.addEventListener("step-uncompleted", handler);
    return () => window.removeEventListener("step-uncompleted", handler);
  }, [lessonId]);

  // Hide banner when lesson is no longer complete
  useEffect(() => {
    if (!alreadyComplete && completedCount < totalSteps) {
      setVisible(false);
      setAwarded(false);
    }
  }, [alreadyComplete, completedCount, totalSteps]);

  // Award XP when all steps are done
  useEffect(() => {
    if (completedCount >= totalSteps && user && !awarded && !alreadyComplete) {
      setAwarded(true);
      setVisible(true);
      completeMission(lessonId);
    }
  }, [completedCount, totalSteps, user, awarded, alreadyComplete, completeMission, lessonId]);

  // Show banner if already complete
  useEffect(() => {
    if (alreadyComplete) setVisible(true);
  }, [alreadyComplete]);

  if (!visible) return null;

  return (
    <div
      className="rounded-2xl p-6 mb-8 text-center"
      style={{
        background: "linear-gradient(135deg, rgba(107,255,143,0.08), rgba(204,151,255,0.06))",
        border: "1px solid rgba(107,255,143,0.35)",
        boxShadow: "0 0 32px rgba(107,255,143,0.12)",
        animation: "fadeSlideIn 0.5s ease",
      }}
    >
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <p
        className="text-2xl font-bold mb-1"
        style={{
          fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
          color: "#6bff8f",
          letterSpacing: "0.05em",
        }}
      >
        MISSION COMPLETE
      </p>

      <p
        className="text-sm font-semibold mb-5"
        style={{ color: "#cc97ff", letterSpacing: "0.1em" }}
      >
        +100 XP EARNED
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
        style={{
          background: "rgba(107,255,143,0.12)",
          border: "1px solid rgba(107,255,143,0.35)",
          color: "#6bff8f",
        }}
      >
        ← Return to Mission Board
      </Link>
    </div>
  );
}
