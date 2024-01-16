import React from "react";
import Icon from "@/components/atoms/icon";
import Link from "next/link";

function Footer() {
  const social: { name: string; route: string }[] = [
    { name: "github", route: "https://github.com/piipas" },
    { name: "linkedin", route: "https://www.linkedin.com/in/ismail-baalouk/" },
    { name: "twitter", route: "https://twitter.com/pipasdev" },
  ];
  return (
    <div className="footer h-[70px] px-7 w-0 z-30">
      <div className="social flex gap-4 content-center h-full">
        {social.map((item, index) => (
          <Link
            href={item.route}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="h-full flex items-center justify-center hover:text-primary transition-all duration-150 ease-in"
          >
            <Icon name={item.name} size={24} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Footer;
