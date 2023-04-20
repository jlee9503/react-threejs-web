import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="container">
      <Banner />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
