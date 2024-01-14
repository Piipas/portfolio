import React from "react";
import Code from "../atoms/code";
import Link from "next/link";

function Header() {
  return (
    <div className="container h-[70px] bg-transparent flex justify-between text-md">
      <Link href="/" className="h-full flex items-center font-medium">
        <Code intent={"static"}>IsmailBaalouk</Code>
      </Link>
    </div>
  );
}

export default Header;
