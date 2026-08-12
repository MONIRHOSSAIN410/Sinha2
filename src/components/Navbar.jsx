import { useState } from 'react';
import { Menu, X, Phone, Mail, User, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";

// Default logo asset import with dynamic fallback option
import DefaultLogo from "../assets/images/logo.png";

export default function Navbar({ onNavigate, user, logoSrc }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  // Resolve dynamic logo path with fallback support
  const activeLogo = logoSrc || DefaultLogo;

  const navLinks = [
    { name: 'Home', href: '#home', page: 'home' },
    { name: 'About Us', href: '#about', page: 'home' },
    { name: 'Products', href: '#products', page: 'home' },
    { name: 'Services', href: '#services', page: 'home' },
    { name: 'Contact', href: '#contact', page: 'home' },
  ];

  const handleNavClick = (page, href) => {
    setIsOpen(false);
    
    if (onNavigate) {
      onNavigate(page);
    }

    if (page === 'home' && href) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleAuthClick = () => {
    setIsOpen(false);
    
    if (user) {
      if (onNavigate) {
        onNavigate('profile'); 
      } else {
        navigate('/profile');
      }
    } else {
      if (onNavigate) {
        onNavigate('auth');
      } else {
        navigate('/auth');
      }
    }
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  const topBarVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, staggerChildren: 0.1 } 
    }
  };

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

  const linkVariants = {
    closed: { opacity: 0, x: -15 },
    open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.header 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-2xl transition-colors duration-300"
    >
      {/* Top Bar with subtle dynamic background tone */}
      <motion.div 
        variants={topBarVariants}
        className="bg-slate-900/90 text-slate-300 text-xs py-2 px-4 sm:px-8 flex justify-between items-center border-b border-slate-800/60"
      >
        <div className="flex items-center gap-4">
          <motion.a 
            href="tel:+8801970360763" 
            whileHover={{ scale: 1.03, x: 2 }}
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400 animate-pulse" /> +880 1970 360763
          </motion.a>
          <motion.a 
            href="mailto:sinhatechltd97@gmail.com" 
            whileHover={{ scale: 1.03, x: 2 }}
            className="hidden sm:flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-indigo-400" /> sinhatechltd97@gmail.com
          </motion.a>
        </div>
        <motion.div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping hidden sm:inline-block" />
          <span className="text-slate-400">Sat - Fri: <strong className="text-slate-200 font-normal">9:00 AM - 6:00 PM</strong></span>
        </motion.div>
      </motion.div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center relative">
        
        {/* Dynamic Logo Container */}
        <motion.a 
          href="#home" 
          onClick={() => handleNavClick('home', '#home')}
          className="flex items-center gap-2 cursor-pointer group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {!imgError && activeLogo ? (
            <img 
              src={activeLogo} 
              onError={() => setImgError(true)}
              alt="Sinha Technology Logo" 
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_18px_rgba(99,102,241,0.5)] transition-all duration-300" 
            />
          ) : (
            /* Dynamic Vector Fallback Brand Badge */
            <div className="flex items-center gap-2 bg-gradient-to-r from-slate-900 to-slate-950 p-2 rounded-xl border border-blue-500/30 group-hover:border-blue-400/60 shadow-lg shadow-blue-500/10 transition-all">
              <div className="p-1.5 bg-blue-600/20 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
                  SINHA TECH
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">
                  Innovations
                </span>
              </div>
            </div>
          )}
        </motion.a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.page, link.href)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="relative font-medium text-slate-300 hover:text-white transition-colors duration-200 text-sm cursor-pointer group py-1"
            >
              {link.name}
              {/* Dynamic glowing bar on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full" />
            </motion.a>
          ))}

          {/* Login or Account Button */}
          <motion.button
            onClick={handleAuthClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden flex items-center gap-2 border border-blue-500/40 hover:border-blue-400/80 text-blue-300 hover:text-white bg-slate-900/80 font-medium text-sm px-4 py-2 rounded-xl shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <User className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors relative z-10" />
            <span className="relative z-10">{user ? user.name || 'Account' : 'Login'}</span>
          </motion.button>
        </nav>

        {/* Mobile Hamburger Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.85 }}
          className="md:hidden text-slate-300 hover:text-blue-400 focus:outline-none p-1.5 bg-slate-900/80 rounded-xl border border-slate-800"
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
                <X className="w-6 h-6 text-blue-400" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="w-6 h-6 text-slate-200" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Animated Dynamic Bottom Gradient Accent Bar */}
      <motion.div 
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        className="h-[1.5px] w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] opacity-60"
      />

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 px-5 pt-4 pb-6 space-y-3 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={linkVariants}
                whileTap={{ x: 5 }}
                onClick={() => handleNavClick(link.page, link.href)}
                className="block font-medium text-slate-300 hover:text-blue-400 py-1.5 text-base transition-colors cursor-pointer border-b border-slate-900/60"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.button
              variants={linkVariants}
              onClick={handleAuthClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 border border-blue-500/40 text-blue-300 bg-slate-900/80 hover:bg-slate-800 font-medium py-2.5 rounded-xl transition-all duration-200 cursor-pointer shadow-md mt-2"
            >
              <User className="w-4 h-4 text-blue-400" />
              {user ? user.name || 'Account' : 'Login'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}