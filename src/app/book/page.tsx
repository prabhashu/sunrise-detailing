"use client";
import React, { useState } from 'react';
import { PageTransition } from '@/components/ui/PageTransition';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { PageHero } from '@/components/PageHero';
import { GlassCard } from '@/components/ui/GlassCard';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Calendar, MapPin, Car, User } from 'lucide-react';
export default function BookingPage() {
  const [step, setStep] = useState(1);
  return (
    <PageTransition>
      <PageHero 
        title={<>Book Your <span className="text-sunrise-orange">Detail</span></>}
        subtitle="Simple, fast, and convenient. Reserve your spot in minutes."
      />
      <section className="relative pb-20 bg-sunrise-slate">
        <div className="container mx-auto px-4 relative z-10 mt-4 md:-mt-10">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-5 sm:p-8 md:p-12 bg-white/95 backdrop-blur-xl shadow-2xl relative z-20">
              {/* Progress Steps */}
              <div className="flex justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -z-10 -translate-y-1/2"></div>
                {[1, 2, 3].map((s) =>
                <div
                  key={s}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${step >= s ? 'bg-sunrise-orange text-sunrise-navy' : 'bg-gray-100 text-gray-500'}`}>

                    {s}
                  </div>
                )}
              </div>

              {/* Step 1: Service & Vehicle */}
              {step === 1 &&
              <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-sunrise-navy mb-6 flex items-center gap-2">
                    <Car className="text-sunrise-orange" /> Vehicle & Service
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                    label="Service Package"
                    options={[
                    {
                      value: '',
                      label: 'Select a package...'
                    },
                    {
                      value: 'basic',
                      label: 'Basic Maintenance ($89)'
                    },
                    {
                      value: 'premium',
                      label: 'Premium Detail ($189)'
                    },
                    {
                      value: 'ultimate',
                      label: 'Ultimate Showroom ($299)'
                    },
                    {
                      value: 'custom',
                      label: 'Custom Service'
                    }]
                    } />

                    <Select
                    label="Vehicle Type"
                    options={[
                    {
                      value: '',
                      label: 'Select vehicle type...'
                    },
                    {
                      value: 'sedan',
                      label: 'Sedan / Coupe'
                    },
                    {
                      value: 'suv',
                      label: 'SUV / Truck'
                    },
                    {
                      value: 'van',
                      label: 'Minivan / Large SUV'
                    }]
                    } />

                    <Input label="Vehicle Make" placeholder="e.g. Toyota" />
                    <Input label="Vehicle Model" placeholder="e.g. Camry" />
                  </div>
                  <div className="flex justify-end mt-8">
                    <Button onClick={() => setStep(2)}>Next Step</Button>
                  </div>
                </div>
              }

              {/* Step 2: Date & Location */}
              {step === 2 &&
              <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-sunrise-navy mb-6 flex items-center gap-2">
                    <Calendar className="text-sunrise-orange" /> Date & Location
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                    label="Preferred Date"
                    type="date"
                    icon={<Calendar size={18} />} />

                    <Select
                    label="Preferred Time"
                    options={[
                    {
                      value: 'morning',
                      label: 'Morning (8am - 12pm)'
                    },
                    {
                      value: 'afternoon',
                      label: 'Afternoon (12pm - 5pm)'
                    }]
                    } />

                    <div className="md:col-span-2">
                      <Input
                      label="Service Address"
                      placeholder="123 Main St, Tampa, FL"
                      icon={<MapPin size={18} />} />

                    </div>
                    <Input label="City" placeholder="Tampa" />
                    <Input label="Zip Code" placeholder="33602" />
                  </div>
                  <div className="flex justify-between mt-8">
                    <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="!text-sunrise-navy !border-[#0A111A]">

                      Back
                    </Button>
                    <Button onClick={() => setStep(3)}>Next Step</Button>
                  </div>
                </div>
              }

              {/* Step 3: Contact & Confirm */}
              {step === 3 &&
              <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-sunrise-navy mb-6 flex items-center gap-2">
                    <User className="text-sunrise-orange" /> Contact Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Full Name" placeholder="John Doe" />
                    <Input
                    label="Phone Number"
                    placeholder="(555) 123-4567"
                    type="tel" />

                    <div className="md:col-span-2">
                      <Input
                      label="Email Address"
                      placeholder="john@example.com"
                      type="email" />

                    </div>
                    <div className="md:col-span-2">
                      <Input
                      label="Special Requests / Notes"
                      placeholder="Gate code, specific stains, etc." />

                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl mt-6 border border-gray-100">
                    <h3 className="font-bold text-sunrise-navy mb-2">
                      Booking Summary
                    </h3>
                    <p className="text-sm text-gray-600">
                      Premium Detail for SUV • Morning Appointment • Tampa
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      *Payment collected after service completion.
                    </p>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="!text-sunrise-navy !border-[#0A111A]">

                      Back
                    </Button>
                    <Button size="lg" className="px-8">
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              }
            </GlassCard>
          </div>
        </div>
      </section>
    </PageTransition>);

}