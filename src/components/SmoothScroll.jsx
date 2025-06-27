import React, { useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const SmoothScroll = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      const scrollSpeed = 0.8;
      
      window.scrollBy({
        top: delta * scrollSpeed,
        behavior: 'auto'
      });
    };

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optional: Add custom wheel handling for even smoother scrolling
    // window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      // window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />
      
      {/* Magic scroll particles */}
      <motion.div
        className="fixed top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 z-40"
        style={{
          y: useTransform(smoothProgress, [0, 1], [0, window.innerHeight - 100]),
          scale: useTransform(smoothProgress, [0, 0.5, 1], [0.5, 1.2, 0.5])
        }}
      />
      
      {children}
    </>
  );
};

export default SmoothScroll;