import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cpu,
  Globe,
  Smartphone,
  ShoppingCart,
  Server,
  Code,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Bot,
  BarChart,
  Users,
  Building2,
  CreditCard,
  ShieldCheck,
  Send,
  Sparkles,
} from 'lucide-react'

// Navigation links
const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
]

// Core Services Data
const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    desc: 'Bespoke ERP, HRMS, and automated LC tools tailored to streamline and optimize core enterprise workflows.',
  },
  {
    icon: Bot,
    title: 'AI & Automation Solutions',
    desc: 'Predictive analytics, autonomous agents, and smart conversational bots for intelligent operational insights.',
  },
  {
    icon: Globe,
    title: 'Web Application Services',
    desc: 'High-performance, scalable web builds, cloud platforms, dynamic portals, and custom API integrations.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native iOS/Android and hybrid cross-platform apps designed with user-centered UI/UX.',
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Solutions',
    desc: 'Multi-vendor marketplace setups, custom payment gateways, and high-converting retail platforms.',
  },
  {
    icon: Server,
    title: 'IT Infrastructure & Cloud',
    desc: 'System architecture reviews, enterprise cloud hosting, network domain setups, and digital security.',
  },
]

// Flagship Software Solutions
const products = [
  {
    id: 'rmg-erp',
    title: 'Fusion RMG ERP',
    category: 'Enterprise Solution',
    icon: Building2,
    desc: 'Complete end-to-end operational management software built specifically for Ready-Made Garments (RMG) factories.',
    features: ['Production Tracking', 'Inventory & Yarn Control', 'Merchandising Suite'],
  },
  {
    id: 'pulse-hr',
    title: 'Pulse HR & Payroll',
    category: 'HR Management',
    icon: Users,
    desc: 'Simplify employee onboarding, biometric attendance, automated payroll processing, and leave tracking.',
    features: ['Biometric Integration', 'Automated Salary Slips', 'KPI & Attendance Analytics'],
  },
  {
    id: 'lcentra',
    title: 'Fusion LCentra',
    category: 'Trade & Finance',
    icon: CreditCard,
    desc: 'Comprehensive Letter of Credit (LC) management platform integrated with commercial accounting.',
    features: ['Export/Import LC Audits', 'Bank Documentation', 'Real-time LC Ledger'],
  },
  {
    id: 'ledgerkey',
    title: 'Fusion LedgerKey',
    category: 'Financial Management',
    icon: BarChart,
    desc: 'Smart, simplified accounting platform providing instant balance sheets, tax logs, and cash flow analysis.',
    features: ['Multi-currency Support', 'Tax & Audit Ready', 'Automated Invoicing'],
  },
  {
    id: 'sourcingpro',
    title: 'SourcingPro',
    category: 'Buying House Suite',
    icon: ShieldCheck,
    desc: 'Featured solution for garment sourcing houses to handle supplier orders, samples, and buyer shipments.',
    features: ['Order Lifecycle Management', 'Sample Tracking', 'Vendor Quality Control'],
  },
]

// Execution Methodology
const processSteps = [
  {
    step: '01',
    title: 'Discovery & Brainstorming',
    subtitle: 'Idea Generation',
    desc: 'In-depth discovery sessions to align with your operational goals, workflow bottlenecks, and technical requirements.',
  },
  {
    step: '02',
    title: 'Agile Development',
    subtitle: 'Iterative Engineering',
    desc: 'Transparent development Sprints ensuring continuous progress reviews, milestone validation, and collaborative feedback.',
  },
  {
    step: '03',
    title: 'Deployment & Support',
    subtitle: 'Quality Assurance',
    desc: 'Rigorous security testing, seamless cloud deployment, employee training, and ongoing technical maintenance.',
  },
]

