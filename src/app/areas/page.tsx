import React from 'react';
import { PageTransition } from '@/components/ui/PageTransition';
import { ServiceAreas } from '@/components/ServiceAreas';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
export default function ServiceAreasPage() {
  return (
    <PageTransition>
      <PageHero 
        title={<>Service <span className="text-sunrise-orange">Areas</span></>}
        subtitle="We bring the detailing shop to your driveway. Covering the entire Tampa Bay area with our fully equipped mobile units."
      >
        <Link href="/book">
          <Button size="lg">Check Availability</Button>
        </Link>
      </PageHero>

      {/* Reuse existing component but wrapped in page context */}
      <ServiceAreas />

      <section className="py-20 bg-sunrise-slate">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-xl">
            <MapPin size={48} className="mx-auto text-sunrise-orange mb-6" />
            <h2 className="text-3xl font-bold text-sunrise-navy mb-4">
              Don't see your city?
            </h2>
            <p className="text-gray-600 mb-8">
              We are constantly expanding our service area. Contact us to see if
              we can make a special trip to your location.
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="!text-sunrise-navy !border-[#0A111A] hover:!bg-sunrise-slate hover:!text-sunrise-navy">

                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>);

}