import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Executives from './components/Executives';
import Resources from './components/Resources';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import RegistrationPortal from './components/RegistrationPortal';
import Footer from './components/Footer';

export default function App() {
  const location = useLocation();

  // Smooth scroll progress using Framer Motion
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll to top automatically when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col justify-between">


      {/* Absolute Ghana Flag Colors Ambient glow strip at the absolute top of the screen */}
      <div className="fixed top-0 left-0 right-0 h-[6px] z-55 flex">
        <div className="w-1/3 h-full bg-[#CE1126]"></div>
        <div className="w-1/3 h-full bg-[#FCD116]"></div>
        <div className="w-1/3 h-full bg-[#006B3F]"></div>
      </div>

      {/* Subtle Scroll Progress Bar using Radiant Gold accent (#FCD116) */}
      <motion.div
        id="scroll-progress-bar"
        className="fixed top-[6px] left-0 right-0 h-[3px] bg-[#FCD116] origin-[0%] z-50 shadow-[0_1px_10px_rgba(252,209,22,0.8)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Dynamic Floating Glass Header / Dynamic Island */}
      <Navigation />

      {/* Main Container with subtle enter transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/executives" element={<Executives />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/register" element={<RegistrationPortal />} />
              <Route path="*" element={<Hero />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
