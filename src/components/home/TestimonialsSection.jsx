import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../pages/data";

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  // Slide variants for left-right motion
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: (dir) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.6, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative bg-[#0D0D21] text-white py-24 overflow-hidden">
      {/* Section Header */}
      <motion.h2
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What Our <span className="text-[#D2AA51]">Clients Say</span>
      </motion.h2>

      {/* Testimonial Carousel */}
      <div className="relative w-full max-w-4xl mx-auto px-6 md:px-0">
        <div className="relative h-64 sm:h-72 md:h-80 flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              className="absolute w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-[#0D0D21] to-gray-800 p-10 rounded-3xl border border-[#D2AA51]/50 shadow-[0_0_40px_rgba(210,170,81,0.15)]"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Quote */}
              <motion.p
                className="text-gray-300 text-lg md:text-xl italic leading-relaxed mb-6 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                “{testimonials[index].quote}”
              </motion.p>

              {/* Name */}
              <motion.h4
                className="font-semibold text-[#D2AA51] text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                — {testimonials[index].name}
              </motion.h4>

              {/* Optional designation */}
              {testimonials[index].role && (
                <p className="text-gray-500 text-sm mt-2">
                  {testimonials[index].role}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-12 gap-8">
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-[#D2AA51]/60 text-[#D2AA51] hover:bg-[#D2AA51] hover:text-[#0D0D21] transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-[#D2AA51]/60 text-[#D2AA51] hover:bg-[#D2AA51] hover:text-[#0D0D21] transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Decorative Background Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#D2AA51]/20 rounded-full blur-3xl -z-10"
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
