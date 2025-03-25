
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from './ParallaxEffect';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Growify",
      description: "A SaaS platform for growth tracking and analytics with comprehensive dashboards and real-time data visualization.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://v0-growify-ladeyvrid11-f3xit0.vercel.app/projects",
      github: "#"
    },
    {
      id: 2,
      title: "Abinash Sculptures",
      description: "Showcase website for a sculpture artist featuring an elegant gallery, artist information, and contact details.",
      tags: ["HTML", "CSS", "JavaScript", "Netlify"],
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://abinashsculptures.netlify.app/",
      github: "#"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "Modern portfolio website showcasing professional work, skills, and experience with interactive elements.",
      tags: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2712&q=80",
      link: "https://abinash-karunanidhi.vercel.app/work",
      github: "#"
    }
  ];

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

  const imageVariants = {
    idle: { scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    hover: { scale: 1.05, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const overlayVariants = {
    idle: { opacity: 0.3, transition: { duration: 0.3 } },
    hover: { opacity: 0, transition: { duration: 0.3 } }
  };

  const contentVariants = {
    idle: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { opacity: 1, y: -10, transition: { duration: 0.3 } }
  };

  return (
    <section id="projects" className="section">
      <ParallaxEffect speed={0.1}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            custom={0}
            variants={fadeInUpVariants}
            className="chip chip-primary mb-4 mx-auto"
          >
            My Work
          </motion.div>
          
          <motion.h2
            custom={1}
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          
          <motion.p
            custom={2}
            variants={fadeInUpVariants}
            className="text-foreground/80"
          >
            A selection of my recent work, showcasing my skills in web development,
            design, and problem-solving.
          </motion.p>
        </motion.div>
      </ParallaxEffect>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group project-card rounded-xl overflow-hidden border border-border/50"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-48 overflow-hidden">
              <motion.div
                variants={imageVariants}
                initial="idle"
                animate={hoveredProject === project.id ? "hover" : "idle"}
                className="w-full h-full"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                variants={overlayVariants}
                initial="idle"
                animate={hoveredProject === project.id ? "hover" : "idle"}
                className="absolute inset-0 bg-foreground opacity-30"
              ></motion.div>
            </div>

            <motion.div
              variants={contentVariants}
              initial="idle"
              animate={hoveredProject === project.id ? "hover" : "idle"}
              className="p-6"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span 
                    key={i} 
                    className="chip chip-secondary text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-medium flex items-center text-sm hover:underline underline-offset"
                >
                  Live Demo <ArrowRight size={16} className="ml-1" />
                </a>
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-foreground transition-colors duration-300"
                    aria-label="View code on GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-foreground transition-colors duration-300"
                    aria-label="Visit live site"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          to="/projects"
          className="btn-outline inline-flex items-center"
        >
          View All Projects <ArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
