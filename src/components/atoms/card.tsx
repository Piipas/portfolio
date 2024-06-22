import { CSSProperties, useMemo } from "react";
import { Button } from "./button";
import { Code, Github, MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GlareCard } from "../ui/glare-card";

export type Card = {
  label: string;
  title: string;
  logo: string;
  screenshot: string;
  description: string;
  "source-code"?: string;
  url: string;
  tags?: string[];
  visible: boolean;
};

export const Card = ({
  content,
  style,
  isActive,
  screenSize,
  className,
}: {
  content: Card;
  style?: CSSProperties;
  isActive: boolean;
  screenSize: number;
  className?: string;
}) => {
  const rotation = useMemo(() => Math.round(Math.random() * (10 - -10) + -10), []);

  return (
    <div
      className={cn(
        className,
        "w-[300px] h-[400px] flex items-center justify-center text-3xl text-background select-none pb-16 md:p-0",
      )}
      style={{ perspective: "1000px", zIndex: isActive ? "50" : undefined, ...style }}
    >
      <div
        className="w-full h-full relative transition-transform duration-500 transform-style-3d"
        style={{
          transform: isActive || screenSize < 768 ? `rotate(${0}deg) rotateY(180deg)` : `rotate(${rotation}deg)`,
        }}
      >
        <GlareCard className="flex items-center justify-center w-full h-full top-0 left-0 overflow-hidden backface-visibility-hidden">
          <p className="text-foreground">{content.label}</p>
        </GlareCard>
        {/* Back side */}
        <div
          className="absolute top-1/2 left-1/2 bg-white max-w-[calc(100vw-40px)] w-[350px] 2xl:w-[450px] min-h-[430px] h-[calc(100vh-400px)] md:h-[460px] 2xl:h-[calc(100vh-300px)] shadow-lg max-h-[700px] rounded-lg md:rounded-xl backface-visibility-hidden p-5 2xl:p-7 flex flex-wrap gap-y-4 content-between cursor-auto"
          style={{ transform: "rotateY(180deg) translateX(50%) translateY(-50%)" }}
        >
          <div className="space-y-3 2xl:space-y-6 flex-wrap">
            <div className="flex flex-wrap gap-x-6 items-center">
              <div
                className={cn(
                  "w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center",
                  content.logo && "bg-white",
                )}
              >
                {content.logo ? (
                  <Image src={content.logo} alt="" width={56} height={56} />
                ) : (
                  <Github className="text-gray-300" />
                )}
              </div>
              <div className="text-[22px] font-medium">{content.title}</div>
            </div>
            <div
              className={`w-full bg-gray-300 rounded-lg bg-cover bg-center aspect-video shadow-md`}
              style={{ backgroundImage: `url('${content.screenshot}')` }}
            ></div>
            {content.tags && (
              <div className="flex justify-center gap-2 flex-wrap">
                {content.tags.map((tag) => (
                  <span key={tag} className="bg-gray-300 text-gray-600 text-xs px-2 rounded-md py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            )}
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
