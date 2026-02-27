import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-sunrise-slate text-sunrise-navy pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-sunrise-orange bg-white overflow-hidden">
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover" />

              </div>
              <span className="text-xl font-bold text-sunrise-orange">
                SUNRISE <span className="text-sunrise-navy">DETAILING</span>
              </span>
            </Link>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Premium mobile auto detailing services in the Tampa Bay area. We
              bring luxury car care directly to your doorstep.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-sunrise-orange transition-colors">

                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-sunrise-orange transition-colors">

                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-sunrise-orange transition-colors">

                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-sunrise-orange">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/areas"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  Book Online
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-sunrise-orange">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/exterior"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  Exterior Detailing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/interior"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  Interior Deep Clean
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ceramic"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link
                  href="/services/paint"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  Paint Correction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance-membership"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  Maintenance Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mold"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  Mold Remediation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/fleet"
                  className="text-gray-500 hover:text-sunrise-navy transition-colors">

                  Fleet Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-sunrise-orange">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex flex-row items-center justify-center md:justify-start gap-3 text-gray-500">
                <MapPin className="w-5 h-5 text-sunrise-orange shrink-0" />
                <span>
                  Serving the entire Tampa Bay Area, FL
                </span>
              </li>
              <li className="flex flex-row items-center justify-center md:justify-start gap-3 text-gray-500">
                <Phone className="w-5 h-5 text-sunrise-orange shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="hover:text-sunrise-navy transition-colors">

                  (555) 123-4567
                </a>
              </li>
              <li className="flex flex-row items-center justify-center md:justify-start gap-3 text-gray-500">
                <Mail className="w-5 h-5 text-sunrise-orange shrink-0" />
                <a
                  href="mailto:info@sunrisedetailing.com"
                  className="hover:text-sunrise-navy transition-colors">

                  info@sunrisedetailing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 pb-4 text-center text-gray-500 text-sm flex flex-col items-center justify-center gap-2">
          <p>
            &copy; {new Date().getFullYear()} Sunrise Detailing. All rights
            reserved. Designed & Developed by{' '}
            <a 
              href="https://makeitviralmedia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-sunrise-orange hover:text-sunrise-navy transition-colors"
            >
              Make It Viral Media
            </a>
          </p>
        </div>
      </div>
    </footer>);

}