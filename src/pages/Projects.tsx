import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from '@/components/ParallaxEffect';
import { ExternalLink, Github, ArrowRight, Image, Code, Layout } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const [view, setView] = useState<'grid' | 'carousel'>('grid');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
    },
    {
      id: 4,
      title: "Social Network App",
      description: "A feature-rich social platform with real-time messaging, posts, and user connections.",
      longDescription: "A modern social network built with React Native and Firebase, featuring real-time chat, media sharing, and an engaging user interface with smooth animations.",
      tags: ["React Native", "Firebase", "Redux", "Socket.io", "TypeScript"],
      image: "https://images.unsplash.com/photo-1471989945509-b1e987d9ea70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      link: "#",
      github: "#",
      features: [
        "Real-time messaging",
        "Media sharing",
        "User profiles and connections",
        "Activity feed",
        "Push notifications"
      ]
    },
    {
      id: 5,
      title: "Weather Application",
      description: "An elegant weather app with accurate forecasts, animations, and location-based services.",
      longDescription: "This React application uses modern weather APIs to provide precise forecasts, beautiful weather animations, and personalized alerts based on user location.",
      tags: ["React", "OpenWeather API", "GeoLocation", "Chart.js", "PWA"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
      link: "#",
      github: "#",
      features: [
        "7-day weather forecast",
        "Location-based weather",
        "Weather alerts and notifications",
        "Interactive weather maps",
        "Offline functionality"
      ]
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "A comprehensive fitness application for tracking workouts, nutrition, and health metrics.",
      longDescription: "This full-stack application helps users monitor their fitness journey with workout tracking, nutrition logging, and progress visualization using interactive charts.",
      tags: ["React", "Node.js", "MongoDB", "Chart.js", "JWT Auth"],
      image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "#",
      github: "#",
      features: [
        "Workout planning and tracking",
        "Nutrition diary",
        "Progress visualization",
        "Goal setting",
        "Health metrics dashboard"
      ]
    }
  ];

  // Effects for projects
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

  const cardVariants = {
    initial: { scale: 1, y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
    hover: {
      scale: 1.03,
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

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
              <p className="text-foreground/80 text-lg mb-8">
                A curated selection of my projects showcasing my expertise in
                web development, design, and problem-solving.
              </p>
              
              {/* View toggle buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button 
                  onClick={() => setView('grid')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${view === 'grid' ? 'bg-primary text-white' : 'bg-secondary text-foreground'}`}
                >
                  <Layout className="w-4 h-4" />
                  Grid View
                </button>
                <button 
                  onClick={() => setView('carousel')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${view === 'carousel' ? 'bg-primary text-white' : 'bg-secondary text-foreground'}`}
                >
                  <ArrowRight className="w-4 h-4" />
                  Carousel View
                </button>
              </div>
            </motion.div>
          </ParallaxEffect>

          {/* Grid View */}
          {view === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUpVariants}
                  whileHover="hover"
                  className="relative overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      animate={{
                        scale: hoveredProject === project.id ? 1.1 : 1,
                        transition: { duration: 0.4 }
                      }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/90 p-2 rounded-full text-foreground hover:bg-primary hover:text-white transition-all duration-300"
                        aria-label="View code on GitHub"
                      >
                        <Github size={16} />
                      </a>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/90 p-2 rounded-full text-foreground hover:bg-primary hover:text-white transition-all duration-300"
                        aria-label="Visit live site"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="chip chip-secondary text-xs">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <span className="chip chip-secondary text-xs cursor-help">
                              +{project.tags.length - 3}
                            </span>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-auto">
                            <div className="flex flex-wrap gap-1">
                              {project.tags.slice(3).map((tag, i) => (
                                <span key={i} className="chip chip-secondary text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="mt-6">
                      <a 
                        href={`#project-${project.id}`} 
                        className="btn-primary inline-flex items-center text-sm"
                      >
                        View Details <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Carousel View */}
          {view === 'carousel' && (
            <div className="py-8">
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {projects.map((project, index) => (
                    <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                      >
                        <Card className="h-full border border-border/50 overflow-hidden">
                          <div className="h-48 overflow-hidden relative">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-4 right-4 flex space-x-2">
                                <a 
                                  href={project.github} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="bg-white/90 p-2 rounded-full text-foreground hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                  <Github size={16} />
                                </a>
                                <a 
                                  href={project.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="bg-white/90 p-2 rounded-full text-foreground hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                  <ExternalLink size={16} />
                                </a>
                              </div>
                            </div>
                          </div>
                          <CardContent className="p-5">
                            <h3 className="font-bold mb-2">{project.title}</h3>
                            <p className="text-sm text-foreground/70 line-clamp-2 mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.tags.slice(0, 2).map((tag, i) => (
                                <span key={i} className="chip chip-secondary text-xs">
                                  {tag}
                                </span>
                              ))}
                              {project.tags.length > 2 && (
                                <span className="chip chip-secondary text-xs">
                                  +{project.tags.length - 2}
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8">
                  <CarouselPrevious className="relative static translate-y-0 -left-0 mr-4" />
                  <CarouselNext className="relative static translate-y-0 -right-0" />
                </div>
              </Carousel>
            </div>
          )}
          
          {/* Detailed Project Information */}
          <div className="mt-20 space-y-24">
            {projects.map((project, index) => (
              <div 
                id={`project-${project.id}`}
                key={`detail-${project.id}`}
                className="scroll-mt-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <ParallaxEffect speed={0.05} className="order-2 lg:order-none">
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
                  </ParallaxEffect>
                  <ParallaxEffect speed={0.1} className="order-1 lg:order-none">
                    <div className="relative overflow-hidden rounded-xl border border-border/50 shadow-lg transition-transform duration-300 hover:shadow-xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                  </ParallaxEffect>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Projects;
