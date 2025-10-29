import React from "react";
import { motion } from "framer-motion";
import { processes } from "../../pages/data";
import images from "../../assets/images";

const ProcessSection = () => {
  return (
    <section className="relative min-h-screen bg-[#0D0D21] py-20 overflow-hidden">
       
      {/* Header */}
      <div className="relative z-10 text-center mb-20">
        <motion.h2
          className="text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Check Out Our Work{" "}
          <span className="text-[#D2AA51]">Process</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our proven process ensures every project is executed with precision,
          creativity, and measurable results.
        </motion.p>
      </div>

      {/* Process Steps */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-20 px-6 flex-wrap">
        {processes.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex flex-col items-center max-w-xs text-center relative group"
            initial={{ opacity: 0, y: 80, rotateY: -20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotateY: 0,
              transition: { duration: 0.9, delay: index * 0.2, ease: "easeOut" },
            }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              scale: 1.07,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
          >
            {/* Step Circle Image */}
            <motion.div
              className="relative w-48 h-48 mb-6   overflow-hidden shadow-[0_0_40px_rgba(210,170,81,0.2)] border border-[#D2AA51]/40"
              whileHover={{
                scale: 1.1,
                rotateZ: 5,
                transition: { duration: 0.4 },
              }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-contain"
              />
              {/* Subtle overlay shine */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Step Number */}
            <motion.span
              className="text-[#D2AA51] font-bold text-6xl mb-3 drop-shadow-[0_0_10px_rgba(210,170,81,0.5)]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, delay: index * 0.2 },
              }}
              viewport={{ once: false }}
            >
              {step.id}
            </motion.span>

            {/* Step Title */}
            <h3 className="text-2xl font-semibold text-white mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.description}
            </p>

            {/* Glow effect when hovered */}
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-[#D2AA51]/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"
              aria-hidden="true"
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom Glow Accent */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#D2AA51]/20 to-transparent blur-2xl"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default ProcessSection;
