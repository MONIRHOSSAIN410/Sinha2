import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  // Header initial drop-down animation
  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  // Top Bar items staggered animation
  const topBarVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, staggerChildren: 0.1 } 
    }
  };

  // Mobile menu container animation
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  // Mobile menu links item animation
  const linkVariants = {
    closed: { opacity: 0, x: -15 },
    open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.header 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      {/* Top Bar */}
      <motion.div 
        variants={topBarVariants}
        className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 flex justify-between items-center"
      >
        <div className="flex items-center gap-4">
          <motion.a 
            href="tel:+8801970360763" 
            whileHover={{ scale: 1.03, x: 2 }}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" /> +880 1970 360763
          </motion.a>
          <motion.a 
            href="mailto:sinhatechltd97@gmail.com" 
            whileHover={{ scale: 1.03, x: 2 }}
            className="hidden sm:flex items-center gap-1 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" /> sinhatechltd97@gmail.com
          </motion.a>
        </div>
        <motion.div>
          <span>Sat - Fri: 9:00 AM - 6:00 PM</span>
        </motion.div>
      </motion.div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <img 
            src={Logo} 
            alt="Sinha Technology Logo" 
            className="h-10 sm:h-12 w-auto object-contain" 
          />
        </motion.a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2, color: "#2563eb" }}
              whileTap={{ y: 0 }}
              className="font-medium text-slate-700 transition-colors duration-200 text-sm"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(37, 99, 235, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-lg shadow transition duration-200"
          >
            Get A Quote
          </motion.a>
        </nav>

        {/* Mobile Hamburger Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.85 }}
          className="md:hidden text-slate-700 hover:text-blue-600 focus:outline-none p-1 rounded-md"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-3 shadow-lg overflow-hidden"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={linkVariants}
                whileTap={{ x: 5 }}
                onClick={() => setIsOpen(false)}
                className="block font-medium text-slate-700 hover:text-blue-600 py-1 text-base transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              variants={linkVariants}
              href="#contact"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md shadow mt-2 transition-colors"
            >
              Get A Quote
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}