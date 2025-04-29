
import React from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from './ParallaxEffect';
import { Target, Users } from 'lucide-react';

const WhyChooseUsSection = () => {
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

  const reasons = [
    {
      id: 1,
      title: "Results-Driven",
      description: "We're focused on delivering results that drive business growth and success.",
      icon: <Target className="h-10 w-10 text-primary" />,
    },
    {
      id: 2,
      title: "Client-Centric Approach",
      description: "We put our clients at the heart of everything we do.",
      icon: <Users className="h-10 w-10 text-primary" />,
    }
  ];

  return (
    <section id="why-choose-us" className="section py-20">
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
            Our Advantage
          </motion.div>
          
          <motion.h2
            custom={1}
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Why <span className="text-gradient">Choose Us</span>
          </motion.h2>
          
          <motion.p
            custom={2}
            variants={fadeInUpVariants}
            className="text-foreground/80"
          >
            Discover what sets us apart and makes us the right partner for your business.
          </motion.p>
        </motion.div>
      </ParallaxEffect>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex gap-6 items-start"
          >
            <div className="p-4 bg-primary/10 rounded-full shrink-0">
              {reason.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-foreground/70">{reason.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
