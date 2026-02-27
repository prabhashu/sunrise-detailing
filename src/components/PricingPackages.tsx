"use client";
import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

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

export function PricingPackages() {
  return (
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
  );
}
