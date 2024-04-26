import { cn } from "@/lib/utils";
import Typewriter from "../atoms/typewriter";
import { Titillium_Web } from "next/font/google";

const titillium_Web = Titillium_Web({ subsets: ["latin"], weight: ["900"] });

const About = () => {
  return (
    <div className={"text-center w-full"}>
      <Typewriter
        target="Ismail Baalouk"
        className={cn("text-5xl xl:text-8xl text-gray-300 font-extrabold uppercase", titillium_Web.className)}
      />
      <div className="text-xl">Full stack web developer</div>
    </div>
  );
};

export default About;
