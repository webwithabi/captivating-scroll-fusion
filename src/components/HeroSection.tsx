
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from './ParallaxEffect';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax hover effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text reveal animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background elements - animated shapes */}
      <div 
        className="absolute inset-0 opacity-20 overflow-hidden"
        aria-hidden="true"
      >
        <div 
          className="absolute -right-40 top-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`
          }}
        />
        <div 
          className="absolute -left-20 top-80 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
          }}
        />
        <div
          className="absolute left-1/3 bottom-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative section flex flex-col justify-center min-h-screen pt-20">
        <ParallaxEffect speed={0.2} className="mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="chip chip-primary animate-fade-in mb-4"
          >
            Web Developer & UI/UX Designer
          </motion.div>
        </ParallaxEffect>

        <ParallaxEffect speed={0.1}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6"
            >
              Crafting digital <span className="text-gradient">experiences</span> that leave an impression
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8"
            >
              I design and build modern web applications with a focus on interactive experiences, 
              intuitive interfaces, and pixel-perfect execution.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </ParallaxEffect>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
          <ArrowDown className="animate-float" size={20} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2"
        >
          <div className="flex flex-col gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-border hover:border-primary rounded-full transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-border hover:border-primary rounded-full transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-2 border border-border hover:border-primary rounded-full transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <div className="w-px h-20 bg-border mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
