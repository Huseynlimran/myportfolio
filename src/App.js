// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import {
  LocomotiveScrollProvider,
} from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      containerRef={containerRef}
      options={{
        smooth: true,
      }}
    >
      <div className="app" data-scroll-container ref={containerRef}>
        <div className="wrapper">
          <div className="content">
            <BrowserRouter>
              <Navigation data-scroll-section />
              <Home data-scroll-section />
              <Skills />
              <Project data-scroll-section />
              <About data-scroll-section />
              <Footer data-scroll-section />
            </BrowserRouter>
          </div>
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
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
