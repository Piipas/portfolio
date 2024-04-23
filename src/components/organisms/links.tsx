"use client";

import { Button } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import { useCards } from "@/providers/cards-provider";
import { motion, Variants } from "framer-motion";
import { Github, Layers, Mail, Twitter } from "lucide-react";
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          fill="currentColor"
        />
      </svg>
    ),
    url: "https://x.com/pipas_dev",
    label: "@pipas_dev",
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
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
    <motion.div className="flex gap-x-6" initial="hidden" animate="visible" variants={containerVariants}>
      {links.map(({ icon, url, label, point }) => (
        <motion.div key={label} className="group relative" variants={buttonVariants}>
          <Button
            className={cn(
              "group-hover:-translate-y-3 transition-transform duraton-500 ease-in-out",
              point &&
                "after:w-4 after:h-4 after:absolute after:-top-1 after:-right-1 after:rounded-full after:bg-foreground after:opacity-0 after:animate-show",
            )}
            onClick={() => (url ? router.push(url) : toggle())}
          >
            {icon}
          </Button>
          <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};
