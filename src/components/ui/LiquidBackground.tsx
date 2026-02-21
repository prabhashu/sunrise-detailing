"use client";
import React from 'react';
import { motion } from 'framer-motion';
export function LiquidBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Solid navy base - ensures visibility */}
      <div className="absolute inset-0 bg-sunrise-slate" />

      {/* Animated Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 100, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute -top-1/2 -left-1/2 w-[100vw] h-[100vw] bg-blue-900/50/40 rounded-full blur-[100px]" />


      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -60, 0],
          x: [0, -50, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
          delay: 2
        }}
        className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-sunrise-orange/25 rounded-full blur-[120px]" />


      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-0 left-1/4 w-[60vw] h-[60vw] bg-sunrise-yellow/15 rounded-full blur-[80px]" />


      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/50 via-transparent to-[#050B14]/70" />

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>);

}