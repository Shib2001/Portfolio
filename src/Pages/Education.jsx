import React from "react";
import { educationDetails } from "../Constants";
import { motion } from "framer-motion";

const logos = {
  "RSS International School": "/RSS.png",
  "National Institute of Open Schooling": "/NIOS.png",
  "Greater Noida Institute of technology": "/GNIOT.png",
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
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
    },
  },
};

const Education = () => {
  return (
    <motion.div
      className="flex flex-col items-center w-full px-4 mt-30 space-y-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold text-white mb-10 w-full text-center transition bg-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer"
        initial={{ y: 32, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 18,
          mass: 0.7,
          delay: 0.1,
        }}
        viewport={{ once: true, amount: 0.7 }}
      >
        Education
      </motion.h2>
      {educationDetails.map((edu, idx) => (
        <motion.div
          key={idx}
          className="w-full max-w-3xl flex flex-col md:flex-row items-center rounded-2xl shadow-lg p-4 sm:p-6 gap-4 sm:gap-8 border-2 border-transparent bg-[#18181b]/80"
          style={{ background: "none", perspective: 800 }}
          variants={cardVariants}
          whileHover={{
            y: -10,
            rotateY: 8,
            boxShadow: "0 8px 32px 0 rgba(168,85,247,0.18)",
            transition: { type: "spring", stiffness: 180, damping: 12 },
          }}
        >
          {/* Logo Section */}
          <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center mb-4 md:mb-0">
            <img
              src={logos[edu.school ? edu.school : edu.college]}
              alt={edu.school ? edu.school : edu.college}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain rounded-xl shadow"
              style={{ background: "none" }}
            />
          </div>
          {/* Details Section */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 select-none transition bg-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer">
              {edu.level || edu.branch}
            </h2>
            <p className="text-white text-sm sm:text-base opacity-80 mb-1">
              <span className="font-semibold">Year:</span> {edu.year}
            </p>
            <p className="text-white text-sm sm:text-base opacity-80 mb-1">
              <span className="font-semibold">Location:</span> {edu.location}
            </p>
            {edu.percentage && (
              <p className="text-white text-sm sm:text-base opacity-80 mb-1">
                <span className="font-semibold">Percentage:</span>{" "}
                {edu.percentage}
              </p>
            )}
            {edu.cgpa && (
              <p className="text-white text-sm sm:text-base opacity-80 mb-1">
                <span className="font-semibold">CGPA:</span> {edu.cgpa}
              </p>
            )}
            <p className="text-white text-sm sm:text-base opacity-80 mb-1">
              <span className="font-semibold">
                {edu.school ? "School" : "College"}:
              </span>{" "}
              {edu.school || edu.college}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Education;
