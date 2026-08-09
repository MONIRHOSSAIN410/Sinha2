import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Website',
    budget: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      to_email: 'sinhatechltd97@gmail.com', // Direct recipient email target
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      budget: formData.budget,
      message: formData.message,
    };

    // Utilizing toast.promise for dynamic real-time feedback
    const sendEmailPromise = emailjs.send(
      'YOUR_SERVICE_ID',  // Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
      templateParams,
      'YOUR_PUBLIC_KEY'   // Replace with your EmailJS Public Key
    );

    toast.promise(
      sendEmailPromise,
      {
        pending: 'Sending message to sinhatechltd97@gmail.com...',
        success: 'Inquiry submitted successfully! We will get back to you soon. 👌',
        error: 'Failed to send message. Please check your network and try again. 🤯',
      },
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      }
    )
    .then(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Website',
        budget: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  // Animation Variants
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const infoItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
    },
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-950 text-white overflow-hidden">
      {/* Background Ambient Dynamic Glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 -left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-10 -right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Info Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={leftColumnVariants}
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl font-extrabold sm:text-4xl mt-2 mb-6">
              Send Your Query or Request a Callback
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed text-sm">
              Ready to modernize your infrastructure or deploy standard enterprise software? Reach out to our expert engineering team today.
            </p>

            <div className="space-y-6">
              <motion.div variants={infoItemVariants} className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-slate-100">Bangladesh HQ</h4>
                  <p className="text-slate-300 text-xs">
                    Khilkhet, Dhaka – 1229, Bangladesh
                  </p>
                </div>
              </motion.div>

              <motion.div variants={infoItemVariants} className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-slate-100">UK Office</h4>
                  <p className="text-slate-300 text-xs">
                    London, United Kingdom
                  </p>
                </div>
              </motion.div>

              <motion.div variants={infoItemVariants} className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-slate-100">Phone</h4>
                  <p className="text-slate-300 text-xs">+880 1970 360763</p>
                </div>
              </motion.div>

              <motion.div variants={infoItemVariants} className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-slate-100">Email</h4>
                  <p className="text-blue-400 text-xs font-semibold">sinhatechltd97@gmail.com</p>
                </div>
              </motion.div>

              <motion.div variants={infoItemVariants} className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-slate-100">Business Hours</h4>
                  <p className="text-slate-300 text-xs">Saturday – Friday: 9:00 AM – 6:00 PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={formVariants}
            className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Get a Free Consultation</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 17..."
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Product / Interest *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  >
                    <option value="Website">Website</option>
                    <option value="Fusion LedgerKey">Fusion LedgerKey</option>
                    <option value="Fusion SourcingPro">Fusion SourcingPro</option>
                    <option value="Fusion RMG ERP">Fusion RMG ERP</option>
                    <option value="Pulse HR">Pulse HR</option>
                    <option value="Fusion LCentra">Fusion LCentra</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="AI / Automation">AI / Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Budget (USD)</label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g. 1000"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Message *</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirement..."
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Sending Request...' : 'Send Message'}
                <motion.div
                  animate={{ x: loading ? [0, 5, 0] : 0 }}
                  transition={{ repeat: loading ? Infinity : 0, duration: 0.6 }}
                >
                  <Send className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}