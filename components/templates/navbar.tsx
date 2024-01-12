import React from "react";
import { ModeToggle } from "@/components/templates/mode-toggle";
import Logo from "@/components/uis/logo";

const Navbar = () => {
  return (
    <header className="container flex items-center justify-between py-3">
      <div>
        <Logo variant="name-link" />
      </div>

      <div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
