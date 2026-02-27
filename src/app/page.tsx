import React from 'react';
import { Hero } from '@/components/Hero';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ServicesOverview } from '@/components/ServicesOverview';
import { HowItWorks } from '@/components/HowItWorks';
import { PricingPackages } from '@/components/PricingPackages';
import { ServiceAreas } from '@/components/ServiceAreas';
import { Testimonials } from '@/components/Testimonials';
import { FinalCTA } from '@/components/FinalCTA';
import { PageTransition } from '@/components/ui/PageTransition';
export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <PricingPackages />
      <HowItWorks />
      <ServiceAreas />
      <Testimonials />
      <FinalCTA />
    </PageTransition>);

}