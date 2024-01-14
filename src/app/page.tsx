import Image from "next/image";
import Title from "@/components/atoms/title";
import Paragraph from "@/components/atoms/paragraph";
import Button from "@/components/atoms/button";

export default function Home() {
  return (
    <div className="col-span-6">
      <Title>I'm Full-stack developer from Sale, Morocco</Title>
      <Paragraph size={25} className="mb-14">
        I don’t like to define myself by the work I’ve done. I define myself by
        the work I want to do.
      </Paragraph>
      <Button>hire me</Button>
    </div>
  );
}
