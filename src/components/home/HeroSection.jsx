import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import images from "../../assets/images";

const HeroSection = ({ onWhatsAppClick }) => {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.img
        src={images.heroBackImage}
        alt="Dubai Skyline"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Floating Dust/Light Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["0%", "-150%"],
              opacity: [0.1, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Real Estate.{" "}
          <span className="text-[#D2AA51]">Marketing.</span> Lead
          <br /> Generation — All Under One Roof.
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Helping investors, brokers & businesses grow faster through verified leads,
          smart marketing, and profitable property deals.
        </motion.p>

        {/* Button with continuous cinematic pulse */}
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
              "0 0 40px rgba(210,170,81,0.3)"
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
          {/* Shine Effect */}
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
          <span className="relative z-10">Book a Consultation</span>
        </motion.button>
      </div>

      {/* Subtle moving gradient glow (adds cinematic depth) */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#D2AA51]/20 to-transparent blur-2xl"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default HeroSection;
