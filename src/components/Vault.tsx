import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Terminal, Fingerprint, Lock, Ghost, Cpu, ExternalLink, Github } from 'lucide-react';
import CyberButton from './CyberButton';

const projects = [
  {
    title: "Packet Sniffer",
    description: "Advanced network traffic analysis tool with real-time protocol decoding and threat detection.",
    threatLevel: "CRITICAL",
    tech: ["Python", "Scapy", "Wireshark"],
    link: "#"
  },
  {
    title: "Secure Auth System",
    description: "Multi-factor authentication gateway using biometric verification and zero-knowledge proofs.",
    threatLevel: "HIGH",
    tech: ["Node.js", "WebAuthn", "Redis"],
    link: "#"
  },
  {
    title: "Vulnerability Scanner",
    description: "Automated security assessment tool for identifying OWASP Top 10 vulnerabilities in web apps.",
    threatLevel: "MEDIUM",
    tech: ["Go", "Docker", "PostgreSQL"],
    link: "#"
  }
];

const skills = {
  offensive: ["Penetration Testing", "Exploitation", "Python/Bash Scripting", "Reverse Engineering", "Web App Security"],
  defensive: ["Encryption Protocols", "Firewall Configuration", "SIEM (Splunk/ELK)", "Incident Response", "Cloud Security"]
};

const certifications = [
  { name: "OSCP", issuer: "OffSec", color: "cyber-lime" },
  { name: "eJPT", issuer: "eLearnSecurity", color: "cyber-blue" },
  { name: "CompTIA Security+", issuer: "CompTIA", color: "cyber-lime" }
];

export default function Vault() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* Projects Section */}
        <div className="flex flex-col gap-12">
          <div className="flex items-end justify-between border-b border-cyber-lime/20 pb-4">
            <div className="flex flex-col gap-2">
              <div className="text-cyber-lime font-mono text-xs tracking-widest uppercase">ARCHIVE_01</div>
              <h2 className="text-4xl font-mono font-bold text-white tracking-tighter">SECURITY ARCHIVES</h2>
            </div>
            <div className="hidden md:block text-slate-500 font-mono text-[10px] tracking-widest uppercase">
              TOTAL_RECORDS: {projects.length}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-slate-900/40 border border-cyber-lime/10 p-6 rounded-sm hover:border-cyber-lime/40 transition-all"
              >
                <div className="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-opacity">
                  <a href={project.link} className="text-cyber-lime hover:glow-lime">
                    <Github size={18} />
                  </a>
                </div>

                <div className={`
                  inline-block px-2 py-1 text-[8px] font-mono tracking-widest uppercase mb-4 border
                  ${project.threatLevel === 'CRITICAL' ? 'border-warning-red text-warning-red bg-warning-red/5' : 
                    project.threatLevel === 'HIGH' ? 'border-cyber-blue text-cyber-blue bg-cyber-blue/5' : 
                    'border-cyber-lime text-cyber-lime bg-cyber-lime/5'}
                `}>
                  THREAT_LEVEL: {project.threatLevel}
                </div>

                <h3 className="text-xl font-mono font-bold text-white mb-3 group-hover:text-cyber-lime transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[9px] font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills & Certs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Skills Radar */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 border-b border-cyber-blue/20 pb-4">
              <div className="text-cyber-blue font-mono text-xs tracking-widest uppercase">ARCHIVE_02</div>
              <h2 className="text-4xl font-mono font-bold text-white tracking-tighter">SKILLS_RADAR</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-6">
                <h3 className="text-cyber-lime font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                  <Ghost size={16} /> OFFENSIVE_CAPS
                </h3>
                <ul className="flex flex-col gap-4">
                  {skills.offensive.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-mono text-slate-400 group">
                      <div className="w-1.5 h-1.5 bg-cyber-lime group-hover:scale-150 transition-transform" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-cyber-blue font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                  <ShieldCheck size={16} /> DEFENSIVE_CAPS
                </h3>
                <ul className="flex flex-col gap-4">
                  {skills.defensive.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-mono text-slate-400 group">
                      <div className="w-1.5 h-1.5 bg-cyber-blue group-hover:scale-150 transition-transform" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 border-b border-cyber-lime/20 pb-4">
              <div className="text-cyber-lime font-mono text-xs tracking-widest uppercase">ARCHIVE_03</div>
              <h2 className="text-4xl font-mono font-bold text-white tracking-tighter">CERTIFICATIONS</h2>
            </div>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-slate-900/40 border border-slate-800 hover:border-cyber-lime/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 flex items-center justify-center border border-${cert.color}/30 text-${cert.color} group-hover:bg-${cert.color}/10 transition-all`}>
                      <ShieldCheck size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-mono font-bold">{cert.name}</span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{cert.issuer}</span>
                    </div>
                  </div>
                  <div className={`text-[10px] font-mono text-${cert.color} glow-${cert.color.split('-')[1]} uppercase tracking-widest flex items-center gap-2`}>
                    <div className={`w-2 h-2 bg-${cert.color} rounded-full animate-pulse`} />
                    VERIFIED
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
