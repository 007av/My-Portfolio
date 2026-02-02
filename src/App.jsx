import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experiance from "./sections/Experiance";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ParticleBaground from "./components/ParticleBaground";

const App = () => {
  return (
    <div className=" relative gradiant text-white">
      <ParticleBaground />

      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experiance/>
      <Testimonial />
      <Contact/>
      <Footer />

    </div>
  )
}

export default App
