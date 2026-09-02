"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Layers, Cpu } from "lucide-react";
import { softwareSkills } from "@/constants/data";
import type { SoftwareSkillCategory } from "@/types";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const categoryMeta: Record<SoftwareSkillCategory, { icon: React.ReactNode; color: string }> = {
    'Programming Languages': { icon: <Code className="w-5 h-5" />, color: 'from-violet-500 to-purple-400' },
    'Frontend / Web': { icon: <Layers className="w-5 h-5" />, color: 'from-blue-500 to-cyan-400' },
    'Backend': { icon: <Server className="w-5 h-5" />, color: 'from-green-500 to-emerald-400' },
    'Databases': { icon: <Database className="w-5 h-5" />, color: 'from-purple-500 to-pink-400' },
    'Development Tools': { icon: <Wrench className="w-5 h-5" />, color: 'from-orange-500 to-red-400' },
    'Development Skills': { icon: <Cpu className="w-5 h-5" />, color: 'from-yellow-500 to-orange-400' }
  };

  const categories = Object.keys(categoryMeta) as SoftwareSkillCategory[];

  return (
    <section id="tech-stack" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-violet-200 bg-clip-text text-transparent mb-4"
            variants={itemVariants}
          >
            Developer Tech Stack
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            The languages, frameworks, and tools I use to build reliable software solutions.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category) => {
            const categorySkills = softwareSkills.filter(skill => skill.category === category);
            const meta = categoryMeta[category];

            return (
              <motion.div
                key={category}
                className="bg-black/40 p-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-3">
                    <span className={`p-2 rounded-lg bg-gradient-to-r ${meta.color} bg-opacity-20`}>
                      {meta.icon}
                    </span>
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.id}
                      className="px-3 py-1.5 bg-violet-600/20 text-violet-300 text-sm rounded-full border border-violet-600/30"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;