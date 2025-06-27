import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import MagicSkills from './components/Skills';
import Contact from './components/Contact';
import MagicNavigation from './components/MagicNavigation';
import Background from './components/Background';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <Background />
      <MagicNavigation />
      
      <SmoothScroll>
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Hero />
            <About />
            <Projects />
            <MagicSkills />
            <Contact />
          </motion.main>
        </AnimatePresence>
      </SmoothScroll>
    </div>
  );
}

export default App;