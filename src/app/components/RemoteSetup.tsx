"use client";

import { motion } from "framer-motion";
import { Globe, Zap, MonitorCheck, Home, Clock } from "lucide-react";
import { remoteSetup } from "@/constants/data";

const RemoteSetup = () => {
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

  const iconMap: Record<string, React.ReactNode> = {
    'Internet': <Globe className="w-5 h-5" />,
    'Power': <Zap className="w-5 h-5" />,
    'Equipment': <MonitorCheck className="w-5 h-5" />,
    'Workspace': <Home className="w-5 h-5" />,
    'Availability': <Clock className="w-5 h-5" />
  };

  return (
    <section id="remote" className="py-20">
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
            Remote Work Ready
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A dependable setup to support consistent, professional remote work across time zones.
          </motion.p>
        </motion.div>

        {/* Remote Setup Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {remoteSetup.map((category) => (
            <motion.div
              key={category.id}
              className="bg-black/40 p-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="p-2 rounded-lg bg-violet-600/20 text-violet-400">
                  {iconMap[category.title] ?? null}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.label} className="text-sm">
                    <span className="text-violet-400 font-medium block mb-1">{item.label}</span>
                    <span className="text-foreground/70 leading-relaxed">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RemoteSetup;