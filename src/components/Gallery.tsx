import React, { useState } from 'react';
import { Eye, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '../types';

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

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'delegate', label: 'Delegates & Debates' },
    { id: 'conference', label: 'Sessions & Assemblies' },
    { id: 'trip', label: 'Accra Cultural Trip' },
    { id: 'campus', label: 'HCU Campus' },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Plenary Debate Session',
      category: 'conference',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '2',
      title: 'Delegates in Deep Consultation',
      category: 'delegate',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '3',
      title: 'Official Representative Presentation',
      category: 'delegate',
      imageUrl: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '4',
      title: 'International Flag & Assembly Arena',
      category: 'conference',
      imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '5',
      title: 'Ambassadorial Gala and Awards',
      category: 'trip',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '6',
      title: 'Accra Heritage Coast and Tour',
      category: 'trip',
      imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d7c2f4?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '7',
      title: 'Modern Classrooms & Research Labs',
      category: 'campus',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '8',
      title: 'Youth Leadership Forum',
      category: 'delegate',
      imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="relative w-full bg-slate-50 font-sans text-slate-900 pb-32 pt-32 min-h-screen overflow-hidden">
      
      {/* Floating Neo-Brutalist Shapes */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
        className="absolute top-40 right-[5%] hidden lg:block z-0 opacity-80"
      >
        <svg width="120" height="120" viewBox="0 0 100 100" className="text-[#FCD116]">
          <polygon points="50,0 60,35 100,35 70,55 80,95 50,70 20,95 30,55 0,35 40,35" fill="currentColor" stroke="#0f172a" strokeWidth="4" />
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
        <h4 className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-black uppercase tracking-widest mb-4 border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">CONFERENCE MEMORIES</h4>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          HIMUN <span className="relative inline-block text-[#C01A1A]">Gallery<SquigglyUnderline color="#C01A1A" /></span>
        </h2>
      </motion.div>

      {/* Category Filter Pills */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-4xl mx-auto px-4"
      >
        <span className="text-sm font-black text-slate-900 mr-2 items-center gap-1 hidden sm:flex uppercase tracking-widest">
          <Filter className="w-4 h-4" /> Filter
        </span>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-3 rounded-xl text-sm font-bold cursor-pointer transition-all border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none ${
              activeCategory === cat.id 
                ? 'bg-[#C01A1A] text-white' 
                : 'bg-white text-slate-900 hover:bg-[#FCD116]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transition-all flex flex-col"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image Box */}
                <div className="h-56 overflow-hidden bg-slate-900 relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#C01A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#FCD116] flex items-center justify-center text-slate-900 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Solid Block Bottom */}
                <div className="p-6 bg-white flex-1 border-t-4 border-slate-900 flex flex-col justify-between">
                  <h3 className="font-black text-lg text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-slate-100 border-2 border-slate-900 rounded-full text-[10px] font-black text-[#C01A1A] uppercase tracking-widest w-max">
                    {categories.find(c => c.id === item.category)?.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden border-4 border-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-[#FCD116] text-slate-900 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:translate-y-0 active:shadow-none transition-all flex items-center justify-center cursor-pointer font-black text-xl"
              >
                ✕
              </button>

              <div className="h-[60vh] md:h-[70vh] bg-slate-100 relative p-8">
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-contain drop-shadow-2xl rounded-xl border-4 border-slate-900"
                />
              </div>

              <div className="p-8 bg-[#C01A1A] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t-4 border-slate-900">
                <div>
                  <h3 className="font-black text-2xl md:text-3xl mb-2 tracking-tight">
                    {selectedImage.title}
                  </h3>
                  <span className="inline-block px-4 py-1.5 bg-white text-[#C01A1A] border-2 border-slate-900 rounded-full text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                    {categories.find(c => c.id === selectedImage.category)?.label}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
