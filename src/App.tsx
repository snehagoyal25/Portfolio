import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Code2, Briefcase, Award, GraduationCap, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      liveLink: "https://ecommerce-demo.snehagoyal.dev",
      github: "https://github.com/snehagoyal/ecommerce-platform"
    },
    {
      title: "AI Chat Application",
      description: "Developed a real-time chat application with AI integration",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      liveLink: "https://chat.snehagoyal.dev",
      github: "https://github.com/snehagoyal/ai-chat-app"
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed responsive portfolio websites for clients",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      liveLink: "https://portfolio.snehagoyal.dev",
      github: "https://github.com/snehagoyal/portfolio"
    }
  ];

  const skills = [
    "React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker",
    "Python", "GraphQL", "Next.js", "PostgreSQL", "Redis", "Kubernetes"
  ];

  const certificates = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2024",
      link: "https://www.credly.com/badges/aws-certified-developer"
    },
    {
      name: "Full Stack Development",
      issuer: "Meta",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/meta-fswd"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford Online",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/stanford-ml"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900' : 'bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100'} text-slate-800 dark:text-white transition-colors duration-300`}>
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.1
        }}
      >
        <div className="w-full h-full rounded-full border-[3px] border-violet-600 dark:border-violet-400" />
        <div className="absolute inset-0 rounded-full border-[3px] border-pink-500 dark:border-pink-400 animate-pulse" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed w-full p-6 flex justify-between items-center z-40 backdrop-blur-sm bg-white/20 dark:bg-black/20 border-b border-white/10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent"
        >
          Sneha Goyal
        </motion.h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-white/10 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/40 transition-colors"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Full Stack Developer
          </h1>
          <p className="text-xl mb-8 max-w-2xl font-medium">
            Crafting digital experiences with code and creativity. Specialized in building scalable web applications
            that make a difference.
          </p>
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform bg-white/10 dark:bg-black/20 p-3 rounded-full hover:bg-white/30 dark:hover:bg-black/40"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform bg-white/10 dark:bg-black/20 p-3 rounded-full hover:bg-white/30 dark:hover:bg-black/40"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@snehagoyal.dev" 
              className="hover:scale-110 transition-transform bg-white/10 dark:bg-black/20 p-3 rounded-full hover:bg-white/30 dark:hover:bg-black/40"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
            <Briefcase className="w-8 h-8" /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/20 dark:bg-black/20 backdrop-blur-md group border border-white/10"
              >
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white flex items-center gap-1 hover:text-pink-300 transition-colors bg-black/40 px-3 py-2 rounded-full"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white flex items-center gap-1 hover:text-pink-300 transition-colors bg-black/40 px-3 py-2 rounded-full"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white/10 dark:bg-black/20 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
            <Code2 className="w-8 h-8" /> Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/20 dark:bg-black/20 backdrop-blur-md hover:scale-105 border border-white/10 font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
            <Award className="w-8 h-8" /> Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/20 dark:bg-black/20 backdrop-blur-md group border border-white/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <GraduationCap className="w-8 h-8" />
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 dark:text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 bg-white/20 dark:bg-black/20 px-3 py-2 rounded-full hover:bg-white/30 dark:hover:bg-black/40"
                  >
                    <ExternalLink size={16} /> View Certificate
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-slate-700 dark:text-slate-300">{cert.issuer}</p>
                <p className="text-slate-600 dark:text-slate-400 mt-1">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;