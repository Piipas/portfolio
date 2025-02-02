import { cn } from "@/lib/utils";
import Typewriter from "../atoms/typewriter";
import { Roboto_Mono, Titillium_Web } from "next/font/google";

// const titillium_Web = Titillium_Web({ subsets: ["latin"], weight: ["900"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const About = () => {
  return (
    <div className={"text-center w-full"}>
      <Typewriter
        target="Ismail Baalouk"
        className={cn("text-5xl xl:text-8xl text-gray-300 font-extrabold uppercase", robotoMono.className)}
      />
      <Typewriter target="Fullstack developer" className="text-xl" />
    </div>
  );
};

export default About;
