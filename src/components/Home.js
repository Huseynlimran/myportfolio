import gsap from "gsap";
import React, { useEffect } from "react";
import {BsGithub} from "react-icons/bs";
import {FiLinkedin} from "react-icons/fi";
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
      }
    );
    gsap.fromTo(
      ".icons",
      { opacity: 0,x:50},
      {
        x:0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      ".itemHome",
      { opacity: 0, y: -200 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 3,
        delay: .02     }
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

  return (
    <section className="home mt-5 pt-5 mb-0" id="home" data-scroll-section>
      <div className="container">
        <div className="row pt-md-5 mt-5">
          <div className="col-md-6 d-flex flex-column align-items-start justify-content-md-center">
            <h1 className="display-1">
              <div className="boxoso">
                <div className="d-flex">
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    H
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    i
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    ,
                  </span>
                </div>
                <div className="d-flex sol words">
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    I
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    '
                  </span>
                  <span
                    id="layer"
                    className="me-4 sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    m
                  </span>
                  <span
                    id="layer"
                    className="fw-bold sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    I
                  </span>
                  <span
                    id="layer"
                    className="fw-bold sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    m
                  </span>
                  <span
                    id="layer"
                    className="fw-bold sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    r
                  </span>
                  <span
                    id="layer"
                    className="fw-bold sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    a
                  </span>
                  <span
                    id="layer"
                    className="fw-bold sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    n
                  </span>
                  <span
                    id="layer"
                    className="fw-bold sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    ,
                  </span>
                </div>
                <div className="d-flex">
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    W
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    e
                  </span>
                  <span
                    id="layer"
                    className="me-5 sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    b
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    D
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    e
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    v
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    e
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    l
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    o
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    p
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    e
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                    
                  >
                    r
                  </span>
                </div>
              </div>
            </h1>
            <p
              className="mt-2 my-4 sol webok"
              aria-label=""
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
            >
              Front end developer
            </p>
            <a
              href="mailto: huseynlimran@gmail.com"
              className="cnt text-center mb-4 sol"
              target="_blank"
              rel="noreferrer"
              aria-label=""
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
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
              className="sag me-md-0 me-2"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
              
            >
              <BsGithub className="icons"/>
            </Link>
            <Link
              to="https://www.linkedin.com/in/imran-huseynli-406347220/"
              className="sag"
              target="_blank"
              rel="noreferrer"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="-1"
              
            >
              <FiLinkedin className="icons" />
            </Link>
          </div>
        </div>
      </div>

      {/* <div id="direction">
        <h1
          className="myname"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="1"
          data-scroll-target="#direction"
          data-scroll-delay=".02""
        >
          HUSEYNLI IMRAN FRONT END DEVELOPER
        </h1>
      </div> */}

      {/* <div className="box"></div> */}
    </section>
  );
}
