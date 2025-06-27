import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X, Home, User, Code, Wrench, Mail } from 'lucide-react';

const MagicNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const height = useMotionValue(0);
  const springHeight = useSpring(height, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const updateHeight = () => {
      if (containerRef.current) {
        height.set(containerRef.current.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeight);
    };
  }, [height]);

  const navItems = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Projects', href: '#projects', icon: Code },
    { label: 'Skills', href: '#skills', icon: Wrench },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    scrollToSection('#home');
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-xl bg-black/20 border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="font-bold text-xl tracking-tight min-h-[44px] px-2"
            >
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Aditya Mohod
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-white/80 hover:text-white active:text-blue-200 transition-colors duration-200 font-medium tracking-wide px-4 py-2 min-h-[44px] flex items-center gap-2"
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-3 min-h-[48px] min-w-[48px] flex items-center justify-center"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[55]">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute top-0 left-0 w-80 h-screen backdrop-blur-xl bg-black/90 border-r border-white/10">
            <div className="pt-20 px-8">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full flex items-center gap-4 text-white/90 hover:text-white active:text-blue-200 transition-colors duration-300 py-4 px-4 rounded-lg hover:bg-white/10 active:bg-white/20 min-h-[56px]"
                >
                  <div className="w-10 h-10 backdrop-blur-md bg-white/10 rounded-lg flex items-center justify-center">
                    <item.icon size={18} />
                  </div>
                  <span className="text-lg font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MagicNavigation;