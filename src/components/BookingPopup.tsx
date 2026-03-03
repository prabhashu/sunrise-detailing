"use client";

import React, { useEffect, Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

function BookingPopupContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isBookingOpen = searchParams.get('booking') === 'true';
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = 'hidden';
      // Reset submission state when opened
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => setIsSubmitted(false), 300); // Reset after animation
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBookingOpen]);

  const closePopup = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete('booking');
    const newPathname = window.location.pathname;
    const newUrl = newSearchParams.toString() ? `${newPathname}?${newSearchParams.toString()}` : newPathname;
    router.push(newUrl, { scroll: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful form submission
    setIsSubmitted(true);
    setTimeout(() => {
      closePopup();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closePopup}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
              <div>
                <h2 className="text-2xl font-bold text-sunrise-navy">Book Your <span className="text-sunrise-orange">Detail</span></h2>
                <p className="text-gray-500 text-sm mt-1">Fill out the form below and we'll get back to you shortly.</p>
              </div>
              <button 
                onClick={closePopup}
                className="p-2 text-gray-400 hover:text-sunrise-navy hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-6"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-sunrise-navy mb-2">Request Sent Successfully!</h3>
                    <p className="text-gray-600 mb-8 max-w-md">
                      Thank you for choosing Sunrise Detailing. Our team will contact you shortly to confirm your appointment.
                    </p>
                    <Button onClick={closePopup}>
                      Close Window
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Full Name" placeholder="e.g. John Doe" required />
                      <Input label="Phone Number" placeholder="(555) 123-4567" type="tel" required />
                      
                      <div className="md:col-span-2">
                        <Input label="Email Address" placeholder="john@example.com" type="email" required />
                      </div>

                      <Select
                        label="Service Package"
                        required
                        options={[
                          { value: '', label: 'Select a package...' },
                          { value: 'basic', label: 'Basic Maintenance ($89)' },
                          { value: 'premium', label: 'Premium Detail ($189)' },
                          { value: 'ultimate', label: 'Ultimate Showroom ($299)' },
                          { value: 'custom', label: 'Custom Service' }
                        ]}
                      />

                      <Select
                        label="Vehicle Type"
                        required
                        options={[
                          { value: '', label: 'Select vehicle type...' },
                          { value: 'sedan', label: 'Sedan / Coupe' },
                          { value: 'suv', label: 'SUV / Truck' },
                          { value: 'van', label: 'Minivan / Large SUV' },
                          { value: 'truck', label: 'Pickup Truck' }
                        ]}
                      />
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-sunrise-navy mb-2">Message / Special Requests (Optional)</label>
                        <textarea 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunrise-orange/20 focus:border-sunrise-orange bg-gray-50/50 focus:bg-white transition-all text-sunrise-navy placeholder:text-gray-400 min-h-[100px] resize-y"
                          placeholder="Gate code, specific stains, or questions..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
                      <Button type="button" variant="outline" onClick={closePopup} className="!text-sunrise-navy !border-[#0A111A]">
                        Cancel
                      </Button>
                      <Button type="submit">
                        Send Request
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function BookingPopup() {
  return (
    <Suspense fallback={null}>
      <BookingPopupContent />
    </Suspense>
  );
}
