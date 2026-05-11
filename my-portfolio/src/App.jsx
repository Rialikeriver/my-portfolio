import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- STYLES & THEME ---
const colors = {
  woodDark: '#5c2f18',
  woodLight: '#a16a3f',
  parchment: '#fdf3d3',
  uiGreen: '#4eb24a',
  uiBorder: '#2d160a',
};

const Layout = ({ children }) => (
  <div className="min-h-screen bg-[#2c5d63] p-4 font-mono flex flex-col items-center justify-center selection:bg-[#4eb24a] selection:text-white" 
       style={{ backgroundImage: 'radial-gradient(#4eb24a 1px, transparent 0)', backgroundSize: '40px 40px' }}>
    {/* Main Wooden Frame */}
    <div className="max-w-4xl w-full bg-[#fdf3d3] border-8 border-[#5c2f18] rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] relative p-8">
      {/* Decorative corner bolts */}
      <div className="absolute top-2 left-2 w-3 h-3 bg-[#2d160a] rounded-full shadow-inner" />
      <div className="absolute top-2 right-2 w-3 h-3 bg-[#2d160a] rounded-full shadow-inner" />
      <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#2d160a] rounded-full shadow-inner" />
      <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#2d160a] rounded-full shadow-inner" />
      {children}
    </div>
  </div>
);

