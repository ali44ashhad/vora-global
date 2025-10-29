import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TermsAndConditions = () => {
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
            Terms & Conditions
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
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
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">1. Introduction</h2>
            <p>
              Welcome to our platform. By accessing or using this website, you agree to be bound by
              these Terms & Conditions and all applicable laws. If you disagree with any part of
              these terms, please refrain from using the website or our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">2. Services Overview</h2>
            <p>
              We provide digital marketing and real estate consultancy services to assist clients in
              generating leads, managing investments, and streamlining property transactions. The
              details of these services may vary and are subject to change at our discretion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to provide accurate and complete information when using our platform.</li>
              <li>You shall not use the website for unlawful or unauthorized purposes.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All content, branding, design elements, logos, and materials on this website are the
              property of our company. You may not reproduce, copy, distribute, or use any materials
              without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">5. Limitation of Liability</h2>
            <p>
              We strive to ensure the accuracy of information provided on our website; however, we
              do not guarantee the completeness or reliability of any data. We shall not be held
              liable for any direct, indirect, or incidental damages resulting from the use of our
              services or website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">6. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the
              content or practices of third-party sites and encourage you to review their respective
              policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              7. Privacy & Data Protection
            </h2>
            <p>
              Your privacy is important to us. Any information collected through this website is
              handled in accordance with our Privacy Policy. By using our services, you consent to
              the collection and use of data as outlined in that policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">
              8. Updates to These Terms
            </h2>
            <p>
              We may revise or update these Terms & Conditions periodically. Continued use of our
              website after changes have been made indicates your acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#D2AA51] mb-3">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please reach out to us at{" "}
              <span className="text-[#FFD700]">info@yourcompany.com</span>.
            </p>
          </div>
 
        </motion.div>
      </div>
    </section>
    <footer/>
    </>
  );
};

export default TermsAndConditions;
