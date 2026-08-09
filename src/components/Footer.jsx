import { motion } from 'framer-motion';

function Footer() {
  // Animation Variants
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

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const linkHoverVariants = {
    hover: { x: 4, transition: { duration: 0.2, ease: 'easeOut' } },
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-sm overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
      >
        {/* Brand Info Column */}
        <motion.div variants={columnVariants}>
          <h3 className="text-white font-bold text-lg mb-3 tracking-wide">SINHA TECHNOLOGY</h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Innovating futures and delivering excellence. Bespoke software engineering and enterprise digital solutions.
          </p>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} SinhaTechnology. All rights reserved.</p>
        </motion.div>

        {/* Our Products Column */}
        <motion.div variants={columnVariants}>
          <h4 className="text-white font-semibold mb-3">Our Products</h4>
          <ul className="space-y-2 text-xs">
            {['Bulk SMS Service', 'Fusion Cloud', 'Ai Services', 'Cloud Domain', 'SaaS Technology'].map((item) => (
              <motion.li key={item} whileHover="hover">
                <motion.a
                  variants={linkHoverVariants}
                  href="#products"
                  className="inline-block hover:text-blue-400 transition-colors"
                >
                  {item}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Links Column */}
        <motion.div variants={columnVariants}>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About Us', href: '#about' },
              { label: 'Services', href: '#services' },
             {label:'Contact', href:'#contact'}
            ].map((link) => (
              <motion.li key={link.label} whileHover="hover">
                <motion.a
                  variants={linkHoverVariants}
                  href={link.href}
                  className="inline-block hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Support Column */}
        <motion.div variants={columnVariants}>
          <h4 className="text-white font-semibold mb-3">Contact Support</h4>
          <p className="text-xs text-slate-400">
            Call 24/7 Support: <br />
            <a href="tel:+8801970360763" className="text-blue-400 font-bold hover:underline inline-block mt-1">
              +88 01970 360763
            </a>
          </p>
          <p className="text-xs text-slate-400 mt-3">
            Email:{' '}
            <a href="mailto:sinhatechltd97@gmail.com" className="hover:text-blue-400 transition-colors">
              sinhatechltd97@gmail.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;