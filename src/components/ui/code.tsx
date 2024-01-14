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
  ],
  {
    variants: {
      intent: {
        hover: [
          "hover:before:content-['<']",
          "hover:before:text-primary",
          "hover:after:content-['/>']",
          "hover:after:text-primary",
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
