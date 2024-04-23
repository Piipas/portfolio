"use client";

import { useMemo, useState } from "react";

export type Card = { content: string };

export const Card = ({ content }: { content: string }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const rotation = useMemo(() => Math.round(Math.random() * (10 - -10) + -10), []);

  return (
    <div
      className="relative w-[300px] h-[400px] flex items-center justify-center text-3xl font-extrabold text-background cursor-pointer"
      onClick={() => setIsActive(!isActive)}
      style={{ perspective: "1000px" }}
    >
      <div
        className="w-full h-full relative transition-transform duration-500 transform-style-3d"
        style={{ transform: isActive ? `rotate(${rotation}deg) rotateY(180deg)` : `rotate(${rotation}deg)` }}
      >
        <div className="absolute top-0 left-0 bg-white w-full h-full flex items-center justify-center rounded-3xl shadow-2xl overflow-hidden backface-visibility-hidden">
          {content}
        </div>
        <div
          className="absolute top-0 left-0 bg-red-400 w-full h-full rounded-xl backface-visibility-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          another content
        </div>
      </div>
    </div>
  );
};
