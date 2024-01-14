import React from "react";
import { cva } from "class-variance-authority";

interface codeProps {
  children: React.ReactNode;
  className?: string;
  intent: "hover" | "static";
}

const code = cva(
  [
    "relative",
    "before:absolute",
    "before:right-full",
    "after:absolute",
    "after:left-full",
    "before:content-['<']",
    "before:text-primary",
    "after:content-['/>']",
    "after:text-primary",
  ],
  {
    variants: {
      intent: {
        hover: [
          "before:text-transparent",
          "after:text-transparent",
          "hover:before:text-primary",
          "hover:after:text-primary",
          "after:transition-all",
          "before:transition-all",
          "after:duration-200",
          "before:duration-200",
          "before:ease-in",
          "after:ease-in",
        ],
        static: [
          "before:content-['<']",
          "before:text-primary",
          "after:content-['/>']",
          "after:text-primary",
        ],
      },
    },
    defaultVariants: {
      intent: "static",
    },
  }
);

function Code({ children, intent, className }: codeProps) {
  return (
    <span className={code({ intent, className })}>
      <span className="px-1">{children}</span>
    </span>
  );
}

export default Code;
