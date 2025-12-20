import React, { useState, memo, useMemo, useCallback } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";
import {
  SiBootstrap,
  SiReactrouter,
  SiFirebase,
  SiTailwindcss,
  SiAxios,
  SiSupabase,
  SiFramer,
  SiWikipedia,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

// Custom hook to detect desktop (lg: 1024px+) - moved outside component
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

// Icon components map - prevents re-creating icons on each render
const iconComponents = {
  html: { Icon: FaHtml5, color: "text-orange-500", title: "HTML5" },
  css: { Icon: FaCss3Alt, color: "text-blue-500", title: "CSS3" },
  react: { Icon: FaReact, color: "text-cyan-400", title: "React" },
  js: { Icon: FaJsSquare, color: "text-yellow-400", title: "JavaScript" },
  bootstrap: { Icon: SiBootstrap, color: "text-purple-600", title: "Bootstrap" },
  reactrouter: { Icon: SiReactrouter, color: "text-red-400", title: "React Router" },
  firebase: { Icon: SiFirebase, color: "text-yellow-500", title: "Firebase" },
  tailwind: { Icon: SiTailwindcss, color: "text-teal-400", title: "Tailwind CSS" },
  axios: { Icon: SiAxios, color: "text-blue-400", title: "Axios" },
  reacticons: { Icon: TbBrandReactNative, color: "text-pink-400", title: "React Icons" },
  wikipediaapi: { Icon: SiWikipedia, color: "text-gray-300", title: "Wikipedia API" },
  supabase: { Icon: SiSupabase, color: "text-emerald-400", title: "Supabase" },
  framer: { Icon: SiFramer, color: "text-pink-500", title: "Framer Motion" },
};

// Projects data
const projectsData = [
  {
    id: "travelvista",
    title: "Travelvista",
    image: "/Pro-5.jpg",
    tech: ["html", "css", "js", "react", "firebase", "reactrouter", "reacticons", "wikipediaapi", "axios", "tailwind"],
    website: "https://travelling-bice.vercel.app/",
    source: "https://github.com/Shib2001/travelling",
  },
  {
    id: "movie-guide",
    title: "Movie Guide App",
    image: "/Pro-3.png",
    tech: ["js", "html", "css", "bootstrap"],
    website: "https://movie-guide-app-beryl.vercel.app/",
    source: "https://github.com/Shib2001/Movie-Guide-App",
  },
  {
    id: "my-diary",
    title: "My Diary",
    image: "/Pro-6.jpg",
    tech: ["html", "css", "js", "react", "supabase", "reactrouter", "reacticons", "tailwind", "framer"],
    website: "https://shiv-diary-app.vercel.app/",
    source: "https://github.com/Shib2001/Diary-App",
  },
  {
    id: "world-atlas",
    title: "World Atlas App",
    image: "/Pro-1.png",
    tech: ["react", "reactrouter", "js", "html", "css"],
    website: "https://shivkj-atlas.netlify.app/",
    source: "https://github.com/Shib2001/Atlas-app.git",
  },
  {
    id: "weather",
    title: "Weather App",
    image: "/Pro-2.png",
    tech: ["html", "css", "js"],
    website: "https://my-weather-app-six-gamma.vercel.app/",
    source: "https://github.com/Shib2001/My-Weather-app.git",
  },
  {
    id: "simon-says",
    title: "Simon Says Game",
    image: "/Pro-4.png",
    tech: ["js", "html", "css"],
    website: "https://simon-says-tawny.vercel.app/",
    source: "https://github.com/Shib2001/simon-says",
  },
];

// Optimized animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, // Faster stagger
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
};

// Simplified hover animation
const hoverAnimation = {
  y: -8,
  boxShadow: "0 6px 24px 0 rgba(168,85,247,0.15)",
  transition: { duration: 0.2 },
};

// Memoized Tech Icon component
const TechIcon = memo(({ techKey }) => {
  const iconData = iconComponents[techKey];
  if (!iconData) return null;
  const { Icon, color, title } = iconData;
  return (
    <Icon
      className={`${color} text-2xl transition-transform duration-200 hover:scale-110 cursor-pointer`}
      title={title}
    />
  );
});

TechIcon.displayName = "TechIcon";

// Memoized Project Card component
const ProjectCard = memo(({ project, isDesktop }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleImageClick = useCallback(() => {
    if (!isDesktop) setShowOverlay((v) => !v);
  }, [isDesktop]);

  const handleCloseOverlay = useCallback(() => {
    setShowOverlay(false);
  }, []);

  const overlayClass = useMemo(() => {
    const baseClass = "absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-200 z-10 ";
    if (isDesktop) {
      return baseClass + "opacity-0 scale-95 group-hover/image:opacity-100 group-hover/image:scale-100";
    }
    return baseClass + (showOverlay
      ? "opacity-100 scale-100 bg-[rgba(24,24,27,0.92)]"
      : "opacity-0 scale-95 pointer-events-none");
  }, [isDesktop, showOverlay]);

  return (
    <motion.div
      className="bg-transparent border-2 border-transparent rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col items-center group relative"
      variants={cardVariants}
      whileHover={hoverAnimation}
    >
      <div className="w-full h-40 xs:h-48 sm:h-56 md:h-48 lg:h-56 mb-4 relative flex items-center justify-center group/image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-40 xs:h-48 sm:h-56 md:h-48 lg:h-56 object-cover rounded-xl transition-all duration-200 group-hover/image:opacity-40 group-hover/image:scale-105"
          onClick={handleImageClick}
          style={{ cursor: !isDesktop ? "pointer" : "default" }}
        />
        <div
          className={overlayClass}
          style={{ borderRadius: "1rem" }}
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#18181b] bg-opacity-90 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white border-opacity-30 text-sm sm:text-base hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:text-transparent hover:bg-clip-text transition-all duration-200"
          >
            Go to Website
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#18181b] bg-opacity-90 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white border-opacity-30 text-sm sm:text-base hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:text-transparent hover:bg-clip-text transition-all duration-200"
          >
            Source Code
          </a>
          {!isDesktop && showOverlay && (
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-40 rounded-full px-2 py-1"
              onClick={handleCloseOverlay}
              aria-label="Close overlay"
            >
              &times;
            </button>
          )}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center opacity-60 transition-all duration-200 hover:opacity-100 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent cursor-pointer">
        {project.title}
      </h3>
      <div className="flex gap-2 sm:gap-3 mt-2 flex-wrap justify-center">
        {project.tech.map((tech) => (
          <span key={tech}>
            <TechIcon techKey={tech} />
          </span>
        ))}
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const isDesktop = useIsDesktop();

  const projectCards = useMemo(
    () =>
      projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} isDesktop={isDesktop} />
      )),
    [isDesktop]
  );

  return (
    <motion.div
      className="min-h-[70vh] flex flex-col items-center justify-center px-4 mt-30"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="text-3xl font-bold text-white mb-10 w-full text-center hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer"
        variants={headingVariants}
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-6xl">
        {projectCards}
      </div>
    </motion.div>
  );
};

export default memo(Projects);
