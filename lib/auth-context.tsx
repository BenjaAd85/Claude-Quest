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
import { supabase } from "./supabase-browser";

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
  const [user, setUser]                         = useState<User | null>(null);
  const [totalXP, setTotalXP]                   = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [loading, setLoading]                   = useState(true);
  const mountedRef                              = useRef(true);
  // Refs so async callbacks always read current values without stale closures
  const totalXPRef           = useRef(0);
  const completedLessonsRef  = useRef<number[]>([]);
  const userRef              = useRef<User | null>(null);

  // Keep refs in sync with state
  useEffect(() => { totalXPRef.current = totalXP; }, [totalXP]);
  useEffect(() => { completedLessonsRef.current = completedLessons; }, [completedLessons]);
  useEffect(() => { userRef.current = user; }, [user]);

  // ── Fetch XP row for a user ──────────────────────────────────
  const fetchUserXP = async (userId: string) => {
    const { data } = await supabase
      .from("user_xp")
      .select("total_xp, completed_lessons")
      .eq("user_id", userId)
      .maybeSingle();                         // won't throw when row is absent

    if (!mountedRef.current) return;

    setTotalXP(data?.total_xp ?? 0);
    setCompletedLessons(data?.completed_lessons ?? []);
  };

  // ── Session management ───────────────────────────────────────
  useEffect(() => {
    mountedRef.current = true;

    // onAuthStateChange fires INITIAL_SESSION on mount with the stored
    // session — this is the recommended single-source approach for Next.js
    // and avoids the race between getSession() + onAuthStateChange.
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

      // Always resolve loading after first auth event
      if (mountedRef.current) setLoading(false);
    });

    return () => {
      mountedRef.current = false;
      subscription.unsubscribe();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── completeStep: save + immediately re-sync XP ─────────────
  const completeStep = async (lessonId: number, stepId: string) => {
    const currentUser = userRef.current;
    if (!currentUser) return;

    await supabase.from("user_progress").upsert(
      {
        user_id: currentUser.id,
        lesson_id: lessonId,
        step_id: stepId,
        completed_at: new Date().toISOString(),
      },
      { onConflict: "user_id,lesson_id,step_id" }
    );

    // Re-sync so the XP counter reflects any DB-side changes
    await fetchUserXP(currentUser.id);
  };

  // ── completeMission: award XP immediately in state ──────────
  const completeMission = async (lessonId: number) => {
    const currentUser = userRef.current;
    if (!currentUser) return;

    // Guard against double-award using ref (avoids stale closure)
    if (completedLessonsRef.current.includes(lessonId)) return;

    // Optimistically update local state first so the navbar reflects
    // the new XP immediately without waiting for the DB round-trip
    const newXP        = totalXPRef.current + 100;
    const newCompleted = [...completedLessonsRef.current, lessonId];

    setTotalXP(newXP);
    setCompletedLessons(newCompleted);

    // Persist to Supabase
    const { error } = await supabase.from("user_xp").upsert(
      {
        user_id: currentUser.id,
        total_xp: newXP,
        completed_lessons: newCompleted,
      },
      { onConflict: "user_id" }
    );

    if (error) {
      console.error("[auth] completeMission upsert error:", error.message);
    }

    // Always re-sync after write so state matches DB exactly
    if (mountedRef.current) await fetchUserXP(currentUser.id);
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
