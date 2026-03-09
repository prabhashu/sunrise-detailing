"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

const packageData: Record<string, any[]> = {
  'Popular Packages': [
    {
      name: 'Light Package',
      price: '$149',
      features: [
        'Exterior Includes:',
        'Spot-Free Foam Bath and Gentle Hand Wash',
        'Deep Clean Wheels',
        'Blow Dry and Microfiber Towel Dry',
        'Tire Shine',
        'Clean Door Jambs',
        'Interior Includes:',
        'Light Vacuum',
        'Quick Blow Out of Cracks and Crevices',
        'Light Wipe Down',
        'Clean Windows'
      ],
      cta: 'Book Light Package',
      highlight: false
    },
    {
      name: 'Premium Package',
      price: '$189',
      features: [
        'Everything In Our Light Package, PLUS Everything Below:',
        'Exterior Includes:',
        'Premium 3-Month Wax/Sealant Protection',
        'Dress Tires',
        'Wheel Well Pressure Wash',
        'Interior Includes:',
        'Clean & Disinfect All Interior Surfaces',
        'Leather Cleaning & Conditioning',
        'Blow Out of Cracks & Crevices',
        'Windows & Mirrors Cleaned',
        'Floor Mats Detailed',
        'Protect All Interior Plastic Surfaces',
        'Full Trunk Detail',
        'Air Freshener Treatment',
        'Common Interior Add-Ons:',
        'Shampoo Cloth Seats',
        'Shampoo All Carpets'
      ],
      cta: 'Book Premium',
      highlight: true
    },
    {
      name: 'Diamond Package',
      price: '$399',
      features: [
        'Everything In Our Light & Premium Package, PLUS Everything Below:',
        'Exterior Includes:',
        'Clay Bar Treatment and Paint Decontamination',
        'Clean & Degrease Engine Bay',
        'Dress Engine Bay',
        'Restore Exterior Plastic Trim',
        '8 to 12 months of Ceramic Sealant Protection',
        'Interior Includes:',
        'Steam Clean Vents, Dash, Nav Screen, Cup Holders, Door Panels & Interior Components',
        'Clean All Buttons, Knobs, and Switches',
        'Deep Condition Leather Seats',
        'Shampoo Carpet, Trunk & Floor Mats',
        'Shampoo Seats',
        'Fabric Protection',
        'Clean Headliner'
      ],
      cta: 'Book Diamond',
      highlight: false
    }
  ],
  'Interior Only': [
    {
      name: 'Classic Package',
      price: '$135',
      startingPrice: true,
      features: [
        'Disinfect & Clean Doors & Dashboard',
        'Full Wipe-Down Disinfection',
        'Clean Windows & Mirrors',
        'Dual Vacuuming',
        'Stain Spot Treatment',
        'Leather Conditioning',
        'Trunk Detailing',
        'Air Freshener',
        'Protect All Plastic Surfaces With Interior Sealant'
      ],
      cta: 'Book Classic',
      highlight: false
    },
    {
      name: 'Classic Elegance Package',
      price: '$189',
      startingPrice: true,
      features: [
        'Everything In Our Classic Package, PLUS:',
        'Shampoo & Extraction Of All Seats',
        'Shampoo Carpets',
        'Steam Cleaning',
        'Glossy Floormat Detailing'
      ],
      cta: 'Book Classic Elegance',
      highlight: true
    }
  ],
  'Exterior Only': [
    {
      name: 'Classic Shine',
      price: '$79',
      startingPrice: true,
      features: [
        'Professional Hand Wash',
        'Wheel Well Pressure Wash',
        'Rim, Tire & Trim Detailing',
        'Door Jam Cleaning',
        '3 Month Wax Protection'
      ],
      cta: 'Book Classic Shine',
      highlight: true
    }
  ],
  'Maintenance Clients': [
    {
      name: 'Full Detail Maintenance',
      price: '$130-$175',
      startingPrice: true,
      description: 'Unlock weekly / Bi-Weekly / Or Monthly detailing For A Discounted price!\n\nAt Sunrise Detailing, our Full Detail Maintenance service is designed to keep your vehicle immaculate on a regular basis. We offer exclusive discounts for clients who schedule weekly, bi-weekly, or monthly appointments, tailored to the size of your vehicle. Enjoy our premium package at a 30% discount, ensuring your vehicle always maintains its pristine condition. Treat your car to the care it deserves with Sunrise Detailing.',
      features: [],
      cta: 'Book Maintenance',
      highlight: true
    }
  ]
};

const categories = Object.keys(packageData);

export function PricingPackages() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const currentPackages = packageData[activeCategory];

  return (
    <section className="py-20 bg-sunrise-slate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-sunrise-navy mb-4">
            Our Packages
          </h2>
          <p className="text-gray-600">Choose the perfect level of detail for your vehicle.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-sunrise-orange text-white shadow-md'
                  : 'bg-white text-gray-500 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={`grid grid-cols-1 ${currentPackages.length === 1 ? 'md:grid-cols-1 max-w-2xl' : currentPackages.length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3 max-w-6xl'} gap-8 mx-auto`}>
          {currentPackages.map((pkg, idx) =>
          <GlassCard
            key={idx}
            variant={pkg.highlight ? 'highlighted' : 'default'}
            className={`p-8 flex flex-col relative ${pkg.highlight ? 'bg-white shadow-2xl scale-100 md:scale-105 z-10 border-sunrise-orange' : 'bg-white/80'}`}>

              {pkg.highlight &&
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sunrise-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  {pkg.name === 'Full Detail Maintenance' ? 'Special Pricing' : 'Best Value'}
                </div>
            }
              <h3 className="text-xl font-bold text-sunrise-navy mb-2">
                {pkg.name}
              </h3>
              <div className="text-4xl font-extrabold text-sunrise-navy mb-1">
                {pkg.price}
              </div>
              {pkg.startingPrice ? (
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                  *Starting Price*
                </div>
              ) : (
                <div className="mb-6"></div>
              )}

              {pkg.description ? (
                <div className="text-gray-600 mb-8 whitespace-pre-wrap leading-relaxed flex-grow">
                  {pkg.description}
                </div>
              ) : (
                <ul className="space-y-3 mb-8 flex-grow overflow-y-auto">
                  {pkg.features.map((feat: string, i: number) => {
                    const isHeader = feat.endsWith(':');
                    return (
                      <li
                        key={i}
                        className={`flex items-start text-gray-600 ${isHeader ? 'mt-6 mb-2 !text-sunrise-navy font-bold text-sm tracking-widest uppercase border-b border-gray-100 pb-2 first:mt-0' : 'gap-3'}`}
                      >
                        {!isHeader && (
                          <Check
                            size={18}
                            className="text-green-500 mt-0.5 shrink-0"
                          />
                        )}
                        <span className={isHeader ? 'w-full' : 'text-[15px] leading-snug'}>{feat}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
              <Link href="?booking=true" className="w-full">
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
