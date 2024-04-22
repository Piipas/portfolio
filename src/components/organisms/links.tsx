"use client";

import { Button } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import { Layers, Mail, Twitter } from "lucide-react";
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
    icon: <Twitter />,
    url: "https://x.com/pipas_dev",
    label: "@pipas_dev",
    point: false,
  },
  {
    icon: <Mail />,
    url: "mailto:is.baalouk@gmail.com",
    label: "Contact",
    point: false,
  },
];

export const Links = () => {
  const router = useRouter();

  return (
    <div className="flex gap-x-6">
      {links.map(({ icon, url, label, point }) => (
        <div className="group relative">
          <Button
            className={cn(
              "group-hover:-translate-y-3 transition-transform duraton-500 ease-in-out",
              point &&
                "after:w-4 after:h-4 after:absolute after:-top-1 after:-right-1 after:rounded-full after:bg-foreground",
            )}
            onClick={() => url && router.push(url)}
          >
            {icon}
          </Button>
          <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};
