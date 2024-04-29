"use client";

import { CSSProperties, useEffect, useMemo, useState } from "react";
import { Button } from "./button";
import { Code, MoveRight } from "lucide-react";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type Card = {
  label: string;
  title: string;
  logo: string;
  screenshot: string;
  description: string;
  "source-code"?: string;
  url: string;
  wip: boolean;
  visible: boolean;
};

export const Card = ({ content, style, isActive }: { content: Card; style?: CSSProperties; isActive: boolean }) => {
  const rotation = useMemo(() => Math.round(Math.random() * (10 - -10) + -10), []);
  const [screenSize, setScreenSize] = useState(0);
  const { width, height } = useWindowSize();

  useEffect(() => setScreenSize(width), [width]);

  return (
    <div
      className="relative w-[300px] h-[400px] flex items-center justify-center text-3xl text-background select-none"
      style={{ perspective: "1000px", zIndex: isActive ? "50" : undefined, ...style }}
    >
      <div
        className="w-full h-full relative transition-transform duration-500 transform-style-3d"
        style={{
          transform: isActive || screenSize < 768 ? `rotate(${0}deg) rotateY(180deg)` : `rotate(${rotation}deg)`,
        }}
      >
        {/* Front side */}
        <div className="absolute top-0 left-0 bg-white w-full h-full font-extrabold flex items-center justify-center rounded-3xl shadow-2xl overflow-hidden backface-visibility-hiddenn">
          {content.label}
        </div>
        {/* Back side */}
        <div
          className="absolute top-1/2 left-1/2 bg-white max-w-[calc(100vw-40px)] w-[400px] 2xl:w-[500px] h-[calc(100vh-100px)] 2xl:h-[calc(100vh-300px)] shadow-lg max-h-[700px] rounded-lg md:rounded-3xl backface-visibility-hidden p-5 2xl:p-10 flex flex-wrap gap-y-6 content-between cursor-auto"
          style={{ transform: "rotateY(180deg) translateX(50%) translateY(-50%)" }}
        >
          <div className="space-y-6 flex-wrap">
            <div className="flex gap-x-8 items-center">
              <div
                className={cn(
                  "w-14 h-14 rounded-xl bg-slate-200 flex items-center justify-center",
                  content.logo && "bg-white",
                )}
              >
                {content.logo && <Image src={content.logo} alt="" width={56} height={56} />}
              </div>
              <div className="text-2xl font-medium">{content.title}</div>
            </div>
            <div
              className={`w-full h-52 2xl:h-64 bg-gray-300 rounded-2xl bg-cover bg-center`}
              style={{ backgroundImage: `url('${content.screenshot}')` }}
            ></div>
            <p className="text-gray-600 text-center text-base px-2">{content.description}</p>
          </div>
          <div className="flex gap-x-4 w-full justify-end">
            {content["source-code"] && (
              <Link href={content["source-code"]} target="_blank">
                <Button variant="regular" size="regular" className="flex gap-x-2 items-center">
                  Code
                  <Code />
                </Button>
              </Link>
            )}
            {content.url && (
              <Link href={content.url} target="_blank">
                <Button variant="regular" size="regular" className="flex gap-x-2 items-center">
                  Visit
                  <MoveRight />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
