import React from "react";
import Code from "../ui/code";
import Link from "next/link";

function Header() {
  return (
    <div className="container mx-auto px-5 h-[70px] bg-transparent flex justify-between text-md font-semibold">
      <Link href="/" className="h-full flex items-center">
        <Code intent={"static"}>PabloParasenko</Code>
      </Link>
    </div>
  );
}

export default Header;
