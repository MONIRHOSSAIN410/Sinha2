import { useState } from 'react';
import { useCompany } from './CompanyContext';
import { Settings, Plus, Save } from 'lucide-react';

export default function AdminPanel() {
  const { companyData, updateCompanyInfo, addClient, addReview, addTeamMember } = useCompany();
  const [isOpen, setIsOpen] = useState(false);

  // Local Form States
  const [info, setInfo] = useState({ name: companyData.name, hq: companyData.address.hq });
  const [newClient, setNewClient] = useState({ name: '' });
  const [newReview, setNewReview] = useState({ clientName: '', company: '', comment: '', rating: 5 });
  const [newTeam, setNewTeam] = useState({ name: '', role: '', image: '' });

  const handleUpdateInfo = (e) => {
    e.preventDefault();
    updateCompanyInfo({
      name: info.name,
      address: { ...companyData.address, hq: info.hq }
    });
    alert('Company Details Updated!');
  };

  const handleAddClient = (e) => {
    e.preventDefault();
    if (newClient.name) {
      addClient(newClient);
      setNewClient({ name: '' });
    }
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (newReview.clientName && newReview.comment) {
      addReview(newReview);
      setNewReview({ clientName: '', company: '', comment: '', rating: 5 });
    }
  };

  const handleAddTeam = (e) => {
    e.preventDefault();
    if (newTeam.name) {
      addTeamMember(newTeam);
      setNewTeam({ name: '', role: '', image: '' });
    }
  };

  return (
    <>
      {/* Floating Admin Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-blue-500 transition"
      >
        <Settings className="w-6 h-6 animate-spin-slow" />
      </button>

      {/* Modal Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-end">
          <div className="bg-slate-900 w-full max-w-md h-full overflow-y-auto p-6 text-white border-l border-slate-800">
            <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold">Admin Control Center</h3>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            {/* 1. Edit General Info */}
            <form onSubmit={handleUpdateInfo} className="mb-8 space-y-4">
              <h4 className="font-semibold text-blue-400">General Info</h4>
              <div>
                <label className="text-xs text-slate-400">Company Name</label>
                <input 
                  type="text" 
                  value={info.name} 
                  onChange={(e) => setInfo({ ...info, name: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm text-white" 
                />
              </div>
              <div>
                <label className="text-xs text-slate-400">HQ Address</label>
                <input 
                  type="text" 
                  value={info.hq} 
                  onChange={(e) => setInfo({ ...info, hq: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm text-white" 
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 py-2 rounded text-sm font-semibold flex items-center justify-center gap-2">
                <Save className="w-4 h-4" /> Save General Info
              </button>
            </form>

            {/* 2. Add Client */}
            <form onSubmit={handleAddClient} className="mb-8 space-y-4 border-t border-slate-800 pt-4">
              <h4 className="font-semibold text-blue-400">Add New Client</h4>
              <input 
                type="text" 
                placeholder="Client / Company Name" 
                value={newClient.name} 
                onChange={(e) => setNewClient({ name: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm text-white" 
              />
              <button type="submit" className="w-full bg-slate-800 border border-slate-700 hover:bg-slate-700 py-2 rounded text-sm font-semibold flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Add Client
              </button>
            </form>

            {/* 3. Add Client Review */}
            <form onSubmit={handleAddReview} className="mb-8 space-y-4 border-t border-slate-800 pt-4">
              <h4 className="font-semibold text-blue-400">Add Client Review</h4>
              <input 
                type="text" 
                placeholder="Client Name" 
                value={newReview.clientName} 
                onChange={(e) => setNewReview({ ...newReview, clientName: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm text-white" 
              />
              <input 
                type="text" 
                placeholder="Company / Designation" 
                value={newReview.company} 
                onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm text-white" 
              />
              <textarea 
                placeholder="Review comment..." 
                value={newReview.comment} 
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm text-white" 
              />
              <button type="submit" className="w-full bg-slate-800 border border-slate-700 hover:bg-slate-700 py-2 rounded text-sm font-semibold flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Add Review
              </button>
            </form>

            {/* 4. Add Team Member */}
            <form onSubmit={handleAddTeam} className="space-y-4 border-t border-slate-800 pt-4">
              <h4 className="font-semibold text-blue-400">Add Team Member</h4>
              <input 
                type="text" 
                placeholder="Full Name" 
                value={newTeam.name} 
                onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm text-white" 
              />
              <input 
                type="text" 
                placeholder="Role / Designation" 
                value={newTeam.role} 
                onChange={(e) => setNewTeam({ ...newTeam, role: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm text-white" 
              />
              <input 
                type="text" 
                placeholder="Image URL" 
                value={newTeam.image} 
                onChange={(e) => setNewTeam({ ...newTeam, image: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-sm text-white" 
              />
              <button type="submit" className="w-full bg-slate-800 border border-slate-700 hover:bg-slate-700 py-2 rounded text-sm font-semibold flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Add Team Member
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}