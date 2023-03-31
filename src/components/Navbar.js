import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Navigation = () => {

  const { scroll } = useLocomotiveScroll();
  useEffect(() => {
    gsap.fromTo(
      ".linksNav",
      { x: 100, opacity: 0 },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        delay: 3,
      }
    );
    gsap.fromTo(
      ".First",
      { rotate: "150", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        delay: 3,
        rotate: 0,
      }
    );
    gsap.fromTo(
      ".Second",
      { Y: -100, opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        delay: 3.5,
        y: 0,
      }
    );

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

  const closeNav = (event,sectionId) => {

    event.preventDefault();
    const offset = document.querySelector('nav').offsetHeight -250; // adjust offset based on your header height
    scroll.scrollTo(sectionId, { offset });
    console.log(offset)

    active === "nav-links" ? setActive("navlinks") : setActive("nav-links");

    toggleIcon === "burger"
      ? setToggleIcon("burger toggle")
      : setToggleIcon("burger");
  };
  return (
    <nav className="navSticky">
      <div className="containerl navcontainer animationnav">
        <a href="#home"  onClick={(e) => closeNav(e, '#home')} className="logo">
          <svg
            width="47"
            height="43"
            viewBox="0 0 47 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="First"
              d="M6.556 39.816C6.556 41.48 5.516 42.312 3.436 42.312C1.39067 42.312 0.368 41.48 0.368 39.816V2.948C0.368 1.284 1.39067 0.451999 3.436 0.451999C5.516 0.451999 6.556 1.284 6.556 2.948V39.816Z"
              fill="#CFF306"
            />
            <path
              className="Second"
              d="M40.156 2.948C40.156 1.284 41.1787 0.451999 43.224 0.451999C45.304 0.451999 46.344 1.284 46.344 2.948V39.816C46.344 41.48 45.304 42.312 43.224 42.312C41.1787 42.312 40.156 41.48 40.156 39.816V2.948ZM24.348 39.816C24.348 41.48 23.308 42.312 21.228 42.312C19.1827 42.312 18.16 41.48 18.16 39.816V2.948C18.16 1.284 19.1827 0.451999 21.228 0.451999C23.308 0.451999 24.348 1.284 24.348 2.948V39.816ZM36.516 20.524C36.516 21.7373 36.1 22.76 35.268 23.592C34.436 24.424 33.4133 24.84 32.2 24.84C31.0213 24.84 30.016 24.424 29.184 23.592C28.352 22.76 27.936 21.7373 27.936 20.524C27.936 19.3107 28.352 18.288 29.184 17.456C30.016 16.624 31.0213 16.208 32.2 16.208C33.4133 16.208 34.436 16.624 35.268 17.456C36.1 18.288 36.516 19.3107 36.516 20.524Z"
              fill="#CFF306"
            />
          </svg>
        </a>

        <ul className={active}>
          <li className="listLi">
            <a href="#home" onClick={(e) => closeNav(e, '#home')} className="linksNav home">
              Home
            </a>
          </li>
          <li className="listLi">
            <a href="#myskills" onClick={(e) => closeNav(e, '#myskills')} className="linksNav">
              My Skills
            </a>
          </li>
          <li className="listLi">
            <a href="#project" onClick={(e) => closeNav(e, '#project')} className="linksNav">
              Project
            </a>
          </li>
          <li className="listLi">
            <a href="#aboutme" onClick={(e) => closeNav(e, '#aboutme')} className="linksNav">
              Abou me
            </a>
          </li>
          <li className="listLi">
            <a onClick={(e) => closeNav(e, '#contact')} href="#contact" className="linksNav">
              Contact
            </a>
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
