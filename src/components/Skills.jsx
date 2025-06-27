import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MagicSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { 
          name: "React.js", 
          logo: (
            <img src="/Skills/react.png" alt="React.js" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "HTML5", 
          logo: (
            <img src="/Skills/html.png" alt="HTML" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "CSS3", 
          logo: (
            <img src="/Skills/css.png" alt="CSS" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "Tailwind CSS", 
          logo: (
            <img src="/Skills/tailwind.png" alt="Tailwind" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "Framer Motion", 
          logo: (
            <img src="/Skills/framer motion.svg" alt="Framer Motion" className="w-6 h-6 object-contain" />
          )
        }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { 
          name: "Node.js", 
          logo: (
            <img src="/Skills/node.png" alt="Node.js" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "Express.js", 
          logo: (
            <img src="/Skills/express.png" alt="Express.js" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "MySQL", 
          logo: (
            <img src="/Skills/sql.png" alt="MYSQL" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "NPM", 
          logo: (
            <img src="/Skills/npm.png" alt="NPM" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "Hoppscotch", 
          logo: (
            <img src="/Skills/h.png" alt="Hoppscotch" className="w-6 h-6 object-contain" />
          )
        }
      ]
    },
    {
      title: "Programming & Tools",
      skills: [
        { 
          name: "JavaScript", 
          logo: (
            <img src="/Skills/javascript.png" alt="JavaScript" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "Java", 
          logo: (
            <img src="/Skills/java.png" alt="Java" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "C Programming", 
          logo: (
            <img src="/Skills/c.png" alt="C Programming" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "Git", 
          logo: (
            <img src="/Skills/git.png" alt="Git" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "Vite", 
          logo: (
            <img src="/Skills/vite.svg" alt="Vite" className="w-6 h-6 object-contain" />
          )
        }
      ]
    },
    {
      title: "Design & Productivity",
      skills: [
        { 
          name: "Figma", 
          logo: (
            <img src="/Skills/figma.png" alt="Figma" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "Canva", 
          logo: (
            <img src="/Skills/canva.svg" alt="Canva" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "Notion", 
          logo: (
            <img src="/Skills/notion.png" alt="Notion" className="w-6 h-6 object-contain" />
          )
        },
        
        { 
          name: "Github", 
          logo: (
            <img src="/Skills/github.png" alt="Github" className="w-6 h-6 object-contain" />
          )
        },
        { 
          name: "Linux Ubuntu", 
          logo: (
            <img src="/Skills/ubuntu.png" alt="Linux Ubuntu" className="w-6 h-6 object-contain" />
          )
        },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Skills & Technologies
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          A solid full-stack skillset covering frontend, backend, databases, and modern development tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500"
              data-cursor="view"
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.2 }}
                className="text-xl font-bold text-white mb-8 text-center"
              >
                {category.title}
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-4"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group cursor-pointer"
                    data-cursor="pointer"
                    data-cursor-text={skill.name}
                  >
                    <div className="flex items-center gap-4 p-4 backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl transition-all duration-300">
                      <motion.div
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20"
                      >
                        {skill.logo}
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="text-white/90 font-medium text-sm group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-xl font-semibold text-white mb-4"
            >
              Continuous Learning Journey
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-white/70 leading-relaxed"
            >
              As a final year Computer Science student, I'm constantly expanding my skillset. 
              Currently focusing on advanced React patterns, learning MERN stack, and exploring 
              AI integration in web development. My goal is to build scalable, user-centric applications 
              that solve real-world problems.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MagicSkills;