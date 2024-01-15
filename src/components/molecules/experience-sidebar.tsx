"use client";

import React, { FormEvent, useRef, useState } from "react";
import Icon from "../atoms/icon";
import { Montserrat } from "next/font/google";
import classNames from "classnames";

const montserrat = Montserrat({ subsets: ["latin"] });

interface Experience {
  title: string;
  profession: string;
  duration: string;
}

function Experience({
  handleExperiences,
}: {
  handleExperiences(showExperiences: boolean): void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const experiences: Experience[] = [
    {
      title: "Ashmanov & Partners, Moscow (remote)",
      profession: "Front-End developer",
      duration: "1 year 4 months",
    },
    {
      title: "Ashmanov & Partners, Moscow (remote)",
      profession: "Front-End developer",
      duration: "1 year 4 months",
    },
    {
      title: "Ashmanov & Partners, Moscow (remote)",
      profession: "Front-End developer",
      duration: "1 year 4 months",
    },
  ];

  const clickOutside = (event: any) => {
    if (overlayRef.current && !experiencesRef.current?.contains(event.target)) {
      handleExperiences(false);
    }
  };

  return (
    <div
      className="bg-black/50 w-full h-full left-0 top-0 absolute text-secondary"
      ref={overlayRef}
      onClick={clickOutside}
    >
      <div
        className="bg-white p-16 flex items-center absolute right-0 top-0 h-screen w-[530px]"
        ref={experiencesRef}
      >
        <div
          className="close text-secondary absolute right-5 top-5 hover:rotate-90 transition-transform cursor-pointer"
          onClick={() => handleExperiences(false)}
        >
          <Icon name="close" size={40} />
        </div>
        <div className="content">
          <div className="text-2xl pb-10">Experience</div>
          <ul>
            {experiences.map((experience, index) => {
              return (
                <li className="pb-5" key={index}>
                  <div className="text-lg font-base">{experience.title}</div>
                  <div className={classNames("text-sm", montserrat.className)}>
                    <span>{experience.profession}</span> /{" "}
                    <span>{experience.duration}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
