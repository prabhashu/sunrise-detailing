"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-[#050B14]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/80 to-[#050B14] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.08)_0,rgba(0,0,0,0)_50%)] z-10" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            translateY: [-20, 20, -20],
            translateX: [-20, 20, -20],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sunrise-orange/10 rounded-full blur-[120px]" 
        />
        <motion.div
          animate={{
            translateY: [20, -20, 20],
            translateX: [20, -20, 20],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {children && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex justify-center gap-4"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
