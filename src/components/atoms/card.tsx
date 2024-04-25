"use client";

import { useMemo } from "react";
import { Button } from "./button";
import { Code, MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

export type Card = {
  label: string;
  title: string;
  logo: string;
  screenshot: string;
  description: string;
  "source-code"?: string;
  url: string;
};

export const Card = ({ content, isActive }: { content: Card; isActive: boolean }) => {
  const router = useRouter();
  const rotation = useMemo(() => Math.round(Math.random() * (10 - -10) + -10), []);

  return (
    <div
      className="relative w-[300px] h-[400px] flex items-center justify-center text-3xl text-background"
      style={{ perspective: "1000px", zIndex: isActive ? "50" : undefined }}
    >
      <div
        className="w-full h-full relative transition-transform duration-500 transform-style-3d"
        style={{ transform: isActive ? `rotate(${0}deg) rotateY(180deg)` : `rotate(${rotation}deg)` }}
      >
        <div className="absolute top-0 left-0 bg-white w-full h-full font-extrabold flex items-center justify-center rounded-3xl shadow-2xl overflow-hidden backface-visibility-hiddenn cursor-grab">
          {content.label}
        </div>
        <div
          className="absolute top-1/2 left-1/2 bg-white w-[500px] h-[calc(100vh-300px)] max-h-[700px] rounded-3xl backface-visibility-hidden p-10 flex flex-wrap gap-y-6 content-between"
          style={{ transform: "rotateY(180deg) translateX(50%) translateY(-50%)" }}
        >
          <div className="space-y-6 flex-wrap">
            <div className="flex gap-x-8 items-center">
              <div className="w-14 h-14 rounded-xl bg-slate-200"></div>
              <div className="text-2xl font-medium">{content.title}</div>
            </div>
            <div
              className={`w-full h-64 bg-gray-300 rounded-2xl bg-cover bg-center`}
              style={{ backgroundImage: `url('${content.screenshot}')` }}
            ></div>
            <p className="text-gray-600 text-center text-base px-2">{content.description}</p>
          </div>
          <div className="flex gap-x-4 w-full justify-end">
            {content["source-code"] && (
              <Button
                variant="regular"
                size="regular"
                className="flex gap-x-2 items-center"
                onClick={() => content["source-code"] && router.push(content["source-code"])}
              >
                Code
                <Code />
              </Button>
            )}
            {content.url && (
              <Button
                variant="regular"
                size="regular"
                className="flex gap-x-2 items-center"
                onClick={() => router.push(content.url)}
              >
                Visit
                <MoveRight />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
