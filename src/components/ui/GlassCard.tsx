"use client";
import React from 'react';
import { motion } from 'framer-motion';
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'highlighted' | 'dark';
  hoverEffect?: boolean;
  onClick?: () => void;
}
export function GlassCard({
  children,
  className = '',
  variant = 'default',
  hoverEffect = false,
  onClick
}: GlassCardProps) {
  const variants = {
    default: 'bg-gray-100 border-white/20 text-sunrise-navy',
    highlighted:
    'bg-sunrise-orange/10 border-sunrise-orange/30 text-sunrise-navy',
    dark: 'bg-sunrise-slate/40 border-gray-200 text-sunrise-navy'
  };
  const hoverStyles = hoverEffect ?
  'hover:scale-[1.02] hover:shadow-xl hover:border-sunrise-orange/50 cursor-pointer' :
  '';
  return (
    <motion.div
      whileHover={
      hoverEffect ?
      {
        y: -5
      } :
      {}
      }
      onClick={onClick}
      className={`
        backdrop-blur-xl border rounded-2xl shadow-lg transition-all duration-300
        ${variants[variant]}
        ${hoverStyles}
        ${className}
      `}>

      {children}
    </motion.div>);

}