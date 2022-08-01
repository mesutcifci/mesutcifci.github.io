import React from "react";
import { ScrollIcon } from "./styles";
import { useEffect, useState } from "react";

const Scroll = ({ scrollPoint, visibleLength, direction }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let documentHeight = document.documentElement.scrollHeight;
      let innerHeight = window.innerHeight;
      let condition;

      //"Scroll Up" should always appear at the bottom of the page, but "Scroll Down" should not
      direction == "down"
        ? (condition = window.scrollY + 20 < documentHeight - innerHeight)
        : (condition = true);

      if (window.scrollY >= visibleLength && condition) {
        setVisible(true); 
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollPlace = () => {
    window.scrollTo({
      top: scrollPoint,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <ScrollIcon
          onClick={scrollPlace}
          viewBox="0 0 510 510"
          direction={direction}
        >
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 310.6c-12.5 12.5-32.75 12.5-45.25 0L256 221.3L166.6 310.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l112-112C239.6 147.1 247.8 144 256 144s16.38 3.125 22.62 9.375l112 112C403.1 277.9 403.1 298.1 390.6 310.6z" />
        </ScrollIcon>
      )}
    </>
  );
};

export default Scroll;
