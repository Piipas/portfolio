import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className="uppercase border px-10 py-[9px] border-white flex items-center justify-center relative group hover:text-secondary transition-all duration-300 ease-in leading-button"
      {...props}
    >
      <span className="w-full h-0 group-hover:h-full absolute transition-all duration-[400ms] ease-out bg-primary -z-10"></span>
      {children}
    </button>
  );
}

export default Button;
