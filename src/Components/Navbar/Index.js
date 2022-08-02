import * as React from "react";
import { useRef } from "react";
import { useCycle } from "framer-motion";
import { useDimensions } from "./UseDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { NavStyle, Sidebar, sidebar } from "./styles";

 const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <NavStyle
      initial={false}
      animate={isOpen ? "open" : "closed"}  
      custom={height}
      ref={containerRef}
    >
      <Sidebar variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </NavStyle>
  );
};

export default Navbar;