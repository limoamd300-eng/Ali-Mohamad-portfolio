import React from 'react';
import { Github, Linkedin, Key, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-deep-space/90 border-t border-cyber-lime/10 py-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-cyber-lime" size={20} />
            <span className="font-mono font-bold text-lg tracking-tighter text-white">
              ALI<span className="text-cyber-lime">OMAR</span>
            </span>
          </div>
          <p className="text-xs font-mono text-slate-500 max-w-xs">
            © 2026 Ali Omar - Secure Connection Established. Defending the architecture of tomorrow.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <a href="#" className="text-slate-400 hover:text-cyber-lime transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-cyber-blue transition-colors">
            <Linkedin size={20} />
          </a>
          <button className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-warning-red transition-colors group">
            <Key size={16} className="group-hover:rotate-12 transition-transform" />
            DOWNLOAD PGP KEY
          </button>
        </div>

        <div className="flex flex-col items-end gap-1 text-[10px] font-mono text-slate-600">
          <div>IP: 192.168.1.104</div>
          <div>LOC: 37.7749° N, 122.4194° W</div>
          <div className="text-cyber-lime opacity-50">STATUS: ENCRYPTED</div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-lime/20 to-transparent" />
    </footer>
  );
}
