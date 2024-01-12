import { AlarmClockCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = ({ variant = "" }: { variant?: "" | "link" | "name-link" }) => {
  if (variant === "link") {
    return (
      <Link href={"/"}>
        <LogoIcon />
      </Link>
    );
  }

  if (variant === "name-link") {
    return (
      <Link href={"/"} className="flex items-center gap-1">
        <LogoIcon />
        <Sitename />
      </Link>
    );
  }

  return <LogoIcon />;
};

const Sitename = () => {
  return <h1 className="text-xl font-medium">Timer</h1>;
};

const LogoIcon = () => {
  return <AlarmClockCheck strokeWidth={"1px"} size={"40px"} />;
};

export default Logo;
