import { Power1, gsap } from "gsap";
import React, { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    const sg = gsap.timeline({ default: { ease: Power1 } });

    sg
     .to(".text", {
      translateY: "0%",
      duration: 0.3,
      opacity: 1,
      stagger: 0.1,
     })
     .to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 })
     .to(".intro", { y: "-100%", duration: 1 }, "-=1");
  }, []);
  return (
    <div>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text fontt">
              I<span className="text fontt">M</span>
              <span className="text fontt">R</span>
              <span className="text fontt">A</span>
              <span className="text fontt">N</span>
              <span className="text fontt space"> </span>
              <span className="text fontt">H</span>
              <span className="text fontt">U</span>
              <span className="text fontt">S</span>
              <span className="text fontt">E</span>
              <span className="text fontt">Y</span>
              <span className="text fontt">N</span>
              <span className="text fontt">L</span>
              <span className="text fontt">I</span>
            </span>
          </h1>
        </div>
      </div>

      <div className="slider"></div>
    </div>
  );
}
