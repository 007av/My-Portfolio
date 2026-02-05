
import photo1 from "../assets/photo1.jpg"
import img1 from "../assets/img1.jpg"
import photo2 from "../assets/photo2.jpg"
import img2 from "../assets/img2.jpg"
import { useEffect, useMemo, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from "framer-motion"

const useIsMobile= (query = "(max-width : 639px)") => {
  const [isMobile , setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches // for SSR screen if window is not present then dont shos error
  )

useEffect(()=> {
  if(typeof window === "undefined") return;
  const mql = window.matchMedia(query);
  const handler = (e) => setIsMobile(e.matches);

  mql.addEventListener("change" , handler);
  setIsMobile(mql.matches);
  return () => mql.removeEventListener("change" ,handler);
}, [query])
return isMobile;
}





const Projects = () => {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(()=> [
    {
     title : "Spylt GSAP Website" ,
     link : "https://awards-gsap-website.vercel.app/",
     bgColor : "#0d4d3d",
     image : isMobile ? photo1 : img1
    },
    {
     title : "Gamming Website" ,
     link : "007av.github.io/Gaming-Website/",
     bgColor : "#0d4d3d",
     image : isMobile ? photo2 : img2
    },
  ], [isMobile]); //re-run when ismobile is change!


  const {scrollYProgress} = useScroll(({
    target: sceneRef,
    offset: ["start start", "end end"]
  }))

  const threshhold = projects.map((_,i) => (i+1)/projects.length)
  const [activeIndex , setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress , "change" , (v) => {
    const idx = threshhold.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? threshhold.length -1: idx);
  });

  const activeProject = projects[activeIndex];


   return (
    <section
    ref={sceneRef}
     id='projects' 
     className=' relative text-white'>
      Project
    </section>
  )
}

export default Projects
