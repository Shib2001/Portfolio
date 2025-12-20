import React, { memo, useMemo } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPhp,
  FaWordpress,
  FaShopify,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiReactrouter,
  SiFramer,
  SiAxios,
  SiNetlify,
  SiVercel,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiHostinger,
  SiTestinglibrary,
  SiRedux,
  SiBootstrap,
  SiApache,
  SiXampp,
  SiMui,
} from "react-icons/si";
import { motion } from "framer-motion";

// Icon components map - prevents re-creating icons on each render
const iconComponents = {
  netlify: { Icon: SiNetlify, color: "text-green-400" },
  vercel: { Icon: SiVercel, color: "text-white" },
  git: { Icon: FaGitAlt, color: "text-orange-600" },
  github: { Icon: FaGithub, color: "text-white" },
  html5: { Icon: FaHtml5, color: "text-orange-500" },
  css3: { Icon: FaCss3Alt, color: "text-blue-500" },
  javascript: { Icon: FaJsSquare, color: "text-yellow-400" },
  tailwind: { Icon: SiTailwindcss, color: "text-teal-400" },
  react: { Icon: FaReact, color: "text-cyan-400" },
  reactrouter: { Icon: SiReactrouter, color: "text-red-400" },
  framer: { Icon: SiFramer, color: "text-pink-400" },
  axios: { Icon: SiAxios, color: "text-blue-400" },
  sql: { Icon: FaDatabase, color: "text-blue-300" },
  php: { Icon: FaPhp, color: "text-indigo-400" },
  hostinger: { Icon: SiHostinger, color: "text-purple-500" },
  wordpress: { Icon: FaWordpress, color: "text-blue-400" },
  shopify: { Icon: FaShopify, color: "text-green-500" },
  nodejs: { Icon: FaNodeJs, color: "text-green-600" },
  express: { Icon: SiExpress, color: "text-gray-300" },
  mongodb: { Icon: SiMongodb, color: "text-green-500" },
  firebase: { Icon: SiFirebase, color: "text-yellow-500" },
  supabase: { Icon: SiSupabase, color: "text-emerald-400" },
  testing: { Icon: SiTestinglibrary, color: "text-red-500" },
  redux: { Icon: SiRedux, color: "text-purple-500" },
  bootstrap: { Icon: SiBootstrap, color: "text-purple-600" },
  apache: { Icon: SiApache, color: "text-red-600" },
  xampp: { Icon: SiXampp, color: "text-orange-500" },
  mui: { Icon: SiMui, color: "text-blue-500" },
};

// Tech data without JSX - lighter weight
const techsData = [
  { name: "Netlify", iconKey: "netlify", desc: "Cloud platform for automating and deploying modern web projects." },
  { name: "Vercel", iconKey: "vercel", desc: "Platform for frontend frameworks and static sites." },
  { name: "Git", iconKey: "git", desc: "Version control system for tracking code changes." },
  { name: "GitHub", iconKey: "github", desc: "Code hosting platform for version control and collaboration." },
  { name: "HTML5", iconKey: "html5", desc: "Markup language for structuring web content." },
  { name: "CSS3", iconKey: "css3", desc: "Stylesheet language for designing web pages." },
  { name: "JavaScript", iconKey: "javascript", desc: "Programming language for interactive web features." },
  { name: "Tailwind CSS", iconKey: "tailwind", desc: "Utility-first CSS framework for rapid UI development." },
  { name: "React", iconKey: "react", desc: "JavaScript library for building user interfaces." },
  { name: "React Router", iconKey: "reactrouter", desc: "Declarative routing for React applications." },
  { name: "Framer Motion", iconKey: "framer", desc: "Animation library for React to create smooth UI transitions." },
  { name: "Axios", iconKey: "axios", desc: "Promise-based HTTP client for making API requests." },
  { name: "SQL", iconKey: "sql", desc: "Query language for managing relational databases." },
  { name: "PHP", iconKey: "php", desc: "Server-side scripting language for web development." },
  { name: "Hostinger", iconKey: "hostinger", desc: "Web hosting platform for deploying websites." },
  { name: "WordPress", iconKey: "wordpress", desc: "Popular CMS for building websites and blogs." },
  { name: "Shopify", iconKey: "shopify", desc: "E-commerce platform for building online stores." },
  { name: "Node.js", iconKey: "nodejs", desc: "JavaScript runtime for server-side applications." },
  { name: "Express.js", iconKey: "express", desc: "Fast, minimalist web framework for Node.js." },
  { name: "MongoDB", iconKey: "mongodb", desc: "NoSQL database for flexible, scalable data storage." },
  { name: "Firebase", iconKey: "firebase", desc: "Google platform for building web and mobile apps." },
  { name: "Supabase", iconKey: "supabase", desc: "Open-source Firebase alternative with PostgreSQL." },
  { name: "React Testing", iconKey: "testing", desc: "Testing utility for React components." },
  { name: "Redux Toolkit", iconKey: "redux", desc: "Official toolset for efficient Redux development." },
  { name: "Bootstrap", iconKey: "bootstrap", desc: "Popular CSS framework for responsive web design." },
  { name: "Apache", iconKey: "apache", desc: "Open-source HTTP server for hosting web applications." },
  { name: "XAMPP", iconKey: "xampp", desc: "Local server solution with Apache, MySQL, and PHP." },
  { name: "Material UI", iconKey: "mui", desc: "React UI library implementing Material Design." },
];

// Optimized animation variants - faster stagger for quicker load
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03, // Reduced from 0.13 for faster appearance
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2, // Simpler, faster animation
    },
  },
};

// Simplified hover animation - less complex calculations
const hoverAnimation = {
  y: -6,
  boxShadow: "0 6px 20px 0 rgba(168,85,247,0.15)",
  transition: { duration: 0.2 },
};

// Memoized skill card component to prevent unnecessary re-renders
const SkillCard = memo(({ tech, index }) => {
  const iconData = iconComponents[tech.iconKey];
  const IconComponent = iconData?.Icon;

  return (
    <motion.div
      className="flex items-center rounded-xl shadow p-4 gap-4 border-2 border-transparent bg-[#18181b]/80"
      variants={cardVariants}
      whileHover={hoverAnimation}
    >
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12">
        {IconComponent && (
          <IconComponent
            className={`${iconData.color} text-3xl transition-transform duration-200 hover:scale-110 cursor-pointer`}
          />
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-1 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent cursor-pointer">
          {tech.name}
        </h3>
        <p className="text-white text-sm opacity-80">{tech.desc}</p>
      </div>
    </motion.div>
  );
});

SkillCard.displayName = "SkillCard";

const Skills = () => {
  // Memoize the tech cards to prevent recreation on every render
  const techCards = useMemo(
    () =>
      techsData.map((tech, idx) => (
        <SkillCard key={tech.iconKey} tech={tech} index={idx} />
      )),
    []
  );

  return (
    <motion.div
      className="flex flex-col items-center w-full px-4 mt-30"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }} // Trigger earlier with lower amount
    >
      <motion.h2
        className="text-3xl font-bold text-white mb-10 w-full text-center select-none transition bg-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer"
        variants={headingVariants}
      >
        Tech Stack
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 w-full max-w-4xl">
        {techCards}
      </div>
    </motion.div>
  );
};

export default memo(Skills);
