
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ParallaxEffect from './ParallaxEffect';
import { Code, Layout, Database, Figma, Server, Globe } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass p-6 rounded-xl project-card"
    >
      <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </motion.div>
  );
};

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

  const skills = [
    {
      icon: <Code className="text-primary" size={24} />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS.",
      delay: 0.1
    },
    {
      icon: <Layout className="text-primary" size={24} />,
      title: "UI/UX Design",
      description: "Creating intuitive user experiences and visually stunning interfaces with attention to detail.",
      delay: 0.2
    },
    {
      icon: <Database className="text-primary" size={24} />,
      title: "Backend Integration",
      description: "Connecting frontend applications to powerful backend services and databases.",
      delay: 0.3
    },
    {
      icon: <Figma className="text-primary" size={24} />,
      title: "Design Systems",
      description: "Developing comprehensive design systems for consistent and scalable applications.",
      delay: 0.4
    },
    {
      icon: <Server className="text-primary" size={24} />,
      title: "API Development",
      description: "Building robust and efficient APIs to power web and mobile applications.",
      delay: 0.5
    },
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Web Performance",
      description: "Optimizing websites for speed, accessibility, and search engine visibility.",
      delay: 0.6
    }
  ];

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
                About Me
              </motion.div>
              
              <motion.h2
                custom={1}
                variants={fadeInUpVariants}
                className="text-3xl md:text-4xl font-display font-bold mb-6"
              >
                Passionate about creating <span className="text-gradient">exceptional</span> digital experiences
              </motion.h2>
              
              <motion.p
                custom={2}
                variants={fadeInUpVariants}
                className="text-foreground/80 mb-4"
              >
                I'm a web developer and designer with a passion for creating beautiful, functional, and user-centered digital experiences. With {count}+ years of experience in the field, I am always looking for new and innovative ways to bring my clients' visions to life.
              </motion.p>
              
              <motion.p
                custom={3}
                variants={fadeInUpVariants}
                className="text-foreground/80 mb-6"
              >
                I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
              </motion.p>
              
              <motion.div
                custom={4}
                variants={fadeInUpVariants}
              >
                <a href="#contact" className="btn-primary">
                  Get In Touch
                </a>
              </motion.div>
            </motion.div>
          </ParallaxEffect>

          {/* Right column - Experience counter */}
          <div className="flex-1" ref={ref}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillCard 
                  key={index}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                  delay={skill.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
