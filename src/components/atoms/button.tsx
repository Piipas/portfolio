import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "regular";
  size?: "regular";
  radius?: "circle";
  children: JSX.Element | string | (JSX.Element | string)[];
}

const button = cva("transition-all", {
  variants: {
    intent: {
      primary: "bg-gradient-to-t from-gray-900 to-gray-800 text-foreground",
      secondary: "bg-gray-700 hover:bg-gray-800",
      regular: "bg-gray-200 text-gray-600 hover:bg-gray-300",
    },
    size: {
      icon: "w-14 h-14 p-4",
      regular: "w-auto px-6 py-3 text-lg",
    },
    radius: {
      default: "rounded-xl",
      circle: "rounded-full",
    },
  },
  compoundVariants: [{ intent: "primary", size: "icon", radius: "default", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "icon",
    radius: "default",
  },
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, children, ...props }, ref) => {
    return (
      <button {...props} ref={ref} className={cn(className, button({ intent: variant, size, radius }))}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
