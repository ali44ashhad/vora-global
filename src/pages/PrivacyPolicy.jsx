import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <section
      className="min-h-screen bg-[#0D0D21] text-white py-20 px-6 sm:px-10"
      style={{ backgroundImage: "linear-gradient(180deg, #0D0D21 0%, #14142B 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* --- HEADER --- */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h1
            className="text-5xl sm:text-6xl font-extrabold mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FFD700 0%, #B68E3E 50%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
            }}
          >
            Privacy Policy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We value your privacy and are committed to protecting your personal information.
          </p>
        </motion.div>

        {/* --- CONTENT --- */}
        <motion.div
          className="space-y-10 leading-relaxed text-gray-300 text-base sm:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services. Please read this policy
              carefully to understand our practices regarding your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              2. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal details such as name, email address, and phone number.</li>
              <li>Usage data including IP address, browser type, and time spent on our site.</li>
              <li>Information you provide through forms or service inquiries.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our services.</li>
              <li>To improve and personalize user experience.</li>
              <li>To send promotional materials or service updates (only if you opt-in).</li>
              <li>To comply with legal obligations or resolve disputes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              4. Data Protection & Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your data against
              unauthorized access, disclosure, or loss. However, no method of transmission over the
              Internet is 100% secure, and we cannot guarantee absolute protection.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              5. Cookies & Tracking Technologies
            </h2>
            <p>
              Our website may use cookies and similar technologies to enhance user experience and
              analyze traffic. You can disable cookies in your browser settings, but some features
              of the site may not function properly as a result.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              6. Third-Party Services
            </h2>
            <p>
              We may partner with third-party providers for analytics, marketing, or payment
              processing. These third parties have their own privacy policies, and we encourage you
              to review them when interacting with their services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              7. Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You have the right to access, correct, or delete your personal data.</li>
              <li>You can opt out of promotional communications at any time.</li>
              <li>Requests can be made via our contact form or email.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will be reflected on this
              page with an updated revision date. Your continued use of our website after updates
              indicates your acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              9. Contact Us
            </h2>
            <p>
              For questions about this Privacy Policy or your data rights, please contact us at{" "}
              <span className="text-[#FFD700]">privacy@yourcompany.com</span>.
            </p>
          </div>

          
        </motion.div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
