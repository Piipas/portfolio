import React from "react";
import { Montserrat } from "next/font/google";
import classNames from "classnames";

const montserrat = Montserrat({ subsets: ["latin"] });

interface paragraphProps {
  className?: string;
  size?: number;
  color?: string;
  children: React.ReactNode;
}
function Paragraph({ children, size, color, className }: paragraphProps) {
  return (
    <p
      className={classNames(
        montserrat.className,
        size ? `text-[${size}px]` : "text-base",
        className
      )}
    >
      {children}
    </p>
  );
}

export default Paragraph;
