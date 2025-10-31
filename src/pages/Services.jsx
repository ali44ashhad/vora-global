import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import images from '../assets/images';
import { features } from './data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HEADING_COLOR = '#E3CB98';

// Animation Variants
const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Smooth fade + float animation for the single image
const floatImageVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0D0D21]">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0D0D21] py-24 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center relative z-10">

          {/* LEFT TEXT */}
          <motion.div
            className="order-1 flex flex-col justify-center"
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold leading-tight mb-4 sm:mb-6"
              style={{ color: HEADING_COLOR }}
            >
              Real Estate
              <br className="sm:hidden lg:block" />
              <span className="block mt-1 text-2xl sm:text-3xl md:text-4xl">
                Growth Partners
              </span>
            </h1>

            <p className="max-w-lg text-sm sm:text-base text-gray-300 mb-6">
              We provide comprehensive support — from <strong>Real Estate Consultancy</strong> to
              <strong> Marketing &amp; Lead Generation</strong>. Our solutions maximize your property value
              and connect you with high-quality buyers and investors.
            </p>

            {/* WhatsApp Button */}
            <motion.button
              onClick={() => window.open("https://wa.me/919999999999", "_blank")}
              className="inline-flex w-auto self-start shrink-0 items-center gap-3 bg-[#D2AA51] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_40px_rgba(210,170,81,0.4)] relative overflow-hidden group"
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

          {/* RIGHT IMAGE (Single Animated Image) */}
          <motion.div
            className="order-2 flex justify-center lg:justify-end"
            variants={floatImageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={images.serviceHero1}
              alt="Service Hero"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="w-full bg-black py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
               bg-gradient-to-r from-yellow-400 via-yellow-200 to-white"
            >
              Our Premium Services
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Discover world-class solutions tailored for your growth and investment success.
            </p>
          </div>

          <motion.div
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:gap-10 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {features.map((f) => (
              <motion.div
                key={f.id}
                className="flex flex-col p-5 sm:p-6 rounded-xl shadow-lg border border-gray-800 
                           transition duration-300 hover:shadow-yellow-500/20"
                style={{
                  background: f.cardBg || '#111',
                  color: f.textColor || '#fff',
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-center items-center h-36 sm:h-40 mb-5">
                  {f.illustration ? (
                    <img
                      src={f.illustration}
                      alt={f.title}
                      className="w-full h-full object-contain rounded-lg"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                      [Illustration]
                    </div>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">{f.title}</h3>
                <p className="mb-4 text-sm sm:text-base text-center flex-grow">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
