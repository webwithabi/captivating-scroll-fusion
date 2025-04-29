
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
      title: "E-commerce SEO Campaign",
      description: "Comprehensive SEO strategy for a fashion retailer that increased organic traffic by 150% within 6 months.",
      longDescription: "Developed and implemented a comprehensive SEO strategy for a mid-sized fashion e-commerce website. The campaign included technical SEO improvements, content optimization, and backlink acquisition. Within 6 months, the client saw a 150% increase in organic traffic and a 90% increase in organic conversions.",
      tags: ["SEO", "E-commerce", "Content Strategy", "Technical SEO", "Analytics"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5760&q=80",
      link: "#",
      github: "#",
      features: [
        "Technical SEO audit and implementation",
        "Keyword research and optimization",
        "Content strategy and creation",
        "Backlink acquisition",
        "Performance tracking and reporting"
      ]
    },
    {
      id: 2,
      title: "B2B Social Media Campaign",
      description: "Strategic social media campaign for a B2B software company that generated 200+ qualified leads.",
      longDescription: "Created and executed a multi-platform social media campaign for a B2B software company targeting enterprise clients. The campaign involved LinkedIn advertising, content marketing, and engagement strategies. The campaign generated over 200 qualified leads and resulted in 15 enterprise conversions.",
      tags: ["Social Media", "B2B Marketing", "LinkedIn", "Content Marketing", "Lead Generation"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      link: "#",
      github: "#",
      features: [
        "Platform-specific strategy development",
        "Content calendar creation",
        "Targeted advertising campaigns",
        "Community engagement tactics",
        "Performance analytics and optimization"
      ]
    },
    {
      id: 3,
      title: "Real Estate Website Redesign",
      description: "Complete website redesign for a real estate agency that improved user experience and increased lead conversion by 75%.",
      longDescription: "Redesigned and developed a modern, responsive website for a local real estate agency. The project included UX research, wireframing, design, development, and post-launch optimization. The new website improved user engagement metrics across the board and increased lead form submissions by 75%.",
      tags: ["Web Design", "UX/UI", "Real Estate", "Responsive Design", "Lead Generation"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6052&q=80",
      link: "#",
      github: "#",
      features: [
        "User experience research and planning",
        "Responsive, mobile-first design",
        "Property search functionality",
        "Lead capture optimization",
        "Integration with MLS listings"
      ]
    },
    {
      id: 4,
      title: "Local Business PPC Campaign",
      description: "Targeted Google Ads campaign for a local service business that achieved a 300% ROI within the first quarter.",
      longDescription: "Designed and managed a highly targeted Google Ads campaign for a local HVAC service company. The campaign utilized location-based targeting, ad scheduling, and conversion-focused landing pages. The campaign achieved a 300% return on ad spend within the first three months and continued to improve with ongoing optimization.",
      tags: ["PPC", "Google Ads", "Local SEO", "Landing Pages", "Conversion Rate Optimization"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=7952&q=80",
      link: "#",
      github: "#",
      features: [
        "Keyword research and selection",
        "Ad copy creation and testing",
        "Landing page development",
        "Budget management and optimization",
        "Call tracking and analytics"
      ]
    },
    {
      id: 5,
      title: "E-commerce Email Marketing",
      description: "Strategic email marketing campaign for an online retailer that increased sales by 45% and improved customer retention.",
      longDescription: "Developed and implemented a comprehensive email marketing strategy for an e-commerce clothing brand. The project included customer segmentation, automated workflows, and personalized content creation. The campaign increased repeat purchases by 45% and improved customer lifetime value metrics across all segments.",
      tags: ["Email Marketing", "E-commerce", "Customer Retention", "Automation", "Personalization"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80",
      link: "#",
      github: "#",
      features: [
        "Customer segmentation strategy",
        "Email automation workflow creation",
        "Personalized content development",
        "A/B testing and optimization",
        "Performance analytics and reporting"
      ]
    },
    {
      id: 6,
      title: "Healthcare Content Marketing",
      description: "Comprehensive content marketing strategy for a healthcare provider that established them as an industry thought leader.",
      longDescription: "Created and executed a content marketing strategy for a healthcare provider specializing in telehealth services. The campaign included blog content, video production, and social media distribution with a focus on establishing thought leadership. The strategy resulted in a 200% increase in organic traffic and significantly improved brand visibility.",
      tags: ["Content Marketing", "Healthcare", "Thought Leadership", "SEO", "Video Production"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80",
      link: "#",
      github: "#",
      features: [
        "Content strategy development",
        "Editorial calendar creation",
        "Blog article writing and optimization",
        "Video script development",
        "Distribution and promotion"
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
              <div className="chip chip-primary mb-4 mx-auto">Case Studies</div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Our Digital Marketing <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-foreground/80 text-lg mb-8">
                A showcase of our successful digital marketing campaigns and solutions 
                that have helped our clients grow their businesses.
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
                          View Case Study <ExternalLink size={16} className="ml-2" />
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
