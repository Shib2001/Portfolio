import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiReactrouter,
  SiFramer,
  SiAxios,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { motion } from "framer-motion";

const techs = [
  {
    name: "Netlify",
    icon: <SiNetlify className="text-green-400 text-3xl" />,
    desc: "Cloud platform for automating and deploying modern web projects.",
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-black dark:text-white text-3xl" />,
    desc: "Platform for frontend frameworks and static sites, built to integrate with headless content, commerce, or database.",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-600 text-3xl" />,
    desc: "Version control system for tracking code changes and collaboration.",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white dark:text-black text-3xl" />,
    desc: "Code hosting platform for version control and collaboration.",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500 text-3xl" />,
    desc: "Markup language for structuring web content.",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
    desc: "Stylesheet language for designing web pages.",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400 text-3xl" />,
    desc: "Programming language for interactive web features.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 text-3xl" />,
    desc: "Utility-first CSS framework for rapid UI development.",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-3xl" />,
    desc: "JavaScript library for building user interfaces.",
  },
  {
    name: "React Router",
    icon: <SiReactrouter className="text-red-400 text-3xl" />,
    desc: "Declarative routing for React applications.",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer className="text-pink-400 text-3xl" />,
    desc: "Animation library for React to create smooth UI transitions.",
  },
  {
    name: "Axios",
    icon: <SiAxios className="text-blue-400 text-3xl" />,
    desc: "Promise-based HTTP client for making API requests.",
  },
];

// Framer Motion variants for unique, cool effects
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
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

const Skills = () => {
  return (
    <motion.div
      className="flex flex-col items-center w-full px-4 mt-30"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold text-white mb-10 w-full text-center select-none transition bg-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer"
        variants={headingVariants}
      >
        Tech Stack
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 w-full max-w-4xl">
        {techs.map((tech, idx) => (
          <motion.div
            key={idx}
            className="flex items-center rounded-xl shadow p-4 gap-4 border-2 border-transparent bg-[#18181b]/80"
            variants={cardVariants}
            whileHover={{
              y: -10,
              rotateY: 8,
              boxShadow: "0 8px 32px 0 rgba(168,85,247,0.18)",
              transition: { type: "spring", stiffness: 180, damping: 12 },
            }}
            style={{ perspective: 800 }}
          >
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12">
              {React.cloneElement(tech.icon, {
                className:
                  tech.icon.props.className +
                  " transform transition-all duration-300 hover:scale-125 cursor-pointer",
              })}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer">
                {tech.name}
              </h3>
              <p className="text-white text-sm opacity-80">{tech.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
