import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Plus } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "regular";
  size?: "regular" | "links";
  radius?: "circle" | "none";
  children: JSX.Element | string | (JSX.Element | string)[];
}

const button = cva("transition-all", {
  variants: {
    intent: {
      // primary: "bg-gradient-to-t from-gray-900 to-gray-800 text-foreground",
      primary: "border border-[0.2px] border-white/60 px-4 py-1 relative text-foreground hover:bg-white/10",
      secondary: "bg-gray-700 hover:bg-gray-800",
      regular: "bg-gray-200 text-gray-600 hover:bg-gray-300",
    },
    size: {
      icon: "w-14 h-14 p-4",
      regular: "px-4 md:px-6 py-3 text-sm md:text-lg",
      links: "px-4 py-1",
    },
    radius: {
      default: "rounded-xl",
      circle: "rounded-full",
      none: "rounded-none",
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
        {variant === "primary" || !variant ? (
          <>
            <Plus className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2" size={16} />
            <Plus className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2" size={16} />
            <Plus className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2" size={16} />
            <Plus className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2" size={16} />
          </>
        ) : null}
      </button>
    );
  },
);

Button.displayName = "Button";
