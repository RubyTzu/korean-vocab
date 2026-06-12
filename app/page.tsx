"use client";

import { useState } from "react";
import FlashCard from "./FlashCard";
import { vocab } from "./data";

export default function Home() {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 gap-8">
      <h1 className="text-3xl font-bold text-gray-800">韓文單字練習</h1>
      <div className="flex gap-8 text-lg font-semibold">
        <p className="text-green-500">答對:{correct}</p>
        <p className="text-red-500">答錯:{wrong}</p>
      </div>
      <div className="flex flex-col gap-4">
        {vocab.map((item, index) => (
          <FlashCard key={index} korean={item.korean} chinese={item.chinese} onCorrect={() => setCorrect(correct + 1)} onWrong={() => setWrong(wrong + 1)} />
        ))}
      </div>
    </main>
  );

}
