import gsap from "gsap";
import React, { useEffect } from "react";
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
      ".itemHome",
      { opacity: 0, y: -200 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 3,
        delay: 1,
      }
    );
    gsap.fromTo(
      ".myname",
      { x: -1000 },
      {
        x: 1000,
        duration: 10,
        paused: false,
        draggable: true,
        repeat: true,
        reversed:true
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

  return (
    <section className="home mt-5 pt-5 mb-0" id="home">
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
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    H
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    i
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
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
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    I
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.05"
                  >
                    '
                  </span>
                  <span
                    id="layer"
                    className="me-4 sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.05"
                  >
                    m
                  </span>
                  <span
                    id="layer"
                    className="fw-bold sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.05"
                  >
                    I
                  </span>
                  <span
                    id="layer"
                    className="fw-bold sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.05"
                  >
                    m
                  </span>
                  <span
                    id="layer"
                    className="fw-bold sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.05"
                  >
                    r
                  </span>
                  <span
                    id="layer"
                    className="fw-bold sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.05"
                  >
                    a
                  </span>
                  <span
                    id="layer"
                    className="fw-bold sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.05"
                  >
                    n
                  </span>
                  <span
                    id="layer"
                    className="fw-bold sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.05"
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
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    W
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    e
                  </span>
                  <span
                    id="layer"
                    className="me-3 sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    b
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    D
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    e
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    v
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    e
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    l
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    o
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    p
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
                  >
                    e
                  </span>
                  <span
                    id="layer"
                    className="sol"
                    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                    data-scroll-delay="0.5"
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
              data-scroll-speed="1"
            >
              Front end developer
            </p>
            <a
              href="mailto: huseynlimran@gmail.com"
              className="cnt text-center mb-4 sol"
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
              data-scroll-speed="7"
              data-scroll-delay="0.05"
            />
            <a
              href="https://github.com/Huseynlimran"
              target="_blank"
              rel="noreferrer"
              className="sag"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/imran-huseynli-406347220/"
              className="sag"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div id="direction">
        <h1
          className="myname"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="7"
          data-scroll-target="#direction"
          data-scroll-delay="0.05"
        >
          HUSEYNLI IMRAN FRONT END DEVELOPER
        </h1>
      </div>

      {/* <div className="box"></div> */}
    </section>
  );
}
