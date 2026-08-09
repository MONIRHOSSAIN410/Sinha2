import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlayCircle, 
  FileText, 
  Download, 
  GraduationCap, 
  CreditCard, 
  CheckCircle2, 
  Video, 
  Clock, 
  Check, 
  File, 
  Users, 
  ShieldCheck, 
  Star 
} from 'lucide-react';

// --- Payment Logo Components ---
const GPayLogo = () => (
  <div className="flex items-center gap-1.5">
    <svg width="20" height="20" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.64 24.55c0-1.65-.15-3.23-.42-4.75H24v9h12.75c-.55 2.89-2.18 5.33-4.64 7l7.25 5.64C43.61 37.5 46.64 31.62 46.64 24.55z"/>
      <path fill="#FBBC05" d="M10.54 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.98-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.25-5.64c-2.2 1.47-5.01 2.35-8.64 2.35-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
    <span className="font-semibold text-white">Pay</span>
  </div>
);

const VisaLogo = () => (
  <span className="font-bold text-lg text-blue-400 tracking-wider">VISA</span>
);

const MastercardLogo = () => (
  <div className="flex -space-x-2 items-center">
    <div className="w-5 h-5 rounded-full bg-[#EB001B]"></div>
    <div className="w-5 h-5 rounded-full bg-[#F79E1B] opacity-90"></div>
  </div>
);

const BKashLogo = () => (
  <div className="flex items-center gap-1">
    <svg width="22" height="18" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M95 35.5C95 55.1 79.1 71 59.5 71C39.9 71 24 55.1 24 35.5C24 15.9 39.9 0 59.5 0C79.1 0 95 15.9 95 35.5Z" fill="#E2136E"/>
      <path d="M25.5 56C25.5 69.8 14.3 81 0.5 81C-13.3 81 -24.5 69.8 -24.5 56C-24.5 42.2 -13.3 31 0.5 31C14.3 31 25.5 42.2 25.5 56Z" fill="#E2136E"/>
      <path d="M57.5 12C57.5 16.7 53.7 20.5 49 20.5C44.3 20.5 40.5 16.7 40.5 12C40.5 7.3 44.3 3.5 49 3.5C53.7 3.5 57.5 7.3 57.5 12Z" fill="#E2136E"/>
      <path d="M47.5 35L29 53.5L34 58.5L47.5 45L61 58.5L66 53.5L47.5 35Z" fill="white"/>
    </svg>
    <span className="font-bold text-sm text-[#E2136E]">bKash</span>
  </div>
);

// --- Data Definitions ---

const tabs = [
  { id: 'courses', name: 'Courses', icon: PlayCircle },
  { id: 'quiz', name: 'Quiz & Assignments', icon: FileText },
  { id: 'downloads', name: 'Digital Downloads', icon: Download },
  { id: 'academy', name: 'Online Academy', icon: GraduationCap },
  { id: 'payments', name: 'Payment Gateways', icon: CreditCard },
];

const sectionData = {
  courses: {
    title: 'Interactive Video Courses',
    description: 'Deliver engaging video lectures, drip content automatically, track student progress in real-time, and host live sessions effortlessly.',
    bullets: ['4K Video Hosting', 'Drip Content Scheduling', 'Automated Progress Tracking', 'Subtitles & Multilingual'],
  },
  quiz: {
    title: 'Quizzes & Assignments',
    description: 'Evaluate student performance with automated multiple-choice quizzes, open-ended assignments, instant grading, and detailed feedback.',
    bullets: ['Automated Grading', 'Time-Limited Quizzes', 'Custom Feedback Engine', 'Plagiarism Detection'],
  },
  downloads: {
    title: 'Digital Downloads & Assets',
    description: 'Sell downloadable resources directly to your audience—PDF guides, code templates, ebooks, audio files, and design assets securely.',
    bullets: ['Instant File Delivery', 'Secure Watermarking', 'License Key Generation', 'Unlimited Bandwidth'],
  },
  academy: {
    title: 'Complete Online Academy',
    description: 'Scale your education brand with custom domains, multiple instructor accounts, branded certificates, and student communities.',
    bullets: ['Custom Domain & Branding', 'Multi-Instructor Roles', 'Verified Completion Certificates', 'Community Discussion Forums'],
  },
  payments: {
    title: 'Payment Gateways',
    description: "Choose from Klasio's built-in payment gateways or add your preferred system. Klasio allows integration of both automatic and manual payment options.",
    bullets: ['No Commission', 'Custom Gateways', 'Secure Transaction', 'Order Approval'],
  },
};

const paymentMethods = [
  { id: 1, logo: GPayLogo, desc: 'Fast and Efficient' },
  { id: 2, logo: VisaLogo, desc: 'Get international payments' },
  { id: 3, logo: MastercardLogo, desc: 'Credit & debit payments' },
  { id: 4, logo: BKashLogo, desc: 'Best for mobile banking' },
];

// --- Animation Variants ---

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const contentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
};

const mockCardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { delay: 0.1, duration: 0.4 } },
};

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState('payments');

  // Payment Row Helper Component
  const PaymentMethodRow = ({ Logo, desc, isFirst }) => (
    <div className={`flex items-center justify-between p-4 py-3 bg-slate-900/80 rounded-xl border transition-all ${isFirst ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' : 'border-slate-800'}`}>
      <div className="flex items-center gap-4">
        <div className="w-20 flex justify-center items-center">
          <Logo />
        </div>
        <p className="text-sm text-slate-400 whitespace-nowrap">{desc}</p>
      </div>
      <button className="text-xs font-semibold px-4 py-1.5 border border-slate-700 rounded-full text-slate-200 hover:bg-blue-600 hover:border-blue-600 transition duration-150">
        Connect
      </button>
    </div>
  );

  return (
    <section className="relative bg-slate-950 py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans text-white overflow-hidden">
      
      {/* Background Accent Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
            variants={itemVariants}
          >
            One place to build, teach and grow.
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed"
            variants={itemVariants}
          >
            Everything you need to launch and run your courses. You teach, we handle the tech.
          </motion.p>
        </div>

        {/* Navigation Tabs */}
        <motion.div 
          className="border border-slate-800/80 rounded-2xl p-2 mb-16 md:mb-20 bg-slate-900/60 backdrop-blur-md shadow-xl"
          variants={itemVariants}
        >
          <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-3 px-6 py-4 rounded-xl text-base font-medium transition-all duration-300 ease-in-out flex-grow md:flex-grow-0 whitespace-nowrap ${
                    isActive
                      ? 'text-white shadow-lg'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <Icon className={`w-6 h-6 shrink-0 relative z-10 ${isActive ? 'text-white' : 'text-slate-400'}`} strokeWidth={1.5} />
                  <span className="relative z-10">{tab.name}</span>
                  
                  {isActive && (
                    <motion.div 
                      className="absolute inset-0 bg-blue-600 rounded-xl z-0"
                      layoutId="activeTabBackground"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* LEFT COLUMN: Visual UI Mockup per Tab */}
            <motion.div 
              className="bg-slate-900/70 backdrop-blur-md rounded-3xl p-6 lg:p-10 border border-slate-800 relative overflow-hidden shadow-2xl"
              variants={mockCardVariants}
            >
              {/* Courses Visual */}
              {activeTab === 'courses' && (
                <div className="space-y-4">
                  <div className="relative aspect-video rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent z-10" />
                    <PlayCircle className="w-16 h-16 text-blue-500 relative z-20 group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute bottom-3 left-4 text-xs font-semibold text-slate-300 z-20 flex items-center gap-2">
                      <Video className="w-4 h-4 text-blue-400" /> Lesson 04: Advanced React Architecture
                    </span>
                  </div>
                  <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-xs font-medium text-white">Course Progress</p>
                        <p className="text-[10px] text-slate-400">12 of 16 Lessons Completed</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-400">75%</span>
                  </div>
                </div>
              )}

              {/* Quiz & Assignments Visual */}
              {activeTab === 'quiz' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h4 className="text-sm font-semibold text-white">Module 3 Assessment</h4>
                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">Passed</span>
                  </div>
                  <div className="space-y-2">
                    {['1. What is the main benefit of React Server Components?', '2. Explain state lifting in Framer Motion.'].map((q, i) => (
                      <div key={i} className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 text-xs text-slate-300">
                        <p className="font-medium text-white mb-1">{q}</p>
                        <div className="flex items-center gap-2 text-[10px] text-slate-400">
                          <Check className="w-3 h-3 text-emerald-400" /> Correct answer recorded
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-blue-600/10 rounded-xl border border-blue-500/20 flex justify-between items-center">
                    <span className="text-xs text-slate-300">Total Grade Score</span>
                    <span className="text-sm font-bold text-blue-400">98 / 100</span>
                  </div>
                </div>
              )}

              {/* Digital Downloads Visual */}
              {activeTab === 'downloads' && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white mb-4">Available Downloadable Assets</h4>
                  {[
                    { name: 'UI-Design-System-Kit.fig', size: '142 MB', type: 'Figma Asset' },
                    { name: 'Full-Stack-Starter-Code.zip', size: '28 MB', type: 'Source Code' },
                    { name: 'Course-Ebook-Guide.pdf', size: '12 MB', type: 'PDF Ebook' },
                  ].map((file, i) => (
                    <div key={i} className="flex items-center justify-between p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-3">
                        <File className="w-5 h-5 text-purple-400" />
                        <div>
                          <p className="text-xs font-semibold text-white">{file.name}</p>
                          <p className="text-[10px] text-slate-400">{file.type} • {file.size}</p>
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                    </div>
                  ))}
                </div>
              )}

              {/* Online Academy Visual */}
              {activeTab === 'academy' && (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      ST
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Sinha Tech Academy</h4>
                      <p className="text-xs text-slate-400">academy.sinhatech.com</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                      <Users className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                      <p className="text-sm font-bold text-white">2.4k</p>
                      <p className="text-[10px] text-slate-400">Students</p>
                    </div>
                    <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                      <Star className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                      <p className="text-sm font-bold text-white">4.9</p>
                      <p className="text-[10px] text-slate-400">Rating</p>
                    </div>
                    <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                      <p className="text-sm font-bold text-white">100%</p>
                      <p className="text-[10px] text-slate-400">Verified</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Gateways Visual */}
              {activeTab === 'payments' && (
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-white mb-6 px-1">Payment Gateways</h4>
                  {paymentMethods.map((method, index) => (
                    <PaymentMethodRow
                      key={method.id}
                      Logo={method.logo}
                      desc={method.desc}
                      isFirst={index === 0}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* RIGHT COLUMN: Feature Description & Bullet Points */}
            <div className="space-y-8">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                variants={itemVariants}
              >
                {sectionData[activeTab]?.title}
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-400 leading-relaxed font-normal"
                variants={itemVariants}
              >
                {sectionData[activeTab]?.description}
              </motion.p>
              
              <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 pt-4" variants={itemVariants}>
                {sectionData[activeTab]?.bullets.map((point) => (
                  <li key={point} className="flex items-center gap-3.5">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" strokeWidth={2.5} />
                    <span className="text-base font-medium text-slate-200">{point}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}