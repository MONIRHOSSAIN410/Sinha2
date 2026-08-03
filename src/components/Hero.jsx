import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
    },
  };

  return (
    <section id="home" className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
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
              className="inline-block bg-blue-900/60 text-blue-400 font-semibold text-xs uppercase px-3 py-1 rounded-full mb-4 border border-blue-700"
            >
              Sinha — Technology-Ltd
            </motion.span>

            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6"
            >
              Sinha <span className="text-blue-500">Technology Ltd.</span>
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
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg transition"
              >
                Free Consultation <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#products"
                className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-6 py-3.5 rounded-lg transition"
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

          {/* Right Column: Hero Card */}
          <motion.div
            className="relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-gradient-to-tr from-blue-600 to-indigo-800 rounded-2xl p-8 shadow-2xl text-slate-100 border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4">Sinha Technology</h3>
              <p className="text-sm text-slate-200 mb-6">
                Sinha Technology Ltd. empowers businesses by bridging the gap between complex operational needs and scalable digital solutions through high-performance cloud hosting, bulk messaging systems, enterprise communication, and custom software engineering.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50 transition-colors hover:border-blue-500/50"
                >
                  <h4 className="font-semibold text-blue-300">ADDRESS</h4>
                  <p className="text-xs text-slate-300">Khilkhet,Dhaka,Bangladesh</p>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50 transition-colors hover:border-blue-500/50"
                >
                  <h4 className="font-semibold text-blue-300">Contact Us</h4>
                  <p className="text-xs text-slate-300">+88 01970 360763</p>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }} 
                  className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50 transition-colors hover:border-blue-500/50"
                >
                  <h4 className="font-semibold text-blue-300">Email</h4>
                  <p className="text-xs text-slate-300">sinhatechltd97@gmail.com</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;