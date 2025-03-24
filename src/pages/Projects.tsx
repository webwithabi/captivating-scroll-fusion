
import React from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from '@/components/ParallaxEffect';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with a seamless checkout experience and real-time inventory management.",
      longDescription: "Built with React and Node.js, this platform features real-time inventory tracking, integrated payment processing with Stripe, and a responsive design that works flawlessly across all devices.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "WebSocket"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
      link: "#",
      github: "#",
      features: [
        "Real-time inventory management",
        "Secure payment processing",
        "User authentication and authorization",
        "Order tracking and management",
        "Admin dashboard with analytics"
      ]
    },
    {
      id: 2,
      title: "Travel Companion App",
      description: "A travel planner app that helps users discover and organize trips with personalized recommendations.",
      longDescription: "This Next.js application integrates with various travel APIs to provide real-time flight data, hotel bookings, and local attractions. It features an intuitive interface for trip planning and organization.",
      tags: ["Next.js", "TailwindCSS", "Google Maps API", "Firebase", "TypeScript"],
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "#",
      github: "#",
      features: [
        "Interactive trip planning",
        "Real-time weather updates",
        "Local attraction recommendations",
        "Offline access to itineraries",
        "Social sharing capabilities"
      ]
    },
    {
      id: 3,
      title: "Dashboard UI",
      description: "A comprehensive admin dashboard with advanced analytics and real-time data visualization.",
      longDescription: "A feature-rich dashboard built with React and D3.js, providing real-time analytics, customizable charts, and comprehensive reporting tools for business intelligence.",
      tags: ["React", "D3.js", "Firebase", "Framer Motion", "TypeScript", "Redux"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "#",
      github: "#",
      features: [
        "Real-time data visualization",
        "Customizable dashboard layouts",
        "Advanced filtering and sorting",
        "Export functionality",
        "Role-based access control"
      ]
    }
  ];

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
        <section className="section">
          <ParallaxEffect speed={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <div className="chip chip-primary mb-4 mx-auto">Portfolio</div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Featured <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-foreground/80 text-lg">
                A curated selection of my projects showcasing my expertise in
                web development, design, and problem-solving.
              </p>
            </motion.div>
          </ParallaxEffect>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 lg:order-none">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="chip chip-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-foreground/70">{project.longDescription}</p>
                    <div className="space-y-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-foreground/70">
                          <span className="w-2 h-2 bg-primary/60 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-4">
                      <a href={project.link} className="btn-primary" target="_blank" rel="noopener noreferrer">
                        View Live <ExternalLink size={16} className="ml-2" />
                      </a>
                      <a href={project.github} className="btn-outline" target="_blank" rel="noopener noreferrer">
                        Source Code <Github size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-none">
                  <div className="relative overflow-hidden rounded-xl border border-border/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Projects;
