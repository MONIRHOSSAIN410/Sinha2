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
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
            Passionate – Dedicated – Professional
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-2">
            Why Choose Sinha Technology?
          </h2>
          <p className="text-slate-600 mt-4">
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
            className="bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-all shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our mission is to empower businesses with innovative, scalable, and data-driven technology solutions that streamline operations, enhance decision-making, and unlock new levels of efficiency.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-slate-50 border border-slate-200 p-8 rounded-2xl transition-all shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
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
                className="p-6 border border-slate-100 rounded-xl bg-white shadow-sm hover:shadow-md border-t-2 hover:border-t-blue-600 transition-all cursor-pointer"
              >
                <Icon className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">{point.title}</h4>
                <p className="text-xs text-slate-600">{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default About;