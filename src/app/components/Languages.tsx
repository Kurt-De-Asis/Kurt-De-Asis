"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { languages } from "@/constants/data";

const LanguagesSection = () => {
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

  return (
    <section className="py-20 bg-background/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 justify-center mx-auto mb-6"
            variants={itemVariants}
          >
            <span className="p-3 rounded-xl bg-violet-600/20 border border-violet-600/30">
              <Languages className="w-7 h-7 text-violet-400" />
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-200 bg-clip-text text-transparent mb-10"
            variants={itemVariants}
          >
            Languages
          </motion.h2>

          <div className="flex justify-center gap-6">
            {languages.map((lang) => (
              <motion.div
                key={lang.id}
                className="bg-black/40 px-8 py-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-xl font-bold text-foreground">{lang.name}</h3>
                <p className="text-violet-400 mt-1">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;