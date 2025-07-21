import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Framer Motion variants for smooth, staggered, spring-based animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.22,
      },
    },
  };

  const textVariants = {
    hidden: { x: -120, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        mass: 0.7,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 120, opacity: 0, scale: 0.92 },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        mass: 0.7,
        delay: 0.5,
      },
    },
  };

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[60vh] px-4 sm:px-6 md:px-8 mt-16 md:mt-40 gap-8 md:gap-0">
        {/* Left Section: Text */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center md:items-start md:justify-center md:pl-8 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-thin text-white mb-6 md:mb-13 md:ml-9"
            variants={textVariants}
          >
            Shiv Kumar Jha
          </motion.h1>
          <motion.h2
            className="text-lg xs:text-xl sm:text-2xl font-normal mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent md:ml-9"
            variants={textVariants}
          >
            Front End Developer
          </motion.h2>
          <motion.p
            className="text-white text-sm xs:text-base md:text-base opacity-50 max-w-xs xs:max-w-sm sm:max-w-md mb-2 md:ml-9"
            variants={textVariants}
          >
            Creative and detail-oriented Front End Developer specializing in
            React and Tailwind CSS. Skilled in building responsive, accessible,
            and visually engaging web applications. Experienced in collaborating
            with teams to deliver high-quality products and seamless user
            experiences. Passionate about learning new technologies and
            implementing modern UI/UX trends. Dedicated to transforming ideas
            into interactive digital solutions that delight users and drive
            results.
          </motion.p>
        </motion.div>
        {/* Right Section: Image */}
        <motion.div
          className="flex-1 flex justify-center items-center md:pr-8 mt-8 md:mt-0"
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div
            className="w-40 h-40 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full p-2 flex items-center justify-center shadow-lg"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(24,24,27,0.8) 80%, rgba(24,24,27,1) 100%)",
            }}
          >
            <img
              src="/first.png"
              alt="Shiv Kumar Jha"
              className="w-36 h-36 xs:w-52 xs:h-52 sm:w-64 sm:h-64 md:w-92 md:h-92 object-cover rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(24,24,27,0.8) 80%, rgba(24,24,27,1) 100%)",
                border: "4px solid #18181b",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Additional Centered Sections */}
      <div className="flex flex-col items-center justify-center w-full mt-35 px-4">
        {/* About Section */}
        <motion.h2
          className="text-3xl font-bold text-white mb-4 text-center select-none transition bg-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            mass: 0.7,
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.7 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-white text-base opacity-50 max-w-2xl mb-10 text-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            mass: 0.7,
            delay: 0.35,
          }}
          viewport={{ once: true, amount: 0.7 }}
        >
          Hey there! It's me Shiv kumar jha and this is my portolio a place
          where you can explore my projects, skills, and journey as a developer.
          Feel free to check out the Projects section to see what I've built,
          the Skills section to know my tech stack, and the Contact page to
          connect with me. Dive in and discover more about my work and passion
          for web development!
        </motion.p>

        {/* My Coding Journey Section */}
        <motion.h2
          className="text-3xl  font-bold text-white mb-4 text-center select-none transition bg-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            mass: 0.7,
            delay: 0.5,
          }}
          viewport={{ once: true, amount: 0.7 }}
        >
          My Coding Journey
        </motion.h2>
        <motion.p
          className="text-white text-base opacity-50 max-w-2xl mb-10 text-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            mass: 0.7,
            delay: 0.65,
          }}
          viewport={{ once: true, amount: 0.7 }}
        >
          My coding journey was not so fruitful as you can see that I am from a
          non-technical background. Initially, I struggled to grasp programming
          concepts and faced many setbacks. However, my curiosity and
          determination kept me going. I started with the basics, practiced
          consistently, and gradually built my confidence. Over time, I learned
          to embrace challenges, seek help from the developer community, and
          celebrate small wins. This journey taught me resilience and the
          importance of continuous learning, shaping me into the developer I am
          today.
        </motion.p>

        {/* What I Am Good At Section */}
        <motion.h2
          className="text-3xl font-bold text-white mb-4 text-center select-none transition bg-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            mass: 0.7,
            delay: 0.8,
          }}
          viewport={{ once: true, amount: 0.7 }}
        >
          What I Am Good At
        </motion.h2>
        <motion.p
          className="text-white text-base opacity-50 max-w-2xl mb-10 text-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            mass: 0.7,
            delay: 0.95,
          }}
          viewport={{ once: true, amount: 0.7 }}
        >
          I excel at building modern, responsive user interfaces using React and
          Tailwind CSS. My strengths include translating design concepts into
          interactive web experiences, optimizing performance, and ensuring
          accessibility. I am skilled at collaborating with teams, debugging
          complex issues, and quickly adapting to new technologies. My attention
          to detail and passion for clean, maintainable code help me deliver
          high-quality solutions that enhance user satisfaction.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
