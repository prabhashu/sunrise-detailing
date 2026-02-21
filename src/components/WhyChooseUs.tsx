"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Sparkles, ShieldCheck, Clock } from 'lucide-react';
const features = [
{
  icon: Car,
  title: '100% Mobile Convenience',
  description:
  'We come fully equipped to your home, office, or location of choice. No water or power needed.'
},
{
  icon: Sparkles,
  title: 'Premium & Luxury Results',
  description:
  'High-grade products, professional tools, and expert techniques for a showroom finish.'
},
{
  icon: ShieldCheck,
  title: 'Care Beyond a Car Wash',
  description:
  'Every vehicle is treated with precision, not rushed through a line. We protect your investment.'
},
{
  icon: Clock,
  title: 'Time-Saving Experience',
  description:
  'No waiting rooms. No driving. No hassle. You continue your day while we work.'
}];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 bg-sunrise-slate relative overflow-hidden">

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-3xl md:text-4xl font-bold text-sunrise-navy mb-4">

            Why Tampa Bay Chooses{' '}
            <span className="text-sunrise-orange">Sunrise</span>
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-gray-600 max-w-2xl mx-auto text-lg">

            We're not just washing cars. We're restoring and protecting your
            vehicle with the highest level of care.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) =>
          <motion.div
            key={index}
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
            transition={{
              delay: index * 0.1
            }}
            whileHover={{
              y: -10
            }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-sunrise-orange group">

              <div className="w-14 h-14 bg-sunrise-slate/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sunrise-orange/10 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-sunrise-navy group-hover:text-sunrise-orange transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-sunrise-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}