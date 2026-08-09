import { Layers, Database, FileText, Users, DollarSign, Cloud, MessageSquare, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Bulk SMS Service',
    desc: 'Our Bulk SMS Service helps businesses send thousands of SMS messages instantly through a secure and reliable platform. It supports promotional, transactional, and OTP messages.',
    icon: Layers,
    tag: 'SERVICES',
    theme: {
      bgHover: 'hover:bg-blue-900/30 hover:border-blue-500/50',
      iconBg: 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white',
      badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
      titleHover: 'group-hover:text-blue-400',
      cta: 'text-blue-400 hover:text-blue-300',
      glow: 'from-blue-600/10 to-transparent',
    },
  },
  {
    title: 'Fusion Cloud',
    desc: 'Fusion Cloud is PRZ FusionTech’s next-generation cloud platform designed to power modern businesses with speed, security, and flexibility.',
    icon: Database,
    tag: 'Featured',
    theme: {
      bgHover: 'hover:bg-purple-900/30 hover:border-purple-500/50',
      iconBg: 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white',
      badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      titleHover: 'group-hover:text-purple-400',
      cta: 'text-purple-400 hover:text-purple-300',
      glow: 'from-purple-600/10 to-transparent',
    },
  },
  {
    title: 'Corporate Email (Zoho & M365)',
    desc: 'Enhance your business communication with secure and professional corporate email solutions. We provide complete setup, migration, and support.',
    icon: FileText,
    tag: 'SERVICES',
    theme: {
      bgHover: 'hover:bg-amber-900/30 hover:border-amber-500/50',
      iconBg: 'bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-white',
      badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      titleHover: 'group-hover:text-amber-400',
      cta: 'text-amber-400 hover:text-amber-300',
      glow: 'from-amber-600/10 to-transparent',
    },
  },
  {
    title: 'Pulse HR',
    desc: 'Future-forward HR & Payroll management platform tailored for modern enterprise workforce operations.',
    icon: Users,
    tag: 'HRMS',
    theme: {
      bgHover: 'hover:bg-emerald-900/30 hover:border-emerald-500/50',
      iconBg: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white',
      badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      titleHover: 'group-hover:text-emerald-400',
      cta: 'text-emerald-400 hover:text-emerald-300',
      glow: 'from-emerald-600/10 to-transparent',
    },
  },
  {
    title: 'Fusion LedgerKey',
    desc: 'Smart, simple, and powerful financial accounting and ledger management software designed for accuracy.',
    icon: DollarSign,
    tag: 'Accounting',
    theme: {
      bgHover: 'hover:bg-teal-900/30 hover:border-teal-500/50',
      iconBg: 'bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-white',
      badge: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
      titleHover: 'group-hover:text-teal-400',
      cta: 'text-teal-400 hover:text-teal-300',
      glow: 'from-teal-600/10 to-transparent',
    },
  },
  {
    title: 'Fusion SalesPro AI',
    desc: 'Fast, easy, and complete Point of Sale (POS) and inventory management solution driven by automation.',
    icon: Cpu,
    tag: 'Retail & POS',
    theme: {
      bgHover: 'hover:bg-rose-900/30 hover:border-rose-500/50',
      iconBg: 'bg-rose-500/10 text-rose-400 group-hover:bg-rose-500 group-hover:text-white',
      badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      titleHover: 'group-hover:text-rose-400',
      cta: 'text-rose-400 hover:text-rose-300',
      glow: 'from-rose-600/10 to-transparent',
    },
  },
  {
    title: 'Fusion Cloud & Domain',
    desc: 'Fast & secure domain hosting, corporate email setup (M365, Zoho), and resilient cloud infrastructure.',
    icon: Cloud,
    tag: 'Infrastructure',
    theme: {
      bgHover: 'hover:bg-cyan-900/30 hover:border-cyan-500/50',
      iconBg: 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white',
      badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      titleHover: 'group-hover:text-cyan-400',
      cta: 'text-cyan-400 hover:text-cyan-300',
      glow: 'from-cyan-600/10 to-transparent',
    },
  },
  {
    title: 'Bulk & Masking SMS',
    desc: 'Smart promotional and transactional SMS gateway integrations designed for high enterprise outreach.',
    icon: MessageSquare,
    tag: 'Marketing',
    theme: {
      bgHover: 'hover:bg-indigo-900/30 hover:border-indigo-500/50',
      iconBg: 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white',
      badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
      titleHover: 'group-hover:text-indigo-400',
      cta: 'text-indigo-400 hover:text-indigo-300',
      glow: 'from-indigo-600/10 to-transparent',
    },
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
    <section id="products" className="relative py-20 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

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
            OUR SERVICES
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mt-2">
            Sinha Technology Services
          </h2>
          <p className="text-slate-400 mt-4">
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
            const t = item.theme;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`relative overflow-hidden bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer ${t.bgHover}`}
              >
                {/* Dynamic Inner Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${t.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${t.iconBg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <span className={`text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded border ${t.badge}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold text-white mb-2 transition-colors duration-300 ${t.titleHover}`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80">
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 4 }}
                    className={`text-xs font-semibold transition flex items-center gap-1 ${t.cta}`}
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