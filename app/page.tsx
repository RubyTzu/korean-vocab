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
      <h1 className="text-3xl font-bold text-gray-800">韓文單字練習</h1>
      <div className="flex gap-8 text-lg font-semibold">
        <p className="text-green-500">答對:{correct}</p>
        <p className="text-red-500">答錯:{wrong}</p>
        <p className="text-gray-400">
          {currentIndex}/{queue.length}
        </p>
      </div>
      {isFinished ? (
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-2xl font-bold text-gray-700">練習完成!</p>
          <p className="text-gray-500">
            答對 {correct} 張，答錯 {wrong} 張
          </p>
          {wrongItems.length > 0 && (
            <button onClick={handleReviewWrong} className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-xl transition">
              複習答錯的（{wrongItems.length} 張）
            </button>
          )}
          <button onClick={handleRestart} className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-xl transition">
            從頭再來
          </button>
        </div>
      ) : (
        <FlashCard key={currentIndex} korean={vocab[currentIndex].korean} chinese={vocab[currentIndex].chinese} onCorrect={handleCorrect} onWrong={handleWrong} />
      )}

      {/* <div className="flex flex-col gap-4">
        {vocab.map((item, index) => (
          <FlashCard key={index} korean={item.korean} chinese={item.chinese} onCorrect={() => setCorrect(correct + 1)} onWrong={() => setWrong(wrong + 1)} />
        ))}
      </div> */}
    </main>
  );
}
