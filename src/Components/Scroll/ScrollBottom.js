import React from "react";
import { GoDownSvg } from "./styles";
import { useEffect, useState } from "react";

const ScrollBottom = ({top}) => {
  const [backToBottom, setBackToBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY >= 75 &&
        window.innerHeight < document.documentElement.scrollHeight - 1000
      ) {
        // console.log("window.innerHeight + window.scrollY: ", window.innerHeight + window.scrollY);
        setBackToBottom(true);
      } else {
        setBackToBottom(false);
      }
    });
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToBottom && (
        <GoDownSvg
          onClick={scrollDown}
          viewBox="0 0 510 510"
        >
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 310.6c-12.5 12.5-32.75 12.5-45.25 0L256 221.3L166.6 310.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l112-112C239.6 147.1 247.8 144 256 144s16.38 3.125 22.62 9.375l112 112C403.1 277.9 403.1 298.1 390.6 310.6z" />
        </GoDownSvg>
      )}
    </>
  );
};

export default ScrollBottom;
