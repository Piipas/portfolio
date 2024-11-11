import { CSSProperties, useMemo } from "react";
import { cn } from "@/lib/utils";
import CardBackSide from "../organisms/card-back-side";
import CardFrontSide from "../organisms/card-front-side";

export type Card = {
  label: string;
  title: string;
  logo: string;
  screenshot: string;
  description: string;
  sourceCode?: string;
  url: string;
  tags?: string[];
  visible: boolean;
};

export const Card = ({
  content: { description, label, logo, screenshot, title, url, sourceCode, tags },
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
        <CardFrontSide>{label}</CardFrontSide>
        <CardBackSide
          description={description}
          sourceCode={sourceCode}
          tags={tags}
          title={title}
          label={label}
          url={url}
          screenshot={screenshot}
          className="bg-black w-full h-full"
        />
      </div>
    </div>
  );
};
