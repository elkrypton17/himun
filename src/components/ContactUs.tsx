import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 1200);
  };

  return (
    <section className="relative w-full bg-slate-50 font-sans text-slate-900 pb-32 pt-32 min-h-screen overflow-hidden">
      
      {/* Floating Neo-Brutalist Shapes */}
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [-5, 5, -5] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-32 left-[8%] hidden lg:flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] z-0"
      >
        <Mail className="w-8 h-8 text-slate-900" strokeWidth={3} />
      </motion.div>

      {/* Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="text-center max-w-3xl mx-auto mb-16 px-4 md:px-8"
      >
        <h4 className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-black uppercase tracking-widest mb-4 border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">GET IN TOUCH</h4>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Contact <span className="relative inline-block text-[#C01A1A]">Us<SquigglyUnderline color="#C01A1A" /></span>
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] border-4 border-slate-900 bg-white"
        >
          
          {/* Left Side: Contact Information (Solid Blue) */}
          <div className="bg-[#C01A1A] p-10 sm:p-16 text-white flex flex-col justify-between border-r-0 lg:border-r-4 border-slate-900">
            <div>
              <h3 className="font-black text-3xl mb-12 tracking-tight">Official Secretariat</h3>
              
              <div className="space-y-10">
                {/* Official Phones */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#FCD116] flex items-center justify-center shrink-0 text-slate-900 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-[#FCD116] font-black uppercase tracking-widest mb-2">Phone Enquiries</p>
                    <p className="text-lg font-bold">+233 240 718 245</p>
                    <p className="text-lg font-bold">+233 508 358 124</p>
                  </div>
                </div>

                {/* Official Emails */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#FCD116] flex items-center justify-center shrink-0 text-slate-900 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-[#FCD116] font-black uppercase tracking-widest mb-2">Email Addresses</p>
                    <p className="text-lg font-bold">secretariat@himun.org</p>
                    <p className="text-lg font-bold">info@hcuc.edu.gh</p>
                  </div>
                </div>

                {/* Official Location */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#FCD116] flex items-center justify-center shrink-0 text-slate-900 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-[#FCD116] font-black uppercase tracking-widest mb-2">Conference Venue</p>
                    <p className="text-lg font-bold">Heritage Christian University</p>
                    <p className="text-white/90 font-medium">Amasaman, Accra, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t-4 border-slate-900/20">
              <h4 className="font-black text-xl mb-3">Secretariat WhatsApp Group</h4>
              <p className="text-base text-white/90 font-medium mb-6">
                Join the official delegate support group on WhatsApp for live updates.
              </p>
              <a 
                href="https://wa.me/233240718245" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex px-8 py-4 bg-[#FCD116] text-slate-900 font-bold rounded-xl items-center gap-2 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:shadow-none transition-all"
              >
                <MessageSquare className="w-5 h-5" /> Join WhatsApp <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Right Side: Form (White Background) */}
          <div className="p-10 sm:p-16 flex flex-col justify-center bg-white">
            <h3 className="font-black text-3xl text-slate-900 mb-8 tracking-tight">Send an Electronic Message</h3>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 rounded-full bg-[#FCD116] text-slate-900 flex items-center justify-center mx-auto mb-8 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                  <Send className="w-10 h-10 ml-2" />
                </div>
                <h4 className="font-black text-3xl text-slate-900 mb-4 tracking-tight">Message Sent Successfully!</h4>
                <p className="text-slate-600 font-medium text-lg mb-8">
                  Thank you for reaching out. A designated Under-Secretary-General from the HIMUN Secretariat will respond to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-4 bg-[#C01A1A] text-white font-bold rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-widest" htmlFor="contact-name">Full Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-medium shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-widest" htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="example@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-medium shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-widest" htmlFor="contact-subject">Topic / Subject</label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold shadow-sm"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Delegate Registration">Delegate Registration</option>
                    <option value="Visa & Travel Assistance">Visa & Travel Support</option>
                    <option value="Sponsorship & Partnership">Sponsorship & Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-widest" htmlFor="contact-message">Message Details</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Draft your query to the Secretariat..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-medium shadow-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C01A1A] disabled:bg-slate-400 text-white rounded-xl font-bold border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span> <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
