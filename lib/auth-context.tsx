"use client";

import {
  createContext,
  useContext,
  useEffect,
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
  const [user, setUser] = useState<User | null>(null);
  const [totalXP, setTotalXP] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUserXP = async (userId: string) => {
    const { data } = await supabase
      .from("user_xp")
      .select("total_xp, completed_lessons")
      .eq("user_id", userId)
      .single();

    if (data) {
      setTotalXP(data.total_xp ?? 0);
      setCompletedLessons(data.completed_lessons ?? []);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) fetchUserXP(currentUser.id);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) {
        await fetchUserXP(currentUser.id);
      } else {
        setTotalXP(0);
        setCompletedLessons([]);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

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
  };

  const completeMission = async (lessonId: number) => {
    if (!user) return;
    if (completedLessons.includes(lessonId)) return;

    const newXP = totalXP + 100;
    const newCompleted = [...completedLessons, lessonId];

    const { error } = await supabase.from("user_xp").upsert(
      {
        user_id: user.id,
        total_xp: newXP,
        completed_lessons: newCompleted,
      },
      { onConflict: "user_id" }
    );

    if (!error) {
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
