import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Map = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative bg-[#0D0D21] text-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center mb-4"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D2AA51]/10 border border-[#D2AA51]/30">
            <MapPin className="text-[#D2AA51] w-6 h-6" />
          </div>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#D2AA51] to-white">
          Visit Our Location
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          We’re always happy to welcome you. Find us easily using the map below.
        </p>
      </div>

      {/* Map Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(210,170,81,0.2)] border border-[#D2AA51]/20"
      >
        <iframe
          title="Map - Business Bay, Dubai"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.686949261776!2d55.26729567451831!3d25.190517677692067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4345f259a7f1%3A0x7eab7cb7d84a1b2b!2sBusiness%20Bay%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1730225042101!5m2!1sen!2sin"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[520px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      {/* Location Text */}
      <div className="mt-8 text-center text-gray-300 text-sm sm:text-base">
        <p className="font-semibold text-[#D2AA51] text-lg">
          Business Bay
        </p>
        <p className="text-gray-400">
          Dubai, United Arab Emirates
        </p>
      </div>
    </motion.section>
  );
};

export default Map;
