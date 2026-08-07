
import { CompanyProvider, useCompany } from './components/CompanyContext';
import { DynamicClients, DynamicReviews, DynamicTeam } from './components/ClientAndTeamSections';
import AdminPanel from './components/AdminPanel';
import About from './components/About';
import Contact from './components/Contect';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function AppContent() {
  const { companyData } = useCompany();

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Existing Sections dynamically connected */}
      <Navbar/>
      <Hero companyName={companyData.name} address={companyData.address.hq} />
      <DynamicClients />
      <About />
      <DynamicTeam />
      <DynamicReviews />
      <Contact companyAddress={companyData.address} />
      <Footer companyName={companyData.name} />

      {/* Live Admin Interface */}
      <AdminPanel />
    </div>
  );
}

export default function App() {
  return (
    <CompanyProvider>
      <AppContent />
    </CompanyProvider>
  );
}