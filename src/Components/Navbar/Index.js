import * as React from "react";
import { useRef } from "react";
import { useCycle } from "framer-motion";
import { NavbarButton } from "../NavbarButton";
import { Navigation } from "../Navigation";
import { Container, Sidebar, sidebarAnimationConfigs } from "./styles";

 const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <Container
      initial={false}
      animate={isOpen ? "open" : "closed"}  
      ref={containerRef}
    >
      <Sidebar variants={sidebarAnimationConfigs} />
      <Navigation toggle={() => toggleOpen()} />
      <NavbarButton toggle={() => toggleOpen()} />
    </Container>
  );
};

export default Navbar;