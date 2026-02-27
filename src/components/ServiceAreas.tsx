"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Truck, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
const areas = [
{
  region: 'Core Tampa',
  cities: ['Tampa', 'South Tampa', 'Downtown', 'Westchase', 'Carrollwood']
},
{
  region: 'North & East',
  cities: [
  'Lutz',
  'Wesley Chapel',
  'Brandon',
  'Riverview',
  'Valrico',
  'Temple Terrace']

},
{
  region: 'Pinellas & Beaches',
  cities: [
  'St. Petersburg',
  'Clearwater',
  'Largo',
  'Dunedin',
  'Safety Harbor']

},
{
  region: 'Expansion Areas',
  cities: [
  'New Port Richey',
  'Trinity',
  'Odessa',
  "Land O' Lakes",
  'Apollo Beach']

}];

// Animated map pin component
function AnimatedMapPin({
  x,
  y,
  label,
  delay = 0,
  isMain = false






}: {x: string;y: string;label?: string;delay?: number;isMain?: boolean;}) {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0
      }}
      whileInView={{
        scale: 1,
        opacity: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 200
      }}
      className="absolute"
      style={{
        top: y,
        left: x
      }}>

      {/* Pulse rings */}
      <motion.div
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.6, 0, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: delay
        }}
        className={`absolute -inset-2 rounded-full ${isMain ? 'bg-sunrise-orange' : 'bg-blue-900/50'}`} />

      <motion.div
        animate={{
          scale: [1, 2, 1],
          opacity: [0.4, 0, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: delay + 0.3
        }}
        className={`absolute -inset-1 rounded-full ${isMain ? 'bg-sunrise-orange' : 'bg-blue-900/50'}`} />


      {/* Pin dot */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity
        }}
        className={`relative z-10 rounded-full border-2 border-white shadow-lg ${isMain ? 'w-5 h-5 bg-sunrise-slate' : 'w-3 h-3 bg-sunrise-orange'}`} />


      {/* Label */}
      {label &&
      <motion.div
        initial={{
          opacity: 0,
          y: 5
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          delay: delay + 0.2
        }}
        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg whitespace-nowrap border border-gray-100">

          <span className="text-sunrise-navy">{label}</span>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-gray-100 rotate-45" />
        </motion.div>
      }
    </motion.div>);

}
export function ServiceAreas() {
  return (
    <section id="areas" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:w-1/2 text-center lg:text-left">

            <span className="text-sunrise-orange font-bold tracking-wider uppercase text-sm mb-2 block">
              Where We Operate
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-sunrise-navy mb-6">
              Proudly Serving the Entire Tampa Bay Area
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From Tampa to St. Petersburg, Clearwater to Wesley Chapel, Sunrise
              Detailing delivers premium mobile detailing wherever you are in
              Tampa Bay. We bring our fully equipped mobile units directly to
              your driveway.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {areas.map((area, idx) =>
              <motion.div
                key={idx}
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
                  delay: idx * 0.1
                }}>

                  <h3 className="font-bold text-sunrise-navy mb-3 flex items-center justify-center lg:justify-start gap-2">
                    <MapPin className="w-4 h-4 text-sunrise-orange" />
                    {area.region}
                  </h3>
                  <ul className="space-y-2">
                    {area.cities.map((city, cIdx) =>
                  <li
                    key={cIdx}
                    className="text-gray-500 text-sm hover:text-sunrise-steel transition-colors cursor-default">

                        {city}
                      </li>
                  )}
                  </ul>
                </motion.div>
              )}
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <Link href="/areas">
                <Button variant="outline" size="lg" icon={ArrowRight} className="border-sunrise-navy text-sunrise-navy hover:bg-sunrise-navy hover:text-white">
                  View All Service Areas
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="lg:w-1/2 w-full">

            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-[#050B14] via-sunrise-steel to-[#050B14]">
              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} />

              </div>

              {/* Animated radar circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    scale: [0.5, 2.5],
                    opacity: [0.5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeOut'
                  }}
                  className="absolute -inset-20 border-2 border-sunrise-orange/40 rounded-full" />

                <motion.div
                  animate={{
                    scale: [0.5, 2.5],
                    opacity: [0.5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: 1
                  }}
                  className="absolute -inset-20 border-2 border-sunrise-orange/40 rounded-full" />

                <motion.div
                  animate={{
                    scale: [0.5, 2.5],
                    opacity: [0.5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: 2
                  }}
                  className="absolute -inset-20 border-2 border-sunrise-orange/40 rounded-full" />

              </div>

              {/* Static range circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-gray-200 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/15 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] border border-white/20 rounded-full" />

              {/* Animated location pins */}
              <AnimatedMapPin
                x="45%"
                y="42%"
                label="Tampa"
                isMain
                delay={0.2} />

              <AnimatedMapPin x="28%" y="55%" delay={0.4} />
              <AnimatedMapPin x="62%" y="35%" delay={0.6} />
              <AnimatedMapPin x="70%" y="50%" delay={0.8} />
              <AnimatedMapPin x="35%" y="30%" delay={1.0} />
              <AnimatedMapPin x="55%" y="65%" delay={1.2} />
              <AnimatedMapPin x="25%" y="40%" delay={1.4} />
              <AnimatedMapPin x="75%" y="38%" delay={1.6} />

              {/* Animated connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{
                  zIndex: 1
                }}>

                <motion.line
                  x1="45%"
                  y1="42%"
                  x2="28%"
                  y2="55%"
                  stroke="rgba(255,138,0,0.3)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{
                    pathLength: 0
                  }}
                  whileInView={{
                    pathLength: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5
                  }} />

                <motion.line
                  x1="45%"
                  y1="42%"
                  x2="62%"
                  y2="35%"
                  stroke="rgba(255,138,0,0.3)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{
                    pathLength: 0
                  }}
                  whileInView={{
                    pathLength: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.7
                  }} />

                <motion.line
                  x1="45%"
                  y1="42%"
                  x2="70%"
                  y2="50%"
                  stroke="rgba(255,138,0,0.3)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{
                    pathLength: 0
                  }}
                  whileInView={{
                    pathLength: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.9
                  }} />

              </svg>

              {/* Active Units Card */}
              <motion.div
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
                  delay: 0.5
                }}
                className="absolute bottom-6 left-6 right-6">

                <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/50">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Animated truck icon */}
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                          className="absolute inset-0 bg-sunrise-orange/20 rounded-xl" />

                        <div className="relative p-3 bg-gradient-to-br from-sunrise-orange to-sunrise-yellow rounded-xl">
                          <Truck className="w-6 h-6 text-sunrise-navy" />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <motion.div
                            animate={{
                              opacity: [1, 0.5, 1]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity
                            }}
                            className="w-2 h-2 bg-green-500 rounded-full" />

                          <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                            Live Status
                          </span>
                        </div>
                        <p className="text-sunrise-navy font-bold text-sm sm:text-lg leading-tight mt-1">
                          Active Mobile Units in Your Area
                        </p>
                      </div>
                    </div>

                    {/* Unit count */}
                    <div className="hidden sm:flex items-center gap-2 bg-sunrise-slate/5 px-4 py-2 rounded-xl">
                      <Zap className="w-4 h-4 text-sunrise-orange" />
                      <span className="text-2xl font-extrabold text-sunrise-navy">
                        8
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        units
                        <br />
                        ready
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}