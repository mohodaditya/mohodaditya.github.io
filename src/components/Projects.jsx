import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight, ShoppingCart, Gamepad2, Music } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Tech Store App",
      description: "A sleek e-commerce UI for tech products featuring modern design, product cards with filters, and mobile-friendly responsive layout built with React and Vite.",
      image: "/project-assets/Tech-Store-App.png",
      tags: ["React", "Vite", "CSS", "JavaScript", "Responsive Design"],
      demoUrl: "https://mohodaditya.github.io/Tech-Store_App/",
      codeUrl: "https://github.com/mohodaditya/Tech-Store_App",
      featured: true,
      icon: ShoppingCart
    },
    {
      title: "Simon Game",
      description: "A web-based memory game built with pure JavaScript, featuring logic-focused gameplay, interactive UI, and progressive difficulty levels without sound effects.",
      image: "/project-assets/simon.png",
      tags: ["HTML", "CSS", "JavaScript", "Game Logic", "DOM Manipulation"],
      demoUrl: "https://mohodaditya.github.io/Simon-Game-/",
      codeUrl: "https://github.com/mohodaditya/Simon-Game-",
      featured: true,
      icon: Gamepad2
    },
    {
      title: "Spotify Clone",
      description: "A pixel-perfect static frontend replica of Spotify's interface, showcasing advanced CSS skills, responsive design, and attention to UI details.",
      image: "/project-assets/spotify.png",
      tags: ["HTML", "CSS", "Responsive Design", "UI Clone"],
      demoUrl: "https://mohodaditya.github.io/Spotify-Clone-/",
      codeUrl: "https://github.com/mohodaditya/Spotify-Clone-",
      featured: false,
      icon: Music
    }
  ];

  const handleLinkClick = (url) => {
    if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/mohodaditya', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            A collection of my recent work showcasing full-stack development skills, 
            from e-commerce applications to interactive games and UI clones.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
              >
                {/* Project image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Project icon overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 backdrop-blur-md bg-white/20 border border-white/30 rounded-xl flex items-center justify-center">
                      <project.icon className="text-white" size={20} />
                    </div>
                  </div>
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleLinkClick(project.demoUrl)}
                      className="backdrop-blur-md bg-white/20 hover:bg-white/30 active:bg-white/40 border border-white/30 text-white p-4 rounded-full transition-all duration-300 min-h-[48px] min-w-[48px]"
                    >
                      <ExternalLink size={20} />
                    </button>
                    <button
                      onClick={() => handleLinkClick(project.codeUrl)}
                      className="backdrop-blur-md bg-white/20 hover:bg-white/30 active:bg-white/40 border border-white/30 text-white p-4 rounded-full transition-all duration-300 min-h-[48px] min-w-[48px]"
                    >
                      <Github size={20} />
                    </button>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium backdrop-blur-md bg-white/10 border border-white/20 text-white/80 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn more link */}
                  <button
                    onClick={() => handleLinkClick(project.demoUrl)}
                    className="flex items-center text-white/60 hover:text-white active:text-blue-200 transition-colors duration-300 min-h-[44px]"
                  >
                    <span className="text-sm font-medium">View Project</span>
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-1 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group backdrop-blur-xl bg-white/5 hover:bg-white/8 active:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 backdrop-blur-md bg-white/10 rounded-lg flex items-center justify-center">
                      <project.icon className="text-white/80" size={18} />
                    </div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                      {project.title}
                    </h4>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLinkClick(project.demoUrl)}
                      className="text-white/60 hover:text-white active:text-blue-200 transition-colors duration-300 p-2 min-h-[44px] min-w-[44px]"
                    >
                      <ExternalLink size={18} />
                    </button>
                    <button
                      onClick={() => handleLinkClick(project.codeUrl)}
                      className="text-white/60 hover:text-white active:text-blue-200 transition-colors duration-300 p-2 min-h-[44px] min-w-[44px]"
                    >
                      <Github size={18} />
                    </button>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs backdrop-blur-md bg-white/10 border border-white/20 text-white/70 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-4">Want to see more?</h4>
            <p className="text-white/70 mb-6">
              Check out my GitHub for more projects and contributions to open source.
            </p>
            <button
              onClick={handleGitHubClick}
              className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 hover:border-white/40 text-white px-6 py-4 rounded-full font-medium transition-all duration-300 min-h-[48px]"
            >
              <Github size={18} />
              Visit GitHub
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;