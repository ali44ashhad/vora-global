import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Landmark, TrendingUp, BarChart3, Zap } from "lucide-react";
import { services } from "../../pages/data";

const IconMap = { Landmark, TrendingUp, BarChart3, Zap };

const ServicesSection = () => {
  return (
    <section className="relative min-h-screen bg-[#0D0D21] text-white py-20 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-5xl font-bold mb-4 text-[#D2AA51]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Core Services
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We blend <span className="text-white">real estate expertise</span> with{" "}
          <span className="text-[#D2AA51]">digital marketing intelligence</span> to drive your growth.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {services.map((service, idx) => {
          const Icon = IconMap[service.iconName] || Zap;
          const [ref, inView] = useInView({ threshold: 0.4 });
          const controls = useAnimation();

          useEffect(() => {
            controls.start({
              rotateY: inView ? 180 : 0,
              transition: { duration: 1, ease: "easeInOut" },
            });
          }, [inView, controls]);

          return (
            <motion.div
              key={idx}
              ref={ref}
              className="relative w-80 h-80"
              style={{ perspective: 1200 }}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{
                opacity: inView ? 1 : 0.5,
                scale: inView ? 1 : 0.95,
                y: inView ? 0 : 40,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={controls}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl border-2 border-[#D2AA51]/60 shadow-[0_0_40px_rgba(210,170,81,0.1)]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div
                    className="flex flex-col items-start"
                    style={{
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "visible",
                    }}
                  >
                    <Icon
                      className="w-10 h-10 text-[#D2AA51] mb-4 drop-shadow-[0_0_8px_rgba(210,170,81,0.6)]"
                      style={{ backfaceVisibility: "visible" }}
                    />
                    <h3 className="text-xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {service.items.map((i, j) => (
                        <li key={j}>• {i}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* BACK (same content) */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl border border-[#D2AA51]/60 flex flex-col justify-center"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div
                    className="flex flex-col items-start"
                    style={{
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "visible",
                    }}
                  >
                    <Icon
                      className="w-10 h-10 text-[#D2AA51] mb-4 drop-shadow-[0_0_8px_rgba(210,170,81,0.6)]"
                      style={{ backfaceVisibility: "visible" }}
                    />
                    <h3 className="text-xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {service.items.map((i, j) => (
                        <li key={j}>• {i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Subtle glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#D2AA51]/20 to-transparent blur-2xl"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default ServicesSection;
