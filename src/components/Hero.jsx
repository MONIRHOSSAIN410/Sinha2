import { ArrowRight, CheckCircle2, Server, MessageSquare, Code, Cpu, Cloud, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample data for the non-stop infinite marquee carousel
const carouselItems = [
  { icon: Server, title: "Cloud Hosting", desc: "High-performance enterprise infrastructure" },
  { icon: MessageSquare, title: "Bulk Messaging", desc: "Reliable, high-volume SMS & comms" },
  { icon: Code, title: "Software Engineering", desc: "Custom web & mobile apps" },
  { icon: Cloud, title: "Cloud Solutions", desc: "Seamless DevOps & cloud integration" },
  { icon: Cpu, title: "IT Infrastructure", desc: "End-to-end IT consultation & architecture" },
  { icon: Shield, title: "Enterprise Security", desc: "Robust data protection & compliance" },
];

function Hero() {
  // Animation Variants for Container and Staggered Children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Duplicate items to ensure smooth infinite loop
  const duplicatedCarouselItems = [...carouselItems, ...carouselItems];

  return (
    <section id="home" className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden">
      
      {/* --- Dynamic Background Glowing Color Accents --- */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-10 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span 
              variants={itemVariants} 
              className="inline-block bg-blue-900/60 text-blue-400 font-semibold text-xs uppercase px-3 py-1 rounded-full mb-4 border border-blue-700/60 shadow-sm"
            >
              Sinha — Technology-Ltd
            </motion.span>

            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6"
            >
              Sinha <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Technology Ltd.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants} 
              className="text-slate-300 text-lg mb-8 leading-relaxed"
            >
              Sinha Technology Ltd. is an IT and software development agency that delivers scalable digital solutions for modern businesses.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg shadow-blue-500/20 transition"
              >
                Free Consultation <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#products"
                className="inline-flex items-center justify-center bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold px-6 py-3.5 rounded-lg transition"
              >
                Explore Solutions
              </motion.a>
            </motion.div>

            {/* Features List */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-slate-300 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" /> Scalable Architecture
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" /> Transparent Process
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" /> 24/7 Dedicated Support
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Non-stop Infinite Vertical Marquee */}
          <div className="relative overflow-hidden h-[420px] rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md shadow-2xl">
            {/* Top & Bottom Gradient Fades for Smooth Depth */}
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />

            <h3 className="text-xl font-bold mb-4 text-white relative z-20 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Our Core Solutions
            </h3>

            {/* Non-stop Moving Carousel Track */}
            <motion.div
              className="flex flex-col gap-4"
              animate={{ y: ['0%', '-50%'] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {duplicatedCarouselItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800/80 shadow-md flex items-center gap-4 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="p-3 bg-blue-600/10 border border-blue-500/20 rounded-xl text-blue-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-base">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;