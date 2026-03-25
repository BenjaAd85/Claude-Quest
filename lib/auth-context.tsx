"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "./supabase";

interface AuthContextType {
  user: User | null;
  totalXP: number;
  completedLessons: number[];
  loading: boolean;
  completeStep: (lessonId: number, stepId: string) => Promise<void>;
  completeMission: (lessonId: number) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  totalXP: 0,
  completedLessons: [],
  loading: true,
  completeStep: async () => {},
  completeMission: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser]                     = useState<User | null>(null);
  const [totalXP, setTotalXP]               = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [loading, setLoading]               = useState(true);
  const mountedRef                          = useRef(true);

  // Fetch (or re-fetch) XP data for a user. Safe to call any time.
  const fetchUserXP = async (userId: string) => {
    const { data } = await supabase
      .from("user_xp")
      .select("total_xp, completed_lessons")
      .eq("user_id", userId)
      .maybeSingle(); // won't throw when row doesn't exist yet

    if (!mountedRef.current) return;

    if (data) {
      setTotalXP(data.total_xp ?? 0);
      setCompletedLessons(data.completed_lessons ?? []);
    } else {
      // No row yet — defaults are fine, leave state as is
      setTotalXP(0);
      setCompletedLessons([]);
    }
  };

  useEffect(() => {
    mountedRef.current = true;

    // ── 1. Check for an existing session on mount ──────────────
    supabase.auth
      .getSession()
      .then(({ data, error }) => {
        if (!mountedRef.current) return;
        if (error) {
          console.error("[auth] getSession error:", error.message);
          setLoading(false);
          return;
        }
        const currentUser = data?.session?.user ?? null;
        setUser(currentUser);
        if (currentUser) {
          fetchUserXP(currentUser.id).finally(() => {
            if (mountedRef.current) setLoading(false);
          });
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("[auth] getSession threw:", err);
        if (mountedRef.current) setLoading(false);
      });

    // ── 2. Listen for sign-in / sign-out / token refresh ───────
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!mountedRef.current) return;
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) {
        await fetchUserXP(currentUser.id);
      } else {
        setTotalXP(0);
        setCompletedLessons([]);
      }
      if (mountedRef.current) setLoading(false);
    });

    return () => {
      mountedRef.current = false;
      subscription.unsubscribe();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── completeStep: save progress then re-sync XP ─────────────
  const completeStep = async (lessonId: number, stepId: string) => {
    if (!user) return;
    await supabase.from("user_progress").upsert(
      {
        user_id: user.id,
        lesson_id: lessonId,
        step_id: stepId,
        completed_at: new Date().toISOString(),
      },
      { onConflict: "user_id,lesson_id,step_id" }
    );
    // Re-fetch so the XP counter always reflects actual DB state
    await fetchUserXP(user.id);
  };

  // ── completeMission: fetch fresh DB state to avoid stale closure
  const completeMission = async (lessonId: number) => {
    if (!user) return;

    // Read current state from DB rather than relying on potentially-stale
    // React state captured in this closure
    const { data: current } = await supabase
      .from("user_xp")
      .select("total_xp, completed_lessons")
      .eq("user_id", user.id)
      .maybeSingle();

    const currentXP: number       = current?.total_xp ?? 0;
    const currentCompleted: number[] = current?.completed_lessons ?? [];

    if (currentCompleted.includes(lessonId)) return; // already awarded

    const newXP       = currentXP + 100;
    const newCompleted = [...currentCompleted, lessonId];

    const { error } = await supabase.from("user_xp").upsert(
      {
        user_id: user.id,
        total_xp: newXP,
        completed_lessons: newCompleted,
      },
      { onConflict: "user_id" }
    );

    if (error) {
      console.error("[auth] completeMission upsert error:", error.message);
      // Fall back to a fresh fetch so UI stays consistent
      await fetchUserXP(user.id);
      return;
    }

    if (mountedRef.current) {
      setTotalXP(newXP);
      setCompletedLessons(newCompleted);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, totalXP, completedLessons, loading, completeStep, completeMission }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
