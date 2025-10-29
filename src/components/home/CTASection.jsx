import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import images from "../../assets/images";

const CTASection = ({ onWhatsAppClick }) => (
  <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
    {/* Background Image (for mobile view) */}
    <div className="absolute inset-0 md:hidden">
      <img
        src={images.callToAction}
        alt="CTA Background"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="grid md:grid-cols-2 min-h-screen relative z-10">
      {/* Left Section - Text Content */}
      <motion.div
        className="flex flex-col justify-center items-center md:items-start px-10 md:px-20 space-y-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left leading-tight">
          Grow Your Business or Investments Today
        </h2>
        <p className="text-gray-400 text-center md:text-left">
          Let's build something powerful together 🚀
        </p>

        {/* Cinematic Animated Button */}
        <motion.button
          onClick={onWhatsAppClick}
          className="inline-flex items-center gap-3 bg-[#D2AA51] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_40px_rgba(210,170,81,0.4)] relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: [1, 1.04, 1],
            boxShadow: [
              "0 0 40px rgba(210,170,81,0.3)",
              "0 0 70px rgba(210,170,81,0.7)",
              "0 0 40px rgba(210,170,81,0.3)",
            ],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.5 },
            scale: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            boxShadow: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Shine effect */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            animate={{ x: ["-150%", "200%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <FaWhatsapp className="text-xl relative z-10" />
          <span className="relative z-10">Get in Touch Now</span>
        </motion.button>
      </motion.div>

      {/* Right Section - Background Image for Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative hidden md:block"
      >
        <img
          src={images.callToAction}
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />
      </motion.div>
    </div>
  </section>
);

export default CTASection;
