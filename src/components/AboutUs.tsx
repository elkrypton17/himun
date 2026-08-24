import React, { useState } from 'react';
import { Compass, GraduationCap, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// The signature squiggly underline
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

export default function AboutUs() {
  const pillars = [
    {
      icon: Compass,
      title: 'Global Diplomacy',
      description: 'Acquiring professional negotiation strategies, parliamentary procedures, and bilateral communication skills to address sovereign conflicts.',
    },
    {
      icon: GraduationCap,
      title: 'Entrepreneurial Leadership',
      description: 'Merging the rigor of academic debate with Heritage Christian University’s ethos of developing competent, compassionate leaders.',
    },
    {
      icon: Sparkles,
      title: 'Practical Innovation',
      description: 'Developing collective, forward-thinking policy frameworks that incorporate digital technologies and modern industrial paradigms.',
    },
  ];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the eligibility requirements to participate as a delegate?",
      answer: "HIMUN '26 welcomes high school, undergraduate, and graduate students from all academic majors worldwide. No prior Model UN experience is required; we provide comprehensive prep materials and delegate training sessions before the conference starts."
    },
    {
      question: "What does the all-inclusive registration package cover?",
      answer: "The registration fee covers premium hostel accommodation at Heritage Christian University residences, three full meals daily, airport pickup and local transport to the campus/venue, conference materials (placards, badges, handbook), official certificates of participation, and access to all social events, including the Diplomatic Gala, city tour, and networking dinner."
    },
    {
      question: "Do international delegates require a visa to enter Ghana?",
      answer: "Delegates from ECOWAS member states do not require a visa. For other international delegates, Ghana offers either visa-on-arrival or consular visas depending on your country. Upon completed registration and payment, the HIMUN Secretariat will issue an official Letter of Invitation to facilitate your visa application."
    },
    {
      question: "How are country and committee assignments determined?",
      answer: "During registration, delegates select their top three committee and country preferences. Assignments are distributed on a rolling basis, prioritizing early registrations, experience levels, and represented delegations to ensure balanced and diverse committee chambers."
    },
    {
      question: "Is there a specific dress code for the conference?",
      answer: "Yes, delegates are required to wear Western Business Attire (suits, blazers, formal trousers, dresses, or skirts) during all committee sessions. On the opening day and the Diplomatic Gala, delegates are highly encouraged to wear elegant traditional national dress representing either their own country or the nation they represent."
    },
    {
      question: "How will delegates be supported in preparing for their committees?",
      answer: "Once assignments are released, delegates will receive comprehensive study guides (Background Guides) for their specific committees. We will also host virtual prep webinars covering rules of procedure, position paper writing, and negotiation strategies to ensure everyone is fully prepared to contribute."
    }
  ];

  return (
    <section className="w-full bg-white font-sans text-slate-900 pb-20 pt-32 overflow-hidden">
      
      {/* Intro Section */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Floating Circle Sticker */}
        <motion.div 
          animate={{ rotate: -360 }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
          className="absolute -top-10 right-1/3 hidden lg:block z-0 opacity-80"
        >
          <svg width="80" height="80" viewBox="0 0 100 100" className="text-[#C01A1A]">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="20 10" />
          </svg>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h4 variants={itemVariants} className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-black uppercase tracking-widest mb-4 border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">ABOUT US</motion.h4>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-10 tracking-tight leading-tight">
            Welcome to <br/> <span className="relative inline-block text-[#C01A1A]">HIMUN<SquigglyUnderline color="#C01A1A" /></span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="space-y-6 text-base text-slate-600 leading-relaxed font-medium">
            <p>
              It is my pleasure to welcome you to a growing community that believes in the power of young people to lead, collaborate, and shape a better world. For over a decade, Model UN has brought together secondary school students, university students, educators, and partners to engage global issues through dialogue, diplomacy, and leadership inspired by the United Nations.
            </p>
            <p>
              This year is especially meaningful as we celebrate the inaugural session of HIMUN under the theme "Rebuilding Trust in a Fragmented World." The theme reflects our belief that lasting peace, development, and human rights are only possible through collaboration across borders, cultures, and generations. Delegates can look forward to engaging debates, thought-provoking committees, leadership development, and meaningful connections that extend beyond the conference rooms.
            </p>
          </motion.div>
          
          <motion.button variants={itemVariants} className="mt-10 px-8 py-4 bg-[#C01A1A] text-white font-bold rounded-full shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] border-2 border-slate-900 hover:-translate-y-1 active:translate-y-0 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:shadow-none transition-all flex items-center gap-2">
            Read More ↗
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative neo-brutalist shapes */}
          <div className="absolute -top-6 -right-6 w-full h-full bg-[#FCD116] rounded-[2rem] rounded-tr-[8rem] -z-10 border-4 border-slate-900"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#C01A1A] rounded-full -z-20 border-4 border-slate-900"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800&h=800" 
            alt="Welcome to HIMUN" 
            className="w-full rounded-[2rem] rounded-tr-[8rem] border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] object-cover h-[500px]"
          />
        </motion.div>
      </div>

      {/* Core Mission Section */}
      <div className="bg-[#C01A1A] py-32 mb-32 border-y-4 border-slate-900 shadow-[0px_8px_0px_0px_rgba(15,23,42,1)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">
              Our <span className="relative inline-block text-[#FCD116]">Mission<SquigglyUnderline color="#FCD116" /></span>
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-white font-medium text-lg leading-relaxed">
              HIMUN simulates the core assemblies of the United Nations. By adopting foreign diplomatic personas, delegates debate pressing global issues, form tactical alliances, and draft resolutions aimed at driving global resilience.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pillars.map((pillar, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white text-slate-900 p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col items-center text-center border-4 border-slate-900 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-[#FCD116] flex items-center justify-center text-slate-900 mb-8 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h4 className="font-black text-2xl mb-4">{pillar.title}</h4>
                <p className="text-base font-medium text-slate-600">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h4 className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-black uppercase tracking-widest mb-4 border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">INFORMATION</h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Frequently Asked <span className="relative inline-block text-[#C01A1A]">Questions<SquigglyUnderline color="#C01A1A" /></span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-6"
        >
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-colors hover:bg-slate-50"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-lg text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#C01A1A] text-white' : 'bg-[#FCD116] text-slate-900'}`}>
                    {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 sm:p-8 pt-0 text-base text-slate-700 font-medium leading-relaxed border-t-4 border-slate-900 mt-2 bg-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}
