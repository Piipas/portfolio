"use client";

import { Button } from "@/components/atoms/button";
import { useCards } from "@/providers/cards-provider";
import { motion, Variants } from "framer-motion";
import { File, Github, Layers, Linkedin, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export type Link = {
  icon: JSX.Element;
  url?: string;
  label: string;
  point: boolean;
};

const links: Link[] = [
  {
    icon: <Layers />,
    label: "Projects",
    point: true,
  },
  {
    icon: <Linkedin />,
    url: "https://linkedin.com/in/ismail-baalouk",
    label: "LinkedIn",
    point: false,
  },
  {
    icon: <Github />,
    url: "https://github.com/piipas",
    label: "Github",
    point: false,
  },
  {
    icon: <Mail />,
    url: "mailto:is.baalouk@gmail.com",
    label: "Contact",
    point: false,
  },
  {
    icon: <File />,
    url: "/resume.pdf",
    label: "Resume",
    point: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delay: 2,
      delayChildren: 2.3,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const Links = () => {
  const router = useRouter();
  const { toggle } = useCards();

  return (
    <motion.div
      className="flex gap-x-6 justify-center flex-wrap gap-y-7 px-6 sm:px-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {links.map(({ icon, url, label, point }) => (
        <motion.div key={label} className="group relative w-full sm:w-auto" variants={buttonVariants}>
          <Button
            className="flex gap-x-2 w-full sm:w-auto"
            onClick={() => (url ? window.open(url, "_blank") : toggle())}
            radius="none"
            variant="primary"
            size="links"
          >
            <span className="text-[24px]">{icon}</span>
            <span className="">{label}</span>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};
