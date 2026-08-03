import { Layers, Database, FileText, Users, DollarSign, Cloud, MessageSquare, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Bulk SMS Service',
    desc: 'Our Bulk SMS Service helps businesses send thousands of SMS messages instantly through a secure and reliable platform. It supports promotional, transactional, and OTP messages.',
    icon: Layers,
    tag: 'SERVICES',
  },
  {
    title: 'Fusion Cloud',
    desc: 'Fusion Cloud is PRZ FusionTech’s next-generation cloud platform designed to power modern businesses with speed, security, and flexibility.',
    icon: Database,
    tag: 'Featured',
  },
  {
    title: 'Corporate Email (Zoho Mail & Microsoft 365)',
    desc: 'Enhance your business communication with secure and professional corporate email solutions. We provide complete setup, migration, and support for Zoho.',
    icon: FileText,
    tag: 'SERVICES',
  },
  {
    title: 'Pulse HR',
    desc: 'Future-forward HR & Payroll management platform tailored for modern enterprise workforce.',
    icon: Users,
    tag: 'HRMS',
  },
  {
    title: 'Fusion LedgerKey',
    desc: 'Smart, simple, and powerful financial accounting and ledger management software.',
    icon: DollarSign,
    tag: 'Accounting',
  },
  {
    title: 'Fusion SalesPro AI',
    desc: 'Fast, easy, and complete Point of Sale (POS) and inventory management solution.',
    icon: Cpu,
    tag: 'Retail & POS',
  },
  {
    title: 'Fusion Cloud & Domain',
    desc: 'Fast & secure domain hosting, corporate email (M365, Zoho), and cloud infrastructure setup.',
    icon: Cloud,
    tag: 'Infrastructure',
  },
  {
    title: 'Bulk & Masking SMS',
    desc: 'Smart promotional and transactional SMS gateway integrations for enterprise outreach.',
    icon: MessageSquare,
    tag: 'Marketing',
  },
];

export default function Products() {
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
        staggerChildren: 0.1,
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
    <section id="products" className="py-20 bg-slate-50 overflow-hidden">
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
            OUR SERVICES
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-2">
            Sinha Technology Services
          </h2>
          <p className="text-slate-600 mt-4">
            Smart technology designed for Bangladesh's growing industries and global enterprises.
          </p>
        </motion.div>

        {/* Staggered Grid Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 4 }}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition flex items-center gap-1"
                  >
                    Request Demo &rarr;
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}