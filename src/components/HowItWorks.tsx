"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Truck, Sparkles, ThumbsUp } from 'lucide-react';
const steps = [
{
  icon: Calendar,
  title: 'Book Online',
  desc: 'Choose your service and schedule in minutes.'
},
{
  icon: Truck,
  title: 'We Arrive',
  desc: 'We come fully equipped to your location.'
},
{
  icon: Sparkles,
  title: 'Premium Care',
  desc: 'Your vehicle gets expert attention & detail.'
},
{
  icon: ThumbsUp,
  title: 'Enjoy Results',
  desc: 'Drive a spotless, protected vehicle.'
}];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-sunrise-slate text-sunrise-navy relative overflow-hidden">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
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
            className="text-3xl md:text-4xl font-bold mb-4">

            Mobile Detailing Made{' '}
            <span className="text-sunrise-orange">Simple</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've streamlined the process to respect your time while delivering
            exceptional results.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-100 -z-10">
            <motion.div
              initial={{
                width: 0
              }}
              whileInView={{
                width: '100%'
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut'
              }}
              className="h-full bg-gradient-to-r from-sunrise-orange to-sunrise-yellow" />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) =>
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
                delay: index * 0.2
              }}
              className="flex flex-col items-center text-center group">

                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-sunrise-navy flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <step.icon className="w-10 h-10 text-sunrise-navy" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sunrise-orange flex items-center justify-center font-bold text-white shadow-lg border-2 border-sunrise-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sunrise-navy">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}