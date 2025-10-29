import React, { useCallback } from "react"; 
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ProcessSection from "../components/home/ProcessSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const waNumber = "971501234567"; // 🔹 your WhatsApp number
  const prefill = encodeURIComponent("Hi, I’d like to discuss Dubai real estate consultation.");
  const waLink = `https://wa.me/${waNumber}?text=${prefill}`;
  const openWhatsApp = useCallback(() => window.open(waLink, "_blank"), [waLink]);

  return (
    <>
    <Navbar/>
      <HeroSection onWhatsAppClick={openWhatsApp} />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection onWhatsAppClick={openWhatsApp} />
      <Footer/>
    </>
  );
};

export default Home;
