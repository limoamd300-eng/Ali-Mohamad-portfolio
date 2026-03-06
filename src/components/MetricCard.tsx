import React from 'react';
import { motion } from 'motion/react';

interface MetricCardProps {
  label: string;
  value: string;
  className?: string;
  variant?: 'lime' | 'blue' | 'red';
}

export default function MetricCard({ label, value, className = "", variant = 'lime' }: MetricCardProps) {
  const colors = {
    lime: 'border-cyber-lime/30 text-cyber-lime shadow-cyber-lime/10',
    blue: 'border-cyber-blue/30 text-cyber-blue shadow-cyber-blue/10',
    red: 'border-warning-red/30 text-warning-red shadow-warning-red/10',
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`
        relative p-4 bg-slate-900/40 border rounded-sm overflow-hidden
        ${colors[variant]} ${className}
      `}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-current opacity-50" />
      <div className="text-[10px] uppercase font-mono tracking-widest opacity-60 mb-1">{label}</div>
      <div className="text-2xl font-mono font-bold tracking-tighter glow-lime">{value}</div>
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-current opacity-30" />
    </motion.div>
  );
}
