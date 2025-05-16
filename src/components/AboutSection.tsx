
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ParallaxEffect from './ParallaxEffect';
import { Megaphone, Globe, Palette, ClipboardList, Clock } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  // Animation for counting years of experience
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev < 5) return prev + 1;
          clearInterval(interval);
          return 5;
        });
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section id="about" className="relative py-20">
      {/* Background accent */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/50 z-0"
        aria-hidden="true"
      />

      <div className="section relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Left column - About text */}
          <ParallaxEffect speed={0.15} className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-xl"
            >
              <motion.div
                custom={0}
                variants={fadeInUpVariants}
                className="chip chip-primary mb-4"
              >
                About OutPerformo
              </motion.div>
              
              <motion.h2
                custom={1}
                variants={fadeInUpVariants}
                className="text-3xl md:text-4xl font-display font-bold mb-6"
              >
                Premier <span className="text-gradient">Digital Marketing</span> & <span className="text-gradient">Project Management</span> Agency
              </motion.h2>
              
              <motion.p
                custom={2}
                variants={fadeInUpVariants}
                className="text-foreground/80 mb-4"
              >
                OutPerformo is a premier digital marketing and project management agency dedicated to helping businesses 
                achieve their goals through innovative strategies and solutions.
              </motion.p>
              
              <motion.p
                custom={3}
                variants={fadeInUpVariants}
                className="text-foreground/80 mb-6"
              >
                With {count}+ years of experience in the field, we are always looking for new and innovative ways to bring our clients' visions to life.
              </motion.p>
              
              <motion.div
                custom={4}
                variants={fadeInUpVariants}
              >
                <a href="/about" className="btn-primary mr-4">
                  Learn More
                </a>
                <a href="#contact" className="btn-outline">
                  Get In Touch
                </a>
              </motion.div>
            </motion.div>
          </ParallaxEffect>

          {/* Right column - Services overview */}
          <div className="flex-1" ref={ref}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass p-6 rounded-xl project-card"
              >
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Megaphone className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Marketing Strategy</h3>
                <p className="text-foreground/70 text-sm">Get proven results - stop wasting marketing dollars with our tailored marketing solutions.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass p-6 rounded-xl project-card"
              >
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Globe className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Digital Marketing</h3>
                <p className="text-foreground/70 text-sm">Boost your online presence with SEO, social media, content marketing, and more.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass p-6 rounded-xl project-card"
              >
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Palette className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Branding</h3>
                <p className="text-foreground/70 text-sm">Create a unique and memorable brand identity that resonates with your audience.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass p-6 rounded-xl project-card"
              >
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <ClipboardList className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Project Management</h3>
                <p className="text-foreground/70 text-sm">Expert PMO setup and documentation for successful project execution.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass p-6 rounded-xl project-card"
                style={{ gridColumn: "1 / -1" }}
              >
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Executive Assistant</h3>
                <p className="text-foreground/70 text-sm">Optimize your business with dependable executive assistance for administrative tasks, customer service, and more.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
