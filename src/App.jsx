import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Banner />
        <About />
        <Works />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
