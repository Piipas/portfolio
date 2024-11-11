import { Plus } from "lucide-react";
import React, { ReactNode } from "react";
import { EvervaultCard } from "../ui/evervault-card";

const CardFrontSide = ({ children }: { children: string }) => {
  return (
    <div className="relative w-full h-full top-0 left-0 backface-visibility-hidden bg-black border-white/20 border">
      <Plus className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Plus className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Plus className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Plus className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <EvervaultCard text={children} className="h-full aspect-auto w-full" />
    </div>
  );
};

export default CardFrontSide;
