
import React from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from '@/components/ParallaxEffect';
import { ArrowRight, Code, Briefcase, Users, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CounterAnimation from '@/components/CounterAnimation';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      
      <main className="pt-20">
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/50 z-0" />
          
          <div className="section relative z-10">
            <ParallaxEffect speed={0.15} className="max-w-3xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="chip chip-primary mb-4 mx-auto">About Me</div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Creating <span className="text-gradient">Digital Experiences</span> That Matter
                </h1>
                <p className="text-foreground/80 text-lg md:text-xl">
                  With over 5 years of experience in web development, I specialize in building
                  modern, responsive, and user-friendly applications that deliver real value.
                </p>
              </motion.div>
            </ParallaxEffect>

            {/* About Me Brief */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="glass p-8 rounded-xl mb-16"
            >
              <h2 className="text-2xl font-bold mb-4">A Brief Introduction</h2>
              <p className="text-foreground/80 mb-6">
                I'm a passionate web developer with a keen eye for design and a strong focus on creating exceptional user experiences. My journey in web development began over 5 years ago, and since then, I've been constantly evolving my skills to stay ahead of industry trends and technologies.
              </p>
              <p className="text-foreground/80 mb-6">
                I believe in the power of well-crafted digital solutions to transform businesses and enhance user engagement. Every project I undertake is an opportunity to blend creativity with technical expertise to deliver results that exceed expectations.
              </p>
              <p className="text-foreground/80">
                Beyond coding, I'm deeply interested in user psychology, design trends, and emerging technologies. This holistic approach allows me to create not just functional websites, but comprehensive digital experiences that leave a lasting impression.
              </p>
            </motion.div>

            {/* Why Choose Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-8 rounded-xl mb-16"
            >
              <h2 className="text-2xl font-bold mb-4">Why Choose Me</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Code className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Technical Expertise</h3>
                    <p className="text-foreground/80">I bring deep technical knowledge in modern web technologies including React, Next.js, and advanced CSS frameworks, ensuring your project is built on a solid foundation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality-Focused Approach</h3>
                    <p className="text-foreground/80">I'm committed to delivering high-quality code that's maintainable, performant, and secure. I don't just build for today, but for the future growth of your project.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Collaborative Process</h3>
                    <p className="text-foreground/80">I value open communication and work closely with clients throughout the development process, ensuring your vision is translated accurately into the final product.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What I Can Do For You */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-8 rounded-xl mb-16"
            >
              <h2 className="text-2xl font-bold mb-4">What I Can Do For You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-border/30 rounded-lg p-6 hover:border-primary/30 transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-3">Website Development</h3>
                  <p className="text-foreground/80 mb-4">From personal portfolios to complex corporate websites, I create responsive and engaging web experiences tailored to your specific needs.</p>
                  <a href="/contact" className="flex items-center text-primary hover:underline">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
                
                <div className="border border-border/30 rounded-lg p-6 hover:border-primary/30 transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-3">Web Application Development</h3>
                  <p className="text-foreground/80 mb-4">I build feature-rich web applications with intuitive interfaces and robust functionality to help streamline your business processes.</p>
                  <a href="/contact" className="flex items-center text-primary hover:underline">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
                
                <div className="border border-border/30 rounded-lg p-6 hover:border-primary/30 transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
                  <p className="text-foreground/80 mb-4">I create visually stunning and user-friendly interfaces that enhance user engagement and satisfaction.</p>
                  <a href="/contact" className="flex items-center text-primary hover:underline">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
                
                <div className="border border-border/30 rounded-lg p-6 hover:border-primary/30 transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-3">Performance Optimization</h3>
                  <p className="text-foreground/80 mb-4">I optimize existing websites to improve loading speeds, user experience, and search engine visibility.</p>
                  <a href="/contact" className="flex items-center text-primary hover:underline">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Stats Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              <div className="glass p-6 rounded-xl text-center">
                <Briefcase className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-3xl font-bold mb-2">
                  <CounterAnimation end={50} duration={2} />+
                </h3>
                <p className="text-foreground/70">Projects Completed</p>
              </div>
              
              <div className="glass p-6 rounded-xl text-center">
                <Users className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-3xl font-bold mb-2">
                  <CounterAnimation end={30} duration={2} />+
                </h3>
                <p className="text-foreground/70">Satisfied Clients</p>
              </div>
              
              <div className="glass p-6 rounded-xl text-center">
                <Award className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-3xl font-bold mb-2">
                  <CounterAnimation end={5} duration={2} />+
                </h3>
                <p className="text-foreground/70">Years Experience</p>
              </div>
              
              <div className="glass p-6 rounded-xl text-center">
                <Code className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-3xl font-bold mb-2">
                  <CounterAnimation end={15} duration={2} />+
                </h3>
                <p className="text-foreground/70">Technologies</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default About;
