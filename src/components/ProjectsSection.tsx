
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from './ParallaxEffect';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce SEO Campaign",
      description: "Comprehensive SEO strategy for a fashion retailer that increased organic traffic by 150% within 6 months.",
      tags: ["SEO", "E-commerce", "Content Strategy"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5760&q=80",
      link: "/projects#project-1"
    },
    {
      id: 2,
      title: "B2B Social Media Campaign",
      description: "Strategic social media campaign for a B2B software company that generated 200+ qualified leads.",
      tags: ["Social Media", "B2B Marketing", "Lead Generation"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      link: "/projects#project-2"
    },
    {
      id: 3,
      title: "Real Estate Website Redesign",
      description: "Complete website redesign for a real estate agency that improved user experience and increased lead conversion by 75%.",
      tags: ["Web Design", "UX/UI", "Lead Generation"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6052&q=80",
      link: "/projects#project-3"
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
            Case Studies
          </motion.div>
          
          <motion.h2
            custom={1}
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Recent <span className="text-gradient">Success Stories</span>
          </motion.h2>
          
          <motion.p
            custom={2}
            variants={fadeInUpVariants}
            className="text-foreground/80"
          >
            Take a look at some of our most successful digital marketing campaigns
            and how we've helped businesses achieve their goals.
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
                <Link 
                  to={project.link}
                  className="text-primary font-medium flex items-center text-sm hover:underline underline-offset"
                >
                  View Details <ArrowRight size={16} className="ml-1" />
                </Link>
                <div className="flex gap-3">
                  <a 
                    href={project.link}
                    className="text-foreground/70 hover:text-foreground transition-colors duration-300"
                    aria-label="View details"
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
          View All Case Studies <ArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
