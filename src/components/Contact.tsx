import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Terminal, Fingerprint, Lock, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';
import CyberButton from './CyberButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 border-b border-cyber-lime/20 pb-4">
            <div className="text-cyber-lime font-mono text-xs tracking-widest uppercase">PROTOCOL_01</div>
            <h2 className="text-4xl font-mono font-bold text-white tracking-tighter uppercase">Secure Messaging Protocol</h2>
          </div>

          <p className="text-slate-400 font-mono text-sm leading-relaxed max-w-md">
            Transmission of data through this portal is encrypted using advanced cryptographic algorithms. 
            Please provide your identifier and message payload for processing.
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-cyber-lime/10 border border-cyber-lime/30 flex items-center justify-center text-cyber-lime group-hover:bg-cyber-lime/20 transition-all">
                <Mail size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">EMAIL_ENDPOINT</span>
                <span className="text-white font-mono font-bold group-hover:text-cyber-lime transition-colors">ali.omar@secure.com</span>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center text-cyber-blue group-hover:bg-cyber-blue/20 transition-all">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">LOCATION_COORDS</span>
                <span className="text-white font-mono font-bold group-hover:text-cyber-blue transition-colors">37.7749° N, 122.4194° W</span>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-warning-red/10 border border-warning-red/30 flex items-center justify-center text-warning-red group-hover:bg-warning-red/20 transition-all">
                <Phone size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">SECURE_LINE</span>
                <span className="text-white font-mono font-bold group-hover:text-warning-red transition-colors">+1 (555) 010-1010</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-900/40 border border-cyber-lime/10 rounded-sm">
            <div className="flex items-center gap-3 text-cyber-lime font-mono text-xs mb-2">
              <ShieldCheck size={14} />
              ENCRYPTION_STATUS: ACTIVE
            </div>
            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-1/3 h-full bg-cyber-lime shadow-[0_0_10px_rgba(50,255,126,0.5)]"
              />
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 border-b border-cyber-blue/20 pb-4">
            <div className="text-cyber-blue font-mono text-xs tracking-widest uppercase">PROTOCOL_02</div>
            <h2 className="text-4xl font-mono font-bold text-white tracking-tighter uppercase">Input Payload</h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">[Enter_Identifier]</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="NAME_OR_ALIAS"
                className="bg-slate-900/60 border border-slate-800 focus:border-cyber-lime/50 p-4 font-mono text-sm text-white outline-none transition-all placeholder:text-slate-700"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">[Enter_Return_Path]</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="EMAIL_ADDRESS"
                className="bg-slate-900/60 border border-slate-800 focus:border-cyber-blue/50 p-4 font-mono text-sm text-white outline-none transition-all placeholder:text-slate-700"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">[Input_Message_Payload]</label>
              <textarea 
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="MESSAGE_CONTENT_HERE..."
                className="bg-slate-900/60 border border-slate-800 focus:border-warning-red/50 p-4 font-mono text-sm text-white outline-none transition-all placeholder:text-slate-700 resize-none"
              />
            </div>

            <CyberButton 
              variant={status === 'sent' ? 'lime' : 'blue'} 
              className="w-full py-4 flex items-center justify-center gap-3"
            >
              {status === 'idle' && <><Send size={18} /> TRANSMIT_DATA</>}
              {status === 'sending' && <><Terminal size={18} className="animate-spin" /> ENCRYPTING...</>}
              {status === 'sent' && <><ShieldCheck size={18} /> DATA_TRANSMITTED</>}
            </CyberButton>
          </form>
        </div>
      </div>
    </section>
  );
}
