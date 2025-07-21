import React, { useState } from "react";

// Custom hook to detect desktop (lg: 1024px+)
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : false
  );
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener
      ? mq.addEventListener("change", handler)
      : mq.addListener(handler);
    return () => {
      mq.removeEventListener
        ? mq.removeEventListener("change", handler)
        : mq.removeListener(handler);
    };
  }, []);
  return isDesktop;
}
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";
import { SiBootstrap, SiReactrouter } from "react-icons/si";
import { motion } from "framer-motion";

import Pro1 from "../assets/Pro-1.png";
import Pro2 from "../assets/Pro-2.png";
import Pro3 from "../assets/Pro-3.png";
import Pro4 from "../assets/Pro-4.png";

const projects = [
  {
    title: "Movie Guide App",
    image: Pro3,
    tech: ["js", "html", "css", "bootstrap"],
    website: "https://movie-guide-app-beryl.vercel.app/",
    source: "https://github.com/Shib2001/Movie-Guide-App",
  },
  {
    title: "Weather App",
    image: Pro2,
    tech: ["html", "css", "js"],
    website: "https://my-weather-app-six-gamma.vercel.app/",
    source: "https://github.com/Shib2001/My-Weather-app.git",
  },
  {
    title: "World Atlas App",
    image: Pro1,
    tech: ["react", "reactrouter", "js", "html", "css"],
    website: "https://shivkj-atlas.netlify.app/",
    source: "https://github.com/Shib2001/Atlas-app.git",
  },
  {
    title: "Simon Says Game",
    image: Pro4,
    tech: ["js", "html", "css"],
    website: "https://simon-says-tawny.vercel.app/",
    source: "https://github.com/Shib2001/simon-says",
  },
];

const techIcons = {
  html: (
    <FaHtml5
      className="text-orange-500 text-2xl transform transition-all duration-300 hover:scale-125 cursor-pointer"
      title="HTML5"
    />
  ),
  css: (
    <FaCss3Alt
      className="text-blue-500 text-2xl transform transition-all duration-300 hover:scale-125 cursor-pointer"
      title="CSS3"
    />
  ),
  react: (
    <FaReact
      className="text-cyan-400 text-2xl transform transition-all duration-300 hover:scale-125 cursor-pointer"
      title="React"
    />
  ),
  js: (
    <FaJsSquare
      className="text-yellow-400 text-2xl transform transition-all duration-300 hover:scale-125 cursor-pointer"
      title="JavaScript"
    />
  ),
  bootstrap: (
    <SiBootstrap
      className="text-purple-600 text-2xl transform transition-all duration-300 hover:scale-125 cursor-pointer"
      title="Bootstrap"
    />
  ),
  reactrouter: (
    <SiReactrouter
      className="text-red-400 text-2xl transform transition-all duration-300 hover:scale-125 cursor-pointer"
      title="React Router"
    />
  ),
};

// Framer Motion variants for cool, unique effects
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const headingVariants = {
  hidden: { scale: 0.7, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      mass: 0.7,
      delay: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { rotateY: 90, opacity: 0 },
  show: {
    rotateY: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 18,
      mass: 0.7,
    },
  },
};

const Projects = () => {
  return (
    <motion.div
      className="min-h-[70vh] flex flex-col items-center justify-center px-4 mt-30"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold text-white mb-10 w-full text-center hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer"
        variants={headingVariants}
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => {
          const isDesktop = useIsDesktop();
          const [showOverlay, setShowOverlay] = useState(false);
          return (
            <motion.div
              key={idx}
              className="bg-transparent border-2 border-transparent rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col items-center group relative"
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateY: 8,
                boxShadow: "0 8px 32px 0 rgba(168,85,247,0.18)",
                transition: { type: "spring", stiffness: 180, damping: 12 },
              }}
              style={{ perspective: 800 }}
            >
              <div className="w-full h-40 xs:h-48 sm:h-56 md:h-48 lg:h-56 mb-4 relative flex items-center justify-center group/image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 xs:h-48 sm:h-56 md:h-48 lg:h-56 object-cover rounded-xl transition-all duration-300 group-hover/image:opacity-40 group-hover/image:scale-105"
                  onClick={() => {
                    if (!isDesktop) setShowOverlay((v) => !v);
                  }}
                  style={{ cursor: !isDesktop ? "pointer" : "default" }}
                />
                {/* Overlay: desktop uses hover, mobile/tablet uses click */}
                <div
                  className={
                    `absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-300 z-10 ` +
                    (isDesktop
                      ? "opacity-0 scale-95 group-hover/image:opacity-100 group-hover/image:scale-100"
                      : showOverlay
                      ? "opacity-100 scale-100 bg-[rgba(24,24,27,0.92)]"
                      : "opacity-0 scale-95 pointer-events-none")
                  }
                  style={{ borderRadius: "1rem" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#18181b] bg-opacity-90 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white border-opacity-30 text-sm sm:text-base hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:text-transparent hover:bg-clip-text hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.7)] transition-all duration-300"
                  >
                    Go to Website
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#18181b] bg-opacity-90 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white border-opacity-30 text-sm sm:text-base hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:text-transparent hover:bg-clip-text hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.7)] transition-all duration-300"
                  >
                    Source Code
                  </a>
                  {!isDesktop && showOverlay && (
                    <button
                      className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-40 rounded-full px-2 py-1"
                      onClick={() => setShowOverlay(false)}
                      aria-label="Close overlay"
                    >
                      &times;
                    </button>
                  )}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center opacity-60 transition-all duration-300 hover:opacity-100 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.7)] cursor-pointer">
                {project.title}
              </h3>
              <div className="flex gap-2 sm:gap-3 mt-2 flex-wrap justify-center">
                {project.tech.map((tech, i) => (
                  <span key={i}>{techIcons[tech]}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
