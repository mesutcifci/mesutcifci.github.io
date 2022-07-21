import * as React from "react";
import { useRef } from "react";
import { useCycle } from "framer-motion";
import { useDimensions } from "./UseDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import {
  NavStyle,
  RefreshStyle,
  BackgroundStyle,
} from "./styles";

const sidebar = {
  open: (height = 100) => ({
    clipPath: `circle(${height * 3 + 200}px at 40px 400px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Example = () => {
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
      <BackgroundStyle variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </NavStyle>
  );
};
