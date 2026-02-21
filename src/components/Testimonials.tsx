"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
const reviews = [
{
  name: 'Michael R.',
  role: 'Tesla Model S Owner',
  content:
  'Absolutely incredible service. The ceramic coating looks better than when I bought the car. The team was professional, on time, and meticulous.',
  rating: 5
},
{
  name: 'Sarah J.',
  role: 'Busy Mom',
  content:
  "I didn't realize how dirty my SUV was until Sunrise finished. The interior looks brand new! Mobile service is a lifesaver with kids.",
  rating: 5
},
{
  name: 'David K.',
  role: 'Car Enthusiast',
  content:
  "I'm extremely picky about who touches my Porsche. Sunrise Detailing exceeded my expectations. Their paint correction skills are top-tier.",
  rating: 5
}];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () =>
  setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  return (
    <section id="reviews" className="py-24 bg-sunrise-slate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sunrise-navy mb-4">
            Client Stories
          </h2>
          <p className="text-gray-600">Don't just take our word for it.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-sunrise-orange/20">
            <Quote size={80} />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 min-h-[300px] flex items-center justify-center relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -20
                }}
                transition={{
                  duration: 0.3
                }}
                className="text-center">

                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) =>
                  <Star
                    key={i}
                    className="w-6 h-6 fill-sunrise-yellow text-sunrise-yellow" />

                  )}
                </div>
                <p className="text-xl md:text-2xl text-gray-700 font-medium italic mb-8 leading-relaxed">
                  "{reviews[currentIndex].content}"
                </p>
                <div>
                  <h4 className="font-bold text-sunrise-navy text-lg">
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {reviews[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-md hover:bg-sunrise-orange hover:text-white transition-colors text-sunrise-navy"
              aria-label="Previous review">

              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white shadow-md hover:bg-sunrise-orange hover:text-white transition-colors text-sunrise-navy"
              aria-label="Next review">

              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>);

}