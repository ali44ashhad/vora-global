import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Form from "../components/Form";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contactus = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0D0D21]">
        <div className="w-12 h-12 border-4 border-[#D2AA51] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
    <Navbar/>
      {/* ---------------- HERO SECTION ---------------- */}
      <section
        className="relative w-full min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D0D21] via-[#0E0E23] to-[#11112A]"
        aria-label="Contact Hero"
      >
        {/* Decorative Glow (top-right & bottom-left) */}
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#D2AA51]/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#D2AA51]/10 blur-[150px] rounded-full"></div>

        {/* Content */}
        <motion.div
          className="relative z-20 text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariant}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D2AA51] to-white">
            Get in Touch
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            We’d love to hear from you — whether it’s about partnerships,
            support, or collaborations. Let’s make something amazing together.
          </p>

          {/* WhatsApp Contact Button */}
          <motion.button
            onClick={() => window.open("https://wa.me/919999999999", "_blank")}
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
            <span className="relative z-10">Contact Us</span>
          </motion.button>
        </motion.div>
      </section>

      {/* ---------------- FORM & MAP SECTION ---------------- */}
      <section className="bg-[#0D0D21] text-white py-24  ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="flex-1">
            <Form />
          </div>

          {/* Map */}
          <div className="flex-1">
            <Map />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contactus;
