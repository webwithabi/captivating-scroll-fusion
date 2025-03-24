
import React from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from '@/components/ParallaxEffect';
import { Code, Layout, Database, Figma, Server, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DetailedSkillCard = ({ icon, title, description, details }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass p-8 rounded-xl project-card"
    >
      <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center text-sm text-foreground/70">
            <span className="w-2 h-2 bg-primary/60 rounded-full mr-2" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const About = () => {
  const skills = [
    {
      icon: <Code className="text-primary" size={28} />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and tools.",
      details: [
        "Expert in React.js and Next.js development",
        "Advanced CSS and Tailwind CSS implementations",
        "State management with Redux and Context API",
        "Performance optimization and lazy loading",
        "Modern JavaScript (ES6+) practices"
      ]
    },
    {
      icon: <Layout className="text-primary" size={28} />,
      title: "UI/UX Design",
      description: "Creating intuitive user experiences and visually stunning interfaces.",
      details: [
        "User-centered design principles",
        "Wireframing and prototyping",
        "Design system development",
        "Accessibility (WCAG) compliance",
        "Interactive animations and transitions"
      ]
    },
    {
      icon: <Database className="text-primary" size={28} />,
      title: "Backend Integration",
      description: "Connecting frontend applications to robust backend services.",
      details: [
        "RESTful API integration",
        "GraphQL implementation",
        "Database design and optimization",
        "Server-side rendering (SSR)",
        "Authentication and authorization"
      ]
    },
    {
      icon: <Figma className="text-primary" size={28} />,
      title: "Design Systems",
      description: "Developing comprehensive design systems for scalable applications.",
      details: [
        "Component library development",
        "Style guide creation",
        "Design token management",
        "Cross-platform consistency",
        "Documentation and maintenance"
      ]
    },
    {
      icon: <Server className="text-primary" size={28} />,
      title: "API Development",
      description: "Building robust and efficient APIs for web and mobile applications.",
      details: [
        "RESTful architecture design",
        "API security implementation",
        "Performance optimization",
        "Documentation with Swagger/OpenAPI",
        "Versioning and maintenance"
      ]
    },
    {
      icon: <Globe className="text-primary" size={28} />,
      title: "Web Performance",
      description: "Optimizing websites for speed and search engine visibility.",
      details: [
        "Core Web Vitals optimization",
        "SEO best practices",
        "Caching strategies",
        "Image and asset optimization",
        "Progressive Web Apps (PWA)"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {skills.map((skill, index) => (
                <DetailedSkillCard
                  key={index}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                  details={skill.details}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default About;
