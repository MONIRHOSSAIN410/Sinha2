import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { CompanyProvider, useCompany } from "./components/CompanyContext";
import AuthPage from "./components/Authpage";
import PlatformSection from "./components/PlatformSection";

// Helper: check if an admin is logged in
const isAuthenticated = () => {
  return !!localStorage.getItem("adminSession");
};

// Lazy loaded components
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

// Layout component containing Navbar & Footer (Shared layout for public pages)
function MainLayout() {
  const { companyData } = useCompany();

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer companyName={companyData?.name} />
    </>
  );
}

function AppContent() {
  return (
    <Router>
      <Suspense fallback={<div className="flex h-screen items-center justify-center text-white">Loading...</div>}>
        <Routes>
          {/* Pages that SHOULD have Navbar and Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* Standalone Login Page (NO Navbar / Footer) */}
          <Route path="/login" element={<AuthPage />} />

          {/* Catch all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
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