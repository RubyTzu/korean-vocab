"use client";
import { useState } from "react";
import FlashCard from "./FlashCard";
import { weeks, Week, Unit } from "./data";

type Mode = "home" | "study" | "result";

export default function Home() {
  const [mode, setMode] = useState<Mode>("home");
  const [selectedWeek, setSelectedWeek] = useState<Week>(weeks[0]);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongItems, setWrongItems] = useState<Unit["vocab"]>([]);
  const [queue, setQueue] = useState<Unit["vocab"]>([]);

  function startUnit(unit: Unit) {
    setSelectedUnit(unit);
    setQueue(unit.vocab);
    setCurrentIndex(0);
    setCorrect(0);
    setWrong(0);
    setWrongItems([]);
    setMode("study");
  }

  function handleCorrect() {
    const next = currentIndex + 1;
    setCorrect((c) => c + 1);
    if (next >= queue.length) setMode("result");
    else setCurrentIndex(next);
  }

  function handleWrong() {
    const next = currentIndex + 1;
    setWrong((w) => w + 1);
    setWrongItems((prev) => [...prev, queue[currentIndex]]);
    if (next >= queue.length) setMode("result");
    else setCurrentIndex(next);
  }

  function handleReviewWrong() {
    setQueue(wrongItems);
    setWrongItems([]);
    setCurrentIndex(0);
    setCorrect(0);
    setWrong(0);
    setMode("study");
  }

  function handleRestart() {
    if (selectedUnit) startUnit(selectedUnit);
  }

  function handleBackHome() {
    setMode("home");
    setSelectedUnit(null);
  }

  const mono: React.CSSProperties = { fontFamily: "'DM Mono', 'Noto Sans TC', sans-serif" };
  const serif: React.CSSProperties = { fontFamily: "'Noto Serif KR', serif" };
  const base: React.CSSProperties = { background: "#111", color: "#F0EEE8", fontFamily: "'Noto Sans TC', sans-serif" };

  // ── HOME ──────────────────────────────────────────────
  if (mode === "home") {
    const currentWeekIdx = weeks.findIndex((w) => w.week === selectedWeek.week);

    return (
      <main style={{ ...base, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 28px", borderBottom: "0.5px solid #1e1e1e", flexShrink: 0 }}>
          <span style={{ ...mono, fontSize: 11, letterSpacing: "0.12em", color: "#555", textTransform: "uppercase" }}>한국어 어휘 연습</span>
        </div>

        {/* Unit grid */}
        <div style={{ flex: 1, padding: "28px 28px 0" }}>
          <p style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", color: "#555", textTransform: "uppercase", marginBottom: 16 }}>{selectedWeek.units.length} 個單元</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {selectedWeek.units.map((unit) => (
              <button
                key={unit.id}
                onClick={() => startUnit(unit)}
                style={{
                  background: "#1a1a1a",
                  border: "none",
                  cursor: "pointer",
                  padding: "28px 20px",
                  textAlign: "left",
                  color: "#F0EEE8",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#222")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1a1a")}>
                <p style={{ ...mono, fontSize: 10, color: "#555", letterSpacing: "0.1em", marginBottom: 10 }}>Unit {String(unit.id).padStart(2, "0")}</p>
                <p style={{ fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>{unit.title}</p>
                <p style={{ ...mono, fontSize: 10, color: "#444", marginTop: 10 }}>{unit.vocab.length} 個單字</p>
              </button>
            ))}
          </div>
        </div>

        {/* Week pagination — bottom, centered */}
        <div style={{ borderTop: "0.5px solid #1e1e1e", padding: "20px 28px", display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexShrink: 0 }}>
          {/* Prev arrow */}
          <button onClick={() => setSelectedWeek(weeks[currentWeekIdx - 1])} disabled={currentWeekIdx === 0} style={{ ...mono, background: "none", border: "none", cursor: currentWeekIdx === 0 ? "default" : "pointer", color: currentWeekIdx === 0 ? "#2a2a2a" : "#555", fontSize: 16, padding: "4px 8px", lineHeight: 1, transition: "color 0.15s" }}>
            ←
          </button>

          {/* Dots + label */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {weeks.map((w) => (
                <button key={w.week} onClick={() => setSelectedWeek(w)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 0", display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: w.week === selectedWeek.week ? 20 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: "#F0EEE8",
                      opacity: w.week === selectedWeek.week ? 1 : 0.2,
                      transition: "width 0.25s ease, opacity 0.2s",
                    }}
                  />
                </button>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ ...mono, fontSize: 10, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Week {selectedWeek.week} &nbsp;·&nbsp; {selectedWeek.title}
              </span>
            </div>
          </div>

          {/* Next arrow */}
          <button onClick={() => setSelectedWeek(weeks[currentWeekIdx + 1])} disabled={currentWeekIdx === weeks.length - 1} style={{ ...mono, background: "none", border: "none", cursor: currentWeekIdx === weeks.length - 1 ? "default" : "pointer", color: currentWeekIdx === weeks.length - 1 ? "#2a2a2a" : "#555", fontSize: 16, padding: "4px 8px", lineHeight: 1, transition: "color 0.15s" }}>
            →
          </button>
        </div>
      </main>
    );
  }

  // ── RESULT ────────────────────────────────────────────
  if (mode === "result") {
    return (
      <main style={{ ...base, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "18px 28px", borderBottom: "0.5px solid #1e1e1e" }}>
          <button onClick={handleBackHome} style={{ ...mono, fontSize: 11, color: "#555", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.08em" }}>
            ← 返回
          </button>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 48, padding: "48px 28px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 700, fontSize: "60px", lineHeight: 1 }}>學完了！</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
            <p style={{ ...mono, fontSize: 12, color: "#555", letterSpacing: "0.06em" }}>
              Unit {selectedUnit?.id} · {selectedUnit?.title}
            </p>
            <p style={{ ...mono, fontSize: 13, color: "#555", letterSpacing: "0.06em" }}>
              ✓ {correct} &nbsp;&nbsp; ✕ {wrong}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", maxWidth: 280 }}>
            {wrongItems.length > 0 && (
              <button onClick={handleReviewWrong} style={{ ...mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", background: "#222", color: "#F0EEE8", border: "none", padding: "16px 0", cursor: "pointer" }}>
                複習答錯的 ({wrongItems.length})
              </button>
            )}
            <button onClick={handleRestart} style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: 12, letterSpacing: "0.1em", background: "transparent", color: "#555", border: "0.5px solid #333", padding: "16px 0", cursor: "pointer" }}>
              再來一次
            </button>
            <button onClick={handleBackHome} style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: 12, letterSpacing: "0.1em", background: "transparent", color: "#444", border: "none", padding: "12px 0", cursor: "pointer" }}>
              選其他單元
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ── STUDY ─────────────────────────────────────────────
  return (
    <main style={{ ...base, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 28px", borderBottom: "0.5px solid #1e1e1e", flexShrink: 0 }}>
        <button onClick={handleBackHome} style={{ ...mono, fontSize: 11, color: "#555", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.08em" }}>
          ← 返回
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ ...mono, fontSize: 11, color: "#555" }}>
            ✓ {correct} &nbsp; ✕ {wrong}
          </span>
          <div style={{ display: "flex", gap: 4 }}>
            {queue.map((_, i) => (
              <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i < currentIndex ? "#888" : i === currentIndex ? "#F0EEE8" : "#333" }} />
            ))}
          </div>
          <span style={{ ...mono, fontSize: 11, color: "#555" }}>
            {currentIndex + 1} / {queue.length}
          </span>
        </div>
      </div>

      <div style={{ padding: "14px 28px 0", flexShrink: 0 }}>
        <span style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", color: "#555", textTransform: "uppercase" }}>
          W{selectedWeek.week} · Unit {String(selectedUnit?.id).padStart(2, "0")} · {selectedUnit?.title}
        </span>
      </div>

      <FlashCard key={currentIndex} korean={queue[currentIndex].korean} chinese={queue[currentIndex].chinese} onCorrect={handleCorrect} onWrong={handleWrong} />
    </main>
  );
}