const TabButton = ({ active, label, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-8 py-3 m-2 border-4 border-[#2d160a] text-white font-bold rounded-lg shadow-[4px_4px_0px_0px_#2d160a] transition-all
      ${active ? 'bg-[#4eb24a] brightness-110' : 'bg-[#a16a3f] opacity-80'}`}
  >
    {label}
  </motion.button>
);

export default function App() {
  const [tab, setTab] = useState('profile');

  // Updated Skills List
  const skills = [
    { name: 'Java', level: '100%' },
    { name: 'Python', level: '100%' },
    { name: 'HTML/CSS', level: '100%'},
    {name: 'PHP', level: '100%'},
    { name: 'R', level: '100%'},
    { name: 'SQL', level: '100%' },
    { name: 'React', level: '100%' },
    { name: 'C++', level: '98%' },
    { name: 'C', level: '98%' },
    { name: 'Linux', level: '100%' },
  ];

  return (
    <Layout>
      {/* Character Portrait Area */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8 border-b-4 border-[#5c2f18] pb-8">
      <motion.div 
  animate={{ y: [0, -5, 0] }}
  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  className="w-32 h-32 bg-[#e8a474] border-4 border-[#2d160a] rounded-xl flex items-center justify-center shadow-inner overflow-hidden"
>
  <img 
    src="/portfoliopfp.png" 
    alt="Paria" 
    className="w-full h-full object-cover"
    style={{ imageRendering: 'auto' }} 
  />
</motion.div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-black text-[#5c2f18] tracking-tight">Paria Abdzadeh</h1>
          <a 
  href="https://www.algonquincollege.com/sat/program/computer-engineering-technology-computing-science/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-[#a16a3f] text-xl italic font-bold hover:text-[#4eb24a] transition-colors cursor-pointer block mt-1"
>
  Algonquin Computer Engineering Student 
</a>
          <div className="flex gap-3 mt-4 justify-center md:justify-start">
            <span className="bg-[#4eb24a] text-white px-3 py-1 rounded border-2 border-[#2d160a] text-sm font-bold shadow-[2px_2px_0px_0px_#2d160a]">CGPA: 3.52</span>
            <a 
  href="https://www.linkedin.com/in/paria-abdzadeh-b86556325" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-[#0077b5] text-white px-3 py-1 rounded border-2 border-[#2d160a] text-sm font-bold shadow-[2px_2px_0px_0px_#2d160a] hover:brightness-110 hover:-translate-y-0.5 transition-all active:shadow-none active:translate-y-0.5 block"
>
  LinkedIn 🔗
</a>
          </div>
        </div>
      </div>

      {/* Navigation Toolbar */}
      <div className="flex flex-wrap justify-center mb-10">
        <TabButton active={tab === 'profile'} label="ABOUT" onClick={() => setTab('profile')} />
        <TabButton active={tab === 'skills'} label="SKILLS" onClick={() => setTab('skills')} />
        <TabButton active={tab === 'projects'} label="PROJECTS" onClick={() => setTab('projects')} />
      </div>

      {/* Main Content Area */}
      <div className="min-h-[350px]">
        <AnimatePresence mode="wait">
          {tab === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-[#5c2f18] space-y-6"
            >
              <div className="bg-[#fff9e6] p-6 border-4 border-[#a16a3f] rounded-lg shadow-inner relative">
                <p className="text-2xl leading-relaxed italic">
                  "Hello! I'm tending to my code at Algonquin College. I love building backend logic and exploring AI/ML. My farm is always growing!"
                </p>
                <div className="absolute -bottom-3 -right-3 text-4xl">🌱</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#e8a474] p-4 border-4 border-[#2d160a] rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Current Buffs:</h3>
                  <ul className="list-disc ml-5 font-bold text-[#5c2f18]">
                    <li>Advanced API Design</li>
                    <li>Backend Engineering</li>
                    <li>Data Cleaning Expert</li>
                  </ul>
                </div>
                <div className="bg-[#e8a474] p-4 border-4 border-[#2d160a] rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Active Quest:</h3>
                  <p className="font-bold italic">Finding a Summer 2026 Internship!</p>
                </div>
              </div>
            </motion.div>
          )}

          {tab === 'skills' && (
            <motion.div 
              key="skills" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#a16a3f] p-4 border-4 border-[#2d160a] rounded-lg shadow-[4px_4px_0px_0px_#2d160a] flex flex-col items-center"
                >
                  <div className="text-3xl mb-2 drop-shadow-md">📦</div>
                  <span className="text-white font-black text-lg mb-2">{skill.name}</span>
                  <div className="w-full bg-[#2d160a] h-4 rounded-full overflow-hidden border-2 border-white">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: skill.level }}
                      transition={{ duration: 1 }}
                      className="bg-[#4eb24a] h-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

{tab === 'projects' && (
  <motion.div 
    key="projects" 
    className="space-y-6"
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
  >
    {/* Millionaire Trivia Quest */}
    <div className="bg-[#fff9e6] border-4 border-[#a16a3f] p-6 rounded-lg relative hover:shadow-lg transition-shadow group">
      <div className="absolute top-2 right-2 bg-[#4eb24a] text-white px-4 py-1 text-xs font-black border-4 border-[#2d160a] rotate-2 shadow-[2px_2px_0px_0px_#2d160a]">LEGENDARY</div>
      <h4 className="font-black text-[#5c2f18] text-2xl uppercase">Millionaire Trivia Game</h4>
      <p className="text-md text-[#a16a3f] font-bold mb-3 italic">Java • JavaFX • TCP Sockets • JSON</p>
      <p className="text-[#5c2f18] font-medium leading-tight mb-4 text-lg">
        Developed a full multiplayer logic game with real-time networking. Features question shuffling and persistent score tracking.
      </p>
      <a 
        href="https://github.com/Rialikeriver/qgamemvc" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-[#5c2f18] text-white px-4 py-2 border-2 border-[#2d160a] font-bold hover:bg-[#4eb24a] transition-all hover:scale-105 active:scale-95"
      >
        VIEW SOURCE ON GITHUB →
      </a>
    </div>

    {/* Kayaa Music Manager Quest */}
    <div className="bg-[#fff9e6] border-4 border-[#a16a3f] p-6 rounded-lg relative hover:shadow-lg transition-shadow group">
      <div className="absolute top-2 right-2 bg-[#3b82f6] text-white px-4 py-1 text-xs font-black border-4 border-[#2d160a] -rotate-2 shadow-[2px_2px_0px_0px_#2d160a]">RARE</div>
      <h4 className="font-black text-[#5c2f18] text-2xl uppercase">Kayaa Music Manager</h4>
      <p className="text-md text-[#a16a3f] font-bold mb-3 italic">C++ • Qt Framework • Smart Pointers</p>
      <p className="text-[#5c2f18] font-medium leading-tight mb-4 text-lg">
        A desktop application for managing playlist metadata. Optimized using modern C++ principles and the Qt framework for a smooth UI.
      </p>
      <a 
        href="https://github.com/waveplough/MusicPlaylistManager" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-[#5c2f18] text-white px-4 py-2 border-2 border-[#2d160a] font-bold hover:bg-[#4eb24a] transition-all hover:scale-105 active:scale-95"
      >
        VIEW SOURCE ON GITHUB →
      </a>
    </div>
  </motion.div>
)}
        </AnimatePresence>
      </div>
    </Layout>
  );
}