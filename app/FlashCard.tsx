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
    <div className="flex flex-col items-center gap-3">
      <div onClick={() => setFlipped(!flipped)} className="cursor-pointer bg-white rounded-2xl shadow-md p-10 w-64 flex items-center justify-center border border-gray-200 hover:shadow-lg transition">
        <p className="text-2xl font-bold text-gray-800">{flipped ? chinese : korean}</p>
      </div>
      {flipped && (
        <div className="flex gap-4">
            <button 
            onClick={onCorrect}
            className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-xl transition">答對了</button>
            <button 
            onClick={onWrong}
            className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-xl transition">答錯了</button>
        </div>
      )}
    </div>
  );
}
