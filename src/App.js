// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      containerRef={containerRef}
      options={{
        inertia: 0.8,
        smooth: true,
        getDirection: true,
        mobile: {
          breakpoint: 0,
          smooth: true,
          getDirection: true,
        },
        tablet: {
          breakpoint: 0,
          smooth: true,
          getDirection: true,
        },
      }}
    >
      <BrowserRouter>
        <Navigation />
        <div className="app" data-scroll-container ref={containerRef}>
          <Home />
          <Skills />
          <Project />
          <About />
          <Footer />
        </div>
      </BrowserRouter>

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
