"use client";

import { useCards } from "@/providers/cards-provider";
import { Card } from "../atoms/card";
import { motion, useDragControls, Variants } from "framer-motion";
import { Button } from "../atoms/button";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const cards: Card[] = [
  {
    label: "Music Player",
    title: "Music Player",
    logo: "",
    screenshot: "/cards/1.png",
    description: "An image editor that helps YouTubers make better thumbnails without having to hire a designer",
    "source-code": "https://github.com/piipas",
    url: "",
  },
  {
    label: "Lcomeback",
    title: "Lcomeback",
    logo: "",
    screenshot: "/cards/1.png",
    description: "An image editor that helps YouTubers make better thumbnails without having to hire a designer",
    "source-code": "https://github.com/piipas",
    url: "https://lcomeback.com",
  },
  {
    label: "Something",
    title: "Something",
    logo: "",
    screenshot: "/cards/1.png",
    description: "An image editor that helps YouTubers make better thumbnails without having to hire a designer",
    "source-code": "https://github.com/piipas",
    url: "",
  },
  {
    label: "Something",
    title: "Something",
    logo: "",
    screenshot: "/cards/1.png",
    description: "An image editor that helps YouTubers make better thumbnails without having to hire a designer",
    "source-code": "https://github.com/piipas",
    url: "",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, zIndex: -10 },
  visible: {
    opacity: 1,
    zIndex: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 50, x: 0, opacity: 0 },
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
  const [activeCard, setActiveCard] = useState<number | null>();
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isAnnimating, setIsAnnimating] = useState<boolean>(false);
  const dragControls = useDragControls();

  console.log(constraintsRef);

  return (
    <motion.div
      ref={constraintsRef}
      className={
        "flex items-center justify-center absolute w-full h-screen overflow-hidden -z-10 backdrop-blur-sm transition-all"
      }
      variants={containerVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      onAnimationComplete={() => setIsAnnimating(false)}
      onAnimationStart={() => setIsAnnimating(true)}
      onAnimationEnd={() => setIsAnnimating(false)}
    >
      <div className="absolute top-0 left-0 w-full h-full" onClick={() => setActiveCard(null)}></div>
      <Button
        radius="circle"
        variant="secondary"
        className="absolute top-5 left-1/2 -translate-1/2 z-10"
        onClick={() => (toggle(), setActiveCard(null))}
      >
        <X />
      </Button>
      {cards.map((content, index) => (
        <motion.div
          key={index}
          className={cn(
            activeCard === index ? `duration-500 !-translate-x-0 !-translate-y-0 !z-50` : "",
            !isDragging && !isAnnimating ? "transition-transform cursor-pointer" : "cursor-grabbing",
          )}
          dragControls={dragControls}
          variants={itemVariants}
          drag={activeCard !== index}
          dragConstraints={constraintsRef}
          dragTransition={{ power: 0, min: 0, max: 400, timeConstant: 500 }}
          dragElastic={false}
          onDrag={() => setActiveCard(null)}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onDoubleClick={() => !isDragging && setActiveCard(index)}
        >
          <Card content={content} isActive={activeCard == index} />
        </motion.div>
      ))}
    </motion.div>
  );
};
