import About from "@/components/organisms/about";
import { Cards } from "@/components/organisms/cards";
import { Links } from "@/components/organisms/links";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-wrap">
      <About />
      <Links />
      <Cards />
    </div>
  );
}
