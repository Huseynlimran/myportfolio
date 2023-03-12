import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef } from "react";
import gsap, { Power1 } from "gsap";
import Contact from "./components/Contact";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sg = gsap.timeline({ default: { ease: Power1 } });

    sg.to(".text", {
      translateY: "0%",
      duration: 0.3,
      opacity: 1,
      stagger: 0.1,
    });

    sg.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    sg.to(".intro", { y: "-100%", duration: 1 }, "-=1");
  }, []);

  return (
    <LocomotiveScrollProvider
      containerRef={containerRef}
      options={{
        // inertia: 0.8,
        smooth: true,
        lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
        multiplier: 1.4, // Effect Multiplier
        reloadOnContextChange: true,
        touchMultiplier: 2,
        smoothMobile: 0,
        smartphone: {
            smooth: !0,
            breakpoint: 767
        },
        tablet: {
            smooth: !1,
            breakpoint: 1024
        },
        // getDirection: true,
        // mobile: {
        //   breakpoint: 0,
        //   smooth: true,
        //   getDirection: true,
        // },
        // tablet: {
        //   breakpoint: 0,
        //   smooth: true,
        //   getDirection: true,
        // },
      }}
    >
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
      <Navigation />

      <div className="app" data-scroll-container ref={containerRef}>
        <Home />
        <Skills />
        <Project />
        <About />
        <Contact />
        <Footer />
      </div>

      {/* <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/myskills" element={<Skills />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </LocomotiveScrollProvider>
  );
}

export default App;
