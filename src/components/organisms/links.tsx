"use client";

import { Button } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
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
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6">
      //   <path
      //     d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
      //     fill="currentColor"
      //   />
      // </svg>
      <Linkedin />
    ),
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
  // {
  //   icon: <File />,
  //   url: "mailto:is.baalouk@gmail.com",
  //   label: "Resume",
  //   point: false,
  // },
  {
    icon: <Mail />,
    url: "mailto:is.baalouk@gmail.com",
    label: "Contact",
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
