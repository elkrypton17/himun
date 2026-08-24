import React, { useState } from 'react';
import { ArrowUpRight, Calendar, Users, Target, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Committee } from '../types';
import { motion } from 'framer-motion';

// A simple SVG component for the hand-drawn squiggly underline (mimicking the BIMUN style)
const SquigglyUnderline = ({ color = '#FCD116' }: { color?: string }) => (
  <svg 
    className="absolute -bottom-3 left-0 w-full h-4 overflow-visible" 
    viewBox="0 0 200 12" 
    preserveAspectRatio="none"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M2 9.5C18 -0.5 45 -1.5 60 7.5C75 16.5 95 3.5 110 5.5C130 8.5 150 -2.5 170 5.5C185 11.5 195 2.5 198 5.5" 
      stroke={color} 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M10 11.5C30 9.5 70 12.5 100 11.5C140 10.5 180 12.5 195 10.5" 
      stroke={color} 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      opacity="0.8"
    />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function Hero() {
  const navigate = useNavigate();

  const committees: Committee[] = [
    {
      id: 'unsc',
      name: 'UNSC',
      fullName: 'United Nations Security Council',
      topic: 'Addressing Sovereign Security Concerns in a Fragmented Geopolitical Era',
      description: 'Debate state sovereignty, security alliances, and conflict mitigation strategies to rebuild trust among global powers.',
      color: '#C01A1A',
    },
    {
      id: 'disec',
      name: 'DISEC',
      fullName: 'Disarmament & International Security',
      topic: 'Regulating Autonomous Weaponry Systems and AI in Modern Warfare',
      description: 'Draft international standards to limit threats posed by algorithmic weapons, automated drones, and state-sponsored cyber warfare.',
      color: '#C01A1A',
    },
    {
      id: 'ecofin',
      name: 'ECOFIN',
      fullName: 'Economic & Financial Committee',
      topic: 'Bridging the Sovereign Debt Gap in the Global South through Financial Innovation',
      description: 'Explore green bonds, international loan restructuring, and decentralized finance to reinforce financial resilience in emerging markets.',
      color: '#C01A1A',
    },
    {
      id: 'unep',
      name: 'UNEP',
      fullName: 'United Nations Environment Programme',
      topic: 'Collective Action against Climate Migration and Environmental Degradation',
      description: 'Design legal frameworks, emergency aid guidelines, and sustainable resource sharing policies for displaced eco-migrants.',
      color: '#C01A1A',
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* 
        ====================================================
        HERO SECTION (Solid Background)
        ====================================================
      */}
      <section className="relative w-full py-32 px-4 md:px-8 bg-[#C01A1A] border-b-8 border-slate-900 overflow-hidden">
        
        {/* ==================================================== */}
        {/* NEO-BRUTALIST STICKERS & GEOMETRIC SHAPES */}
        {/* ==================================================== */}
        {/* Floating Star */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
          className="absolute top-16 right-16 hidden lg:block z-0"
        >
          <svg width="120" height="120" viewBox="0 0 100 100" className="text-[#FCD116]">
            <path d="M50 0L61.2257 38.7743L100 50L61.2257 61.2257L50 100L38.7743 61.2257L0 50L38.7743 38.7743L50 0Z" fill="currentColor" stroke="#0f172a" strokeWidth="4" />
          </svg>
        </motion.div>

        {/* Floating Target Circle */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute bottom-24 right-[15%] hidden md:flex items-center justify-center w-28 h-28 bg-[#FCD116] rounded-full border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] z-0"
        >
          <Target className="w-12 h-12 text-slate-900" strokeWidth={3} />
        </motion.div>

        {/* Floating Pill Sticker */}
        <motion.div 
          animate={{ rotate: [-10, -5, -10], scale: [1, 1.05, 1] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-1/3 left-[5%] hidden md:block z-0"
        >
          <div className="px-6 py-3 bg-white border-4 border-slate-900 rounded-full shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] font-black text-slate-900 text-xl uppercase tracking-widest transform -rotate-12">
            MODEL UN
          </div>
        </motion.div>
        
        {/* Squiggle Line Graphic */}
        <motion.div 
          className="absolute bottom-12 left-1/4 hidden lg:block z-0 opacity-80"
        >
          <svg width="150" height="30" viewBox="0 0 150 30" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="square">
            <path d="M0 15 Q 12.5 0, 25 15 T 50 15 T 75 15 T 100 15 T 125 15 T 150 15" />
          </svg>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Huge Title */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              This is <br />
              <span className="relative inline-block text-[#FCD116] font-black text-7xl sm:text-8xl md:text-[7rem] mt-2 tracking-tighter">
                HIMUN
                <SquigglyUnderline color="#FCD116" />
              </span>
            </h1>
          </motion.div>

          {/* Right: Text and Pill Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="space-y-10"
          >
            <p className="text-white/95 text-xl sm:text-2xl font-medium leading-relaxed max-w-lg">
              The global community today is equipped with diverse opportunities, profound ideas, game-changing innovations and its accompanying challenges. Join us to reshape diplomacy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/register')}
                className="px-8 py-4 bg-[#FCD116] text-slate-900 font-bold rounded-full flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 active:translate-y-1 hover:bg-[#eab308] border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)]"
              >
                Register for HIMUN 2026 Delegate <ArrowUpRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="px-8 py-4 bg-white text-[#C01A1A] font-bold rounded-full flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 active:translate-y-1 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)]"
              >
                Learn more about HIMUN <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        ====================================================
        REGISTRATION TIMELINE & COUNTDOWN SECTION
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Register for <span className="relative inline-block text-[#C01A1A]">HIMUN<SquigglyUnderline color="#C01A1A" /></span> 2026 today
          </h2>
        </motion.div>

        {/* Curved Timeline */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-4xl mx-auto h-32 mb-12 hidden md:block"
        >
          {/* Curved dashed line SVG */}
          <svg className="absolute top-4 left-0 w-full h-24" preserveAspectRatio="none" viewBox="0 0 1000 100">
            <path d="M 100 50 Q 300 100 500 20 Q 700 -20 900 50" fill="none" stroke="#0f172a" strokeWidth="3" strokeDasharray="8 8" />
          </svg>

          {/* Nodes */}
          <div className="absolute top-[40px] left-[10%] -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#C01A1A] flex items-center justify-center text-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-slate-900 font-bold text-sm bg-white px-3 py-1 border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">Delegate</span>
          </div>

          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#FCD116] flex items-center justify-center text-slate-900 border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] z-10 scale-110">
              <Target className="w-7 h-7" />
            </div>
            <span className="text-[#C01A1A] font-black text-sm uppercase tracking-wide bg-white px-4 py-1 border-2 border-[#C01A1A] rounded-full shadow-[2px_2px_0px_0px_rgba(192,26,26,1)]">HIMUN Chair</span>
          </div>

          <div className="absolute top-[40px] left-[90%] -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#C01A1A] flex items-center justify-center text-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="text-slate-900 font-bold text-sm bg-white px-3 py-1 border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">Official</span>
          </div>
        </motion.div>

        {/* Solid Blue Countdown Box */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#C01A1A] rounded-2xl p-8 sm:p-12 relative border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            
            <div>
              <p className="text-white font-bold tracking-widest text-xs mb-3 uppercase">Conference Date</p>
              <h3 className="text-4xl sm:text-5xl font-black text-[#FCD116] relative inline-block leading-tight">
                October 8th - 12th <br/> 2026
                <SquigglyUnderline color="#FCD116" />
              </h3>
            </div>

            <div className="bg-white/10 p-6 rounded-xl border-2 border-white/20">
              <p className="text-white text-sm font-bold mb-4 text-center tracking-widest uppercase">Countdown</p>
              <div className="flex items-center gap-2 sm:gap-6 text-white text-5xl sm:text-6xl font-black">
                <div className="flex flex-col items-center">
                  <span>145</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mt-2">Days</span>
                </div>
                <span className="text-[#FCD116] pb-6">:</span>
                <div className="flex flex-col items-center">
                  <span>12</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mt-2">Hours</span>
                </div>
                <span className="text-[#FCD116] pb-6">:</span>
                <div className="flex flex-col items-center">
                  <span>45</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mt-2">Mins</span>
                </div>
              </div>
            </div>
          </div>

          {/* Protruding Buttons */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-4 w-full px-8 justify-center">
            <button 
              onClick={() => navigate('/register')}
              className="px-6 py-4 bg-[#FCD116] text-slate-900 font-bold rounded-full flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 active:translate-y-1 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-sm sm:w-auto w-full"
            >
              Register Now for HIMUN 2026 Delegate <ArrowUpRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="px-6 py-4 bg-white text-slate-900 font-bold rounded-full flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 active:translate-y-1 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-sm sm:w-auto w-full"
            >
              Register for HIMUN 2026 Official <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* 
        ====================================================
        STATS SECTION 
        ====================================================
      */}
      <section className="bg-slate-50 py-32 border-y-4 border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h4 variants={itemVariants} className="inline-block px-4 py-1 bg-[#C01A1A] text-white text-xs font-black uppercase tracking-widest mb-4 border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">ABOUT US</motion.h4>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              Why Choose <span className="relative inline-block text-[#C01A1A]">HIMUN<SquigglyUnderline color="#C01A1A" /></span>?
            </motion.h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-24"
          >
            <div className="px-8 py-4 bg-[#FCD116] text-slate-900 font-bold text-lg rounded-xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transform -rotate-1 hover:rotate-0 transition-transform">
              Delegates Expand Their Critical Thinking Skills
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 transition-transform">
              <div className="text-6xl font-black text-[#C01A1A] mb-2 tracking-tighter">1</div>
              <div className="text-slate-900 font-bold uppercase tracking-widest text-sm">Conference</div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 transition-transform">
              <div className="text-6xl font-black text-[#FCD116] mb-2 tracking-tighter">500+</div>
              <div className="text-slate-900 font-bold uppercase tracking-widest text-sm">Delegates</div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 transition-transform">
              <div className="text-6xl font-black text-[#C01A1A] mb-2 tracking-tighter">12</div>
              <div className="text-slate-900 font-bold uppercase tracking-widest text-sm">Speakers</div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 transition-transform">
              <div className="text-6xl font-black text-[#FCD116] mb-2 tracking-tighter">5</div>
              <div className="text-slate-900 font-bold uppercase tracking-widest text-sm">Committees</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 
        ====================================================
        COMMITTEES SECTION 
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h4 className="inline-block px-4 py-1 bg-slate-900 text-[#FCD116] text-xs font-black uppercase tracking-widest mb-4 border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">COMMITTEES</h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Arenas of <span className="relative inline-block text-[#C01A1A]">Debate<SquigglyUnderline color="#C01A1A" /></span>
          </h2>
        </motion.div>

        {/* Solid Card Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {committees.map((comm) => (
            <motion.div 
              key={comm.id} 
              variants={itemVariants}
              className="rounded-2xl overflow-hidden border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col bg-white hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transition-all"
            >
              <div className="h-40 bg-[#FCD116] p-6 flex items-center justify-center text-center border-b-4 border-slate-900">
                <h3 className="font-black text-2xl text-slate-900 leading-tight">{comm.fullName}</h3>
              </div>
              <div className="p-8 bg-white text-slate-900 flex-1 flex flex-col relative">
                <span className="text-[#C01A1A] font-black tracking-wider uppercase text-xs mb-4 block">{comm.name} Topic</span>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-1">
                  {comm.topic}
                </p>
                <button 
                  onClick={() => navigate('/register')}
                  className="mt-auto w-full py-4 bg-[#C01A1A] text-white font-bold flex items-center justify-center gap-2 border-2 border-slate-900 rounded-xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all"
                >
                  View Guide <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
    </div>
  );
}
