import { Target, Compass, Award, ShieldCheck, Zap, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

// Dynamic Data Configurations
const keyPoints = [
  {
    icon: Award,
    title: 'Industry-Focused',
    description: 'Specialized in manufacturing, buying houses, trading, and enterprise operations.',
  },
  {
    icon: ShieldCheck,
    title: 'Tailored Solutions',
    description: 'No generic software—every system is custom-designed for your specific workflows.',
  },
  {
    icon: Zap,
    title: 'Quality & Speed',
    description: 'Agile workflows combined with strict QA ensure reliable, on-time delivery.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'High-grade enterprise software solutions delivered at competitive pricing.',
  },
];

function About() {
  // Animation Variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="relative py-20 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Passionate – Dedicated – Professional
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mt-2">
            Why Choose Sinha Technology?
          </h2>
          <p className="text-slate-400 mt-4">
            We seamlessly integrate bespoke software solutions with robust security systems, ensuring your business is ready for tomorrow’s challenges.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Our Mission */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl transition-all shadow-xl hover:border-blue-500/40 hover:shadow-blue-500/5"
          >
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 shadow-inner">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              Our mission is to empower businesses with innovative, scalable, and data-driven technology solutions that streamline operations, enhance decision-making, and unlock new levels of efficiency.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl transition-all shadow-xl hover:border-blue-500/40 hover:shadow-blue-500/5"
          >
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 shadow-inner">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              Our vision is to become a leading technology powerhouse in the world, known for transforming businesses through innovation, automation, and world-class engineering.
            </p>
          </motion.div>
        </motion.div>

        {/* Key Selling Points (Dynamic Rendering) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {keyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 border border-slate-800 rounded-xl bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/80 shadow-lg hover:shadow-xl border-t-2 border-t-blue-500/40 hover:border-t-blue-500 transition-all cursor-pointer group"
              >
                <Icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-white mb-2">{point.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default About;