import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { to: "/", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const itemVariants = {
  hidden: { y: -32, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
      mass: 0.7,
    },
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="relative md:fixed md:top-0 md:left-0 md:right-0 z-50 bg-transparent px-6 py-4 w-full mt-4"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="flex items-center justify-between w-full">
        <motion.div
          className="text-white text-3xl font-bold tracking-wide select-none transition bg-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer"
          variants={itemVariants}
        >
          Portfolio
        </motion.div>
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <motion.ul
            className="flex space-x-6 text-white text-shadow-lg font-light"
            variants={containerVariants}
          >
            {navLinks.map((link, idx) => (
              <motion.li key={link.to} variants={itemVariants}>
                <NavLink
                  to={link.to}
                  className="opacity-60 hover:opacity-100 hover:text-purple-300 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.7)] transition"
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        {/* Hamburger for mobile/tablet */}
        <div className="md:hidden flex items-center">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={
          menuOpen
            ? { y: 0, opacity: 1, pointerEvents: "auto" }
            : { y: -40, opacity: 0, pointerEvents: "none" }
        }
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className={
          `md:hidden absolute left-0 right-0 top-full shadow-xl rounded-b-2xl px-8 py-6 z-40 ` +
          (menuOpen ? "pointer-events-auto" : "pointer-events-none")
        }
        style={{
          backdropFilter: "blur(10px)",
          background:
            "linear-gradient(120deg, rgba(168,85,247,0.18) 0%, rgba(236,72,153,0.18) 50%, rgba(59,130,246,0.18) 100%), rgba(24,24,27,0.85)",
        }}
      >
        <ul className="flex flex-col space-y-6 text-white text-lg font-light">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className="opacity-80 hover:opacity-100 hover:text-purple-300 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.7)] transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;
