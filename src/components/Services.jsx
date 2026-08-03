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
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
            Services & Expertise
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-2">
            Transforming Endless Possibilities
          </h2>
          <p className="text-slate-600 mt-4">
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
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:bg-blue-700 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
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