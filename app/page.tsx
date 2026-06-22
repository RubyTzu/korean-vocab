"use client";

import { useState } from "react";
import FlashCard from "./FlashCard";
import { vocab } from "./data";

export default function Home() {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [queue, setQueue] = useState(vocab);
  const [wrongItems, setWrongItems] = useState<typeof vocab>([]);

  const isFinished = currentIndex >= queue.length;

  const handleCorrect = () => {
    setCorrect((c) => c + 1);
    setCurrentIndex((i) => i + 1);
  };

  const handleWrong = () => {
    setWrong((w) => w + 1);
    setWrongItems((prev) => [...prev, queue[currentIndex]]);
    setCurrentIndex((i) => i + 1);
  };

  const handleReviewWrong = () => {
    setQueue(wrongItems);
    setWrongItems([]);
    setCurrentIndex(0);
    setCorrect(0);
    setWrong(0);
  };

  const handleRestart = () => {
    setQueue(vocab);
    setWrongItems([]);
    setCurrentIndex(0);
    setCorrect(0);
    setWrong(0);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 gap-8">
      <h1 className="fixed bottom-10 right-10 text-xl font-bold text-stone-400">한국어 어휘 연습</h1>
      <div className="flex gap-5 text-md font-semibold text-stone-400">
        <p>答對: {correct}</p>
        <p>答錯: {wrong}</p>
        <p className="">
          {currentIndex} / {queue.length}
        </p>
      </div>
      {isFinished ? (
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-2xl font-bold text-stone-500 py-10">練習完成!</p>
          <p className="text-stone-400 mb-4">
            答對 {correct} 張，答錯 {wrong} 張
          </p>
          {wrongItems.length > 0 && (
            <button onClick={handleReviewWrong} className="border-2 text-stone-400 w-60 py-3 rounded-3xl transition hover:bg-stone-200">
              複習答錯的（{wrongItems.length} 張）
            </button>
          )}
          <button onClick={handleRestart} className="border-2 hover:bg-stone-200 text-stone-400 w-60 py-3 rounded-3xl transition">
            從頭再來
          </button>
        </div>
      ) : (
        <FlashCard key={currentIndex} korean={vocab[currentIndex].korean} chinese={vocab[currentIndex].chinese} onCorrect={handleCorrect} onWrong={handleWrong} />
      )}
    </main>
  );
}
