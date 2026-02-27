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
  CalendarCheck,
  Trash2,
  Truck,
  Gauge,
  ShieldAlert } from
'lucide-react';
import { PricingPackages } from '@/components/PricingPackages';
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
  id: 'maintenance-membership',
  icon: CalendarCheck,
  title: 'Maintenance Membership',
  desc: 'Regular ongoing care to maintain perfection',
  price: 'Contact Us'
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
  id: 'mold',
  icon: ShieldAlert,
  title: 'Mold Remediation',
  desc: 'Safe & professional biohazard removal',
  price: 'From $149'
},
{
  id: 'fleet',
  icon: Truck,
  title: 'Fleet & Commercial',
  desc: 'Regular maintenance for business vehicles',
  price: 'Custom Quote'
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

      <PricingPackages />
    </PageTransition>);

}