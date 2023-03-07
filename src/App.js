// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";



function App() {


  return (
    <div className="app">
      <div className="wrapper">
        <div className="content">
          <BrowserRouter>
            <Navigation />
            <Home />
            <Skills />
            <Project />
            <About />
            <Footer />
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
  );
}

export default App;
