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
import { createClient } from "./supabase-browser";

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
  // Refs so async callbacks always see current values (no stale closures)
  const totalXPRef          = useRef(0);
  const completedLessonsRef = useRef<number[]>([]);
  const userRef             = useRef<User | null>(null);

  useEffect(() => { totalXPRef.current = totalXP; }, [totalXP]);
  useEffect(() => { completedLessonsRef.current = completedLessons; }, [completedLessons]);
  useEffect(() => { userRef.current = user; }, [user]);

  // ── Fetch XP row for a user ──────────────────────────────────
  const fetchUserXP = async (userId: string) => {
    const supabase = createClient();
    const { data } = await supabase
      .from("user_xp")
      .select("total_xp, completed_lessons")
      .eq("user_id", userId)
      .maybeSingle();

    if (!mountedRef.current) return;
    setTotalXP(data?.total_xp ?? 0);
    setCompletedLessons(data?.completed_lessons ?? []);
  };

  // ── Session management ───────────────────────────────────────
  useEffect(() => {
    mountedRef.current = true;
    const supabase = createClient();

    // onAuthStateChange fires INITIAL_SESSION on mount, which reads the
    // session from the cookie set by the middleware. This is the single
    // source of truth — no separate getSession() call needed.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mountedRef.current) return;

      if (event === "SIGNED_OUT") {
        setUser(null);
        setTotalXP(0);
        setCompletedLessons([]);
        setLoading(false);
        return;
      }

      // INITIAL_SESSION, SIGNED_IN, TOKEN_REFRESHED
      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        await fetchUserXP(currentUser.id);
      }

      if (mountedRef.current) setLoading(false);
    });

    return () => {
      mountedRef.current = false;
      subscription.unsubscribe();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── completeStep: save to DB + re-sync XP ───────────────────
  const completeStep = async (lessonId: number, stepId: string) => {
    const currentUser = userRef.current;
    if (!currentUser) return;

    const supabase = createClient();
    await supabase.from("user_progress").upsert(
      {
        user_id: currentUser.id,
        lesson_id: lessonId,
        step_id: stepId,
        completed_at: new Date().toISOString(),
      },
      { onConflict: "user_id,lesson_id,step_id" }
    );

    await fetchUserXP(currentUser.id);
  };

  // ── completeMission: optimistic XP update + persist ─────────
  const completeMission = async (lessonId: number) => {
    const currentUser = userRef.current;
    if (!currentUser) return;

    if (completedLessonsRef.current.includes(lessonId)) return;

    const newXP        = totalXPRef.current + 100;
    const newCompleted = [...completedLessonsRef.current, lessonId];

    // Optimistic update so the navbar reflects new XP immediately
    setTotalXP(newXP);
    setCompletedLessons(newCompleted);

    const supabase = createClient();
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

    // Re-sync to confirm DB state matches
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
