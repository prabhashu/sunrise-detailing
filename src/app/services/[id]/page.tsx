"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, Clock, Shield, Star } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { Button } from '@/components/ui/Button';
// Mock data store - in a real app this would be fetched
const serviceData: Record<string, any> = {
  exterior: {
    title: 'Mobile Exterior Detailing',
    subtitle: 'Protect. Shine. Restore.',
    description:
    "Our mobile exterior detailing service removes dirt, grime, and contaminants while enhancing your vehicle's shine and paint protection. We use pH-neutral soaps and premium microfiber towels to ensure a scratch-free finish.",
    price: '$89',
    duration: '1.5 - 2 Hours',
    features: [
    'Hand wash & dry with microfiber',
    'Wheel & tire deep cleaning',
    'Clay bar treatment for smooth paint',
    'Premium wax or sealant application',
    'Exterior glass cleaning',
    'Tire dressing (no sling)',
    'Trim restoration & protection'],

    image:
    'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop'
  },
  interior: {
    title: 'Mobile Interior Detailing',
    subtitle: 'Deep Clean Comfort & Freshness',
    description:
    'We restore your interior to a clean, refreshed state with professional-grade tools and techniques. We tackle stains, odors, and dust in every crevice.',
    price: '$119',
    duration: '2 - 3 Hours',
    features: [
    'Deep vacuuming (including trunk)',
    'Steam cleaning of upholstery',
    'Leather cleaning & conditioning',
    'Dashboard & console detailing',
    'Door jambs cleaning',
    'Interior glass cleaning',
    'Odor neutralization'],

    image:
    'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070&auto=format&fit=crop'
  },
  full: {
    title: 'Full Detail Package',
    subtitle: 'The Complete Reset for Your Vehicle',
    description:
    'Interior + exterior detailing combined for maximum impact and value. Perfect for seasonal deep cleans, selling a vehicle, or just hitting the reset button.',
    price: '$189',
    duration: '3 - 4 Hours',
    features: [
    'Complete Exterior Hand Wash',
    'Clay Bar & Wax Application',
    'Deep Interior Vacuum & Steam',
    'Leather Care & Conditioning',
    'Wheel, Tire & Wheel Well Detail',
    'All Glass & Mirrors',
    'Door Jambs & Trim'],

    image:
    'https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop'
  },
  paint: {
    title: 'Paint Correction',
    subtitle: 'Remove Swirls. Restore Gloss.',
    description:
    'Paint correction removes imperfections like swirl marks, light scratches, and oxidation. Performed in a controlled environment for optimal results.',
    price: '$299',
    duration: '4 - 6 Hours',
    features: [
    'Paint inspection & assessment',
    'Multi-stage machine polishing',
    'Swirl & scratch removal',
    'Oxidation correction',
    'Paint depth measurement',
    'Final sealant application',
    'Gloss enhancement'],

    image:
    'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=2070&auto=format&fit=crop'
  },
  ceramic: {
    title: 'Ceramic Coating',
    subtitle: 'Long-Term Protection & Gloss',
    description:
    'Ceramic coating provides advanced paint protection, hydrophobic properties, and unmatched shine that lasts for years.',
    price: '$599',
    duration: '1 - 2 Days',
    features: [
    'Full paint decontamination',
    'Paint correction included',
    'Professional ceramic application',
    'UV protection',
    'Hydrophobic finish',
    '2-5 year durability',
    'Easier maintenance'],

    image:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
  },
  'maintenance-membership': {
    title: 'Maintenance Membership',
    subtitle: 'Regular Ongoing Care',
    description:
    'Keep your vehicle in pristine condition year-round with our exclusive Maintenance Membership. Designed for clients who desire consistent, premium care, this program ensures your car always looks its best while preserving its value.',
    price: 'Contact Us',
    duration: 'Varies',
    features: [
    'Monthly or bi-weekly service options',
    'Discounted rates on premium services',
    'Priority scheduling',
    'Regular maintenance washes',
    'Interior touch-ups',
    'Tire and wheel care',
    'Long-lasting protection checks'],

    image:
    'https://images.unsplash.com/photo-1542382103-625b0fb6c7c8?q=80&w=2070&auto=format&fit=crop'
  },
  engine: {
    title: 'Engine Bay Cleaning',
    subtitle: 'Clean Where It Matters',
    description:
    'A professionally cleaned engine bay improves appearance and helps with maintenance visibility.',
    price: '$59',
    duration: '30 - 45 Minutes',
    features: [
    'Safe degreasing',
    'Pressure rinse',
    'Plastic & rubber dressing',
    'Hose & wire cleaning',
    'Improved inspection visibility',
    'Professional finish'],

    image:
    'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070&auto=format&fit=crop'
  },
  mold: {
    title: 'Mold Remediation',
    subtitle: 'Safe & Effective Removal',
    description:
    'Mold in your vehicle is not just unsightly, it is a serious health hazard. Our professional remediation service uses hospital-grade disinfectants and ozone treatment to safely eliminate mold at its source and restore a healthy environment.',
    price: 'From $149',
    duration: '3 - 5 Hours',
    features: [
    'Complete interior assessment',
    'HEPA vacuuming of all surfaces',
    'Hospital-grade disinfection',
    'High-heat steam sterilization',
    'Ozone air treatment',
    'Deep extraction cleaning',
    'Stain removal & sanitation'],

    image:
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop'
  },
  odor: {
    title: 'Odor Removal',
    subtitle: 'Eliminate Smells at the Source',
    description:
    'Professional odor elimination that targets the source, not just masks it. Perfect for smoke, pet, or food odors.',
    price: '$79',
    duration: '1 - 2 Hours',
    features: [
    'Source identification',
    'Deep extraction cleaning',
    'Ozone treatment',
    'Enzyme application',
    'Air system cleaning',
    'Long-lasting freshness'],

    image:
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'
  },
  fleet: {
    title: 'Fleet & Commercial',
    subtitle: 'Consistent, Professional Image',
    description:
    'We provide scheduled mobile detailing for fleets, company vehicles, and commercial accounts to maintain your professional image.',
    price: 'Custom Quote',
    duration: 'Varies',
    features: [
    'Scheduled maintenance plans',
    'Volume discounts',
    'On-site service',
    'Flexible scheduling',
    'Dedicated account manager',
    'Consistent quality',
    'Detailed reporting'],

    image:
    'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop'
  }
};
export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const service = serviceData[id || 'full'] || serviceData['full'];
  return (
    <PageTransition>
      {/* Hero with solid background */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden bg-sunrise-slate">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-30" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/80 via-[#050B14]/90 to-[#050B14]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <Link
            href="/services"
            className="inline-flex items-center text-white/70 hover:text-sunrise-orange mb-6 transition-colors">

            <ArrowLeft size={20} className="mr-2" /> Back to Services
          </Link>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-6xl font-extrabold mb-4">

            {service.title}
          </motion.h1>
          <p className="text-xl text-sunrise-orange font-medium">
            {service.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-sunrise-navy mb-6">
                Service Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {service.description}
              </p>

              <h3 className="text-2xl font-bold text-sunrise-navy mb-6">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {service.features.map((feature: string, idx: number) =>
                <div
                  key={idx}
                  className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100">

                    <Check
                    className="text-green-500 mr-3 mt-1 shrink-0"
                    size={20} />

                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                )}
              </div>

              <div className="bg-sunrise-slate p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-sunrise-navy mb-4">
                  Why Choose This Service?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sunrise-orange mb-3 shadow-sm">
                      <Shield size={24} />
                    </div>
                    <span className="font-bold text-sunrise-navy">
                      Protected
                    </span>
                    <span className="text-sm text-gray-500">
                      Long-lasting finish
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sunrise-orange mb-3 shadow-sm">
                      <Clock size={24} />
                    </div>
                    <span className="font-bold text-sunrise-navy">
                      Efficient
                    </span>
                    <span className="text-sm text-gray-500">Done in hours</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sunrise-orange mb-3 shadow-sm">
                      <Star size={24} />
                    </div>
                    <span className="font-bold text-sunrise-navy">Quality</span>
                    <span className="text-sm text-gray-500">5-Star Rated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <span className="text-gray-500 block mb-2">Starting at</span>
                  <span className="text-5xl font-extrabold text-sunrise-navy">
                    {service.price}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-bold text-sunrise-navy">
                      {service.duration}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Location</span>
                    <span className="font-bold text-sunrise-navy">
                      We Come to You
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Availability</span>
                    <span className="font-bold text-green-600">
                      Available Today
                    </span>
                  </div>
                </div>

                <Link href="/book" className="block w-full">
                  <Button fullWidth size="lg" className="mb-4">
                    Book Now
                  </Button>
                </Link>
                <Link
                  href="/contact"
                  className="block w-full text-center text-gray-500 hover:text-sunrise-orange text-sm">

                  Have questions? Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>);

}