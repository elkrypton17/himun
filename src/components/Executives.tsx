import React from 'react';
import { Users, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Executive } from '../types';

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

export default function Executives() {
  const execs: Executive[] = [
    {
      id: '1',
      name: 'Hon. Dr. Michael Okyere',
      role: 'Secretary-General',
      bio: 'Dr. Okyere is a Senior Fellow in International Law with over a decade of experience coordinating Model United Nations simulations.',
      initials: 'MO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600',
    },
    {
      id: '2',
      name: 'Lady Beatrice Mensah',
      role: 'Deputy Secretary-General',
      bio: 'An alumna of Heritage Christian University, Beatrice specializes in international development and financial innovations.',
      initials: 'BM',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600',
    },
    {
      id: '3',
      name: 'Emmanuel Koffi Boateng',
      role: 'Director-General',
      bio: "Emmanuel manages the operations, venue logistics, and accommodation services for HIMUN '26.",
      initials: 'EB',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=600',
    },
    {
      id: '4',
      name: 'Sarah Naa Adjeley',
      role: 'Under-Secretary-General (General Assemblies)',
      bio: 'Sarah is an experienced policy analyst specializing in human rights and social justice.',
      initials: 'SA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=600',
    },
    {
      id: '5',
      name: 'Dr. Joseph Kwakye',
      role: 'Under-Secretary-General (Specialized Organs)',
      bio: 'Dr. Kwakye holds a PhD in Environmental Science and advises the UNEP and UNSC committees.',
      initials: 'JK',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=600',
    },
    {
      id: '6',
      name: 'Precious Amina Bello',
      role: 'Chief of Staff',
      bio: 'Precious handles internal affairs, delegate communication, and registration audits.',
      initials: 'PB',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600&h=600'
    }
  ];

  return (
    <section className="relative w-full bg-slate-50 font-sans text-slate-900 pb-32 pt-32 min-h-screen overflow-hidden">
      
      {/* Floating Neo-Brutalist Shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-20 left-[5%] hidden lg:flex items-center justify-center w-24 h-24 bg-[#C01A1A] rounded-full border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] z-0"
      >
        <span className="text-white font-black text-2xl">EX</span>
      </motion.div>
      
      {/* Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="text-center max-w-3xl mx-auto mb-16 px-4 md:px-8"
      >
        <h4 className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-black uppercase tracking-widest mb-4 border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">EXECUTIVE TEAM</h4>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          HIMUN <span className="relative inline-block text-[#C01A1A]">Team<SquigglyUnderline color="#C01A1A" /></span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          
          {execs.map((exec, i) => (
            <motion.div 
              key={exec.id} 
              variants={itemVariants}
              className="flex flex-col group rounded-2xl overflow-hidden bg-white border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transition-all"
            >
              {/* Image Block */}
              <div className="h-72 sm:h-80 bg-slate-100 overflow-hidden relative border-b-4 border-slate-900">
                <img 
                  src={exec.image} 
                  alt={exec.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Info Block */}
              <div className="bg-white p-8 flex flex-col flex-1 text-left relative">
                {/* Decorative Pill */}
                <div className="absolute -top-4 right-6 bg-[#FCD116] border-2 border-slate-900 px-3 py-1 text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] rounded-full">
                  {exec.initials}
                </div>

                <h3 className="font-black text-2xl text-slate-900 mb-1 leading-snug">{exec.name}</h3>
                <span className="text-[#C01A1A] font-black text-xs uppercase tracking-widest mb-4 inline-block">{exec.role}</span>
                
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8 flex-1">
                  {exec.bio}
                </p>

                <div className="flex gap-3 pt-4 border-t-2 border-slate-100">
                  <a href="#" className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center text-slate-900 hover:bg-[#FCD116] hover:-translate-y-1 transition-all"><Linkedin className="w-4 h-4" /></a>
                  <a href="#" className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center text-slate-900 hover:bg-[#FCD116] hover:-translate-y-1 transition-all"><Twitter className="w-4 h-4" /></a>
                  <a href="#" className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center text-slate-900 hover:bg-[#FCD116] hover:-translate-y-1 transition-all"><Mail className="w-4 h-4" /></a>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>

    </section>
  );
}
