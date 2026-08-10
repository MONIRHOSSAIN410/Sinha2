import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
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

function Home() {
  const { companyData } = useCompany();
  return (
    <>
      <Hero />
      <About />
      <Products />
      <PlatformSection />
      <Services />
      <Contact companyAddress={companyData?.address} />
    </>
  );
}

// 1. Create a Layout component containing Navbar & Footer
function MainLayout() {
  const { companyData } = useCompany();

  return (
    <>
      <Navbar />
      {/* <Outlet /> renders the active child route (e.g. <Home />) */}
      <Outlet />
      <Footer companyName={companyData?.name} />
    </>
  );
}

function AppContent() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Auth page sits outside MainLayout -> No Navbar or Footer */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Pages wrapped inside MainLayout -> Have Navbar & Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            {/* Add any other pages here that need Navbar & Footer */}
          </Route>
        </Routes>
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