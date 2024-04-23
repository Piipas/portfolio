"use client";

import { useCards } from "@/providers/cards-provider";
import { Card } from "../atoms/card";
import { motion } from "framer-motion";
import { Button } from "../atoms/button";
import { X } from "lucide-react";
import { useRef, useState } from "react";

const cards = ["Music Player", "Lcomeback", "Something"];

const containerVariants = {
  hidden: { opacity: 0, zIndex: -10 },
  visible: {
    opacity: 1,
    zIndex: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
};

export const Cards = () => {
  const { isOpen, toggle } = useCards();
  const constraintsRef = useRef(null);
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <motion.div
      className={"flex items-center justify-center absolute w-full h-screen overflow-hidden -z-10"}
      variants={containerVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      ref={constraintsRef}
    >
      <Button
        radius="circle"
        variant="secondary"
        className="absolute top-5 left-1/2 -translate-1/2 z-10"
        onClick={() => toggle()}
      >
        <X />
      </Button>
      {cards.map((content) => (
        <motion.div
          variants={itemVariants}
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          style={{ perspective: "1000px" }}
        >
          <Card content={content} />
        </motion.div>
      ))}
    </motion.div>
  );
};
