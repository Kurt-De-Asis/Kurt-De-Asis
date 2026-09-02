"use client";

import { motion } from "framer-motion";
import { Code, Database, Briefcase, Globe } from "lucide-react";
import { professionalSummary, personalInfo } from "@/constants/data";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const highlights = [
    {
      icon: Code,
      title: "Software Development",
      description: "3+ years building web and software applications — from frontend interfaces and backend APIs to databases and deployment."
    },
    {
      icon: Briefcase,
      title: "Executive Support",
      description: "Remote virtual assistance and executive support — email, calendar, scheduling, research, and organized workflow management."
    },
    {
      icon: Database,
      title: "Data & Organization",
      description: "Clean database design and structured data management that keeps systems and records accurate and reliable."
    },
    {
      icon: Globe,
      title: "Remote-Ready",
      description: "Comfortable collaborating across time zones with a dedicated workspace and reliable setup for remote work."
    }
  ];

  const stats = [
    { value: "3+", label: "Years Developing" },
    { value: "15+", label: "Projects Delivered" },
    { value: "2", label: "Practice Areas" },
    { value: "4", label: "Workplace Roles" }
  ];

  return (
    <section id="about" className="py-20 bg-background/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Column - Professional Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <motion.h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-violet-200 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                About Me
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-violet-500 rounded-full"
                variants={itemVariants}
              />
            </div>

            <motion.p
              className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line"
              variants={itemVariants}
            >
              {professionalSummary}
            </motion.p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
              variants={containerVariants}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="bg-black/40 p-5 rounded-xl border border-violet-800/30"
                  variants={itemVariants}
                >
                  <p className="text-2xl font-bold text-violet-400">{stat.value}</p>
                  <p className="text-foreground/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => window.location.href = '#services'}
                className="flex-1 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                My Services
              </motion.button>
              <motion.button
                onClick={() => window.location.href = '#contact'}
                className="flex-1 px-6 py-3 border-2 border-violet-600 hover:border-violet-400 hover:bg-violet-600/20 text-violet-400 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-violet-400">What I Bring</h3>
              <p className="text-foreground/70">
                A blend of technical development and professional administrative support.
              </p>
            </div>

            <div className="space-y-5">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="group bg-black/40 p-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-violet-600/20 rounded-lg group-hover:bg-violet-600/40 transition-colors">
                      <item.icon className="w-7 h-7 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-foreground/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-foreground/60">
              Based in {personalInfo.location}. Available for freelance, contract, and full-time opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;