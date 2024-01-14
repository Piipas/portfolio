import React from "react";
import Code from "../ui/code";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface sidebarLink {
  name: String;
  route: Url;
}

interface SidebarProps {
  links: Array<sidebarLink>;
}

function Sidebar({ links }: SidebarProps) {
  return (
    <div className="sidebar">
      {links.map((link) => (
        <div className="sidebar-link">
          <Link href={link.route}>
            <Code hover>{link.name}</Code>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
