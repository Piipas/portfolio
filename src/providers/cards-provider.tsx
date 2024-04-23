"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type CardsProvider = {
  isOpen: boolean;
  toggle: () => void;
};

const defaultValues: CardsProvider = {
  isOpen: false,
  toggle: () => null,
};

const CardsContext = createContext<CardsProvider>(defaultValues);

export const CardsProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (status?: boolean) => {
    setIsOpen((prevState) => !prevState);
  };

  return <CardsContext.Provider value={{ isOpen, toggle }}>{children}</CardsContext.Provider>;
};

export const useCards = () => useContext(CardsContext);
