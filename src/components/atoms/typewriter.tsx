"use client";

import { Variants, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const charVariants: Variants = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const TypeWriter = ({ className, target }: { className?: string; target: string }) => {
  const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const [displayWord, setDisplayWord] = useState<string>(target);

  useEffect(() => {
    let pastDuration = 0;
    const intervalId = setInterval(() => {
      pastDuration += 1000;
      const randomWord = Array.from(target)
        .map(() => randomChars[Math.floor(Math.random() * randomChars.length)])
        .join("");

      setDisplayWord(target.slice(0, pastDuration / 1000) + randomWord.slice(pastDuration / 1000));

      if (Math.round(pastDuration / 1000 - 1) === target.length) clearInterval(intervalId);
    }, 100);
    return () => clearInterval(intervalId);
  }, [target]);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <div className={className}>
        {displayWord.split("").map((char, i) => (
          <motion.span key={i} variants={charVariants}>
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default TypeWriter;
