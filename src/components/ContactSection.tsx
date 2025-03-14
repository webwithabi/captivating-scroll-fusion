
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from './ParallaxEffect';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submission state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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
    <section id="contact" className="section">
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
            Contact Me
          </motion.div>
          
          <motion.h2
            custom={1}
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          
          <motion.p
            custom={2}
            variants={fadeInUpVariants}
            className="text-foreground/80"
          >
            Have a project in mind or just want to say hello? Feel free to reach out!
          </motion.p>
        </motion.div>
      </ParallaxEffect>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-6">Send a Message</h3>
          
          {isSubmitted ? (
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Send className="text-white" size={24} />
              </motion.div>
              <h4 className="text-lg font-bold mb-2">Message Sent!</h4>
              <p className="text-foreground/70">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Sending...</span>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="ml-2" size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <MapPin className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Location</h4>
                <p className="text-foreground/70">San Francisco, California</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Mail className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <a href="mailto:contact@example.com" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  contact@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Phone className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Phone</h4>
                <a href="tel:+1234567890" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 rounded-xl bg-secondary/70 border border-border/50">
            <h4 className="font-bold mb-4">Availability</h4>
            <p className="text-foreground/70 mb-3">
              Currently available for freelance projects, part-time positions, or full-time opportunities.
            </p>
            <p className="text-foreground/70">
              I typically respond to all inquiries within 24-48 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
