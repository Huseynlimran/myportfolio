import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navigation = () => {
  

  useEffect(() => {
    gsap.fromTo(".linksNav",{x:100,opacity:0}, {
      x:0,
      scale: 1,
      opacity: 1,
      duration: 2,
      stagger:.3,
      delay:3,
    });

    
   
    //       // gsap.fromTo(
    //       //   ".webok",
    //       //   {
    //       //     y: 0,
    //       //     opacity: 0,
    //       //     ease: Power3.easeOut,
    //       //   },
    //       //   {
    //       //     y: 100,
    //       //     opacity: 1,
    //       //     scrollTrigger: {
    //       //       trigger: ".boxoso",
    //       //       start:"center",
    //       //       end : "bottom",
    //       //       scrub : 3
    //       //     },
    //       //   }
    //       // );
  }, []);

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


  const closeNav = () =>{

   

    active === "nav-links"
    ? setActive("navlinks")
    :setActive("nav-links");

    toggleIcon === "burger"
      ? setToggleIcon("burger toggle")
      : setToggleIcon("burger");
  }
  return (
    <nav className="navSticky">
      <div className="container animationnav">
        <Link to="/" className="logo">
         Imran

        </Link>

        <ul className={active}>
          <Link to="/" className="logo"></Link>

          <li className="listLi">
            <Link onClick={closeNav} to="/home" className="linksNav home">
              Home
            </Link>
          </li>
          <li className="listLi">
            <Link onClick={closeNav} to="/#myskills" className="linksNav">
              My Skills
            </Link>
          </li>
          <li className="listLi">
            <Link onClick={closeNav} to="/project" className="linksNav">
              Project
            </Link>
          </li>
          <li className="listLi">
            <Link onClick={closeNav} to="/about" className="linksNav">
              Abou me
            </Link>
          </li>
          <li className="listLi">
            <Link onClick={closeNav} to="/" className="linksNav">
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
