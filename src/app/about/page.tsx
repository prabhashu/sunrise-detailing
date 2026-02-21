"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { PageHero } from '@/components/PageHero';
import { GlassCard } from '@/components/ui/GlassCard';
import { Award, Users, Heart, Star } from 'lucide-react';
export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero 
        title={<>About <span className="text-sunrise-orange">Sunrise</span></>}
        subtitle="Luxury car care should be convenient, professional, and trustworthy."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-sunrise-orange/20 rounded-full blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
                  alt="Detailing in action"
                  className="rounded-3xl shadow-2xl relative z-10" />

                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="text-sunrise-yellow fill-sunrise-yellow" />
                    <Star className="text-sunrise-yellow fill-sunrise-yellow" />
                    <Star className="text-sunrise-yellow fill-sunrise-yellow" />
                    <Star className="text-sunrise-yellow fill-sunrise-yellow" />
                    <Star className="text-sunrise-yellow fill-sunrise-yellow" />
                  </div>
                  <p className="font-bold text-sunrise-navy">
                    "Best detailing service in Tampa!"
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-sunrise-navy mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Sunrise Detailing was built on one simple idea: luxury car care
                should be convenient, professional, and trustworthy. We noticed
                a gap in the market between automated car washes that scratch
                paint and high-end shops that require you to leave your car for
                days.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We combine premium products, skilled techniques, and a
                mobile-first approach to deliver results that go beyond
                expectations. Whether at your home, office, or future detailing
                studio, your vehicle is always treated with precision and
                respect.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sunrise-orange/10 rounded-lg text-sunrise-orange">
                    <Award size={24} />
                  </div>
                  <span className="font-bold text-sunrise-navy">
                    Certified Pros
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sunrise-orange/10 rounded-lg text-sunrise-orange">
                    <Users size={24} />
                  </div>
                  <span className="font-bold text-sunrise-navy">
                    Local Team
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sunrise-orange/10 rounded-lg text-sunrise-orange">
                    <Heart size={24} />
                  </div>
                  <span className="font-bold text-sunrise-navy">
                    Satisfaction Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sunrise-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sunrise-navy mb-4">
              Why We're Different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              title: 'Water & Power Included',
              desc: 'Our vans are fully self-sufficient. We bring our own spot-free water and electricity.'
            },
            {
              title: 'Premium Products Only',
              desc: 'We use only top-tier chemicals and coatings from trusted brands like Gtechniq and Rupes.'
            },
            {
              title: 'Insured & Bonded',
              desc: 'Peace of mind knowing your vehicle is protected while in our care.'
            }].
            map((item, idx) =>
            <GlassCard key={idx} className="p-8 bg-white" hoverEffect>
                <h3 className="text-xl font-bold text-sunrise-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </GlassCard>
            )}
          </div>
        </div>
      </section>
    </PageTransition>);

}