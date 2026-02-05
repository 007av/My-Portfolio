import photo1 from "../assets/photo1.jpg";
import img1 from "../assets/img1.jpg";
import photo2 from "../assets/photo2.jpg";
import img2 from "../assets/img2.jpg";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { style } from "framer-motion/client";

const useIsMobile = (query = "(max-width : 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches, // for SSR screen if window is not present then dont shos error
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return isMobile;
};

const Projects = () => {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "Spylt GSAP Website",
        link: "https://awards-gsap-website.vercel.app/",
        bgColor: "#a26833",
        image: isMobile ? photo1 : img1,
      },
      {
        title: "Gamming Website",
        link: "https://007av.github.io/Gaming-Website/",
        bgColor: "#0F1217",
        image: isMobile ? photo2 : img2,
      },
    ],
    [isMobile],
  ); //re-run when ismobile is change!

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const threshhold = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = threshhold.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? threshhold.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      ref={sceneRef}
      id="projects"
      className=" relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className=" sticky top-0 h-screen flex flex-col items-center justify-center">
        <h2
          className={` italic text-2xl md:text-5xl font-semibold mb-3  z-10 text-center ${
            isMobile ? "mt-4 mb-5" : "mt-8"
          }`}
        >
          My work
        </h2>
        <div
          className={` relative w-full flex-1 flex items-center justify-center ${
            isMobile ? "mt-4" : " "
          }`}
        >
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                activeIndex === idx
                  ? "opacity-100 z-20"
                  : "opacity-0 z-0 sm:z-10"
              }`}
              style={{
                width: "85%",
                height: "85%",
                maxWidth: "1200px",
              }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={` block text-center text-[clamp(1.75rem,5vw,4rem)] text-white\/95 sm:-top-10 sm\:left-\[35\%\] lg\:left-\[-5\%\] sm\:mb-0
                       italic font-semibold ${isMobile ? "-mt-15 " : "-mb-5"}`}
                    style={{
                      zIndex: 5,
                      textAlign: isMobile ? "center" : "left",
                    }}
                   >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              <div
                className={` relative w-full overflow-hidden bg-black\/20 shadow-2xl
                md\:shadow-\[0_35px_60px_-15px_rgba\(0\,0\,0\,0\.7\)\] ${
                  isMobile
                    ? "mb-6 rounded-lg"
                    : "-mt-7 mb-10 sm:mb-12 rounded-xl"
                }
                h-\[62vh\] sm\:h-\[66vh\]`}
                style={{
                  zIndex: 10,
                  transition: "box-shadow 250ms ease",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className=" w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"
                  style={{
                    position: "relative",
                    zIndex: 10,
                    filter: "drop-shadow(0,16px,40px rgba(0,0,0,0.65))",
                    transition: "filter 200ms ease",
                  }}
                  loading="lazy" //for lazyloding
                />

                <div
                  className=" pointer-events-none absolute inset-0"
                  style={{
                    zIndex: 11,
                    background:
                      "linear-gradient(180deg , rgba(0,0,0,0.12) 0% , rgba(0,0,0,0) 40%)",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={` absolute ${isMobile ? "bottom-20" : "bottom-10"}`}
          style={{
            zIndex: 20,
          }}
        >
          <a
            href={activeProject?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gary-200 tarnsition-all"
            aria-label={` View ${activeProject?.title}`}
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
