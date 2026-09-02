"use client";

import { motion } from "framer-motion";
import { Github, Code2, Database, Server, Smartphone, Wrench, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { projects } from "@/constants/data";
import type { Project } from "@/types";

const Projects = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const getProjectIcon = (category: Project['category']) => {
    switch (category) {
      case 'Full Stack': return <Code2 className="w-6 h-6" />;
      case 'Backend': return <Server className="w-6 h-6" />;
      case 'Frontend': return <Smartphone className="w-6 h-6" />;
      case 'Desktop': return <Database className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  const getProjectColor = (category: Project['category']) => {
    switch (category) {
      case 'Full Stack': return 'from-violet-500 to-violet-400';
      case 'Backend': return 'from-green-500 to-emerald-400';
      case 'Frontend': return 'from-blue-500 to-cyan-400';
      case 'Desktop': return 'from-purple-500 to-pink-400';
      default: return 'from-gray-500 to-gray-400';
    }
  };

  const featured = projects.filter(p => p.featured);
  const moreProjects = projects.filter(p => !p.featured);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const renderFeatureList = (project: Project) => {
    if (!project.keyFeatures?.length) return null;
    return (
      <div className="mt-4 space-y-2">
        {project.keyFeatures.map((feat, idx) => (
          <div key={idx} className="flex items-start space-x-2 text-sm text-foreground/70">
            <Check className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
            <span>{feat}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-background/30">
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
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A selection of my recent work across web development, full-stack systems, and software — with live GitHub links to review.
          </motion.p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 items-start gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featured.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <motion.div
                key={project.id}
                className="group bg-black/40 p-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300 flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getProjectColor(project.category)} bg-opacity-20`}>
                      {getProjectIcon(project.category)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-foreground">{project.title}</h3>
                      {project.client && (
                        <span className="text-xs text-foreground/60">{project.client}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Problem/Solution */}
                {project.problemSolution && (
                  <p className="text-foreground/80 text-sm leading-relaxed mb-3">
                    {project.problemSolution}
                  </p>
                )}

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Expandable Key Features */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="flex items-center gap-1 text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors self-start mb-3"
                  aria-expanded={isExpanded}
                >
                  Key Features
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                {isExpanded && renderFeatureList(project)}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 my-4">
                  {project.technologies.slice(0, 8).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 8 && (
                    <span className="px-3 py-1 bg-violet-600/10 text-violet-500/80 text-xs rounded-full border border-violet-600/20">
                      +{project.technologies.length - 8} more
                    </span>
                  )}
                </div>

                {/* Project Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-violet-800/30 mt-auto">
                  {project.githubUrl ? (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-foreground/70 hover:text-violet-400 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </motion.a>
                  ) : (
                    <span className="text-sm text-foreground/50">Source available on request</span>
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getProjectColor(project.category)} text-white/80 ml-auto`}>
                    {project.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Projects */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-200 bg-clip-text text-transparent mb-10 text-center"
            variants={itemVariants}
          >
            Additional Projects
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {moreProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-black/40 p-5 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300 flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{project.title}</h4>
                  <div className={`p-1.5 rounded-lg bg-gradient-to-r ${getProjectColor(project.category)} bg-opacity-20 flex-shrink-0`}>
                    {getProjectIcon(project.category)}
                  </div>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-foreground/70 hover:text-violet-400 transition-colors text-sm mt-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </motion.a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">{projects.length}</div>
            <div className="text-foreground/70">Total Projects</div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">{featured.length}</div>
            <div className="text-foreground/70">Featured</div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">
              {projects.filter(p => p.category === 'Full Stack').length}
            </div>
            <div className="text-foreground/70">Full Stack</div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">
              {projects.filter(p => p.githubUrl).length}
            </div>
            <div className="text-foreground/70">With GitHub Links</div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <motion.button
            onClick={() => window.open('https://github.com/Kurt-De-Asis', '_blank')}
            className="px-8 py-4 border-2 border-violet-600 hover:border-violet-400 hover:bg-violet-600/20 text-violet-400 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;