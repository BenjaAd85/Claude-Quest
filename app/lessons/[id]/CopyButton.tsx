"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="copy-btn shrink-0 text-[10px] rounded px-2 py-1 transition-colors cursor-pointer"
      style={{ background: "#192540", color: "#cc97ff", border: "1px solid rgba(204,151,255,0.3)" }}
    >
      {copied ? "copied!" : "copy"}
    </button>
  );
}
