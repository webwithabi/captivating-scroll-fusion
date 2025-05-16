import React from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from './ParallaxEffect';
import { TrendingUp, Briefcase } from 'lucide-react';
const ServicesSection = () => {
  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
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
  const services = [{
    id: 1,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to enhance your online presence, increase brand awareness, and drive customer engagement.",
    icon: <TrendingUp className="h-12 w-12 text-primary" />
  }, {
    id: 2,
    title: "Project Management",
    description: "Comprehensive project management services ensuring timely delivery, resource optimization, and successful outcomes.",
    icon: <Briefcase className="h-12 w-12 text-primary" />
  }];
  return <section id="services" className="section bg-secondary/10 py-[8px]">
      <ParallaxEffect speed={0.1}>
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} className="max-w-3xl mx-auto text-center mb-16">
          <motion.div custom={0} variants={fadeInUpVariants} className="chip chip-primary mb-4 mx-auto">
            What We Offer
          </motion.div>
          
          <motion.h2 custom={1} variants={fadeInUpVariants} className="text-3xl md:text-4xl font-display font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          
          <motion.p custom={2} variants={fadeInUpVariants} className="text-foreground/80">
            Specialized services designed to help your business grow and succeed in today's competitive market.
          </motion.p>
        </motion.div>
      </ParallaxEffect>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => <motion.div key={service.id} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-50px"
      }} transition={{
        duration: 0.5,
        delay: index * 0.2
      }} className="bg-card border border-border/50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-primary/10 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          </motion.div>)}
      </div>
    </section>;
};
export default ServicesSection;