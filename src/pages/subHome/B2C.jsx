import React, { useCallback, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram, FaSearch, FaHome, FaChartLine, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { Menu, X, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Star, TrendingUp, Users, Clock } from "lucide-react";
import logo from "../../assets/logo/voralogo.png"
import b2c from "../../assets/homeimages/b2c.jpg"

const B2C = () => {
  const waNumber = "971501234567";
  const prefill = encodeURIComponent("Hi, I'm interested in exploring Dubai property investment opportunities.");
  const waLink = `https://wa.me/${waNumber}?text=${prefill}`;
  const openWhatsApp = useCallback(() => window.open(waLink, "_blank"), [waLink]);

  // Testimonials data - Updated with your content
  const testimonials = [
    {
      id: 1,
      quote: "I was new to Dubai real estate — Vora Global made everything simple and profitable. Their guidance was invaluable for my first investment.",
      name: "Ravi S.",
      role: "Investor from India",
      rating: 5
    },
    {
      id: 2,
      quote: "Their guidance helped me invest in the right townhouse. Excellent experience from start to finish with transparent process.",
      name: "Khaled A.",
      role: "UAE Resident",
      rating: 5
    }
  ];

  // Services data - Updated structure
  const services = [
    {
      title: "Ready & Off-Plan Property Consultation",
      items: [
        "Personalized property recommendations",
        "Off-plan project analysis",
        "Ready property viewings",
        "Investment vs lifestyle guidance"
      ],
      icon: "Home",
      color: "from-[#D2AA51] to-yellow-600"
    },
    {
      title: "Market Research & ROI Forecasting",
      items: [
        "Comprehensive market analysis",
        "ROI projections & calculations",
        "Area growth potential assessment",
        "Rental yield optimization"
      ],
      icon: "Chart",
      color: "from-[#D2AA51] to-yellow-600"
    },
    {
      title: "Developer-Approved Deals & Launch Access",
      items: [
        "Early bird project access",
        "Developer direct partnerships",
        "Exclusive launch prices",
        "Premium unit selection"
      ],
      icon: "Deal",
      color: "from-[#D2AA51] to-yellow-600"
    },
    {
      title: "End-to-End Support",
      items: [
        "Property viewing coordination",
        "Documentation & paperwork",
        "Handover process management",
        "After-sales support"
      ],
      icon: "Support",
      color: "from-[#D2AA51] to-yellow-600"
    }
  ];

  // Process data - Updated with your content
  const processes = [
    {
      id: "01",
      title: "Understand Your Goals",
      description: "We discuss your investment objectives - capital gain, rental yield, or lifestyle requirements.",
      icon: "Goal"
    },
    {
      id: "02",
      title: "Property Selection",
      description: "Curated deals that perfectly match your budget, preferences, and investment goals.",
      icon: "Selection"
    },
    {
      id: "03",
      title: "Documentation & Negotiation",
      description: "We handle all formalities transparently and negotiate the best terms on your behalf.",
      icon: "Document"
    },
    {
      id: "04",
      title: "After-Sales Support",
      description: "Comprehensive support from property management to resale and portfolio growth.",
      icon: "Support"
    }
  ];

  // Property highlights
  const propertyHighlights = [
    {
      type: "Luxury Apartments",
      location: "Downtown Dubai",
      price: "AED 1.2M - 3.5M",
      yield: "7.2% ROI"
    },
    {
      type: "Townhouses",
      location: "Dubai Hills",
      price: "AED 2.8M - 4.5M",
      yield: "6.8% ROI"
    },
    {
      type: "Off-Plan Villas",
      location: "Palm Jumeirah",
      price: "AED 4.5M - 8.2M",
      yield: "8.1% ROI"
    },
    {
      type: "Commercial Spaces",
      location: "DIFC",
      price: "AED 3.5M - 12M",
      yield: "9.2% ROI"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection onWhatsAppClick={openWhatsApp} />
      <AboutSection />
      <PropertyHighlights properties={propertyHighlights} />
      <ServicesSection services={services} />
      <ProcessSection processes={processes} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection onWhatsAppClick={openWhatsApp} />
      <Footer />
    </div>
  );
};

// Header Component (keep your existing header code)
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
      const sections = ['home', 'about', 'properties', 'services', 'process', 'testimonials', 'contact'];
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
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/b2c">
              <img
                src={logo}
                alt="vora-global-logo"
                className="h-10 w-auto md:h-14 object-contain"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'properties', 'services', 'process', 'testimonials', 'contact'].map((item) => (
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

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-gradient-to-r from-[#D2AA51] to-yellow-600 text-gray-900 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to Expert
          </motion.button>

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
              {['home', 'about', 'properties', 'services', 'process', 'testimonials', 'contact'].map((item) => (
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
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-[#D2AA51] to-yellow-600 text-gray-900 py-2 px-4 rounded-lg font-semibold text-center"
              >
                Talk to Expert
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

// Updated Hero Section with your content
const HeroSection = ({ onWhatsAppClick }) => {
  return (
    <section id="home" className="relative min-h-screen text-white flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.img
        src={b2c}
        alt="Dubai Skyline"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ scale: 1.15, opacity: 0.75 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        draggable={false}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Invest <span className="text-[#D2AA51]">Smarter.</span><br />
          Live <span className="text-[#D2AA51]">Better.</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover Dubai's most profitable property deals — verified, transparent & personally guided by Vora Global.
        </motion.p>

        <motion.button
          onClick={onWhatsAppClick}
          className="inline-flex items-center gap-3 bg-[#D2AA51] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_40px_rgba(210,170,81,0.35)] relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: 1,
            scale: [1, 1.04, 1],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.5 },
            scale: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp className="text-xl relative z-10" />
          <span className="relative z-10">Explore Properties & Start Investing Today</span>
        </motion.button>
      </div>
    </section>
  );
};

// Updated About Section with your content
const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-[#0D0D21] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Trusted Partner in <span className="text-[#D2AA51]">Dubai Real Estate</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Vora Global helps investors and end-users find the right property at the right price. 
              From luxury villas and off-plan townhouses to commercial investments, we bring you 
              Dubai's best opportunities backed by deep market insights.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Our personalized approach ensures you make informed decisions with complete transparency 
              and expert guidance every step of the way.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck />, text: "Verified Properties" },
                { icon: <TrendingUp />, text: "Market Insights" },
                { icon: <Users />, text: "Personal Guidance" },
                { icon: <Clock />, text: "End-to-End Support" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#D2AA51]/20 rounded-full flex items-center justify-center text-[#D2AA51]">
                    {feature.icon}
                  </div>
                  <span className="text-gray-300 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Properties Sold" },
                { number: "AED 2B+", label: "Transaction Value" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "50+", label: "Developer Partners" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-2xl text-center border border-gray-700">
                  <div className="text-3xl font-bold text-[#D2AA51] mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Property Highlights Section (keep your existing component)
const PropertyHighlights = ({ properties }) => {
  return (
    <section id="properties" className="relative py-20 bg-gray-900 overflow-hidden">
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
            Featured <span className="text-[#D2AA51]">Properties</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover curated investment opportunities across Dubai's most promising locations
          </p>
        </motion.div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-700 hover:border-[#D2AA51]/50"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-[#D2AA51] to-yellow-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#D2AA51]">
                  {property.yield}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{property.type}</h3>
                <p className="text-gray-400 mb-3 flex items-center">
                  <MapPin size={16} className="mr-2 text-[#D2AA51]" />
                  {property.location}
                </p>
                <div className="text-2xl font-bold text-[#D2AA51] mb-4">{property.price}</div>
                
                <button className="w-full bg-gradient-to-r from-[#D2AA51] to-yellow-600 text-gray-900 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section Component (keep your existing component)
const ServicesSection = ({ services }) => {
  const IconMap = {
    Home: FaHome,
    Chart: FaChartLine,
    Deal: FaHandshake,
    Support: FaShieldAlt
  };

  return (
    <section id="services" className="relative py-20 bg-[#0D0D21] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services for <span className="text-[#D2AA51]">Investors</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive real estate services tailored to your investment goals and lifestyle needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = IconMap[service.icon] || FaHome;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 group-hover:border-[#D2AA51]/50">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6`}>
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-300">
                        <div className="w-2 h-2 bg-[#D2AA51] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Process Section Component (keep your existing component)
const ProcessSection = ({ processes }) => {
  const ProcessIcons = {
    Goal: () => <Target className="w-8 h-8" />,
    Selection: () => <FaSearch className="w-8 h-8" />,
    Document: () => <FileText className="w-8 h-8" />,
    Support: () => <FaShieldAlt className="w-8 h-8" />
  };

  return (
    <section id="process" className="relative py-20 bg-gradient-to-br from-[#D2AA51] to-yellow-600 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gray-800">Process</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Simple, transparent process designed for your convenience and success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-yellow-500/30"></div>

          {processes.map((step, index) => {
            const Icon = ProcessIcons[step.icon] || ProcessIcons.Goal;
            return (
              <motion.div
                key={step.id}
                className="text-center relative z-10"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl font-bold border border-white/30">
                  {step.id}
                </div>
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center text-gray-900">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-800 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component (keep your existing component)
const TestimonialsSection = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success <span className="text-[#D2AA51]">Stories</span>
          </h2>
          <p className="text-xl text-gray-400">
            Hear from our satisfied investors and home buyers
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-3xl shadow-lg border border-gray-700"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-300 italic text-center leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="text-center">
                <div className="text-[#D2AA51] font-semibold text-lg mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-500">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-gray-600 text-gray-400 hover:border-[#D2AA51] hover:text-[#D2AA51] transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-gray-600 text-gray-400 hover:border-[#D2AA51] hover:text-[#D2AA51] transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated CTA Section with your content
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
            Ready to Find Your <span className="text-[#D2AA51]">Dream Property</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your investment goals and find the perfect property match in Dubai
          </p>
          
          <motion.button
            onClick={onWhatsAppClick}
            className="inline-flex items-center gap-3 bg-[#D2AA51] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_40px_rgba(210,170,81,0.4)] hover:shadow-[0_0_60px_rgba(210,170,81,0.6)] transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-xl" />
            <span>Talk to an Expert Today</span>
          </motion.button>

          <p className="text-gray-400 mt-6">
            Explore Properties & Start Investing Today
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component (keep your existing footer)
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="vora-global-logo"
                className="h-10 w-auto md:h-14 object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for Dubai real estate investments. We help you invest smarter and live better with personalized guidance and verified opportunities.
            </p>
            <div className="flex space-x-4">
              {[FaLinkedin, FaTwitter, FaInstagram].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#D2AA51] hover:text-[#D2AA51] transition-all duration-300"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['home', 'about', 'properties', 'services', 'process', 'testimonials'].map((item) => (
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

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
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
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Vora Global. All rights reserved. | Dubai Real Estate Experts</p>
        </div>
      </div>
    </footer>
  );
};

// Additional Icons (keep your existing icons)
const ShieldCheck = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Target = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
  </svg>
);

const FileText = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default B2C;