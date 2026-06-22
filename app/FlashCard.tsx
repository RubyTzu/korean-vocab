"use client";

import { useState } from "react";

type Props = {
  korean: string;
  chinese: string;
  onCorrect: () => void;
  onWrong: () => void;
};

export default function FlashCard({ korean, chinese, onCorrect, onWrong }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      <div onClick={() => setFlipped(!flipped)} className="cursor-pointer bg-taupe-50 p-10 w-80 flex items-center justify-center border border-stone-300 transition">
        <p className="text-2xl font-bold text-stone-600">{flipped ? chinese : korean}</p>
      </div>
      {flipped && (
        <div className="flex justify-between w-full">
          <button onClick={onWrong} className="bg-stone-400 hover:bg-stone-500 text-white px-6 py-4.5 rounded-full transition">
            ✕
          </button>
          <button onClick={onCorrect} className="bg-stone-600 hover:bg-stone-700 text-white px-6 py-4.5 rounded-full transition">
            ✓
          </button>
        </div>
      )}
    </div>
  );
}
