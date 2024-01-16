import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { RiDownloadLine } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

interface iconProps {
  className?: string;
  size?: number;
  color?: string;
  name: string;
}

interface IconObject {
  [key: string]: React.ReactElement;
}

function Icon({ size, color, name, ...props }: iconProps) {
  const icons: IconObject = {
    github: <FaGithub size={size} color={color} {...props} />,
    linkedin: <FaLinkedin size={size} color={color} {...props} />,
    twitter: <FaXTwitter size={size} color={color} {...props} />,
    download: <RiDownloadLine size={size} color={color} {...props} />,
    close: <LiaTimesSolid size={size} color={color} {...props} />,
    left: <LuMoveLeft size={size} color={color} {...props} />,
    right: <LuMoveRight size={size} color={color} {...props} />,
  };

  return icons[name];
}

export default Icon;
