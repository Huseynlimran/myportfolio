import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import Contact from "./components/Contact";
import Loader from "./pages/Loader";

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      containerRef={containerRef}
      options={{
        // inertia: 0.8,
        smooth: 1,
        lerp: 0.1, // Linear Interpolation, 0 > 1 // Try 0.01
        multiplier: 0.5, // Effect Multiplier
        reloadOnContextChange: true,
        touchMultiplier: 2,
        smoothMobile: 0,
        smartphone: {
          smooth: !0,
          breakpoint: 767,
        },
        tablet: {
          smooth: !1,
          breakpoint: 1024,
        },
      }}
    >
      <Loader />
      <Navigation />
      <div className="app" data-scroll-container ref={containerRef}>
        <Home />

        <Skills />
        <Project />
        <About />
        <Contact />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
