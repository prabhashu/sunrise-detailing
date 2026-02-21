"use client";
import React, { useState, lazy } from 'react';
import { PageTransition } from '@/components/ui/PageTransition';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { PageHero } from '@/components/PageHero';
import { GlassCard } from '@/components/ui/GlassCard';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AccordionItem } from '@/components/ui/Accordion';
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <PageTransition>
      <PageHero 
        title={<>Get in <span className="text-sunrise-orange">Touch</span></>}
        subtitle="Have questions or special requests? We're happy to help."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-sunrise-navy mb-8">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <GlassCard className="p-6 bg-white border-gray-100 shadow-md">
                  <Phone className="text-sunrise-orange mb-4" size={32} />
                  <h3 className="font-bold text-sunrise-navy mb-1">
                    Call or Text
                  </h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </GlassCard>
                <GlassCard className="p-6 bg-white border-gray-100 shadow-md">
                  <Mail className="text-sunrise-orange mb-4" size={32} />
                  <h3 className="font-bold text-sunrise-navy mb-1">Email Us</h3>
                  <p className="text-gray-600">info@sunrisedetailing.com</p>
                </GlassCard>
                <GlassCard className="p-6 bg-white border-gray-100 shadow-md">
                  <MapPin className="text-sunrise-orange mb-4" size={32} />
                  <h3 className="font-bold text-sunrise-navy mb-1">
                    Service Area
                  </h3>
                  <p className="text-gray-600">Greater Tampa Bay Area</p>
                </GlassCard>
                <GlassCard className="p-6 bg-white border-gray-100 shadow-md">
                  <Clock className="text-sunrise-orange mb-4" size={32} />
                  <h3 className="font-bold text-sunrise-navy mb-1">Hours</h3>
                  <p className="text-gray-600">Mon-Sat: 8am - 6pm</p>
                </GlassCard>
              </div>

              <h2 className="text-2xl font-bold text-sunrise-navy mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {[
                {
                  q: 'Do I need to provide water or power?',
                  a: 'No! Our mobile units are fully equipped with their own water tank and electricity generator.'
                },
                {
                  q: 'How long does a detail take?',
                  a: 'It depends on the service. A basic maintenance wash takes about 45-60 minutes, while a full detail can take 3-4 hours.'
                },
                {
                  q: 'Do you come to offices?',
                  a: 'Yes, we can detail your vehicle at your home or workplace, as long as there is permission and space to work.'
                },
                {
                  q: 'What forms of payment do you accept?',
                  a: 'We accept all major credit cards, cash, and digital payments like Apple Pay.'
                }].
                map((faq, i) =>
                <AccordionItem
                  key={i}
                  title={faq.q}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>

                    {faq.a}
                  </AccordionItem>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <GlassCard className="p-5 sm:p-8 md:p-10 bg-white shadow-2xl border-gray-100">
                <h2 className="text-2xl font-bold text-sunrise-navy mb-6">
                  Send us a Message
                </h2>
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}>

                  <Input label="Name" placeholder="Your Name" />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="your@email.com" />

                  <Input
                    label="Phone"
                    type="tel"
                    placeholder="(555) 123-4567" />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-sunrise-orange/50 focus:border-sunrise-orange transition-all duration-200 outline-none h-32 resize-none"
                      placeholder="How can we help you?">
                    </textarea>
                  </div>
                  <Button fullWidth size="lg">
                    Send Message
                  </Button>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-sunrise-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sunrise-navy mb-4 flex items-center justify-center gap-3">
              <Navigation className="text-sunrise-orange" size={32} />
              Our Service Area
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly serve the entire Tampa Bay area. Our mobile detailing
              units come directly to your location - home, office, or anywhere
              convenient for you.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            {/* Google Maps Embed - Tampa Bay Area */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450563.4334138446!2d-82.73225867968749!3d27.964157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{
                border: 0
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sunrise Detailing Service Area - Tampa Bay"
              className="w-full" />


            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm">
              <GlassCard className="p-6 bg-white/95 backdrop-blur-md shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sunrise-orange rounded-xl text-sunrise-navy shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sunrise-navy text-lg mb-1">
                      Mobile Service Area
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Tampa, St. Petersburg, Clearwater, Brandon, Wesley Chapel
                      & surrounding areas
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Tampa,+FL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sunrise-orange font-bold text-sm hover:underline inline-flex items-center gap-1">

                      Get Directions <Navigation size={14} />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>);

}