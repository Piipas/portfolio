"use client";

import classNames from "classnames";
import { Montserrat } from "next/font/google";
import React, { HTMLInputTypeAttribute, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  required?: boolean;
  requiredMessage?: string;
};

const Input = ({ type, placeholder, required, requiredMessage }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleBlur = (event: any) => {
    if (required && !event?.target?.value.length) {
      setShowError(true);
    }
    console.log(event.target);
    setIsFocused(false);
  };

  return (
    <div className="w-full relative">
      <div
        className={classNames(
          "absolute left-0 transition-all ease-out duration-200 font-light",
          isFocused ? "-top-4" : "top-1",
          showError ? "text-error" : "text-white"
        )}
      >
        {placeholder}
      </div>
      <input
        className={classNames(
          "w-full bg-transparent border-b-2 text-white outline-none py-3",
          showError ? "border-error" : "border-primary"
        )}
        type={type}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
      />
      {showError && (
        <div
          className={classNames(
            montserrat.className,
            "text-error text-left text-[13px] font-light"
          )}
        >
          {requiredMessage}
        </div>
      )}
    </div>
  );
};

export default Input;
