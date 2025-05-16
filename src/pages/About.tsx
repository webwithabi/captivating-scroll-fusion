
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Clock, Target, Award, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxEffect from '@/components/ParallaxEffect';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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
                <div className="chip chip-primary mb-4 mx-auto">Who We Are</div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  About <span className="text-gradient">OutPerformo</span>
                </h1>
                <p className="text-foreground/80 text-lg md:text-xl">
                  OutPerformo is a premier digital marketing and project management agency dedicated to helping businesses 
                  achieve their goals through innovative strategies and solutions.
                </p>
              </motion.div>
            </ParallaxEffect>

            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="glass p-8 rounded-xl mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-foreground/80 mb-4">
                    Founded in 2015, OutPerformo was born out of a passion for helping businesses navigate the 
                    complex world of digital marketing and project management. What started as a small team of 
                    dedicated professionals has grown into a trusted agency serving clients across various industries.
                  </p>
                  <p className="text-foreground/80">
                    Our journey has been defined by a commitment to excellence, innovation, and delivering 
                    results that exceed client expectations. With each project, we've refined our approach and 
                    expanded our capabilities to meet the evolving needs of the businesses we serve.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                      alt="Team collaboration" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Our Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              <div className="glass p-8 rounded-xl">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Target className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-foreground/80">
                  To empower businesses with innovative marketing strategies and project management solutions 
                  that drive growth, enhance visibility, and create lasting success. We are committed to 
                  delivering exceptional results through data-driven approaches, creative thinking, and 
                  unwavering dedication to our clients' goals.
                </p>
              </div>
              <div className="glass p-8 rounded-xl">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Award className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-foreground/80">
                  To be the trusted partner for businesses seeking to transform their marketing and project 
                  management capabilities. We envision a future where our clients achieve unprecedented 
                  success through our strategic guidance, innovative solutions, and commitment to excellence 
                  in every aspect of our service.
                </p>
              </div>
            </motion.div>

            {/* Our Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass p-8 rounded-xl mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Our Values</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-foreground/80 mb-4">
                    We are committed to delivering the highest quality in everything we do. 
                    From strategic planning to execution, we strive for excellence at every step.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-foreground/80 mb-4">
                    We embrace creative thinking and constantly explore new ideas and approaches 
                    to help our clients stay ahead in a rapidly changing digital landscape.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-2">Integrity</h3>
                  <p className="text-foreground/80">
                    We operate with honesty, transparency, and ethical practices in all our interactions. 
                    We build trust through our actions and always do what's right for our clients.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                  <p className="text-foreground/80 mb-4">
                    We believe in the power of teamwork and foster strong partnerships with our clients. 
                    We work together to achieve shared goals and create mutual success.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-2">Results-Driven</h3>
                  <p className="text-foreground/80 mb-4">
                    We focus on outcomes that matter. Our strategies and solutions are designed 
                    to deliver measurable results that contribute to our clients' business objectives.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                  <p className="text-foreground/80">
                    We are committed to ongoing growth and development. We stay current with industry 
                    trends and best practices to provide our clients with cutting-edge solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Our Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-8 rounded-xl mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Our Team</h2>
              </div>
              
              <p className="text-foreground/80 mb-8">
                Our team of experts brings together diverse skills, experiences, and perspectives to deliver 
                comprehensive solutions for our clients. With backgrounds in marketing, project management, 
                design, development, and more, we have the expertise to tackle any challenge.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Alex Morgan",
                    role: "Marketing Director",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  },
                  {
                    name: "Sarah Johnson",
                    role: "Project Management Lead",
                    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
                  },
                  {
                    name: "Michael Chen",
                    role: "SEO Specialist",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  }
                ].map((member, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-foreground/70">{member.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass p-8 rounded-xl mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">Why Choose OutPerformo?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Industry Expertise</h3>
                    <p className="text-foreground/80">
                      With years of experience in digital marketing and project management, we have the knowledge and 
                      skills to help your business succeed. Our team stays up-to-date with the latest trends and 
                      technologies to provide cutting-edge solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Target className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Results-Driven Approach</h3>
                    <p className="text-foreground/80">
                      We focus on outcomes that matter to your business. Our strategies and solutions are designed 
                      to deliver measurable results that contribute to your business objectives, whether it's 
                      increasing website traffic, generating leads, or improving project efficiency.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Client-Centric Focus</h3>
                    <p className="text-foreground/80">
                      We put our clients at the heart of everything we do. We take the time to understand your unique 
                      needs, goals, and challenges, and develop tailored solutions that address your specific requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                    <p className="text-foreground/80">
                      We understand the importance of time in business. Our efficient processes and dedicated team 
                      ensure that projects are completed on schedule, without compromising on quality or attention to detail.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
                Contact us today to learn more about how OutPerformo can help your business achieve its goals 
                through innovative marketing strategies and project management solutions.
              </p>
              <a href="/contact" className="btn-primary">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default About;
