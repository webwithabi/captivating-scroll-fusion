
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from '@/components/ParallaxEffect';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Growify",
      description: "A SaaS platform for growth tracking and analytics with comprehensive dashboards and real-time data visualization.",
      longDescription: "Growify is a powerful SaaS platform designed to help businesses track growth metrics, visualize performance data, and make data-driven decisions. Features an intuitive dashboard with real-time analytics and customizable reporting tools.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vercel"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://v0-growify-ladeyvrid11-f3xit0.vercel.app/projects",
      github: "#",
      features: [
        "Interactive analytics dashboard",
        "Real-time data visualization",
        "Customizable reporting tools",
        "User management system",
        "Modern, responsive UI"
      ]
    },
    {
      id: 2,
      title: "Abinash Sculptures",
      description: "Showcase website for a sculpture artist featuring an elegant gallery, artist information, and contact details.",
      longDescription: "A portfolio website for a sculpture artist with a beautiful gallery display, artist biography, exhibition history, and visitor inquiry system. The design focuses on showcasing the artworks in a clean, minimalist environment.",
      tags: ["HTML", "CSS", "JavaScript", "Netlify", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://abinashsculptures.netlify.app/",
      github: "#",
      features: [
        "Image gallery with lightbox",
        "Artist biography section",
        "Exhibition history",
        "Contact form for inquiries",
        "Mobile-responsive design"
      ]
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "Modern portfolio website showcasing professional work, skills, and experience with interactive elements.",
      longDescription: "A personal portfolio website with a modern design, smooth animations, and interactive elements. Features project showcases, skills section, professional experience, and contact information with a minimalist aesthetic.",
      tags: ["React", "Vercel", "Framer Motion", "Tailwind CSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2712&q=80",
      link: "https://abinash-karunanidhi.vercel.app/work",
      github: "#",
      features: [
        "Interactive project showcase",
        "Skills and expertise section",
        "Professional timeline",
        "Contact form with validation",
        "Dark/light mode toggle"
      ]
    },
    {
      id: 4,
      title: "Abinash Sculptures (Webflow)",
      description: "Webflow-powered sculpture gallery featuring elegant design, art showcases, and visitor information.",
      longDescription: "A Webflow-built portfolio for a sculpture artist with stunning visuals, smooth transitions, and a focus on artwork presentation. Includes collections by category, artist information, and a streamlined contact system.",
      tags: ["Webflow", "CMS", "Responsive Design", "Animation", "Gallery"],
      image: "https://images.unsplash.com/photo-1471989945509-b1e987d9ea70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      link: "https://abinashsculptures.webflow.io/",
      github: "#",
      features: [
        "Dynamic artwork gallery",
        "Webflow CMS integration",
        "Custom animations",
        "Contact system",
        "Responsive layout"
      ]
    },
    {
      id: 5,
      title: "Thoufiq Portfolio",
      description: "Minimalist portfolio website showcasing professional achievements and creative work with a focus on typography and spacing.",
      longDescription: "A GitHub Pages-hosted portfolio with a clean design, emphasizing typography and whitespace. Features project showcases, professional qualifications, and contact information in an easily navigable layout.",
      tags: ["HTML/CSS", "JavaScript", "GitHub Pages", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80",
      link: "https://abinash-k.github.io/ThoufiqPortfolio/",
      github: "#",
      features: [
        "Clean, minimalist design",
        "Project showcase section",
        "Professional qualifications",
        "Optimized for mobile devices",
        "Fast loading performance"
      ]
    },
    {
      id: 6,
      title: "Personal Site",
      description: "Modern personal website with a clean interface, project showcases, and professional information.",
      longDescription: "A personal site built with Next.js and deployed on Vercel, featuring a clean design, dark mode support, and smooth page transitions. Showcases projects, skills, and professional experience in an organized layout.",
      tags: ["Next.js", "Vercel", "React", "Tailwind CSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2365&q=80",
      link: "https://abinash-k.vercel.app/",
      github: "#",
      features: [
        "Responsive layout",
        "Dark/light theme toggle",
        "Project portfolio section",
        "Skills showcase",
        "Contact information"
      ]
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
            </motion.div>
          </ParallaxEffect>
          
          <div className="mt-12 space-y-24">
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
