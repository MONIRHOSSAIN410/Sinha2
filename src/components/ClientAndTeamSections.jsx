
import { motion } from 'framer-motion';
import { Star, Building2 } from 'lucide-react';
import { useCompany } from './CompanyContext';

//  UserCheck, Users,
// Client Section
export function DynamicClients() {
  const { companyData } = useCompany();

  return (
    <section className="py-12 bg-slate-950 text-white border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-8">
          Trusted By Industry Leaders
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companyData.clients.map((client) => (
            <motion.div 
              key={client.id}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-6 py-3 rounded-xl shadow-sm"
            >
              <Building2 className="w-6 h-6 text-blue-500" />
              <span className="font-bold text-slate-200">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Client Reviews Section
export function DynamicReviews() {
  const { companyData } = useCompany();

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl font-extrabold sm:text-4xl mt-2">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companyData.reviews.map((rev) => (
            <motion.div 
              key={rev.id}
              whileHover={{ y: -5 }}
              className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-lg relative"
            >
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-6">"{rev.comment}"</p>
              <div>
                <h4 className="font-bold text-white">{rev.clientName}</h4>
                <p className="text-xs text-blue-400">{rev.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Team Section
export function DynamicTeam() {
  const { companyData } = useCompany();

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Our Experts</span>
          <h2 className="text-3xl font-extrabold sm:text-4xl mt-2">Meet The Leadership Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyData.team.map((member) => (
            <motion.div 
              key={member.id}
              whileHover={{ y: -6 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold text-white">{member.name}</h4>
                <p className="text-xs text-blue-400 mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}