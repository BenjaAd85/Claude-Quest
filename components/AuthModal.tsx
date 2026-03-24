"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (tab === "signup") {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
      } else {
        setSignupSuccess(true);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
      } else {
        onClose();
      }
    }

    setLoading(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(6, 14, 32, 0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-8 relative"
        style={{
          background: "rgba(15, 25, 48, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(204, 151, 255, 0.2)",
          boxShadow: "0 0 40px rgba(204, 151, 255, 0.1)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sm"
          style={{ color: "#a3aac4" }}
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-2xl mb-2">⚔️</div>
          <h2
            className="font-bold text-lg mb-1"
            style={{
              fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
              color: "#dee5ff",
            }}
          >
            {signupSuccess
              ? "Check your email"
              : tab === "signup"
              ? "Join the Quest"
              : "Welcome back"}
          </h2>
          <p className="text-sm" style={{ color: "#a3aac4" }}>
            {signupSuccess
              ? "We sent a confirmation link to " + email
              : tab === "signup"
              ? "Track your XP and mission progress"
              : "Sign in to continue your quest"}
          </p>
        </div>

        {signupSuccess ? (
          <button
            onClick={onClose}
            className="cta-button w-full py-3 rounded-lg text-sm font-semibold text-white"
          >
            Got it
          </button>
        ) : (
          <>
            {/* Tabs */}
            <div
              className="flex rounded-lg mb-6 p-1 gap-1"
              style={{ background: "#192540" }}
            >
              {(["signin", "signup"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => { setTab(t); setError(""); }}
                  className="flex-1 py-2 rounded-md text-sm font-medium transition-all"
                  style={{
                    background: tab === t ? "rgba(204,151,255,0.15)" : "transparent",
                    color: tab === t ? "#cc97ff" : "#a3aac4",
                    border: tab === t ? "1px solid rgba(204,151,255,0.3)" : "1px solid transparent",
                  }}
                >
                  {t === "signin" ? "Sign In" : "Sign Up"}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "#a3aac4", letterSpacing: "0.05em" }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                  style={{
                    background: "#091328",
                    border: "1px solid rgba(204,151,255,0.2)",
                    color: "#dee5ff",
                  }}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "#a3aac4", letterSpacing: "0.05em" }}
                >
                  PASSWORD
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                  style={{
                    background: "#091328",
                    border: "1px solid rgba(204,151,255,0.2)",
                    color: "#dee5ff",
                  }}
                />
              </div>

              {error && (
                <p className="text-xs text-center" style={{ color: "#ff9999" }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="cta-button w-full py-3 rounded-lg text-sm font-semibold text-white mt-1"
                style={{ opacity: loading ? 0.7 : 1 }}
              >
                {loading
                  ? "..."
                  : tab === "signup"
                  ? "Create Account"
                  : "Sign In"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
