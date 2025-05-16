
import React from 'react';
import { motion } from 'framer-motion';
import ParallaxEffect from '@/components/ParallaxEffect';
import { ArrowRight, Megaphone, Globe, Palette, ClipboardList, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CounterAnimation from '@/components/CounterAnimation';

const Services = () => {
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
                <div className="chip chip-primary mb-4 mx-auto">Our Services</div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Specialized <span className="text-gradient">Solutions</span> for Your Business
                </h1>
                <p className="text-foreground/80 text-lg md:text-xl">
                  At Outperformo Solutions, we're dedicated to helping businesses like yours succeed. 
                  With a focus on innovative marketing solutions and expert project management, 
                  we're your trusted partner for growth and success.
                </p>
              </motion.div>
            </ParallaxEffect>

            {/* Marketing Strategy Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="glass p-8 rounded-xl mb-16"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Megaphone className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Marketing Strategy Services</h2>
              </div>
              <p className="text-foreground/80 mb-6">
                <span className="font-semibold text-primary">Get proven results - stop wasting marketing dollars.</span> In today's competitive landscape, 
                a well-crafted marketing strategy is crucial for business success. Our team of experts helps you 
                develop and execute tailored marketing plans to drive growth, boost brand awareness, and increase conversions.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Our Expertise</h3>
              <p className="text-foreground/80 mb-6">
                With years of experience in marketing strategy development, we've helped numerous 
                businesses achieve their goals through data-driven approaches.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Marketing Strategy Development:</span> Customized marketing plans aligned with your business objectives.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Market Research and Analysis:</span> In-depth research to understand your target audience, industry trends, and competitors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Digital Marketing:</span> Expertise in SEO, social media, content marketing, and more.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Performance Tracking and Optimization:</span> Continuous monitoring and improvement of marketing efforts.</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold mb-2">Benefits</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Increased Brand Awareness:</span> Effective marketing strategies to reach your target audience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Improved Conversions:</span> Data-driven approaches to drive sales, leads, or other desired actions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Competitive Edge:</span> Stay ahead of competitors with tailored marketing solutions.</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <a href="/contact" className="btn-primary">
                  Get Started
                </a>
              </div>
            </motion.div>

            {/* Digital Marketing Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-8 rounded-xl mb-16"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Globe className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Digital Marketing Services</h2>
              </div>
              <p className="text-foreground/80 mb-6">
                <span className="font-semibold text-primary">Boost Your Online Presence and Drive Results.</span> In today's digital landscape, 
                a strong online presence is crucial for business success. Our team of experts helps you develop 
                and execute effective digital marketing strategies to reach your target audience, drive conversions, 
                and grow your business.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Our Expertise</h3>
              <p className="text-foreground/80 mb-6">
                With years of experience in digital marketing, we've helped numerous businesses achieve 
                their online goals through data-driven approaches.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Search Engine Optimization (SEO):</span> Improve your website's visibility and ranking on search engines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Web Development:</span> A well-designed website is crucial for any business or organization. Our team of expert web developers creates custom web solutions that meet your unique needs and goals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Pay-Per-Click (PPC) Advertising:</span> Targeted online ads to drive conversions and sales.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Social Media Marketing:</span> Engage with your audience and build your brand on social media platforms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Content Marketing:</span> Create high-quality, relevant content to attract and retain customers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Email Marketing:</span> Nurture leads and drive conversions through targeted email campaigns.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Digital Analytics:</span> Track and analyze your online performance to inform data-driven decisions.</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold mb-2">Benefits</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Increased Online Visibility:</span> Improve your website's visibility and reach a wider audience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Targeted Advertising:</span> Reach your target audience with precision and drive conversions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Measurable Results:</span> Track and analyze your online performance to optimize your marketing efforts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Competitive Edge:</span> Stay ahead of competitors with effective digital marketing strategies.</span>
                </li>
              </ul>
            </motion.div>

            {/* Branding Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass p-8 rounded-xl mb-16"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Palette className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Branding Services</h2>
              </div>
              <p className="text-foreground/80 mb-6">
                With years of experience in branding, we've helped numerous businesses establish a lasting 
                impression and achieve their goals.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Brand Strategy:</span> Develop a tailored brand strategy that aligns with your business objectives.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Brand Identity:</span> Create a unique and memorable brand identity, including logos, color schemes, and typography.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Brand Messaging:</span> Craft compelling brand messaging that resonates with your target audience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Brand Guidelines:</span> Establish brand guidelines to ensure consistency across all marketing channels.</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold mb-2">Benefits</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Increased Recognition:</span> A strong brand identity that sets you apart from competitors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Improved Credibility:</span> A professional brand image that builds trust with your target audience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Consistency:</span> A consistent brand message and visual identity across all marketing channels.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Emotional Connection:</span> A brand that resonates with your target audience and builds a lasting impression.</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold mb-2">Graphic Design Solutions</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Corporate Branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>3D Graphics</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Logo Creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Corporate Identity Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Booklets & Brochures Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Banner Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Icon & Monogram Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Business Cards</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Product Packaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Newsletter & Flyer Design</span>
                </li>
              </ul>
            </motion.div>

            {/* Project Management Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-8 rounded-xl mb-16"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ClipboardList className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Project Management Services</h2>
              </div>
              
              <h3 className="text-xl font-bold mb-2">PMO Setup</h3>
              <p className="text-foreground/80 mb-4">
                PMO-implemented organizations NOT ONLY executed their projects successfully but also 
                align them with business goals and strategies, utilizing best practices from PM Professionals worldwide.
              </p>
              <p className="text-foreground/80 mb-6">
                In addition to the intricacies involved in project execution, stakeholders possess 
                a variety of expectations that can frequently conflict with one another. By aligning all 
                stakeholders to a unified perspective through data, the following outcomes can be achieved:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Increased likelihood of project success</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Enhanced cost savings leading to improved project profitability</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>A structured framework for implementing business strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Informed decision-making to attain desired benefit metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>A methodical approach to risk and issue management</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Assurance of quality through standardized process assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span>Sustained focus on delivering value that transcends budget and time constraints</span>
                </li>
              </ul>
              
              <p className="text-foreground/80 mb-6">
                We are a group of Project Management Consultants with combined experience of more than 
                three decades, experience at our client organizations. Our PMO implementation team 
                comprises of a PMI-certified SME and two consultants. AS you are aware PMO processes 
                ensure that the best practices and standards suggested by the Project Management Institute 
                (PMI) are deployed for improved & desired outcomes.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Supporting Documentation</h3>
              <p className="text-foreground/80 mb-4">
                Supporting documentation plays a crucial role in project management, ensuring that all 
                stakeholders are informed and aligned throughout the project lifecycle.
              </p>
              
              <h4 className="text-lg font-bold mb-2">Benefits of Supporting Documentation</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Improved Communication:</span> Ensures that all stakeholders are informed and aligned throughout the project.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Increased Transparency:</span> Provides a clear understanding of project progress, issues, and decisions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Better Decision-Making:</span> Enables informed decision-making based on accurate and up-to-date information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Reduced Risk:</span> Helps identify and mitigate potential risks, reducing the likelihood of project failure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Improved Quality:</span> Ensures that project deliverables meet the required quality standards.</span>
                </li>
              </ul>
            </motion.div>

            {/* Executive Assistant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass p-8 rounded-xl mb-16"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Executive Assistant</h2>
              </div>
              <p className="text-foreground/80 mb-6">
                <span className="font-semibold text-primary">Optimize Your Business with Dependable Executive Assistance.</span> As a business owner, 
                you juggle various responsibilities. Allow us to assist you in delegating tasks and creating more time 
                for what truly matters. Our executive assistant services deliver professional support to help you 
                handle your workload and enhance efficiency.
              </p>
              
              <h3 className="text-xl font-bold mb-2">Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Administrative Tasks:</span> Email management, calendar organization, data entry, and more.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Customer Service:</span> Respond to customer inquiries, resolve issues, and provide top-notch support.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Scheduling:</span> Manage appointments, bookings, and schedules with ease.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Research:</span> Conduct research, gather data, and provide insights to inform business decisions.</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold mb-2">Benefits</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Increased Productivity:</span> Free up time to focus on high-priority tasks and grow your business.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Cost-Effective:</span> Reduce labor costs and overhead expenses by outsourcing tasks to a virtual assistant.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Flexibility:</span> Get support on a project-by-project basis or on an ongoing basis, depending on your needs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span><span className="font-semibold">Expertise:</span> Tap into specialized skills and expertise without having to hire a full-time employee.</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <a href="/contact" className="btn-primary">
                  Get Started
                </a>
              </div>
            </motion.div>
            
            {/* Stats Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              <div className="glass p-6 rounded-xl text-center">
                <ClipboardList className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-3xl font-bold mb-2">
                  <CounterAnimation end={100} duration={2} />+
                </h3>
                <p className="text-foreground/70">Projects Completed</p>
              </div>
              
              <div className="glass p-6 rounded-xl text-center">
                <Globe className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-3xl font-bold mb-2">
                  <CounterAnimation end={50} duration={2} />+
                </h3>
                <p className="text-foreground/70">Satisfied Clients</p>
              </div>
              
              <div className="glass p-6 rounded-xl text-center">
                <Megaphone className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-3xl font-bold mb-2">
                  <CounterAnimation end={30} duration={2} />+
                </h3>
                <p className="text-foreground/70">Years Experience</p>
              </div>
              
              <div className="glass p-6 rounded-xl text-center">
                <Palette className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-3xl font-bold mb-2">
                  <CounterAnimation end={200} duration={2} />+
                </h3>
                <p className="text-foreground/70">Design Projects</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Services;
