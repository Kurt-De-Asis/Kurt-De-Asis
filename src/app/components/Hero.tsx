"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Briefcase } from "lucide-react";
import { personalInfo } from "@/constants/data";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 14,
        stiffness: 100
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-24 md:pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-violet-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Picture */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-violet-500/30 shadow-2xl">
              <img
                src="/pfp.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-label="Available for work"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-violet-200 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Headline */}
        <motion.h2
          className="text-2xl md:text-3xl text-foreground/90 mb-6 font-medium"
          variants={itemVariants}
        >
          {personalInfo.title}
        </motion.h2>

        {/* Supporting Statement */}
        <motion.p
          className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          I build reliable digital solutions as a software developer — and help businesses
          stay organized and productive through technical and administrative support
          as a virtual assistant.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transform hover:-translate-y-1 w-full sm:w-auto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Briefcase className="w-5 h-5" />
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-violet-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-violet-600/15 border border-violet-600/50 text-violet-300 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire Me
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-violet-600 hover:border-violet-400 hover:bg-violet-600/20 text-violet-400 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Me
            </span>
          </motion.button>

          <motion.button
            onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
            className="px-8 py-4 border-2 border-violet-600 hover:border-violet-400 hover:bg-violet-600/20 text-violet-400 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 animate-bounce"
          variants={itemVariants}
          onClick={() => scrollToSection('about')}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <ArrowDown className="w-8 h-8 text-violet-400 mx-auto cursor-pointer" />
          <span className="text-sm text-foreground/60 mt-2 block">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;