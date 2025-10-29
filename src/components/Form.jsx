import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  User,
  BookOpen,
  MessageSquare,
  Instagram,
  Facebook,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";
import images from "../assets/images";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted!");
      setIsSubmitting(false);
    }, 2000);
  };

  const fadeVariant = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  });

  return (
    <section className="  py-24 px-6 sm:px-3 md:px-6">
      <div className="max-w-7xl mx-auto bg-[#11112A] rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-[0_0_50px_rgba(210,170,81,0.15)] border border-[#1C1C3B]">
        
        {/* LEFT: Contact Form */}
        <motion.div
          className=" p-10 sm:p-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeVariant("left")}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D2AA51] to-white mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed max-w-lg">
            Have a project in mind? We’d love to hear about it. Fill in your
            details and our team will reach out soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Input Grid */}
            <div className=" ">
              {[
                { id: "name", type: "text", placeholder: "Your Name", icon: User },
                { id: "email", type: "email", placeholder: "Your Email", icon: Mail },
                { id: "phone", type: "text", placeholder: "Phone Number", icon: Phone },
                { id: "subject", type: "text", placeholder: "Subject", icon: BookOpen },
              ].map(({ id, type, placeholder, icon: Icon }) => (
                <div key={id} className="relative">
                  <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    required
                    className="peer w-full border-b border-gray-700 focus:border-[#D2AA51] bg-transparent py-3 text-gray-200 placeholder-gray-500 focus:outline-none transition-all duration-300"
                  />
                  <Icon className="absolute top-1/2 right-0 -translate-y-1/2 w-5 h-5 text-gray-500 peer-focus:text-[#D2AA51] transition-colors duration-300" />
                </div>
              ))}
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                required
                className="peer w-full border-b border-gray-700 focus:border-[#D2AA51] bg-transparent py-3 text-gray-200 placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none"
              />
              <MessageSquare className="absolute top-5 right-0 w-5 h-5 text-gray-500 peer-focus:text-[#D2AA51] transition-colors duration-300" />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="relative inline-flex items-center justify-center gap-3 bg-[#D2AA51] text-gray-900 px-3 py-4 rounded-full font-semibold text-lg shadow-[0_0_30px_rgba(210,170,81,0.3)] hover:shadow-[0_0_50px_rgba(210,170,81,0.6)] transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
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
              <span className="relative z-10">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </motion.button>
          </form>
        </motion.div>
 
      </div>
    </section>
  );
};

export default Form;
