import About from "./Components/About";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import HeroImg from "./Components/HeroImg";
import Join from "./Components/Join";
import Navbar from "./Components/Navbar";
import Values from "./Components/Values";

function App() {
  return (
    <div className="font-display">
      <Navbar />
      <Hero />
      {/* <HeroImg /> */}
      <About />
      <Values />
      <Feedback />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
