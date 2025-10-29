import React, { useCallback, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram, FaSearch, FaHome, FaChartLine, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { Menu, X, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Star, TrendingUp, Users, Clock } from "lucide-react";
import logo from "../../assets/logo/voralogo.png"
const B2C = () => {
  const waNumber = "971501234567";
  const prefill = encodeURIComponent("Hi, I'm interested in exploring Dubai property investment opportunities.");
  const waLink = `https://wa.me/${waNumber}?text=${prefill}`;
  const openWhatsApp = useCallback(() => window.open(waLink, "_blank"), [waLink]);

  // Testimonials data
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
    },
    {
      id: 3,
      quote: "Found my dream apartment through Vora Global. The team negotiated a great deal and handled all paperwork seamlessly.",
      name: "Sophia M.",
      role: "Property Owner",
      rating: 5
    }
  ];

  // Services data
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
      color: "from-blue-500 to-cyan-400"
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
      color: "from-green-500 to-emerald-400"
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
      color: "from-purple-500 to-pink-400"
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
      color: "from-orange-500 to-red-400"
    }
  ];

  // Process data
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
    <div className="min-h-screen bg-gray-50">
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
             
           <a href="/">
            <img
  src={logo}
  alt="vora-global-logo"
  className="h-10 w-auto md:h-14 object-contain"
/>

           </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'properties', 'services', 'process', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === item 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to Expert
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
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
              {['home', 'properties', 'services', 'process', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 px-4 rounded-lg font-semibold text-center"
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

// Hero Section Component
const HeroSection = ({ onWhatsAppClick }) => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["0%", "-100%"],
              opacity: [0.1, 0.8, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Invest <span className="text-cyan-300">Smarter.</span><br />
          Live <span className="text-cyan-300">Better.</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover Dubai's most profitable property deals — verified, transparent & personally guided by Vora Global.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "AED 2.5B+", label: "Property Value" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-300 mb-1">{stat.number}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.button
            onClick={onWhatsAppClick}
            className="inline-flex items-center gap-3 bg-cyan-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHome className="text-xl" />
            <span>Explore Properties</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              animate={{ x: ["-150%", "200%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>

          <motion.button
            onClick={onWhatsAppClick}
            className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChartLine className="text-xl" />
            <span>Investment Guide</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your Trusted Partner in <span className="text-blue-600">Dubai Real Estate</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Vora Global helps investors and end-users find the right property at the right price. 
              From luxury villas and off-plan townhouses to commercial investments, we bring you 
              Dubai's best opportunities backed by deep market insights.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
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
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Vora Global?</h3>
              <ul className="space-y-3">
                {[
                  "Deep Dubai market expertise",
                  "Transparent pricing & process",
                  "Developer direct partnerships",
                  "After-sales support included",
                  "ROI-focused recommendations",
                  "Multilingual consultant team"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-400 rounded-full blur-xl opacity-20"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Property Highlights Section
const PropertyHighlights = ({ properties }) => {
  return (
    <section id="properties" className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="text-blue-600">Properties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover curated investment opportunities across Dubai's most promising locations
          </p>
        </motion.div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Property Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                  {property.yield}
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{property.type}</h3>
                <p className="text-gray-600 mb-3 flex items-center">
                  <MapPin size={16} className="mr-2 text-blue-500" />
                  {property.location}
                </p>
                <div className="text-2xl font-bold text-blue-600 mb-4">{property.price}</div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
            <FaSearch size={16} />
            View All Properties
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = ({ services }) => {
  const IconMap = {
    Home: FaHome,
    Chart: FaChartLine,
    Deal: FaHandshake,
    Support: FaShieldAlt
  };

  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services for <span className="text-blue-600">Investors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate services tailored to your investment goals and lifestyle needs
          </p>
        </motion.div>

        {/* Services Grid */}
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
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6`}>
                    <Icon />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"></div>
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
  const ProcessIcons = {
    Goal: () => <Target className="w-8 h-8" />,
    Selection: () => <FaSearch className="w-8 h-8" />,
    Document: () => <FileText className="w-8 h-8" />,
    Support: () => <FaShieldAlt className="w-8 h-8" />
  };

  return (
    <section id="process" className="relative py-20 bg-gradient-to-br from-blue-600 to-cyan-500 overflow-hidden">
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
            Our <span className="text-blue-200">Process</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Simple, transparent process designed for your convenience and success
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-blue-400/30"></div>

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
                {/* Step Number */}
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl font-bold border border-white/30">
                  {step.id}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center text-blue-600">
                  <Icon />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
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
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our satisfied investors and home buyers
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-lg md:text-xl text-gray-700 italic text-center leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="text-center">
                <div className="text-blue-600 font-semibold text-lg mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-500">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
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
    <section id="contact" className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your <span className="text-cyan-300">Dream Property</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your investment goals and find the perfect property match in Dubai
          </p>
          
          <motion.button
            onClick={onWhatsAppClick}
            className="inline-flex items-center gap-3 bg-cyan-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-xl" />
            <span>Talk to an Expert Today</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              animate={{ x: ["-150%", "200%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>

          <p className="text-blue-200 mt-6">
            Get personalized consultation within 24 hours
          </p>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
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
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['home', 'properties', 'services', 'process', 'testimonials'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-left"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 text-cyan-400" />
                <span>+971 50 123 4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 text-cyan-400" />
                <span>info@voraglobal.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3 text-cyan-400" />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Vora Global. All rights reserved. | Dubai Real Estate Experts</p>
        </div>
      </div>
    </footer>
  );
};

// Additional Icons
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