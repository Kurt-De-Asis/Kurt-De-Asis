"use client";

import { motion } from "framer-motion";
import { Code2, Monitor, Headphones } from "lucide-react";
import { services } from "@/constants/data";
import type { Service } from "@/types";

const Services = () => {
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

  const groupServices = (category: Service['category']) =>
    services.filter(service => service.category === category);

  return (
    <section id="services" className="py-20">
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
            How I Can Help
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Whether you need a reliable developer or organized executive support, I provide
            practical help focused on outcomes and value.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Development Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-violet-600/20 border border-violet-600/30">
                <Code2 className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Development Services</h3>
                <p className="text-foreground/60 text-sm">Software & web development</p>
              </div>
            </div>

            <div className="space-y-5">
              {groupServices('development').map((service) => (
                <motion.div
                  key={service.id}
                  className="bg-black/40 p-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <h4 className="text-lg font-semibold text-violet-400 mb-2">{service.title}</h4>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Virtual Assistance Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-violet-600/20 border border-violet-600/30">
                <Headphones className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Virtual Assistance</h3>
                <p className="text-foreground/60 text-sm">Executive & admin support</p>
              </div>
            </div>

            <div className="space-y-5">
              {groupServices('virtual-assistance').map((service) => (
                <motion.div
                  key={service.id}
                  className="bg-black/40 p-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <h4 className="text-lg font-semibold text-violet-400 mb-2">{service.title}</h4>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <motion.button
            onClick={() => window.location.href = '#contact'}
            className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-violet-500/25"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Discuss Your Project or Support Needs
          </motion.button>
          <p className="mt-4 text-sm text-foreground/60 flex items-center justify-center gap-1">
            <Monitor className="w-4 h-4" /> Development, virtual assistance, or both
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;