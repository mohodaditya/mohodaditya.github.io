import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Heart, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building modern web applications with React, Node.js, and the MERN stack with focus on clean, maintainable code."
    },
    {
      icon: Palette,
      title: "Design-to-Code Mindset",
      description: "Translating beautiful designs into pixel-perfect, responsive user interfaces with attention to detail."
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Rapidly adapting to new technologies and frameworks, staying current with modern web development trends."
    },
    {
      icon: Heart,
      title: "Consistent Builder",
      description: "Self-motivated developer who loves creating real-world projects and contributing to open source."
    }
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      value: "Final Year B.Tech CSE"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India"
    },
    {
      icon: Code,
      title: "Focus",
      value: "React & System Design"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          A passionate Computer Science student from India, focused on creating user-friendly interfaces, learning full-stack development, and exploring AI to build impactful digital solutions.
          </p>
        </motion.div>

        {/* Quick highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 backdrop-blur-md bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <item.icon className="text-white/80" size={24} />
              </motion.div>
              <h4 className="text-white/60 text-sm font-medium mb-1">{item.title}</h4>
              <p className="text-white font-semibold">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl sm:text-3xl font-bold mb-6 text-white"
              >
                My Journey
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-white/70 leading-relaxed mb-6"
              >
                Currently in my final year of B.Tech in Computer Science & Engineering, I've built a strong foundation in programming, data structures, operating systems, and system design. Over time, I've developed a deep interest in full-stack development—especially using the MERN stack—with a focus on crafting user-first interfaces and responsive designs.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white/70 leading-relaxed mb-6"
              >
                I'm fluent in Hindi and English, and I enjoy building real-world applications that solve practical problems. My curiosity drives me to explore AI tools, automate tasks, and optimize workflows. I've worked with technologies like React, Tailwind CSS, Node.js, and MySQL, and I actively use GitHub for version control and collaboration.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-white/70 leading-relaxed"
              >
               When I'm not writing code, I'm likely prototyping in Figma, experimenting with productivity tools, or diving into the latest trends in web development and AI.
               
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Smaller profile image placeholder */}
              <div className="w-65 h-65 mx-auto backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/profile-pic.jpeg"
                  alt="Profile"
                  className="object-cover w-full h-full rounded-2xl shadow-lg border border-white/10"
                />
              </div>
              
              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-md"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-sm"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 backdrop-blur-md bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300"
              >
                <feature.icon className="text-white/80" size={24} />
              </motion.div>
              
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                {feature.title}
              </h4>
              
              <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;