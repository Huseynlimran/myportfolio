import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

  // useEffect(() => {
  //   gsap.to(".animationnav", {
  //     "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  //     scale: 1,
  //     opacity: 1,
  //     duration: 2,
  //   });
  //   //       // gsap.fromTo(
  //   //       //   ".webok",
  //   //       //   {
  //   //       //     y: 0,
  //   //       //     opacity: 0,
  //   //       //     ease: Power3.easeOut,
  //   //       //   },
  //   //       //   {
  //   //       //     y: 100,
  //   //       //     opacity: 1,
  //   //       //     scrollTrigger: {
  //   //       //       trigger: ".boxoso",
  //   //       //       start:"center",
  //   //       //       end : "bottom",
  //   //       //       scrub : 3
  //   //       //     },
  //   //       //   }
  //   //       // );
  // }, []);

  const [active, setActive] = useState("nav-links");
  const [toggleIcon, setToggleIcon] = useState("burger");

  const showNav = () => {
    active === "nav-links"
      ? setActive("navlinks nav-active")
      : setActive("nav-links");

    // Toggle

    toggleIcon === "burger"
      ? setToggleIcon("burger toggle")
      : setToggleIcon("burger");
  };
  return (
    <nav className="navSticky">
      <div className="container animationnav">
        <Link to="/" className="logo">
         Imran

        </Link>

        <ul className={active}>
          <Link to="/" className="logo"></Link>

          <li className="listLi">
            <Link to="/home" className="linksNav">
              Home
            </Link>
          </li>
          <li className="listLi">
            <Link to="/myskills" className="linksNav">
              My Skills
            </Link>
          </li>
          <li className="listLi">
            <Link to="/project" className="linksNav">
              Project
            </Link>
          </li>
          <li className="listLi">
            <Link to="/about" className="linksNav">
              Abou me
            </Link>
          </li>
          <li className="listLi">
            <Link to="/" className="linksNav">
              Contact
            </Link>
          </li>
         
          
        </ul>

        <div></div>

        <div className={toggleIcon} onClick={showNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
