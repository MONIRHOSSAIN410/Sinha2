import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { CompanyProvider, useCompany } from "./components/CompanyContext";
import AuthPage from "./components/Authpage";
import PlatformSection from "./components/PlatformSection";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Products = lazy(() => import("./components/Products"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contect"));
const Footer = lazy(() => import("./components/Footer"));
// const PaymentGateways = lazy(() => import("./components/PaymentGateways"));

function Home() {
  const { companyData } = useCompany();
  return (
    <>
      <Hero />
      <About />
      <Products />
      <PlatformSection/>
      {/* <PaymentGateways/> */}
      <Services />
      <Contact companyAddress={companyData?.address} />
    </>
  );
}

function AppContent() {
  const { companyData } = useCompany();

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        <Footer companyName={companyData?.name} />
      </Suspense>
    </Router>
  );
}

export default function App() {
  return (
    <CompanyProvider>
      <AppContent />
    </CompanyProvider>
  );
}