import React from "react";
import { Roboto_Slab } from "next/font/google";
import classNames from "classnames";

const roboto_slab = Roboto_Slab({ subsets: ["latin"] });

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className={classNames(
        "w-full text-[44px] leading-title mb-8",
        roboto_slab.className
      )}
    >
      {children}
    </h2>
  );
}

export default Title;
