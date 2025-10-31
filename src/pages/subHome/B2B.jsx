import React, { useCallback, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Menu, X, ChevronLeft, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import logo from "../../assets/logo/voralogo.png"
import b2b from "../../assets/homeimages/b2b.jpg"
const B2B = () => {
  const waNumber = "971501234567";
  const prefill = encodeURIComponent("Hi, I'm interested in your B2B lead generation services.");
  const waLink = `https://wa.me/${waNumber}?text=${prefill}`;
  const openWhatsApp = useCallback(() => window.open(waLink, "_blank"), [waLink]);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "We purchased 200 off-plan leads from ongoing campaigns — quality was impressive. Closed 1 deal within 10 days.",
      name: "Omar R.",
      role: "Sales Manager – Dubai Brokerage"
    },
    {
      id: 2,
      quote: "I setup a meeting within same day and close deal within 1 week. The lead quality exceeded our expectations.",
      name: "Sarah L.",
      role: "Developer Partner – UAE"
    },
    {
      id: 3,
      quote: "Their B2B lead generation system transformed our sales pipeline. Consistent quality leads every month.",
      name: "Ahmed K.",
      role: "Marketing Director"
    }
  ];

  // Services data
  const services = [
    {
      title: "Real Estate Lead Generation",
      items: [
        "Buyer & seller lead generation",
        "Project-specific campaigns",
        "Verified investor leads",
        "Off-plan property leads"
      ],
      icon: "Landmark"
    },
    {
      title: "Developer Campaigns",
      items: [
        "Developer-specific targeting",
        "Project launch campaigns",
        "Inventory clearance",
        "Premium listing promotion"
      ],
      icon: "TrendingUp"
    },
    {
      title: "Financial Services",
      items: [
        "Mortgage broker leads",
        "Finance company campaigns",
        "Investment opportunities",
        "Wealth management leads"
      ],
      icon: "BarChart3"
    },
    {
      title: "Lead Management",
      items: [
        "Lead exchange program",
        "Unverified to verified conversion",
        "Done-for-you ad management",
        "Multi-platform campaigns"
      ],
      icon: "Zap"
    }
  ];

  // Process data
  const processes = [
    {
      id: "01",
      title: "Requirement Brief",
      description: "Tell us your audience & project goals for customized lead generation strategy."
    },
    {
      id: "02",
      title: "Campaign Setup",
      description: "We design & launch targeted ads across Meta, Google & LinkedIn platforms."
    },
    {
      id: "03",
      title: "Lead Delivery",
      description: "Receive verified, categorized leads ready for conversion and follow-up."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection onWhatsAppClick={openWhatsApp} />
      <AboutSection />
      <ServicesSection services={services} />
      <ProcessSection processes={processes} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection onWhatsAppClick={openWhatsApp} />
      <Footer />
    </div>
  );
};

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'process', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
         <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                     
                   <a href="/b2b">
                    <img
          src={logo}
          alt="vora-global-logo"
          className="h-10 w-auto md:h-14 object-contain"
        />
        
                   </a>
                  </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'process', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === item 
                    ? 'text-[#D2AA51] border-b-2 border-[#D2AA51]' 
                    : 'text-gray-300 hover:text-[#D2AA51]'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4 pb-4"
            >
              {['home', 'about', 'services', 'process', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item 
                      ? 'bg-[#D2AA51] text-gray-900' 
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const HeroSection = ({ onWhatsAppClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax Background (z-0) */}
      <motion.img
        src={b2b}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ scale: 1.15, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        draggable={false}
      />

      {/* Cinematic Gradient Overlay (semi-transparent so bg is visible) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* Floating Particles (above bg, below content) */}
      <div className="absolute inset-0 overflow-hidden z-15 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-[3px] h-[3px] rounded-full bg-white/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ y: 0, opacity: 0.15, scale: 0.85 }}
            animate={{
              y: ["0%", "-160%"],
              opacity: [0.15, 0.85, 0],
              scale: [0.85, 1, 0.6],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content (z-20) */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Verified Leads. <span className="text-[#D2AA51]">Real Results.</span> No Guesswork.
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Exclusive buyer, seller & investor leads from our advance running campaigns for B2B businesses,
          brokers, developers & marketers — powered by advanced targeting and automation.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={onWhatsAppClick}
          className="inline-flex items-center gap-3 bg-[#D2AA51] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_40px_rgba(210,170,81,0.35)] relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: 1,
            scale: [1, 1.04, 1],
            boxShadow: [
              "0 0 40px rgba(210,170,81,0.25)",
              "0 0 70px rgba(210,170,81,0.6)",
              "0 0 40px rgba(210,170,81,0.25)",
            ],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.5 },
            scale: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            boxShadow: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Shine Effect */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            aria-hidden
            animate={{ x: ["-150%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <FaWhatsapp className="text-xl relative z-10" />
          <span className="relative z-10">Get Verified Leads</span>
        </motion.button>
      </div>

      {/* Bottom Glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#D2AA51]/20 to-transparent blur-2xl z-10 pointer-events-none"
        animate={{ opacity: [0.35, 0.85, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-[#0D0D21] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About <span className="text-[#D2AA51]">Vora Global</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Vora Global helps B2B business, real estate professionals, developers, and marketing agencies 
            get ready-to-convert leads through high-performance digital campaigns.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We don't sell lists — we build lead systems that consistently deliver results through 
            advanced targeting, automation, and proven conversion strategies.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { number: "500+", label: "Verified Leads Monthly" },
            { number: "95%", label: "Lead Accuracy Rate" },
            { number: "24h", label: "Average Response Time" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="text-3xl font-bold text-[#D2AA51] mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D2AA51]/10 rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

// Services Section Component
const ServicesSection = ({ services }) => {
  const IconMap = {
    Landmark: ({ className }) => <div className={className}>🏢</div>,
    TrendingUp: ({ className }) => <div className={className}>📈</div>,
    BarChart3: ({ className }) => <div className={className}>💼</div>,
    Zap: ({ className }) => <div className={className}>⚡</div>
  };

  return (
    <section id="services" className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#D2AA51]">B2B Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive lead generation solutions tailored for real estate professionals and businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = IconMap[service.icon] || IconMap.Zap;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-[#D2AA51]/30 hover:border-[#D2AA51]/60 transition-all duration-300 group hover:shadow-[0_0_40px_rgba(210,170,81,0.1)]"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Icon className="w-12 h-12 text-3xl mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-[#D2AA51] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Process Section Component
const ProcessSection = ({ processes }) => {
  return (
    <section id="process" className="relative py-20 bg-[#0D0D21] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#D2AA51]">B2B Process</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Simple, transparent process that delivers real results
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processes.map((step, index) => (
            <motion.div
              key={step.id}
              className="text-center group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Step Number */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D2AA51] to-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {step.id}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
              
              {/* Connector Line */}
              {index < processes.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-600 -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-[#D2AA51]">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-3xl border border-[#D2AA51]/30 text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg md:text-xl text-gray-300 italic leading-relaxed mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="text-[#D2AA51] font-semibold text-lg">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-500 text-sm">
                {testimonials[currentIndex].role}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-[#D2AA51] text-[#D2AA51] hover:bg-[#D2AA51] hover:text-gray-900 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-[#D2AA51] text-[#D2AA51] hover:bg-[#D2AA51] hover:text-gray-900 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = ({ onWhatsAppClick }) => {
  return (
    <section id="contact" className="relative py-20 bg-[#0D0D21] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get <span className="text-[#D2AA51]">Verified Leads</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Generate verified leads from our advance campaigns or build your own custom campaign
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={onWhatsAppClick}
              className="inline-flex items-center justify-center gap-3 bg-[#D2AA51] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_40px_rgba(210,170,81,0.4)] relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-xl" />
               Generate Verified Leads
            </motion.button>
            
            <motion.button
              onClick={onWhatsAppClick}
              className="inline-flex items-center justify-center gap-3 border-2 border-[#D2AA51] text-[#D2AA51] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D2AA51] hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Build Custom Campaign
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#D2AA51] mb-4">Vora Global</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading B2B lead generation company specializing in verified real estate 
              and business leads through advanced digital campaigns.
            </p>
            <div className="flex space-x-4">
              {[FaLinkedin, FaTwitter, FaInstagram].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#D2AA51] hover:text-[#D2AA51] transition-all duration-300"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 text-[#D2AA51]" />
                <span>+91 9167632383</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 text-[#D2AA51]" />
                <span>voraglobalmanagement@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3 text-[#D2AA51]" />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['home', 'services', 'process', 'testimonials'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-[#D2AA51] transition-colors duration-300 text-left"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Vora Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default B2B;