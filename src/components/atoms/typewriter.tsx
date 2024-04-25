"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Typewriter = ({
  text,
  delay,
  randomCharDelay,
  className,
}: {
  text: string;
  delay: number;
  randomCharDelay: number;
  className?: string;
}) => {
  const chars = text.split("");
  const [currentText, setCurrentText] = useState<string>("");

  useEffect(() => {
    const generateRandomChar = () => {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Generate lowercase letter
    };

    const intervalId = setInterval(() => {
      setCurrentText((prevText) => prevText + generateRandomChar());
    }, randomCharDelay);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setCurrentText(text);
    }, delay);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [text, delay, randomCharDelay]);

  return (
    <div className="text-center w-full">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className={className}>
        {currentText}
      </motion.div>
    </div>
  );
};

export default Typewriter;
