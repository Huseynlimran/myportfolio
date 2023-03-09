// import gsap, { Power3 } from "gsap";
import React from "react";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

export default function Skills() {

  // useEffect(() => {
  //   gsap.fromTo(
  //     ".MySkills",
  //     {
  //       x: -400,
  //       opacity: 0,
  //       ease: Power3.easeOut,
  //     },
  //     {
  //       x: 0,
  //       duration: 2,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: ".MySkills",
  //         start: "top",
  //         end: "center",
  //       },
  //     }
  //   );
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

  return (
    <section className="MySkills mb-5 pb-5" id="myskills" data-scroll-section>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6  mb-md-0 mb-5"
            data-scroll
            data-scroll-direction="vertiocal"
            data-scroll-speed="3"
            
          >
            <h1 className="lefts">My Skills</h1>
            <p className="lefts">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              quos unde velit qui maiores! Ipsam, natus est veritatis corrupti
              iusto rem veniam, nihil sint fugit, quae earum vero
            </p>
          </div>
          <div className="col-md-6 skill_equal" data-scroll
            data-scroll-direction="vertiocal"
            data-scroll-speed="-1"
            data>
            <div className="skill">
              <span className="lefts">HTML</span>
              <div className="mt-2 lefts  footerskills">
                <div className="faiz"></div>
              </div>
            </div>
            <div className="skill">
              <span className="lefts">CSS</span>
              <div className="mt-2 lefts  footerskills">
                <div className="faiz2"></div>
              </div>
            </div>
            <div className="skill">
              <span className="lefts">Bootstrap</span>
              <div className="mt-2 lefts footerskills">
                <div className="faiz3"></div>
              </div>
            </div>
            <div className="skill">
              <span className="lefts">JavaScript</span>
              <div className="mt-2 lefts footerskills">
                <div className="faiz4"></div>
              </div>
            </div>
            <div className="skill">
              <span className="lefts">React</span>
              <div className="mt-2 lefts footerskills">
                <div className="faiz5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src="img/item2.png" className="item2" alt="" 
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="5"
      /> */}
    </section>
  );
}
