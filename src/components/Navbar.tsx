import React from 'react';
import { ShieldCheck, Terminal, Fingerprint, Lock, Ghost, Cpu } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Command Center', icon: Terminal },
    { id: 'vault', label: 'The Vault', icon: Lock },
    { id: 'contact', label: 'Encryption Point', icon: Fingerprint },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-deep-space/80 backdrop-blur-md border-b border-cyber-lime/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setActivePage('home')}>
          <ShieldCheck className="text-cyber-lime group-hover:scale-110 transition-transform" size={24} />
          <span className="font-mono font-bold text-lg tracking-tighter text-white">
            ALI<span className="text-cyber-lime">OMAR</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`
                flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-all
                ${activePage === item.id ? 'text-cyber-lime glow-lime' : 'text-slate-400 hover:text-white'}
              `}
            >
              <item.icon size={14} />
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-cyber-blue opacity-70">
            <span className="w-2 h-2 bg-cyber-lime rounded-full animate-pulse" />
            SECURE_CONNECTION_ESTABLISHED
          </div>
        </div>
      </div>
    </nav>
  );
}
