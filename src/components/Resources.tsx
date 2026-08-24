import React, { useState } from 'react';
import { BookOpen, FileText, Download, CheckCircle, Search, Star, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResourceItem } from '../types';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Guides' | 'Templates' | 'Official'>('All');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const testimonials = [
    {
      name: "Amina Diallo",
      role: "Delegate of France",
      committee: "DISEC",
      institution: "Ashesi University",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5,
      text: "HIMUN changed my perspective on global diplomacy. Navigating the debates on autonomous weaponry in DISEC was intellectually thrilling!"
    },
    {
      name: "Kofi Asante Mensah",
      role: "Delegate of United States",
      committee: "UN Security Council",
      institution: "University of Ghana",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5,
      text: "The academic rigor at HIMUN '26 was outstanding. The Secretariat's background guides were highly detailed, which allowed our committee to draft realistic resolutions."
    }
  ];

  const resourcesData: any[] = [
    {
      id: 'handbook',
      title: 'Official Delegate Handbook',
      category: 'Official',
      description: 'Your ultimate companion for HIMUN \'26. Includes the detailed schedule, venue map, dress code, security guidelines, and emergency contacts.',
      fileSize: '1.8 MB',
      fileType: 'PDF Document',
      downloads: '342',
      filename: 'HIMUN26_Delegate_Handbook.pdf',
    },
    {
      id: 'prep-guide',
      title: 'Comprehensive Preparation Guide',
      category: 'Guides',
      description: 'A step-by-step masterclass on how to research your assigned nation, formulate foreign policy, write award-winning position papers.',
      fileSize: '2.4 MB',
      fileType: 'PDF Document',
      downloads: '512',
      filename: 'HIMUN26_Preparation_Guide.pdf',
    },
    {
      id: 'rules-of-procedure',
      title: 'Rules of Procedure (RoP) Summary',
      category: 'Guides',
      description: 'Quick cheat-sheet detailing parliamentary flow. Includes motions, points of order, moderated caucuses, and voting majorities.',
      fileSize: '950 KB',
      fileType: 'PDF Document',
      downloads: '689',
      filename: 'HIMUN26_Rules_Of_Procedure.pdf',
    },
    {
      id: 'resolution-template',
      title: 'Resolution Template',
      category: 'Templates',
      description: 'The formal template required for submitting working papers. Includes approved preambulatory clauses and active operative clauses.',
      fileSize: '450 KB',
      fileType: 'DOCX Template',
      downloads: '280',
      filename: 'HIMUN26_Resolution_Template.docx',
    }
  ];

  const handleDownload = (resource: any) => {
    setDownloadingId(resource.id);
    setTimeout(() => {
      alert(`Downloaded ${resource.filename}`);
      setDownloadingId(null);
    }, 850);
  };

  const filteredResources = resourcesData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative w-full bg-slate-50 font-sans text-slate-900 pb-32 pt-32 min-h-screen overflow-hidden">
      
      {/* Floating Neo-Brutalist Shapes */}
      <motion.div 
        animate={{ rotate: 360, y: [0, -10, 0] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
        className="absolute top-20 right-[8%] hidden lg:block z-0"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-white">
          <rect x="20" y="20" width="60" height="60" fill="currentColor" stroke="#0f172a" strokeWidth="6" />
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
        <h4 className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-black uppercase tracking-widest mb-4 border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">ACADEMIC RESOURCES</h4>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Delegate <span className="relative inline-block text-[#C01A1A]">Hub<SquigglyUnderline color="#C01A1A" /></span>
        </h2>
        <p className="text-base font-medium text-slate-600 max-w-xl mx-auto leading-relaxed">
          Unlock resources curated by the HIMUN secretariat to aid your foreign policy research, parliamentary procedure alignment, and committee speeches.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Resources List (Col-Span 8) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Search and Category Filters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#C01A1A] p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center justify-between border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
            >
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-4 w-5 h-5 text-slate-900" />
                <input 
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-900 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FCD116] rounded-xl font-bold shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap justify-center gap-3 w-full md:w-auto">
                {(['All', 'Guides', 'Templates', 'Official'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 cursor-pointer border-2 border-slate-900 ${
                      selectedCategory === cat
                        ? 'bg-[#FCD116] text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] -translate-y-1'
                        : 'bg-white text-slate-900 hover:bg-[#FCD116] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Resources Cards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredResources.length > 0 ? (
                  filteredResources.map((resource) => (
                    <motion.div
                      layout
                      variants={itemVariants}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={resource.id}
                      className="bg-white p-8 rounded-2xl flex flex-col justify-between border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-14 h-14 rounded-full bg-[#FCD116] flex items-center justify-center text-slate-900 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                            <FileText className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full bg-slate-100 border-2 border-slate-900 text-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                            {resource.category}
                          </span>
                        </div>
                        
                        <div>
                          <h3 className="font-black text-2xl text-slate-900 line-clamp-2 leading-tight mb-3">
                            {resource.title}
                          </h3>
                          <p className="text-sm font-medium text-slate-600 line-clamp-3 leading-relaxed">
                            {resource.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-6 mt-6 flex items-center justify-between border-t-4 border-slate-900 border-dashed">
                        <div className="text-xs text-slate-900 font-bold flex flex-col space-y-1">
                          <span>{resource.fileSize}</span>
                          <span className="text-[#C01A1A]">{resource.fileType}</span>
                        </div>

                        <button
                          onClick={() => handleDownload(resource)}
                          disabled={downloadingId !== null}
                          className="p-4 rounded-xl bg-[#C01A1A] text-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all disabled:opacity-50"
                        >
                          {downloadingId === resource.id ? (
                            <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                          ) : (
                            <Download className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-16 text-center space-y-4 bg-white rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
                    <HelpCircle className="w-12 h-12 text-slate-400 mx-auto" />
                    <div>
                      <p className="text-xl font-black text-slate-900">No resources found</p>
                      <p className="text-sm font-medium text-slate-500 mt-2">Try adjusting your search criteria</p>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Academic Integrity Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FCD116] p-8 rounded-2xl flex gap-6 items-start border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] mt-8"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                <CheckCircle className="w-6 h-6 text-[#C01A1A]" />
              </div>
              <div className="space-y-3">
                <h4 className="font-black text-xl text-slate-900 tracking-tight">Academic Integrity Standards</h4>
                <p className="text-sm font-medium text-slate-800 leading-relaxed">
                  All delegates must ensure position papers and resolution submissions are strictly original works. HIMUN '26 uses digital plagiarism algorithms to protect intellectual honesty.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Testimonials (Col-Span 4) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="lg:col-span-4 space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
              
              <div className="mb-8 pb-4 border-b-4 border-slate-900">
                <h3 className="font-black text-2xl text-slate-900 tracking-tight">
                  Delegate Voices
                </h3>
              </div>

              {/* Testimonials Stack */}
              <div className="space-y-8">
                {testimonials.map((test, index) => (
                  <motion.div variants={itemVariants} key={index} className="bg-slate-50 p-6 rounded-xl space-y-5 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] relative">
                    <div className="absolute -top-3 -right-3 bg-[#FCD116] border-2 border-slate-900 p-2 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                      <Star className="w-4 h-4 fill-slate-900 text-slate-900" />
                    </div>

                    <p className="text-sm font-medium text-slate-700 leading-relaxed italic">
                      "{test.text}"
                    </p>

                    <div className="flex items-center gap-4 pt-5 border-t-2 border-slate-900 border-dashed">
                      <img 
                        src={test.avatar} 
                        alt={test.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
                      />
                      <div>
                        <h4 className="font-black text-sm text-slate-900">
                          {test.name}
                        </h4>
                        <p className="text-[10px] text-[#C01A1A] font-black uppercase tracking-widest mt-1">
                          {test.role} • {test.committee}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Social Proof Stats */}
            <motion.div variants={itemVariants} className="bg-[#C01A1A] p-8 rounded-2xl grid grid-cols-2 gap-4 text-center text-white border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
              <div className="space-y-2">
                <p className="font-black text-4xl">120+</p>
                <p className="text-[10px] text-white/80 font-black uppercase tracking-widest">Delegates Trained</p>
              </div>
              <div className="space-y-2 border-l-4 border-slate-900 pl-4">
                <p className="font-black text-4xl text-[#FCD116]">100%</p>
                <p className="text-[10px] text-white/80 font-black uppercase tracking-widest">Academic Quality</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}
