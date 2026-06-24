"use client";
import { useState } from "react";

type Props = {
  korean: string;
  chinese: string;
  onCorrect: () => void;
  onWrong: () => void;
};

export default function FlashCard({ korean, chinese, onCorrect, onWrong }: Props) {
  const [revealed, setRevealed] = useState(false);

  const mono = { fontFamily: "'DM Mono', monospace" } as React.CSSProperties;
  const serif = { fontFamily: "'Noto Serif KR', serif" } as React.CSSProperties;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {/* Card */}
      <div
        onClick={() => setRevealed((r) => !r)}
        style={{
          flex: 1,
          position: "relative",
          cursor: "pointer",
          background: revealed ? "#2a2a2a" : "#222",
          transition: "background 0.4s ease",
          overflow: "hidden",
        }}>
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "32px 28px 36px",
            opacity: revealed ? 0 : 1,
            transform: revealed ? "translateY(-16px)" : "translateY(0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            pointerEvents: revealed ? "none" : "auto",
          }}>
          <div />
          <p style={{ ...serif, fontWeight: 700, fontSize: "clamp(64px, 14vw, 108px)", lineHeight: 1, color: "#F0EEE8" }}>{korean}</p>
          <p style={{ ...mono, fontSize: 10, color: "#333", letterSpacing: "0.08em", textAlign: "right" }}>tap to reveal →</p>
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "32px 28px 36px",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s",
            pointerEvents: revealed ? "auto" : "none",
          }}>
          <p style={{ ...serif, fontWeight: 700, fontSize: 20, color: "#555" }}>{korean}</p>
          <p style={{ fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 600, fontSize: "clamp(40px, 9vw, 64px)", lineHeight: 1.15, color: "#F0EEE8" }}>{chinese}</p>
          <div />
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ display: "flex", borderTop: "0.5px solid #1e1e1e", flexShrink: 0 }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWrong();
          }}
          style={{ ...mono, flex: 1, padding: "20px 0", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", background: "#111", color: "#555", border: "none", cursor: "pointer" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#161616")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}>
          還不熟
        </button>
        <div style={{ width: 1, background: "#1e1e1e" }} />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCorrect();
          }}
          style={{ ...mono, flex: 1, padding: "20px 0", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", background: "#111", color: "#F0EEE8", border: "none", cursor: "pointer" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#161616")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}>
          記住了 →
        </button>
      </div>
    </div>
  );
}
