"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Star, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#050B14] pt-28 pb-12">
      {/* Dynamic Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
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
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-sunrise-orange/20 rounded-full blur-[120px]" 
        />
        <motion.div
          animate={{
            translateY: [20, -20, 20],
            translateX: [20, -20, 20],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" 
        />

        <img
          src="https://car-images.bauersecure.com/wp-images/3679/best-luxury-cars-2024.jpeg"
          alt="Luxury Car Detail"
          className="w-full h-full object-cover opacity-30" 
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-sunrise-orange" />
              <span className="text-white/80 text-sm font-semibold tracking-wide uppercase">
                Tampa Bay's Premier Detailing
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl xl:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              Premium Mobile Auto Detailing <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunrise-yellow to-sunrise-orange block mt-2 md:mt-0 md:inline">
                Across Tampa Bay
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-medium leading-relaxed">
              Luxury-Level Care. We Come to You. Experience the ultimate convenience and craftsmanship without leaving your home.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/book" className="group relative inline-flex items-center justify-center gap-2 bg-white text-[#050B14] px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg overflow-hidden w-full sm:w-auto transition-transform hover:scale-105">
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                <span className="relative">Book Now</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+15551234567" className="group inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full border border-white/10 font-bold text-base md:text-lg backdrop-blur-md w-full sm:w-auto transition-all hover:scale-105">
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Floating Elements / Images */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative h-[500px] xl:h-[600px] w-full max-w-xl mx-auto xl:ml-auto"
          >
            {/* Main Feature Image Plate */}
            <div className="absolute inset-0 xl:left-10 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img 
                src="https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp" 
                className="w-full h-full object-cover scale-105 transition-transform duration-1000 hover:scale-110"
                alt="Detailed finish"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent" />
            </div>

            {/* Floating Glass Cards */}
            <motion.div 
              animate={{ y: [-15, 10, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 xl:-left-4 top-10 xl:top-16 bg-[#050B14]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl w-64 z-20"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-sunrise-orange/20 p-3 rounded-full">
                  <Star className="w-6 h-6 text-sunrise-orange fill-sunrise-orange" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">5.0</div>
                  <div className="text-xs text-gray-400 font-semibold tracking-widest uppercase">Rated by Clients</div>
                </div>
              </div>
              <p className="text-sm text-gray-300 italic">"Literally looks better than the day I bought it."</p>
            </motion.div>

            <motion.div 
              animate={{ y: [15, -10, 15] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 xl:-right-8 bottom-10 xl:bottom-16 bg-[#050B14]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
            >
               <div className="bg-blue-500/20 p-3 rounded-full">
                  <Shield className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Ceramic Coating</div>
                  <div className="text-sm text-gray-400 font-medium">Certified Installers</div>
                </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-semibold">Discover</span>
        <motion.div 
          animate={{ height: ["0px", "40px", "0px"], y: [0, 20, 40] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-white/30"
        />
      </motion.div>
    </section>
  );
}