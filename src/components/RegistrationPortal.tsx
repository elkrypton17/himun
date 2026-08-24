import React, { useState } from 'react';
import { 
  User, Search, Download, CheckCircle, ChevronRight, ChevronLeft, CreditCard 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RegistrationData, DelegateType, Addon } from '../types';

const SquigglyUnderline = ({ color = '#FCD116' }: { color?: string }) => (
  <svg 
    className="absolute -bottom-3 left-0 w-full h-4 overflow-visible" 
    viewBox="0 0 200 12" 
    preserveAspectRatio="none"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 9.5C18 -0.5 45 -1.5 60 7.5C75 16.5 95 3.5 110 5.5C130 8.5 150 -2.5 170 5.5C185 11.5 195 2.5 198 5.5" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 11.5C30 9.5 70 12.5 100 11.5C140 10.5 180 12.5 195 10.5" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
  </svg>
);

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function RegistrationPortal() {
  const [step, setStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'register' | 'track'>('register');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [foundApplication, setFoundApplication] = useState<any | null>(null);
  const [searchError, setSearchError] = useState<string>('');

  // Form states
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    country: 'Ghana',
    institution: '',
    delegateType: 'local',
    primaryCommittee: 'unsc',
    secondaryCommittee: 'disec',
    dietaryRequirements: 'None',
    selectedAddons: [],
    paymentMethod: 'momo',
    paymentReference: ''
  });

  const [regId, setRegId] = useState<string>('');

  const addons: Addon[] = [
    { id: 'gala', name: 'Premium Executive Gala Night', price: '$40', description: 'VIP access to the Grand Gala and Networking Cocktail.' },
    { id: 'tour', name: 'Extra Accra Heritage City Tour', price: '$25', description: 'Extended full-day guided excursion to historic sights of Accra.' },
    { id: 'workshop', name: 'UN Diplomatic Training Masterclass', price: '$50', description: 'Exclusive training certificate signed by actual United Nations fellows.' }
  ];

  // Pricing helper
  const getBasePrice = (type: DelegateType) => {
    if (type === 'local') return 200;
    if (type === 'international') return 350;
    return 120;
  };

  const getAddonPrice = (addonId: string) => {
    const addon = addons.find(a => a.id === addonId);
    if (!addon) return 0;
    return parseInt(addon.price.replace('$', ''));
  };

  const calculateTotal = () => {
    const base = getBasePrice(formData.delegateType);
    const addonsTotal = formData.selectedAddons.reduce((acc, curr) => acc + getAddonPrice(curr), 0);
    return base + addonsTotal;
  };

  // Step Navigators
  const nextStep = () => {
    if (step === 1 && !formData.delegateType) return;
    if (step === 2 && (!formData.fullName || !formData.email || !formData.phone || !formData.institution)) {
      alert('Please fill in all required fields.');
      return;
    }
    setStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const toggleAddon = (id: string) => {
    const isSelected = formData.selectedAddons.includes(id);
    if (isSelected) {
      setFormData({
        ...formData,
        selectedAddons: formData.selectedAddons.filter(a => a !== id)
      });
    } else {
      setFormData({
        ...formData,
        selectedAddons: [...formData.selectedAddons, id]
      });
    }
  };

  // Submit and Persist
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `HIMUN-26-${Math.floor(1000 + Math.random() * 9000)}`;
    setRegId(generatedId);

    const submission = {
      ...formData,
      registrationId: generatedId,
      totalAmount: calculateTotal(),
      status: 'Pending Verification',
      submittedAt: new Date().toLocaleDateString()
    };

    // Save to localStorage
    const currentRegs = JSON.parse(localStorage.getItem('himun_registrations') || '[]');
    currentRegs.push(submission);
    localStorage.setItem('himun_registrations', JSON.stringify(currentRegs));

    setStep(5); // Show Success Screen
  };

  // Track Application Look Up
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError('');
    setFoundApplication(null);

    if (!searchQuery.trim()) {
      setSearchError('Please provide a valid Registration ID or Email address.');
      return;
    }

    const currentRegs = JSON.parse(localStorage.getItem('himun_registrations') || '[]');
    const query = searchQuery.trim().toLowerCase();
    
    const result = currentRegs.find(
      (r: any) => r.registrationId.toLowerCase() === query || r.email.toLowerCase() === query
    );

    if (result) {
      setFoundApplication(result);
    } else {
      setSearchError('No registration record found matching that credentials. Please double check.');
    }
  };

  return (
    <section className="relative w-full bg-slate-50 font-sans text-slate-900 pb-32 pt-32 min-h-screen overflow-hidden">
      
      {/* Floating Neo-Brutalist Shapes */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-20 left-[10%] hidden lg:flex items-center justify-center w-24 h-24 bg-[#FCD116] rounded-xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] z-0 transform -rotate-12"
      >
        <span className="font-black text-4xl text-slate-900">!</span>
      </motion.div>
      
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
        className="absolute top-40 right-[15%] hidden lg:block z-0 opacity-60"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-[#C01A1A]">
          <path d="M50 0L61.2257 38.7743L100 50L61.2257 61.2257L50 100L38.7743 61.2257L0 50L38.7743 38.7743L50 0Z" fill="currentColor" stroke="#0f172a" strokeWidth="4" />
        </svg>
      </motion.div>
      {/* Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="text-center max-w-3xl mx-auto mb-16 px-4 md:px-8"
      >
        <h4 className="inline-block px-4 py-1 bg-slate-900 text-[#FCD116] text-xs font-black uppercase tracking-widest mb-4 border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">SECURE YOUR SEAT</h4>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Delegate <span className="relative inline-block text-[#C01A1A]">Registration<SquigglyUnderline color="#C01A1A" /></span>
        </h2>
      </motion.div>

      {/* Selector Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center mb-12"
      >
        <div className="bg-white rounded-2xl p-2 flex gap-2 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
          <button
            onClick={() => { setActiveTab('register'); setStep(1); }}
            className={`px-8 py-3 rounded-xl font-sans text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border-2 ${
              activeTab === 'register' 
                ? 'bg-[#C01A1A] text-white border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]' 
                : 'text-slate-600 border-transparent hover:bg-slate-100'
            }`}
          >
            <User className="w-4 h-4" /> Register Now
          </button>
          
          <button
            onClick={() => { setActiveTab('track'); setFoundApplication(null); setSearchQuery(''); setSearchError(''); }}
            className={`px-8 py-3 rounded-xl font-sans text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border-2 ${
              activeTab === 'track' 
                ? 'bg-[#FCD116] text-slate-900 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]' 
                : 'text-slate-600 border-transparent hover:bg-slate-100'
            }`}
          >
            <Search className="w-4 h-4" /> Track Registration
          </button>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <AnimatePresence mode="wait">
          {activeTab === 'register' ? (
            <motion.div
              key="register-flow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step Navigator */}
              {step < 5 && (
                <div className="mb-10">
                  <div className="flex items-center justify-between text-xs font-black text-slate-900 uppercase tracking-widest mb-3">
                    <span>Step {step} of 4</span>
                    <span className="text-[#C01A1A]">{step === 1 ? 'Delegation Tier' : step === 2 ? 'Personal Details' : step === 3 ? 'Debate Preferences' : 'Review & Payment'}</span>
                  </div>
                  <div className="h-3 bg-white border-2 border-slate-900 rounded-full overflow-hidden flex shadow-inner">
                    <div 
                      className="h-full bg-[#FCD116] border-r-2 border-slate-900 transition-all duration-300"
                      style={{ width: `${(step / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Step 1: Delegate Type Selection */}
              {step === 1 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {/* Local Delegate */}
                    <div 
                      onClick={() => setFormData({ ...formData, delegateType: 'local' })}
                      className={`bg-white rounded-2xl p-8 cursor-pointer relative overflow-hidden transition-all duration-200 flex flex-col justify-between border-4 ${
                        formData.delegateType === 'local' 
                          ? 'border-[#C01A1A] shadow-[8px_8px_0px_0px_rgba(192,26,26,1)] -translate-y-2' 
                          : 'border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1'
                      }`}
                    >
                      <div className="space-y-4">
                        <span className="text-[10px] font-black text-[#C01A1A] border-2 border-[#C01A1A] uppercase tracking-widest bg-white px-3 py-1.5 rounded-full inline-block">
                          West Africa Resident
                        </span>
                        <h4 className="font-black text-2xl text-slate-900 mt-2">Local Delegate</h4>
                        <p className="text-sm font-medium text-slate-600 leading-relaxed">
                          For students resident within Ghana and neighboring ECOWAS states. Includes campus shared-hostel accommodation.
                        </p>
                      </div>
                      <div className="pt-6 border-t-2 border-slate-100 mt-6 flex items-baseline justify-between">
                        <p className="text-3xl font-black text-slate-900">$200 <span className="text-sm font-bold text-slate-400">USD</span></p>
                      </div>
                    </div>

                    {/* International Delegate */}
                    <div 
                      onClick={() => setFormData({ ...formData, delegateType: 'international' })}
                      className={`bg-white rounded-2xl p-8 cursor-pointer relative overflow-hidden transition-all duration-200 flex flex-col justify-between border-4 ${
                        formData.delegateType === 'international' 
                          ? 'border-[#FCD116] shadow-[8px_8px_0px_0px_rgba(252,209,22,1)] -translate-y-2' 
                          : 'border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1'
                      }`}
                    >
                      <div className="space-y-4">
                        <span className="text-[10px] font-black text-slate-900 border-2 border-slate-900 bg-[#FCD116] px-3 py-1.5 rounded-full inline-block uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                          Premium Tier
                        </span>
                        <h4 className="font-black text-2xl text-slate-900 mt-2">International</h4>
                        <p className="text-sm font-medium text-slate-600 leading-relaxed">
                          Includes hotel lodging, airport shuttle assistance, full board dining, and visa support letter.
                        </p>
                      </div>
                      <div className="pt-6 border-t-2 border-slate-100 mt-6 flex items-baseline justify-between">
                        <p className="text-3xl font-black text-slate-900">$350 <span className="text-sm font-bold text-slate-400">USD</span></p>
                      </div>
                    </div>

                    {/* Observer */}
                    <div 
                      onClick={() => setFormData({ ...formData, delegateType: 'observer' })}
                      className={`bg-white rounded-2xl p-8 cursor-pointer relative overflow-hidden transition-all duration-200 flex flex-col justify-between border-4 ${
                        formData.delegateType === 'observer' 
                          ? 'border-slate-800 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] -translate-y-2' 
                          : 'border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1'
                      }`}
                    >
                      <div className="space-y-4">
                        <span className="text-[10px] font-black text-slate-900 border-2 border-slate-900 bg-slate-100 px-3 py-1.5 rounded-full inline-block uppercase tracking-widest">
                          Accredited Visitor
                        </span>
                        <h4 className="font-black text-2xl text-slate-900 mt-2">Observer</h4>
                        <p className="text-sm font-medium text-slate-600 leading-relaxed">
                          Ideal for faculty advisors, journalists, and guests wanting access to open sessions without participating in debate.
                        </p>
                      </div>
                      <div className="pt-6 border-t-2 border-slate-100 mt-6 flex items-baseline justify-between">
                        <p className="text-3xl font-black text-slate-900">$120 <span className="text-sm font-bold text-slate-400">USD</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={nextStep}
                      className="px-8 py-4 bg-[#C01A1A] text-white font-bold text-sm rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex items-center gap-2 hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all"
                    >
                      Next Step <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <div className="bg-white rounded-3xl p-8 sm:p-12 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] space-y-8">
                  <h3 className="font-black text-3xl text-slate-900 border-b-4 border-slate-900 pb-6">
                    Personal Details & Affiliation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Full Legal Name</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors font-bold shadow-sm"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors font-bold shadow-sm"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Phone (WhatsApp)</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors font-bold shadow-sm"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Home Country</label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors font-bold shadow-sm"
                      />
                    </div>

                    <div className="space-y-3 sm:col-span-2">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Academic Institution / Organization</label>
                      <input
                        type="text"
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors font-bold shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-8 border-t-4 border-slate-900 mt-8">
                    <button
                      onClick={prevStep}
                      className="px-8 py-4 bg-white text-slate-900 font-bold text-sm rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all flex items-center gap-2"
                    >
                      <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="px-8 py-4 bg-[#C01A1A] text-white font-bold text-sm rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all flex items-center gap-2"
                    >
                      Next Step <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Committee Preference & Add-ons */}
              {step === 3 && (
                <div className="bg-white rounded-3xl p-8 sm:p-12 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] space-y-8">
                  <h3 className="font-black text-3xl text-slate-900 border-b-4 border-slate-900 pb-6">
                    Committee Choices & Upgrades
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Primary Committee Choice</label>
                      <select
                        value={formData.primaryCommittee}
                        onChange={(e) => setFormData({ ...formData, primaryCommittee: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors font-bold shadow-sm"
                      >
                        <option value="unsc">UNSC (Security Council)</option>
                        <option value="disec">DISEC (Disarmament)</option>
                        <option value="ecofin">ECOFIN (Economic & Finance)</option>
                        <option value="unep">UNEP (Environment)</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Secondary Committee Choice</label>
                      <select
                        value={formData.secondaryCommittee}
                        onChange={(e) => setFormData({ ...formData, secondaryCommittee: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors font-bold shadow-sm"
                      >
                        <option value="disec">DISEC (Disarmament)</option>
                        <option value="unsc">UNSC (Security Council)</option>
                        <option value="ecofin">ECOFIN (Economic & Finance)</option>
                        <option value="unep">UNEP (Environment)</option>
                      </select>
                    </div>
                  </div>

                  {/* Upgrades */}
                  <div className="pt-8 border-t-4 border-slate-900 mt-8 space-y-6">
                    <h4 className="font-black text-xl text-slate-900">Optional Upgrades & Social Events</h4>
                    <div className="space-y-4">
                      {addons.map((addon) => {
                        const isSelected = formData.selectedAddons.includes(addon.id);
                        return (
                          <div
                            key={addon.id}
                            onClick={() => toggleAddon(addon.id)}
                            className={`p-6 rounded-xl border-4 cursor-pointer transition-all flex items-start gap-4 ${
                              isSelected 
                                ? 'bg-[#FCD116] border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] -translate-y-1' 
                                : 'bg-white border-slate-200 hover:border-slate-900 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]'
                            }`}
                          >
                            <input 
                              type="checkbox" 
                              checked={isSelected}
                              onChange={() => {}}
                              className="mt-1.5 w-5 h-5 accent-slate-900 cursor-pointer"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-black text-lg text-slate-900">{addon.name}</span>
                                <span className={`font-black text-xl ${isSelected ? 'text-slate-900' : 'text-[#C01A1A]'}`}>{addon.price}</span>
                              </div>
                              <p className={`text-sm font-medium ${isSelected ? 'text-slate-900' : 'text-slate-500'}`}>{addon.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex justify-between pt-8 border-t-4 border-slate-900">
                    <button
                      onClick={prevStep}
                      className="px-8 py-4 bg-white text-slate-900 font-bold text-sm rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all flex items-center gap-2"
                    >
                      <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button
                      onClick={nextStep}
                      className="px-8 py-4 bg-[#C01A1A] text-white font-bold text-sm rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all flex items-center gap-2"
                    >
                      Next Step <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Review and Submit */}
              {step === 4 && (
                <form onSubmit={handleFinalSubmit} className="bg-white rounded-3xl p-8 sm:p-12 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] space-y-8">
                  <h3 className="font-black text-3xl text-slate-900 border-b-4 border-slate-900 pb-6">
                    Review & Payment
                  </h3>

                  {/* Summary Box */}
                  <div className="bg-slate-50 p-8 rounded-2xl border-4 border-slate-900 space-y-4">
                    <div className="flex justify-between font-black text-base text-slate-900">
                      <span className="uppercase tracking-widest">Delegate Type ({formData.delegateType})</span>
                      <span>${getBasePrice(formData.delegateType)}.00</span>
                    </div>

                    {formData.selectedAddons.length > 0 && (
                      <div className="pt-4 border-t-2 border-slate-900 border-dashed space-y-3">
                        {formData.selectedAddons.map((addonId) => {
                          const addon = addons.find(a => a.id === addonId);
                          return (
                            <div key={addonId} className="flex justify-between text-sm font-bold text-slate-700">
                              <span>+ {addon?.name}</span>
                              <span>{addon?.price}.00</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <div className="flex justify-between font-black text-2xl pt-6 border-t-4 border-slate-900 mt-4">
                      <span>Total Invoice</span>
                      <span className="text-[#C01A1A]">${calculateTotal()}.00 USD</span>
                    </div>
                  </div>

                  <div className="space-y-6 pt-4">
                    <h4 className="font-black text-lg text-slate-900 flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-[#C01A1A]" /> Select Payment Method
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div 
                        onClick={() => setFormData({ ...formData, paymentMethod: 'momo' })}
                        className={`p-6 rounded-xl border-4 cursor-pointer transition-all ${
                          formData.paymentMethod === 'momo'
                            ? 'bg-[#C01A1A] border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] -translate-y-1'
                            : 'bg-white border-slate-200 hover:border-slate-900'
                        }`}
                      >
                        <h5 className={`font-black text-lg ${formData.paymentMethod === 'momo' ? 'text-white' : 'text-slate-900'}`}>Mobile Money (MTN)</h5>
                        <p className={`text-sm font-medium mt-1 ${formData.paymentMethod === 'momo' ? 'text-white/80' : 'text-slate-500'}`}>Merchant: 024 071 8245</p>
                      </div>

                      <div 
                        onClick={() => setFormData({ ...formData, paymentMethod: 'bank' })}
                        className={`p-6 rounded-xl border-4 cursor-pointer transition-all ${
                          formData.paymentMethod === 'bank'
                            ? 'bg-[#C01A1A] border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] -translate-y-1'
                            : 'bg-white border-slate-200 hover:border-slate-900'
                        }`}
                      >
                        <h5 className={`font-black text-lg ${formData.paymentMethod === 'bank' ? 'text-white' : 'text-slate-900'}`}>Direct Bank Transfer</h5>
                        <p className={`text-sm font-medium mt-1 ${formData.paymentMethod === 'bank' ? 'text-white/80' : 'text-slate-500'}`}>Ecobank: 1441002345678</p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Transaction Reference ID <span className="text-[#C01A1A]">*</span></label>
                      <input
                        type="text"
                        required
                        value={formData.paymentReference}
                        onChange={(e) => setFormData({ ...formData, paymentReference: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white font-mono uppercase font-bold shadow-sm transition-all"
                        placeholder="e.g. TXN-9988112"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-8 border-t-4 border-slate-900 mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-4 bg-white text-slate-900 font-bold text-sm rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all flex items-center gap-2"
                    >
                      <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-4 bg-[#FCD116] text-slate-900 font-black text-sm rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all uppercase tracking-wider"
                    >
                      Complete Registration
                    </button>
                  </div>
                </form>
              )}

              {/* Step 5: Success */}
              {step === 5 && (
                <div className="bg-white rounded-3xl p-10 sm:p-16 text-center space-y-8 border-4 border-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-4 bg-[#FCD116] border-b-4 border-slate-900"></div>
                  
                  <div className="w-24 h-24 rounded-full bg-[#FCD116] text-slate-900 flex items-center justify-center mx-auto border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  
                  <div>
                    <h3 className="font-black text-4xl text-slate-900 mb-4 tracking-tight">Registration Successful!</h3>
                    <p className="text-lg font-medium text-slate-600">Your application has been received and is pending payment verification.</p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-2xl border-4 border-slate-900 max-w-sm mx-auto text-left relative shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
                    <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Registration ID</p>
                    <p className="font-mono text-2xl font-black text-[#C01A1A] mb-6">{regId}</p>
                    
                    <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Name</p>
                    <p className="font-bold text-slate-900 text-lg mb-6">{formData.fullName}</p>
                    
                    <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Committee</p>
                    <p className="font-bold text-slate-900 text-lg uppercase">{formData.primaryCommittee}</p>
                  </div>

                  <button
                    onClick={() => {
                      setStep(1);
                      setFormData({
                        fullName: '', email: '', phone: '', country: 'Ghana', institution: '',
                        delegateType: 'local', primaryCommittee: 'unsc', secondaryCommittee: 'disec',
                        dietaryRequirements: 'None', selectedAddons: [], paymentMethod: 'momo', paymentReference: ''
                      });
                    }}
                    className="px-8 py-4 bg-[#C01A1A] text-white font-bold text-sm rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all mt-8"
                  >
                    Register Another Delegate
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            /* Track Registration */
            <motion.div
              key="track-flow"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl p-8 sm:p-12 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]">
                <h3 className="font-black text-3xl text-slate-900 mb-4 tracking-tight">Track Application Status</h3>
                <p className="text-base font-medium text-slate-600 mb-8">Enter your Registration ID or Email address to check your status.</p>

                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter email or HIMUN-26-XXXX"
                    className="flex-1 px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white font-bold transition-all shadow-sm"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#FCD116] text-slate-900 font-black rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all uppercase tracking-widest whitespace-nowrap"
                  >
                    Search
                  </button>
                </form>
                {searchError && <p className="text-sm text-[#C01A1A] font-black mt-4">{searchError}</p>}
              </div>

              {foundApplication && (
                <div className="bg-white rounded-3xl p-8 sm:p-12 border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-[#C01A1A]"></div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8 pb-8 border-b-4 border-slate-900">
                    <div>
                      <h4 className="font-black text-2xl text-slate-900">{foundApplication.fullName}</h4>
                      <p className="text-base font-bold text-slate-500 mt-1">{foundApplication.institution}</p>
                    </div>
                    <span className="px-4 py-2 bg-[#FCD116] text-slate-900 text-xs font-black uppercase tracking-widest border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                      {foundApplication.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                      <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-2">Reg ID</p>
                      <p className="font-mono font-bold text-xl text-slate-900">{foundApplication.registrationId}</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                      <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-2">Committee</p>
                      <p className="font-bold text-xl text-slate-900 uppercase">{foundApplication.primaryCommittee}</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200 border-l-4 border-l-[#C01A1A]">
                      <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-2">Amount Paid</p>
                      <p className="font-black text-2xl text-[#C01A1A]">${foundApplication.totalAmount}.00</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
