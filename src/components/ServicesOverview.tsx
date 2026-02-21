"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Droplets,
  Wind,
  Sparkles,
  Layers,
  Sun,
  Zap,
  Trash2,
  Truck,
  Gauge } from
'lucide-react';
import { Button } from '@/components/ui/Button';
const services = [
{
  id: 'exterior',
  icon: Droplets,
  title: 'Mobile Exterior Detailing',
  desc: 'Hand wash, clay bar, wax & tire shine'
},
{
  id: 'interior',
  icon: Wind,
  title: 'Mobile Interior Detailing',
  desc: 'Deep vacuum, steam clean & leather care'
},
{
  id: 'full',
  icon: Sparkles,
  title: 'Full Detail Packages',
  desc: 'Complete interior & exterior restoration'
},
{
  id: 'paint',
  icon: Layers,
  title: 'Paint Correction',
  desc: 'Remove swirls, scratches & oxidation'
},
{
  id: 'ceramic',
  icon: Sun,
  title: 'Ceramic Coating',
  desc: 'Long-term protection & hydrophobic gloss'
},
{
  id: 'headlight',
  icon: Zap,
  title: 'Headlight Restoration',
  desc: 'Restore clarity for safety & looks'
},
{
  id: 'engine',
  icon: Gauge,
  title: 'Engine Bay Cleaning',
  desc: 'Safe degreasing & dressing'
},
{
  id: 'odor',
  icon: Trash2,
  title: 'Odor Removal',
  desc: 'Eliminate smells at the source'
},
{
  id: 'fleet',
  icon: Truck,
  title: 'Fleet & Commercial',
  desc: 'Regular maintenance for business vehicles'
}];

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="text-sunrise-orange font-bold tracking-wider uppercase text-sm mb-2 block">

              Our Expertise
            </motion.span>
            <motion.h2
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.1
              }}
              className="text-3xl md:text-5xl font-bold text-sunrise-navy">

              Premium Detailing Services
            </motion.h2>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}>

            <Link href="/services">
              <Button variant="secondary" icon={ArrowRight}>
                View Full Menu
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) =>
          <Link key={service.id} href={`/services/${service.id}`}>
              <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.05
              }}
              whileHover={{
                scale: 1.03
              }}
              className="group bg-gray-50 hover:bg-white p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-sunrise-orange/30 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">

                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-sunrise-orange group-hover:text-white transition-colors duration-300 text-sunrise-navy">
                    <service.icon size={24} />
                  </div>
                  <ArrowRight className="text-gray-300 group-hover:text-sunrise-orange transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 duration-300" />
                </div>
                <h3 className="text-xl font-bold text-sunrise-navy mb-2 group-hover:text-sunrise-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </motion.div>
            </Link>
          )}
        </div>
      </div>
    </section>);

}