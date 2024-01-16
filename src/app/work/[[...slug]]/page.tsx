"use client";

import Title from "@/components/atoms/title";
import Paragraph from "@/components/atoms/paragraph";
import Button from "@/components/atoms/button";
import React, { useState } from "react";
import Image from "next/image";
import Pagination from "@/components/molecules/pagination";

interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  url: string;
  source_code: string;
  screenshot: string;
}

function page({ params }: { params: { slug?: string } }) {
  const [currentProject, setCurrentProject] = useState(params.slug || 1);
  const projects: Project[] = [
    {
      id: 1,
      name: "portfolio",
      description:
        "I wanted to make a simple portfolio site and with laconic design on one hand and not intrusive animation on the other.",
      tags: ["Nextjs", "Tailwind", "GSAP"],
      url: "https://novaflixtv.com",
      source_code: "https://github.com/piipas/portfolio",
      screenshot: "portfolio.webp",
    },
    {
      id: 2,
      name: "portfolio 2",
      description:
        "I wanted to make a simple portfolio site and with laconic design on one hand and not intrusive animation on the other.",
      tags: ["Nextjs", "Tailwind", "GSAP"],
      url: "https://novaflixtv.com",
      source_code: "https://github.com/piipas/portfolio",
      screenshot: "portfolio.webp",
    },
    {
      id: 3,
      name: "portfolio 3",
      description:
        "I wanted to make a simple portfolio site and with laconic design on one hand and not intrusive animation on the other.",
      tags: ["Nextjs", "Tailwind", "GSAP"],
      url: "https://novaflixtv.com",
      source_code: "https://github.com/piipas/portfolio",
      screenshot: "portfolio.webp",
    },
  ];

  const { id, name, description, tags, url, source_code, screenshot }: Project =
    projects.find(
      (project: Project): boolean => project.id == currentProject
    ) || projects[0];
  return (
    <div className="w-full col-span-9 grid grid-cols-12 gap-4">
      <div className="col-span-5">
        <Title>{name}</Title>
        <Paragraph className="text-sm leading-[1.57]">{description}</Paragraph>
        <div className="pt-5">
          {tags.map((tag: string) => (
            <span className="me-2 group text-[15px] font-semibold" key={tag}>
              {tag}
              <span className="group-last:hidden">,</span>
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-16">
          <Button>Discover</Button>
          <Button>View Code</Button>
        </div>
      </div>
      <div className="col-span-7 flex items-center">
        <Image
          src={`/images/${screenshot}`}
          width={500}
          height={500}
          alt={name.replace(" ", "-")}
        />
      </div>
      <Pagination
        workLength={projects.length}
        currentWork={Number(params.slug)}
      />
    </div>
  );
}

export default page;
