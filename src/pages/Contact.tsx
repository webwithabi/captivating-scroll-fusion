
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from '@/components/ParallaxEffect';
import { Send, MapPin, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
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
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com',
      color: 'hover:text-[#333]'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com',
      color: 'hover:text-[#0077b5]'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      href: 'https://twitter.com',
      color: 'hover:text-[#1DA1F2]'
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
              <div className="chip chip-primary mb-4 mx-auto">Contact</div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Let's Work <span className="text-gradient">Together</span>
              </h1>
              <p className="text-foreground/80 text-lg">
                Have a project in mind? Let's discuss how we can collaborate to create
                something amazing.
              </p>
            </motion.div>
          </ParallaxEffect>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border/50 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
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
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-foreground/70">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
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
                        required
                      />
                    </div>
                    <div>
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
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
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
                        Send Message
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-card border border-border/50 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p className="text-foreground/70">San Francisco, California</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
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
                      <h3 className="font-bold mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Connect with Me</h2>
                <div className="flex items-center justify-between">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 border border-border rounded-lg transition-colors duration-300 ${link.color}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-secondary/70 rounded-xl p-8 border border-border/50">
                <h2 className="text-2xl font-bold mb-4">Availability</h2>
                <p className="text-foreground/70 mb-4">
                  Currently available for freelance projects and full-time opportunities.
                </p>
                <p className="text-foreground/70">
                  Average response time: <span className="font-medium">24-48 hours</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Contact;
