import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFilePdf,
} from "react-icons/fa";
import { motion } from "framer-motion";

const contactRows = [
  {
    icon: <FaInstagram className="text-pink-400 text-xl" />,
    label: "Instagram",
    link: "https://instagram.com/s.h.i.v__20",
    isLink: true,
  },
  {
    icon: <FaTwitter className="text-blue-400 text-xl" />,
    label: "Twitter (X)",
    link: "https://x.com/Shivkum18097172",
    isLink: true,
  },
  {
    icon: <FaLinkedin className="text-blue-500 text-xl" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/shiv-kumarjha/",
    isLink: true,
  },
  {
    icon: <FaEnvelope className="text-red-400 text-xl" />,
    label: "shivjha1983@gmail.com",
    link: "mailto:shivjha1983@gmail.com",
    isLink: true,
  },
  {
    icon: <FaPhone className="text-green-400 text-xl" />,
    label: "+91-882316381",
    isLink: false,
  },
  {
    icon: <FaMapMarkerAlt className="text-purple-400 text-xl" />,
    label: "Greater Noida, 201306, Uttar Pradesh",
    isLink: false,
  },
];

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
  hidden: { y: 48, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 18,
      mass: 0.7,
      delay: 0.15,
    },
  },
};

const rowVariants = {
  hidden: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
      mass: 0.7,
    },
  },
};

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-2 sm:px-4 mt-25">
      <motion.div
        className="bg-transparent border-2 border-transparent rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-3xl flex flex-col items-center"
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2
          className="text-white text-2xl sm:text-3xl font-bold tracking-wide select-none transition bg-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer mb-4 sm:mb-6 w-full text-center"
          variants={headingVariants}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="w-full space-y-3 sm:space-y-4 mb-6 sm:mb-8"
          variants={containerVariants}
        >
          {contactRows.map((row, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col xs:flex-row items-start xs:items-center space-y-1 xs:space-y-0 xs:space-x-3 bg-[#18181b]/80 rounded-lg px-2 sm:px-3 py-2"
              variants={rowVariants}
              whileHover={{
                y: -4,
                boxShadow: "0 4px 16px 0 rgba(168,85,247,0.18)",
                backgroundColor: "rgba(120,119,198,0.10)",
                transition: { type: "spring", stiffness: 180, damping: 12 },
              }}
              style={{ cursor: row.isLink ? "pointer" : "default" }}
            >
              {row.icon}
              {row.isLink ? (
                <a
                  href={row.link}
                  target={row.link.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    row.link.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="text-white text-sm sm:text-base opacity-70 hover:opacity-100 transition break-all"
                >
                  {row.label}
                </a>
              ) : (
                <span className="text-white text-sm sm:text-base opacity-70 break-all">
                  {row.label}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
        <a
          href="/final_dev_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 sm:mt-4"
        >
          <button className="bg-neutral-800 text-white font-semibold px-4 sm:px-6 py-2 rounded-full shadow-md flex items-center gap-2 hover:scale-105 hover:bg-neutral-700 transition cursor-pointer text-sm sm:text-base">
            <FaFilePdf className="text-base sm:text-lg" /> Get My Resume
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
