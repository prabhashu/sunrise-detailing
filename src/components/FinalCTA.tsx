"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CalendarCheck } from 'lucide-react';
export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#050B14] to-sunrise-steel text-white text-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#0A111A]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunrise-orange/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="max-w-3xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Your Vehicle Deserves More Than a Basic Wash
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Experience the difference of premium mobile detailing. Book your
            appointment today and let us bring the showroom shine to you.
          </p>
          <Link href="/book">
            <Button
              variant="primary"
              size="lg"
              icon={CalendarCheck}
              className="text-lg px-10 py-5 shadow-orange-900/20">

              Book Your Detail Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>);

}