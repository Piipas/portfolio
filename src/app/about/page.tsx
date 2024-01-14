import Title from "@/components/atoms/title";
import Paragraph from "@/components/atoms/paragraph";
import React from "react";
import Icon from "@/components/atoms/icon";
import { Montserrat } from "next/font/google";
import classNames from "classnames";

const montserrat = Montserrat({ subsets: ["latin"] });

function page() {
  return (
    <div className="w-full col-span-5">
      <Title>Hi, I’m Ismail Baalouk</Title>
      <Paragraph>
        I’m Pavel from Kyiv, Ukraine. I have more than 2 years’{" "}
        <span className="text-primary active:border border-dashed border-primary cursor-pointer px-1">
          experience
        </span>{" "}
        in HTML/CSS/Javascript. I love creating user interfaces which are
        intuitive, convenient and beautiful. Of course, I’m paying attention to
        performance and accessibility that I consider to be highly important.
      </Paragraph>
      <p className="flex gap-2 items-center mt-14">
        <Icon name="download" size={20} className="text-primary" />{" "}
        <span className="uppercase">download cv</span>
        <span className={classNames(montserrat.className, "text-sm")}>
          (pdf 66kb)
        </span>
      </p>
    </div>
  );
}

export default page;
