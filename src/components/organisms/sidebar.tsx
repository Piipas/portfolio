"use client";

import React from "react";
import Code from "../atoms/code";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { usePathname } from "next/navigation";

interface sidebarLink {
  name: String;
  route: Url;
}

interface SidebarProps {
  links: Array<sidebarLink>;
}

function Sidebar({ links }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="sidebar col-span-3 flex flex-row flex-wrap content-center">
      {links.map((link, index) => (
        <div
          className="sidebar-link text-2xl uppercase py-4 leading-sidebar w-full"
          key={index}
        >
          <Link
            href={link.route}
            className={`ps-0 font-normal ${
              link.route == pathname
                ? "text-primary"
                : "text-white hover:ps-5 hover:text-primary transition-all duration-150 ease-in"
            }`}
          >
            {link.route == pathname ? (
              <span>{link.name}</span>
            ) : (
              <Code intent="hover">{link.name}</Code>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
