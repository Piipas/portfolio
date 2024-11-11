import { Code, ExternalLink, Plus } from "lucide-react";
import React from "react";
import { EvervaultCard } from "../ui/evervault-card";
import { cn } from "@/lib/utils";
import { Button } from "../atoms/button";

const CardBackSide = ({
  className,
  title,
  description,
  url,
  sourceCode,
  tags,
  screenshot,
}: {
  className?: string;
  title: string;
  description: string;
  url?: string;
  sourceCode?: string;
  label?: string;
  tags?: string[];
  screenshot: string;
}) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 max-w-[calc(100vw-40px)] w-[350px] 2xl:w-[450px] min-h-[430px] h-[calc(100vh-400px)] md:h-[460px] 2xl:h-[calc(100vh-300px)] shadow-lg max-h-[500px] rounded-lg md:rounded-xl backface-visibility-hidden flex flex-wrap gap-y-4 content-between cursor-auto"
      style={{ transform: "rotateY(180deg) translateX(50%) translateY(-50%)" }}
    >
      <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative bg-black w-full h-full">
        <Plus className="absolute h-6 w-6 -top-3 -left-3 text-white" />
        <Plus className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
        <Plus className="absolute h-6 w-6 -top-3 -right-3 text-white" />
        <Plus className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

        <div className="flex flex-col flex-grow w-full">
          <div
            className="aspect-video w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${screenshot}')` }}
          ></div>

          <h2 className="text-white mt-4 text-sm font-light">{description}</h2>
          <div className="flex gap-x-2">
            {tags?.map((tag) => (
              <p
                key={tag}
                className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-white px-2 py-0.5"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="flex gap-x-4 pt-8 justify-end w-full">
          {url ? (
            <Button
              variant="primary"
              size="regular"
              radius="none"
              className="min-w-24 gap-x-2"
              onClick={() => window.open(url, "_blank")}
            >
              <ExternalLink size={18} /> Visit
            </Button>
          ) : (
            ""
          )}
          {sourceCode ? (
            <Button
              variant="primary"
              size="regular"
              radius="none"
              className="min-w-24 gap-x-2"
              onClick={() => window.open(sourceCode, "_blank")}
            >
              <Code size={18} /> Source
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CardBackSide;
