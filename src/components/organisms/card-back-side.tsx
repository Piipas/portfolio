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
  label,
}: {
  className?: string;
  title: string;
  description: string;
  url?: string;
  sourceCode?: string;
  label?: string;
  tags?: string[];
}) => {
  return (
    <div
      className={cn(
        "border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]",
        className,
      )}
    >
      <Plus className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Plus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Plus className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Plus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <div className="flex flex-col flex-grow w-full">
        <EvervaultCard text={label} />

        <h2 className="dark:text-white text-black mt-4 text-sm font-light">{description}</h2>
        <div className="flex gap-x-2">
          {tags?.map((tag) => (
            <p
              key={tag}
              className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5"
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
  );
};

export default CardBackSide;
