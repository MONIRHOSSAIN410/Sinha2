import { Code2, Bot, Globe, Smartphone, ShoppingBag, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom Software Development',
    desc: 'ERP systems, HRMS payroll, Accounting & LC workflow tools, business process automation.',
    icon: Code2,
  },
  {
    title: 'AI & Automation Solutions',
    desc: 'Conversational chatbots, autonomous agents, predictive analytics, process automation tools.',
    icon: Bot,
  },
  {
    title: 'Web Development Services',
    desc: 'WordPress, custom applications (Laravel/.NET/React), secure APIs, backend systems.',
    icon: Globe,
  },
  {
    title: 'Mobile App Development',
    desc: 'Android & iOS native applications, cross-platform hybrid builds, UI/UX optimization.',
    icon: Smartphone,
  },
  {
    title: 'e-Commerce Development',
    desc: 'Online stores, marketplace platforms, custom checkouts, inventory catalog management.',
    icon: ShoppingBag,
  },
  {
    title: 'IT Infrastructure & Consultancy',
    desc: 'System architecture review, platform modernization, cloud security, digital workflow guidance.',
    icon: Server,
  },
];

export default function Services() {
  // Animation Variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: 'easeOut' } 
    },
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-slate-900 text-white">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Background Technology Pattern"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay for Readability (adjust opacity via /80 or /90) */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs" />
      </div>

      {/* Main Content (Elevated above background via relative z-10) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Services & Expertise
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mt-2">
            Transforming Endless Possibilities
          </h2>
          <p className="text-slate-300 mt-4">
            We engineer intelligent, scalable digital solutions that drive real business growth.
          </p>
        </motion.div>

        {/* Grid Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-8 rounded-2xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-md hover:bg-slate-800/90 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:bg-blue-500 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {srv.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}