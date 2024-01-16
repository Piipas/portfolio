"use client";

import Title from "@/components/atoms/title";
import Paragraph from "@/components/atoms/paragraph";
import React, { useState } from "react";
import Icon from "@/components/atoms/icon";
import { Montserrat, Roboto_Slab } from "next/font/google";
import classNames from "classnames";
import Experience from "@/components/molecules/experience-sidebar";

const montserrat = Montserrat({ subsets: ["latin"] });
const roboto_slab = Roboto_Slab({ subsets: ["latin"] });

function page() {
  const [showExperience, setShowExperience] = useState(false);
  const handleExperiences = (experience: boolean): void => {
    setShowExperience(experience);
  };
  return (
    <>
      <div className="w-full col-span-5">
        <Title>Hi, I’m Ismail Baalouk</Title>
        <Paragraph>
          I’m Pavel from Kyiv, Ukraine. I have more than 2 years’{" "}
          <button
            className={classNames(
              roboto_slab.className,
              "text-primary border focus:border-primary border-dashed border-transparent cursor-pointer px-1 font-medium"
            )}
            onClick={() => handleExperiences(true)}
          >
            experience
          </button>{" "}
          in HTML/CSS/Javascript. I love creating user interfaces which are
          intuitive, convenient and beautiful. Of course, I’m paying attention
          to performance and accessibility that I consider to be highly
          important.
        </Paragraph>
        <p className="flex gap-2 items-center mt-14 hover:text-primary transition-colors duration-300 ease-in cursor-pointer">
          <Icon name="download" size={20} className="text-primary" />{" "}
          <span className="uppercase">download cv</span>
          <span className={classNames(montserrat.className, "text-sm")}>
            (pdf 66kb)
          </span>
        </p>
      </div>
      {showExperience && <Experience handleExperiences={handleExperiences} />}
    </>
  );
}

export default page;
