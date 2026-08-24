import React, { useState, useEffect } from 'react';
import { Home, Info, Image as ImageIcon, Mail, Users, BookOpen, Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'about', label: 'About Us', icon: Info, path: '/about' },
    { id: 'register', label: 'Registration', icon: BookOpen, path: '/register' },
    { id: 'executives', label: 'Executives', icon: Users, path: '/executives' },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon, path: '/gallery' },
    { id: 'contact', label: 'Contact Us', icon: Mail, path: '/contact' },
  ];

  const handleTabClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b-4 border-slate-900 ${scrolled ? 'py-4 shadow-[0px_8px_0px_0px_rgba(15,23,42,1)]' : 'py-6 shadow-[0px_4px_0px_0px_rgba(15,23,42,1)]'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link 
          to="/"
          onClick={handleTabClick}
          className="flex items-center gap-3 text-left cursor-pointer focus:outline-none"
        >
          <div className="flex flex-col">
            <span className="font-sans font-black text-xl sm:text-2xl text-slate-900 leading-none">HIMUN</span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
              Heritage International Model UN
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <Link
                key={tab.id}
                to={tab.path}
                className={`font-sans text-sm font-black uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none relative px-2 py-1 ${
                  isActive ? 'text-[#C01A1A]' : 'text-slate-600 hover:text-slate-900 hover:-translate-y-1'
                }`}
              >
                {tab.label}
                {isActive && (
                  <div className="absolute -bottom-2 left-0 w-full h-[4px] bg-[#C01A1A] rounded-full"></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Register Button and Mobile Menu toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              navigate('/register');
              setIsOpen(false);
            }}
            className="hidden sm:flex px-6 py-2.5 bg-[#FCD116] text-slate-900 font-black uppercase tracking-widest text-xs rounded-full items-center gap-2 transition-transform hover:-translate-y-1 active:translate-y-1 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:shadow-none"
          >
            <span>Register Now</span> <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-slate-900 focus:outline-none rounded-xl active:translate-y-1 active:shadow-none transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Portal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[88px] left-4 right-4 z-40 lg:hidden bg-white border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 bg-slate-50">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <Link
                    key={tab.id}
                    to={tab.path}
                    onClick={handleTabClick}
                    className={`w-full text-left py-4 px-6 border-b-2 border-slate-900/10 font-sans text-sm font-black uppercase tracking-widest transition-colors flex items-center gap-4 ${
                      isActive ? 'text-[#C01A1A] bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-xl my-2' : 'text-slate-600 hover:bg-white hover:text-slate-900 rounded-xl my-1'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </Link>
                );
              })}
              <div className="pt-6 pb-2 px-2">
                <button
                  onClick={() => {
                    navigate('/register');
                    setIsOpen(false);
                  }}
                  className="w-full py-4 bg-[#FCD116] text-slate-900 font-black uppercase tracking-widest text-sm rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex justify-center items-center gap-2 active:translate-y-1 active:shadow-none transition-transform"
                >
                  Register Now <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
