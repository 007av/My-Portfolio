import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experiance from "./sections/Experiance";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
// import ParticleBaground from "./components/ParticleBaground";
import CustomCoursor from "./components/CustomCoursor"
import React from "react";
import IntroAnimation from "./components/IntroAnimation";

const App = () => {
  const [introDone , setIntroDone] = React.useState(false);
  return (
    <>
    {!introDone && <IntroAnimation onFinish={()=> setIntroDone(true)}/>}

      {introDone && (
    <div className=" relative gradiant text-white">
      <CustomCoursor/>
      {/* <ParticleBaground /> */}
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
    )}
    </>
  )
}

export default App
