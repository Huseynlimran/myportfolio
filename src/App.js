import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/myskills" element={<Skills />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
