"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";
import { experience } from "@/constants/data";

const Experience = () => {
  const [expandedId, setExpandedId] = useState<string | null>(experience[0]?.id ?? null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const toggle = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-20 bg-background/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Work Experience
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Development, virtual assistance, and customer support experience that builds reliable,
            well-rounded professionals.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-violet-800/30" aria-hidden="true" />

          <div className="space-y-8">
            {experience.map((job) => {
              const isExpanded = expandedId === job.id;
              const dateLabel = job.current
                ? `${job.startDate} – Present`
                : `${job.startDate} – ${job.endDate}`;

              return (
                <motion.div key={job.id} className="relative pl-12 md:pl-16" variants={itemVariants}>
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-6 w-4 h-4 bg-violet-500 rounded-full border-4 border-background z-10" aria-hidden="true" />

                  <motion.div
                    className="bg-black/40 p-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -4 }}
                    onClick={() => toggle(job.id)}
                  >
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-violet-600/20 rounded-lg hidden md:block">
                          <Briefcase className="w-6 h-6 text-violet-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                          <p className="text-foreground/70">{job.company}</p>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-foreground/60">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" /> {job.location} ({job.locationType})
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" /> {dateLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-violet-400 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                      />
                    </div>

                    <p className="text-foreground/70 mt-4 leading-relaxed">{job.summary}</p>

                    {isExpanded && (
                      <div className="mt-5 pt-5 border-t border-violet-800/30 space-y-4">
                        <h4 className="font-semibold text-violet-400">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-foreground/80 text-sm md:text-base">
                              <span className="mt-2 w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4 text-sm text-violet-400 font-medium">
                      {isExpanded ? 'Collapse details' : 'View responsibilities'}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;