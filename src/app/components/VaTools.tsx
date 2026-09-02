"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MessageSquare, Target, Sparkles, Palette, ClipboardList } from "lucide-react";
import { vaTools } from "@/constants/data";

const VaTools = () => {
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

  const iconMap: Record<string, React.ReactNode> = {
    'Productivity & Administration': <CalendarCheck className="w-5 h-5" />,
    'Communication & Scheduling': <MessageSquare className="w-5 h-5" />,
    'CRM & Marketing': <Target className="w-5 h-5" />,
    'AI & Automation': <Sparkles className="w-5 h-5" />,
    'Design & Content': <Palette className="w-5 h-5" />,
    'Project Management': <ClipboardList className="w-5 h-5" />
  };

  return (
    <section id="tools" className="py-20 bg-background/30">
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
            Administrative & Productivity Tools
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            The tools I use to manage communication, schedules, data, and workflows as a virtual assistant.
          </motion.p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {vaTools.map((group) => (
            <motion.div
              key={group.id}
              className="bg-black/40 p-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-lg bg-violet-600/20 text-violet-400">
                  {iconMap[group.group] ?? null}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{group.group}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-violet-600/20 text-violet-300 text-sm rounded-full border border-violet-600/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VaTools;