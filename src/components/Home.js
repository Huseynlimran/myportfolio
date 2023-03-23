import gsap, { Elastic } from "gsap";
import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".sol",
      { opacity: 0, scale: 0.3 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        delay:3.5
      }
    );
    gsap.fromTo(
      ".icons",
      { opacity: 0, x: 50 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      },"-=1"
    );
    gsap.fromTo(
      ".itemHome",
      { opacity: 0, y: -200 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 3,
        delay: 0.02,
      },"-=1"
    );
    // gsap.fromTo(
    //   "#home2",
    //   { opacity: 0},
    //   {
    //     opacity: 1,
    //     duration: 2,
    //   },"-=2"
    // );
    // gsap.fromTo(
    //   ".myname",
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     duration: 1,
    //   },"-=1"
    // );

    const boxe = document.querySelectorAll(".home #layer");
    boxe.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.add("active2");
        gsap.fromTo(
          ".active2",
          {
            scaleY: 2.2,
            scaleX: 0.2,
            ease: Elastic,
          },
          { scaleX: 1, scaleY: 1 }
        );
        element.addEventListener("mouseup", () => {
          element.classList.add("active2");
        });
        element.addEventListener("mouseleave", () => {
          element.classList.remove("active2");
        });
      });
    });
    // gsap.fromTo(
    //   ".webok",
    //   {
    //     y: 0,
    //     opacity: 0,
    //     ease: Power3.easeOut,
    //   },
    //   {
    //     y: 100,
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: ".boxoso",
    //       start:"center",
    //       end : "bottom",
    //       scrub : 3
    //     },
    //   }
    // );
  }, []);

  return (
    
    <section className="home" id="home">
     
      <div
        className="containerl"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="5">
        <div className="row d-flex">
          <div
            className="col-md-6 d-flex flex-column align-items-start  justify-content-md-center"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="6"
            data-scroll-delay="0.18"
            data-scroll-repeat
          >
            <div className="d-flex display-1">
              <span id="layer" className="sol">
                H
              </span>
              <span id="layer" className="sol">
                i
              </span>
              <span id="layer" className="sol">
                ,
              </span>
            </div>
            <div className="d-flex display-1 sol words">
              <span id="layer" className="sol">
                I
              </span>
              <span id="layer" className="sol">
                '
              </span>
              <span id="layer" className="me-md-3 me-2 sol">
                m
              </span>
              <span id="layer" className="fw-bold sol">
                I
              </span>
              <span id="layer" className="fw-bold sol">
                m
              </span>
              <span id="layer" className="fw-bold sol">
                r
              </span>
              <span id="layer" className="fw-bold sol">
                a
              </span>
              <span id="layer" className="fw-bold sol">
                n
              </span>
              <span id="layer" className="fw-bold sol">
                ,
              </span>
            </div>
            <div className="d-flex display-1">
              <span id="layer" className="sol">
                W
              </span>
              <span id="layer" className="sol">
                e
              </span>
              <span id="layer" className="me-md-3 me-2 sol">
                b
              </span>
              <span id="layer" className="sol">
                D
              </span>
              <span id="layer" className="sol">
                e
              </span>
              <span id="layer" className="sol">
                v
              </span>
              <span id="layer" className="sol">
                e
              </span>
              <span id="layer" className="sol">
                l
              </span>
              <span id="layer" className="sol">
                o
              </span>
              <span id="layer" className="sol">
                p
              </span>
              <span id="layer" className="sol">
                e
              </span>
              <span id="layer" className="sol">
                r
              </span>
            </div>
            <p className="mb-4 sol webok">Front end developer</p>
            <a
              href="mailto: huseynlimran@gmail.com"
              className="cnt text-center sol"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          </div>
          <div className="col-md-6 p-0 d-flex flex-md-column align-items-md-end align-items-start justify-content-md-center socials">
            <img
              src="img/item.png"
              className="itemHome"
              alt=""
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="5"
            />
            <Link
              to="https://github.com/Huseynlimran"
              target="_blank"
              rel="noreferrer"
              className="sag me-md-0 ms-2"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
            >
              <BsGithub className="icons" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/imran-huseynli-406347220/"
              className="sag ms-2"
              target="_blank"
              rel="noreferrer"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
            >
              <FiLinkedin className="icons" />
            </Link>
          </div>
        </div>
      </div>

      {/* <div id="home2">
        <h1
          className="myname"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="20"
          data-scroll-target="#home2"
        >
          HUSEYNLI IMRAN FRONT END DEVELOPER
        </h1>
        
      </div> */}
   

      {/* /* <div className="box"></div> */}
    </section>
  );
}
