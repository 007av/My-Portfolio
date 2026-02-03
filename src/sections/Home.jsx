import { useMemo } from "react";
import ParticleBaground from "../components/ParticleBaground";
import { motion } from "framer-motion";
import React from "react";
import { a, label } from "framer-motion/client";
import { href } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import avator from "../assets/avator.png";

const socials = [
  {
    Icon: FaLinkedin,
    label: "Linkden",
    href: "https://linkedin.com/in/avdhut-patole-75a558230",
  },
  { Icon: FaGithub, label: "Github", href: "https://github.com/007av" },
];

const Home = () => {
  const roles = useMemo(
    () => [
      "web Developer",
      "React Developer",
      "FrontEnd Developer",
      "Software Developer",
    ],
    [],
  );

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);

  const [deleting, setDeleting] = React.useState(0);

  React.useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
        else if (!deleting && subIndex === current.length)
          setTimeout(() => setDeleting(true), 1200);
        else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
        else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      deleting ? 40 : 60,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className=" relative w-full h-screen bg-black overflow-hidden "
    >
      <ParticleBaground />

      <div className=" absolute inset-0">
        <div
          className=" absolute -top-32 -left-32
      w-[70vw] sm:w-[z-500vw] md:w-[40vw]
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-\[500px\] max-h-\[500px\]

      rounded-full
      bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
      opacity-30 sm:opacity-20 md:opacity-10
       blur-[100px] sm:blur-[130px] md:blur-[150px]
       animate-pulse  "
        ></div>

        <div
          className=" absolute bottom-0 right-0
      w-[70vw] sm:w-[z-500vw] md:w-[40vw]
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-\[500px\] max-h-\[500px\]
      rounded-full
      bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
      opacity-30 sm:opacity-20 md:opacity-10
       blur-[100px] sm:blur-[130px] md:blur-[150px]
        animate-pulse [animation-delay:500ms]
      "
        ></div>
      </div>

      <div className=" relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid  grid-cols-1 lg:grid-cols-2">
        <div className=" flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className=" w-full lg:pr-24 mx-auto max-w-\[48rem\]">
            <motion.div
              className=" mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1em" }}
              ></span>
            </motion.div>

            <motion.h1
              className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text
            bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello I'm <br />
              <span className=" text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Avdhut Patole
              </span>
            </motion.h1>

            <motion.p
              className=" mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I turn Ideas into semless, high-impact web experiences - building
              modern and scalable applications.
            </motion.p>

            <motion.div
              className=" mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="#projects"
                className=" px-6 py-3 rounded-full font-medium text-lg text-white
              bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
               shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </a>
              <a
                href="/Resume.pdf"
                download
                className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
              >
                My Resume
              </a>
            </motion.div>

            <div className=" mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className=" relative hidden lg:block">
          <motion.img
            src={avator}
            alt="Avdhut Avtar"
            className=" absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
            style={{
              right: "-30%",
              width: "min(45vw, 780px)",
              maxHeight: "90vh",
            }}
            initial={{ opacity: 0, y:40, scale:0.98 }}
            animate={{ opacity: 1, y:0, scale:1}}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
