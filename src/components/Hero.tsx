import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Terminal, Fingerprint, Lock, Ghost, Cpu } from 'lucide-react';
import MetricCard from './MetricCard';
import CyberButton from './CyberButton';

const TypingEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span className="terminal-cursor">{displayText}</span>;
};

interface HeroProps {
  setActivePage: (page: string) => void;
}

export default function Hero({ setActivePage }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden grid-bg"
    >
      <div className="scanline" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-cyber-lime/10 border border-cyber-lime/30 text-cyber-lime text-[10px] font-mono tracking-widest uppercase">
              STATUS: ACTIVE_SESSION
            </div>
            <div className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-[10px] font-mono tracking-widest uppercase">
              CLEARANCE: LEVEL_10
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tighter text-white leading-none">
            SYSTEM: <span className="text-cyber-lime glow-lime">ALI OMAR</span>
          </h1>

          <div className="text-lg md:text-xl font-mono text-slate-400 h-8">
            <TypingEffect text="Defending the Architecture of Tomorrow." />
          </div>

          <p className="text-slate-500 max-w-lg leading-relaxed">
            Cybersecurity Programmer, Security Researcher, and Bug Bounty Hunter. 
            Specializing in offensive security, vulnerability research, and building 
            resilient digital infrastructures.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <CyberButton variant="lime" onClick={() => setActivePage('vault')}>INITIALIZE_VAULT</CyberButton>
            <CyberButton variant="blue" onClick={() => setActivePage('contact')}>SECURE_COMMS</CyberButton>
          </div>
        </motion.div>

        {/* Right: Photo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ 
            x: mousePos.x, 
            y: mousePos.y,
            transition: 'transform 0.1s ease-out'
          }}
          className="relative flex justify-center items-center"
        >
          {/* Hexagonal border */}
          <div className="relative w-72 h-80 md:w-96 md:h-[420px] hex-container bg-cyber-lime/10 border-2 border-cyber-lime/50 p-2 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-lime/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
            <img 
              src="https://picsum.photos/seed/cyberpunk/800/1000" 
              alt="Ali Omar" 
              className="w-full h-full object-cover hex-container grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Scanning line effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-cyber-lime shadow-[0_0_15px_rgba(50,255,126,1)] animate-[scan_4s_linear_infinite]" />
          </div>

          {/* Decorative elements around photo */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyber-lime opacity-50" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyber-lime opacity-50" />
          
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 flex flex-col gap-4">
            {[Ghost, Cpu, ShieldCheck].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className="w-10 h-10 rounded-full bg-slate-900 border border-cyber-lime/30 flex items-center justify-center text-cyber-lime shadow-lg"
              >
                <Icon size={18} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Metrics */}
      <div className="max-w-7xl mx-auto w-full mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <MetricCard label="Bugs Found" value="100+" variant="lime" />
        <MetricCard label="Active Research" value="5" variant="blue" />
        <MetricCard label="Security Clearance" value="Level 10" variant="lime" />
        <MetricCard label="System Status" value="Secure" variant="blue" />
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}
