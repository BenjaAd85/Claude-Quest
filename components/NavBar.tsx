"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/supabase";
import AuthModal from "./AuthModal";

export default function NavBar() {
  const { user, totalXP, loading } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setShowDropdown(false);
  };

  const avatarLetter = user?.email?.[0]?.toUpperCase() ?? "?";
  const formattedXP = totalXP.toLocaleString();

  return (
    <>
      <header
        className="sticky top-0 z-20 backdrop-blur-md"
        style={{
          background: "rgba(6, 14, 32, 0.85)",
          borderBottom: "1px solid rgba(204, 151, 255, 0.2)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo / home link */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span style={{ color: "#cc97ff", fontWeight: 700, fontSize: "0.95rem" }}>›</span>
            <span
              style={{
                fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#cc97ff",
                letterSpacing: "0.05em",
              }}
            >
              CLAUDE_QUEST
            </span>
          </Link>

          {/* Right side — auth state */}
          <div className="flex items-center gap-3">
            {!loading && (
              user ? (
                <>
                  {/* XP pill */}
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold"
                    style={{ background: "#192540", color: "#6bff8f" }}
                  >
                    <span>⚡</span>
                    <span>{formattedXP} XP</span>
                  </div>

                  {/* Avatar + dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setShowDropdown((v) => !v)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "#cc97ff", color: "#060e20" }}
                      aria-label="Account menu"
                    >
                      {avatarLetter}
                    </button>

                    {showDropdown && (
                      <div
                        className="absolute right-0 mt-2 w-48 rounded-xl py-1 z-50"
                        style={{
                          background: "#0f1930",
                          border: "1px solid rgba(204,151,255,0.2)",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                        }}
                      >
                        <p
                          className="px-4 py-2 text-xs truncate"
                          style={{
                            color: "#a3aac4",
                            borderBottom: "1px solid rgba(204,151,255,0.1)",
                          }}
                        >
                          {user.email}
                        </p>
                        <button
                          onClick={signOut}
                          className="w-full text-left px-4 py-2.5 text-sm transition-colors"
                          style={{ color: "#dee5ff" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                /* Sign In button */
                <button
                  onClick={() => setShowModal(true)}
                  className="text-sm px-4 py-1.5 rounded-lg font-medium transition-colors"
                  style={{
                    border: "1px solid #cc97ff",
                    color: "#cc97ff",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(204,151,255,0.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  Sign In
                </button>
              )
            )}
          </div>
        </div>
      </header>

      {/* Auth modal — rendered here so it's always available */}
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
}
