import React from 'react';
import { Calendar, Globe, Heart, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#C01A1A] pt-16 pb-8 border-t-[8px] border-[#FCD116]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & About summary */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex flex-col">
              <span className="font-sans font-bold text-3xl text-white leading-none">HIMUN</span>
              <span className="text-xs text-white/80 font-normal uppercase tracking-widest mt-1">
                Heritage International Model UN
              </span>
            </div>
            
            <p className="text-sm text-white/90 leading-relaxed max-w-sm">
              The Heritage International Model United Nations (1st Session) is held at Heritage Christian University in Accra, Ghana. We focus on training compassionate, entrepreneurial world leaders through rigorous academic simulation.
            </p>

            <button 
              onClick={() => navigate('/register')}
              className="px-6 py-3 bg-[#FCD116] hover:bg-[#eab308] text-slate-900 font-bold rounded flex items-center justify-center gap-2 transition-colors shadow-sm w-max"
            >
              Register Now <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-lg text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/90 font-medium">
              <li>
                <Link to="/" className="hover:text-[#FCD116] transition-colors flex items-center gap-2">
                  <ArrowUpRight className="w-3 h-3" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FCD116] transition-colors flex items-center gap-2">
                  <ArrowUpRight className="w-3 h-3" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/executives" className="hover:text-[#FCD116] transition-colors flex items-center gap-2">
                  <ArrowUpRight className="w-3 h-3" /> Secretariat
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#FCD116] transition-colors flex items-center gap-2">
                  <ArrowUpRight className="w-3 h-3" /> Resources
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#FCD116] transition-colors flex items-center gap-2">
                  <ArrowUpRight className="w-3 h-3" /> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FCD116] transition-colors flex items-center gap-2">
                  <ArrowUpRight className="w-3 h-3" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-lg text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/90 font-medium">
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#FCD116] shrink-0" /> 
                <span>Heritage Christian University<br/>Amasaman Campus, Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#FCD116] shrink-0" /> 
                <span>October 8th - 12th, 2026</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 Heritage International Model United Nations. All rights reserved.</p>
          <p className="flex items-center gap-1 font-semibold">
            Made with <Heart className="w-3 h-3 text-[#FCD116] fill-[#FCD116]" />By Earl's Creatives in Kumasi.
          </p>
        </div>
      </div>
    </footer>
  );
}
