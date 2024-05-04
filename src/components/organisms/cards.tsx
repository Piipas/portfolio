"use client";

import { useCards } from "@/providers/cards-provider";
import { Card } from "@/components/atoms/card";
import { motion, PanInfo, Variants } from "framer-motion";
import { Button } from "@/components/atoms/button";
import { X } from "lucide-react";
import { Fragment, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import useScreenSize from "@/lib/hooks/useScreenSize";

const cards: Card[] = [
  {
    label: "Music Player",
    title: "Music Player",
    logo: "",
    screenshot: "/cards/screenshots/2.png",
    description: "A Spotify-like music platform where users can play, like, and follow artists.",
    "source-code": "https://github.com/piipas/music-player",
    url: "https://music-player-client.vercel.app/",
    tags: ["WIP"],
    visible: true,
  },
  {
    label: "Lcomeback",
    title: "Lcomeback",
    logo: "",
    screenshot: "/cards/screenshots/1.png",
    description: "An esports platform, which provides information about MENA esports scene.",
    url: "https://lcomeback.com",
    tags: ["Owner"],
    visible: true,
  },
  {
    label: "Bymaad",
    title: "Bymaad",
    logo: "/cards/logos/bymaad.png",
    screenshot: "/cards/screenshots/3.png",
    description: "A landing page UI service provider's landing page.",
    url: "https://by-maad.vercel.app",
    visible: true,
  },
  {
    label: "RYOA",
    title: "Roll your own auth",
    logo: "",
    screenshot: "/cards/screenshots/4.png",
    description: "Copy & paste code to roll your own auth easily and for free.",
    "source-code": "https://github.com/smakosh/roll-your-own-auth",
    url: "https://roll-your-own-auth.vercel.app/",
    tags: ["Contributor"],
    visible: true,
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
  const constraintsRef = useRef(null);
  const { isOpen, toggle } = useCards();
  const [activeCard, setActiveCard] = useState<number | null>();
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [visibleCards, setVisibleCards] = useState<Card[]>(cards);
  const { width } = useScreenSize();

  const handleCardDragEnd = (info: PanInfo, card: number) => {
    if (width < 768) {
      const threshold = 100;
      const x = info.offset.x;

      if (Math.abs(x) > threshold) {
        const newVisibleCards = visibleCards.map((c) =>
          visibleCards.indexOf(c) === card ? { ...c, visible: false } : c,
        );

        setVisibleCards((_) => newVisibleCards);

        if (newVisibleCards.filter((c) => c.visible).length === 0) {
          setTimeout(() => toggle(), 500);
          setTimeout(() => setVisibleCards(cards), 700);
        }
      }
    }

    setTimeout(() => setIsDragging(false), 200);
  };

  return (
    <motion.div
      ref={constraintsRef}
      className={
        "flex items-center justify-center absolute w-full h-full overflow-hidden -z-10 backdrop-blur-sm transition-all"
      }
      variants={containerVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      onAnimationComplete={() => setIsAnimating(false)}
      onAnimationStart={() => setIsAnimating(true)}
      onAnimationEnd={() => setIsAnimating(false)}
    >
      <div className="absolute top-0 left-0 w-full h-full" onClick={() => setActiveCard(null)}></div>
      <Button
        radius="circle"
        variant="secondary"
        className="absolute top-5 left-1/2 -translate-x-1/2 z-[60] hidden md:block"
        onClick={() => (toggle(), setActiveCard(null))}
      >
        <X />
      </Button>
      {visibleCards.map((content, index) => (
        <Fragment key={index}>
          {activeCard === index && <div className="placeholder w-[300px]"></div>}
          <motion.div
            className={cn(
              "card w-[300px] h-[400px]",
              width < 768 && "transition-opacity",
              content.visible ? "visible" : "!opacity-0 invisible",
              activeCard === index ? `duration-500 !z-50 !translate-x-0 !translate-y-0` : "relative",
              !isDragging && !isAnimating ? "transition-all cursor-pointer" : "cursor-grabbing",
            )}
            style={{
              position: width < 768 || activeCard === index ? "absolute" : "absolute",
              top: width < 768 || activeCard === index ? `calc(50% - (370px / 2) - ${10 * index}px)` : undefined,
              left:
                width < 768 || activeCard === index
                  ? `calc(50% - (300px / 2))`
                  : (width - 300) / 2 + (index % 2 == 0 ? -1 : 1) * ((Math.floor(index / 2) + 0.5) * (300 + 0)),
            }}
            variants={itemVariants}
            drag={width < 768 ? "x" : activeCard !== index ? true : false}
            dragConstraints={width >= 768 ? constraintsRef : { left: 0, right: 0 }}
            dragTransition={{ power: 0, min: 0, max: 400, timeConstant: 500 }}
            dragElastic={width < 768 ? 0.5 : false}
            // TODO: fix the animation when a card is dragged while the active card is going back to the initial position
            // onDrag={() => setActiveCard(null)}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, b) => handleCardDragEnd(b, index)}
            onClick={() => !isDragging && setActiveCard(index)}
          >
            <Card
              content={content}
              isActive={activeCard == index}
              className="transition-all duration-500 absolute"
              screenSize={width}
            />
          </motion.div>
        </Fragment>
      ))}
    </motion.div>
  );
};