function PRZFusionTechLight() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('all')

  const filteredProducts =
    activeTab === 'all'
      ? products
      : products.filter((p) => p.category.toLowerCase().includes(activeTab))

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left Section: Mobile Menu Button & Logo */}
            <div className="flex items-center gap-3">
              {/* Hamburger Button (Mobile Only) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Open Sidebar"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Logo */}
              <a href="#hero" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Sinha<span className="text-blue-600">Technology</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20"
              >
                Get Started
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* --- LEFT SIDEBAR (MOBILE NAVIGATION) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Slide-in Sidebar */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white z-50 p-6 flex flex-col justify-between shadow-2xl border-r border-slate-200 md:hidden"
            >
              <div>
                {/* Header inside Sidebar */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <a
                    href="#hero"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold text-slate-900">
                      Sinha<span className="text-blue-600">Tech</span>
                    </span>
                  </a>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                    aria-label="Close Sidebar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="mt-6 flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Sidebar Footer CTA */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20"
                >
                  Get Started
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-slate-50/50">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-200/30 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-700 mb-6 font-medium"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              Innovating Digital Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              Sinha Technology <br className="hidden sm:inline" />
              <span className="text-blue-600">
                Digital Possibilities
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed"
            >
              We craft custom enterprise software, AI integrations, intelligent RMG ERP systems, and cloud infrastructure to modernise operational productivity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#products"
                className="px-8 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2"
              >
                Explore Products <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Get in Touch
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Dedicated & Professional Technology Partner
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                PRZ Fusion Technology integrates modern software engineering with flexible cloud infrastructure. From fast-growing enterprises to large-scale manufacturing facilities, we help teams streamline operations, eliminate administrative roadblocks, and grow efficiently.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-3xl font-extrabold text-blue-600">99.9%</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">System Reliability</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-3xl font-extrabold text-blue-600">24/7</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Dedicated Support</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl bg-slate-50 p-8 border border-slate-200 shadow-sm space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Enterprise Security</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Multi-tier data encryption and privacy controls protecting core company assets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Automated Workflows</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Process automation tools tailored to cut manual data entry tasks.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
              Comprehensive Technology Capabilities
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              End-to-end software consulting, customized buildouts, and business automation platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => {
              const IconComp = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      {/* --- PRODUCTS SHOWCASE SECTION --- */}
      <section id="products" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              Featured Software
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
              Enterprise Software Platforms
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {['all', 'enterprise', 'hr', 'trade'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => {
              const IconComponent = prod.icon
              return (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50/60 rounded-2xl p-8 border border-slate-200 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                        {prod.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{prod.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{prod.desc}</p>

                    <ul className="space-y-2.5 mb-8">
                      {prod.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className="w-full py-3 rounded-lg bg-white border border-slate-200 text-center text-sm font-semibold text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                  >
                    Request Demo
                  </a>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section id="process" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
              Our Execution Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
              >
                <span className="text-5xl font-black text-blue-600/20 block mb-4">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                <h4 className="text-xs font-bold text-blue-600 uppercase mb-4 tracking-wider">{step.subtitle}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Information Column */}
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
                Contact Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Ready to Modernise Your Operations?
              </h2>
              <p className="text-slate-600 mb-8">
                Get in touch with our software team or schedule a personalized product walkthrough.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">Dhaka Office</h4>
                    <p className="text-slate-600 text-sm mt-0.5">
                      House #59, Road #13, Sector #13, Uttara, Dhaka - 1230, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">UK Office</h4>
                    <p className="text-slate-600 text-sm mt-0.5">
                      Office 6 & 8 Leicester Lane, Desford Hall, Leicester, LE9 9JJ, England
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">Email Us</h4>
                    <p className="text-slate-600 text-sm mt-0.5">info@przfusiontech.com / explore@przfusiontech.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">Phone Support</h4>
                    <p className="text-slate-600 text-sm mt-0.5">+880 1324-712214 (Sat - Fri: 9:00 AM - 6:00 PM)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Work Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Subject / Product Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors">
                    <option>Fusion RMG ERP</option>
                    <option>Pulse HR & Payroll</option>
                    <option>Fusion LCentra</option>
                    <option>Fusion LedgerKey</option>
                    <option>Custom Software Development</option>
                    <option>AI Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your requirements..."
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-600/20"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 bg-white border-t border-slate-200 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} PRZ Fusion Technology. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default PRZFusionTechLight;