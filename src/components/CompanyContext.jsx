import { createContext, useContext, useState } from 'react';

const initialCompanyData = {
  name: 'Sinha Technology Ltd.',
  tagline: 'Sinha — Technology-Ltd',
  description: 'Sinha Technology Ltd. is an IT and software development agency that delivers scalable digital solutions for modern businesses.',
  phone: '+880 1970 360763',
  email: 'sinhatechltd97@gmail.com',
  address: {
    hq: 'Khilkhet, Dhaka – 1229, Bangladesh',
    uk: 'London, United Kingdom'
  },
  hours: 'Saturday – Friday: 9:00 AM – 6:00 PM',
  clients: [
    { id: 1, name: 'Apex Manufacturing', logo: 'https://via.placeholder.com/150?text=Apex' },
    { id: 2, name: 'Global Sourcing Pro', logo: 'https://via.placeholder.com/150?text=GlobalSourcing' },
    { id: 3, name: 'Fusion Textiles', logo: 'https://via.placeholder.com/150?text=FusionTextiles' }
  ],
  reviews: [
    { id: 1, clientName: 'Sarah Jenkins', company: 'Apex Manufacturing', rating: 5, comment: 'Sinha Technology delivered our custom ERP solution on time and strictly under budget.' },
    { id: 2, clientName: 'Rafiqul Islam', company: 'Global Sourcing', rating: 5, comment: 'Their Pulse HR and bulk messaging software transformed our operational efficiency.' }
  ],
  team: [
    { id: 1, name: 'Tanvir Sinha', role: 'Founder & Managing Director', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300' },
    { id: 2, name: 'Rahim Ahmed', role: 'Head of Software Engineering', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' },
   
  
  ]
};

const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const [companyData, setCompanyData] = useState(initialCompanyData);

  const updateCompanyInfo = (newInfo) => {
    setCompanyData((prev) => ({ ...prev, ...newInfo }));
  };

  const addClient = (client) => {
    setCompanyData((prev) => ({ ...prev, clients: [...prev.clients, { ...client, id: Date.now() }] }));
  };

  const addReview = (review) => {
    setCompanyData((prev) => ({ ...prev, reviews: [...prev.reviews, { ...review, id: Date.now() }] }));
  };

  const addTeamMember = (member) => {
    setCompanyData((prev) => ({ ...prev, team: [...prev.team, { ...member, id: Date.now() }] }));
  };

  return (
    <CompanyContext.Provider value={{ companyData, updateCompanyInfo, addClient, addReview, addTeamMember }}>
      {children}
    </CompanyContext.Provider>
  );
}

export const useCompany = () => useContext(CompanyContext);