import React from 'react';
import { motion } from 'motion/react';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'lime' | 'blue' | 'red';
}

export default function CyberButton({ children, onClick, className = "", variant = 'lime' }: CyberButtonProps) {
  const colors = {
    lime: 'border-cyber-lime text-cyber-lime hover:bg-cyber-lime/10 shadow-cyber-lime/20',
    blue: 'border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 shadow-cyber-blue/20',
    red: 'border-warning-red text-warning-red hover:bg-warning-red/10 shadow-warning-red/20',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative px-6 py-2 font-mono text-sm uppercase tracking-widest border
        transition-all duration-300 group overflow-hidden
        ${colors[variant]} ${className}
      `}
    >
      <span className="relative z-10 group-hover:glitch-text">{children}</span>
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100 
        bg-gradient-to-r from-transparent via-current to-transparent 
        -translate-x-full group-hover:translate-x-full transition-transform duration-1000
      `} />
    </motion.button>
  );
}
