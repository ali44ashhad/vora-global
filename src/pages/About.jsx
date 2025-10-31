import React, { useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import images from "../assets/images";
import { missionData } from "./data";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HEXAGON_CLIP_PATH =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const sectionViewport = { once: true, amount: 0.2 };
const sectionTransition = { duration: 0.9, ease: "easeOut" };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const onWhatsAppClick = () => {
    window.open("https://wa.me/919999999999", "_blank");
  };

  return (
    <>
    <Navbar/>
      {/* ---------------- ABOUT SECTION ---------------- */}
      <motion.section
        className="bg-[#0D0D21] text-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        transition={sectionTransition}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* --- TEXT --- */}
          <motion.div
            className="md:w-1/2 w-full order-2 md:order-1 text-center md:text-left"
            variants={fadeUp}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D2AA51] to-white">
              About Vora Global
            </h1>

            <motion.p
              className="text-gray-300 text-lg mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed"
              variants={fadeIn}
            >
              At{" "}
              <span className="text-[#B68E3E] font-semibold">Vora Global</span>,
              we bridge the gap between property, people, and profit. With over
              a decade of expertise in real estate, digital marketing, and lead
              generation, we help investors discover high-return properties and
              empower agents to scale with consistent, qualified leads.
            </motion.p>

            {/* WhatsApp Button */}
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
              <span className="relative z-10">Contact us</span>
            </motion.button>
          </motion.div>

          {/* --- IMAGE --- */}
          <motion.div
            className="md:w-1/2 w-full flex justify-center md:justify-end order-1 md:order-2"
            variants={fadeUp}
          >
            <motion.div
              className="relative w-80 h-80 sm:w-96 sm:h-96 overflow-hidden"
              style={{ y }}
            >
              <div
                className="w-full h-full"
                style={{
                  clipPath: HEXAGON_CLIP_PATH,
                  WebkitClipPath: HEXAGON_CLIP_PATH,
                  boxShadow: "0 0 30px rgba(210,170,81,0.3)",
                }}
              >
                <img
                  src={images.aboutHero}
                  alt="About Vora Global"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute inset-0 border-2 border-[#D2AA51]/60 rounded-[30px]"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ clipPath: HEXAGON_CLIP_PATH }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ---------------- OUR MISSION ---------------- */}
      <motion.section
        className="bg-[#0D0D21] py-24 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div className="text-center mb-20" variants={fadeUp}>
            <motion.h2
              className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#FFD700] via-[#B68E3E] to-white text-transparent bg-clip-text"
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed text-white/75"
              variants={fadeIn}
            >
              To make property sales and lead generation fast, transparent, and
              profitable for everyone.
            </motion.p>
          </motion.div>

          {/* Mission Cards */}
          <div className="flex flex-wrap justify-center gap-10">
            {missionData.map((item, index) => {
              const [ref, inView] = useInView({ threshold: 0.3 });
              const controls = useAnimation();

              useEffect(() => {
                controls.start({
                  rotateY: inView ? 360 : 0,
                  transition: { duration: 2, ease: "easeInOut" },
                });
              }, [inView, controls]);

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  className="relative w-80 h-80"
                  style={{ perspective: 1000 }}
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{
                    opacity: inView ? 1 : 0.5,
                    scale: inView ? 1 : 0.95,
                    y: inView ? 0 : 40,
                    transition: { duration: 0.6, ease: "easeOut" },
                  }}
                  whileHover={{
                    rotateX: 8,
                    rotateY: -8,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                >
                  <motion.div
                    className="w-full h-full bg-[#11112A] p-8 rounded-2xl border-2 border-[#B68E3E]/50 shadow-[0_0_30px_rgba(182,142,62,0.2)] flex flex-col items-center justify-center text-center"
                    animate={controls}
                    style={{
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <item.icon className="w-12 h-12 text-[#FFD700] mb-5 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]" />
                    <h3 className="text-xl text-gray-50 font-semibold uppercase mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed max-w-xs">
                      {item.text}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Golden Aura Background Glow */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[80%] bg-[#D2AA51]/10 blur-3xl rounded-full"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.section>
      <Footer/>
    </>
  );
};

export default About;
