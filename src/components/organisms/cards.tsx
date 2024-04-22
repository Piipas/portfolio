import { cn } from "@/lib/utils";
import { Card } from "../atoms/card";

const cards = ["Music Player", "Lcomeback", "Something"];

export const Cards = () => {
  return (
    <div className={"flex absolute"}>
      {cards.map((content) => (
        <Card content={content} />
      ))}
    </div>
  );
};
