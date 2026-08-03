
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Fixed imports: Default imports used to prevent undefined component errors
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About'; // Added missing About import
import Products from './components/Products';
import Services from './components/Services';

import Footer from './components/Footer';
import Contact from './components/Contect';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
    <Navbar/>
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Services />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}