import { ReactNode } from "react";
import { CardsProvider } from "./cards-provider";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <CardsProvider>{children}</CardsProvider>;
};
