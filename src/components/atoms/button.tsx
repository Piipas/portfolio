import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }) => {
  return (
    <button {...props} className={cn(className, "w-14 h-14 p-4 rounded-xl bg-gradient-to-t from-gray-900 to-gray-800")}>
      {children}
    </button>
  );
});
