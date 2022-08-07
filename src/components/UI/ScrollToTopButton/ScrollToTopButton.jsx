import React from "react";
import classes from "./ScrollToTopButton.module.css";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import animateScrollTo from "animated-scroll-to";
import { useEffect } from "react";
import { useState } from "react";

const ScrollToTopButton = () => {
  const [state, setState] = useState({ isScrolledToTop: true });

  const handlerScroll = () => {
    if (window.scrollY < 150) {
      setState({ isScrolledToTop: true });
    } else {
      setState({ isScrolledToTop: false });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    
  }, []);

  const buttonClasses = [classes.Button];

  if (state.isScrolledToTop) {
    window.removeEventListener("scroll", handlerScroll);
    buttonClasses.push(classes.Hide);
  }

  return (
    <button
      className={buttonClasses.join(" ")}
      onClick={() => {
        animateScrollTo(0);
      }}
    >
      <FontAwesomeIcon icon={faAngleUp} size={"lg"} />
    </button>
  );
};

export default ScrollToTopButton;
