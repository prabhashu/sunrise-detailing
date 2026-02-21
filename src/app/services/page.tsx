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
  Gauge,
  Check } from
'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { PageHero } from '@/components/PageHero';
const services = [
{
  id: 'exterior',
  icon: Droplets,
  title: 'Mobile Exterior Detailing',
  desc: 'Hand wash, clay bar, wax & tire shine',
  price: 'From $89'
},
{
  id: 'interior',
  icon: Wind,
  title: 'Mobile Interior Detailing',
  desc: 'Deep vacuum, steam clean & leather care',
  price: 'From $119'
},
{
  id: 'full',
  icon: Sparkles,
  title: 'Full Detail Packages',
  desc: 'Complete interior & exterior restoration',
  price: 'From $189',
  popular: true
},
{
  id: 'paint',
  icon: Layers,
  title: 'Paint Correction',
  desc: 'Remove swirls, scratches & oxidation',
  price: 'From $299'
},
{
  id: 'ceramic',
  icon: Sun,
  title: 'Ceramic Coating',
  desc: 'Long-term protection & hydrophobic gloss',
  price: 'From $599'
},
{
  id: 'headlight',
  icon: Zap,
  title: 'Headlight Restoration',
  desc: 'Restore clarity for safety & looks',
  price: 'From $69'
},
{
  id: 'engine',
  icon: Gauge,
  title: 'Engine Bay Cleaning',
  desc: 'Safe degreasing & dressing',
  price: 'From $59'
},
{
  id: 'odor',
  icon: Trash2,
  title: 'Odor Removal',
  desc: 'Eliminate smells at the source',
  price: 'From $79'
},
{
  id: 'fleet',
  icon: Truck,
  title: 'Fleet & Commercial',
  desc: 'Regular maintenance for business vehicles',
  price: 'Custom Quote'
}];

const packages = [
{
  name: 'Basic Maintenance',
  price: '$89',
  features: [
  'Hand Wash & Dry',
  'Wheel Cleaning',
  'Tire Shine',
  'Interior Vacuum',
  'Window Cleaning'],

  cta: 'Book Basic',
  highlight: false
},
{
  name: 'Premium Detail',
  price: '$189',
  features: [
  'Everything in Basic',
  'Clay Bar Treatment',
  'Spray Wax Protection',
  'Leather Conditioning',
  'Steam Cleaning'],

  cta: 'Book Premium',
  highlight: true
},
{
  name: 'Ultimate Showroom',
  price: '$299',
  features: [
  'Everything in Premium',
  'Machine Polish',
  'Ceramic Sealant',
  'Engine Bay Detail',
  'Odor Removal'],

  cta: 'Book Ultimate',
  highlight: false
}];

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <PageHero 
        title={<>Our Professional <span className="text-sunrise-orange">Services</span></>}
        subtitle="Sunrise Detailing offers a complete range of mobile and luxury auto detailing services designed to protect, restore, and elevate your vehicle."
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) =>
            <Link key={service.id} href={`/services/${service.id}`}>
                <GlassCard
                hoverEffect
                variant={service.popular ? 'highlighted' : 'default'}
                className="h-full p-8 flex flex-col bg-white border-gray-100 shadow-sm hover:shadow-xl">

                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-sunrise-slate rounded-xl text-sunrise-navy">
                      <service.icon size={28} />
                    </div>
                    {service.popular &&
                  <span className="bg-sunrise-orange/10 text-sunrise-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Popular
                      </span>
                  }
                  </div>
                  <h3 className="text-2xl font-bold text-sunrise-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <span className="font-bold text-sunrise-navy">
                      {service.price}
                    </span>
                    <span className="text-sunrise-orange flex items-center gap-1 text-sm font-bold group">
                      Details{' '}
                      <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform" />

                    </span>
                  </div>
                </GlassCard>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-sunrise-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sunrise-navy mb-4">
              Popular Packages
            </h2>
            <p className="text-gray-600">Bundled services for the best value</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, idx) =>
            <GlassCard
              key={idx}
              variant={pkg.highlight ? 'highlighted' : 'default'}
              className={`p-8 flex flex-col relative ${pkg.highlight ? 'bg-white shadow-2xl scale-105 z-10 border-sunrise-orange' : 'bg-white/80'}`}>

                {pkg.highlight &&
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sunrise-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Best Value
                  </div>
              }
                <h3 className="text-xl font-bold text-sunrise-navy mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-extrabold text-sunrise-navy mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feat, i) =>
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-600">

                      <Check
                    size={18}
                    className="text-green-500 mt-1 shrink-0" />

                      <span>{feat}</span>
                    </li>
                )}
                </ul>
                <Link href="/book" className="w-full">
                  <Button
                  variant={pkg.highlight ? 'primary' : 'outline'}
                  fullWidth
                  className={
                  pkg.highlight ?
                  '' :
                  '!text-sunrise-navy !border-gray-200 hover:!bg-sunrise-slate hover:!text-sunrise-navy'
                  }>

                    {pkg.cta}
                  </Button>
                </Link>
              </GlassCard>
            )}
          </div>
        </div>
      </section>
    </PageTransition>);

}