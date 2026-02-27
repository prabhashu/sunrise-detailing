"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  const navLinks = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Services',
    href: '/services'
  },
  {
    name: 'Service Areas',
    href: '/areas'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact',
    href: '/contact'
  }];

  const isHomePage = pathname === '/';
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage 
          ? 'bg-[#050B14]/85 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5' 
          : 'bg-gradient-to-b from-[#050B14]/80 via-[#050B14]/40 to-transparent py-6'
      }`}>      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-sunrise-orange bg-white">
            <img
              src="/logo.jpg"
              alt="Sunrise Detailing Logo"
              className="w-full h-full object-cover" />

          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-sunrise-orange">
            SUNRISE <span className="text-white">DETAILING</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <Link
            key={link.name}
            href={link.href}
              className={`font-semibold transition-all duration-300 text-[13px] uppercase tracking-[0.15em] ${pathname === link.href ? 'text-sunrise-orange drop-shadow-[0_0_8px_rgba(255,138,0,0.5)]' : 'text-gray-300 hover:text-white'}`}>

              {link.name}
            </Link>
          )}
          <Link href="/book">
            <Button variant="primary" size="sm" icon={Phone}>
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu">

          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.1, duration: 0.3 } }}
            className="fixed inset-0 bg-[#050B14] z-40 flex flex-col justify-between px-6 pt-28 pb-10 md:hidden overflow-y-auto w-full h-[100dvh]">
              
              {/* Premium Background Glows */}
              <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-sunrise-orange/15 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="flex flex-col gap-6 relative z-10 w-full mt-4">
                {navLinks.map((link, i) =>
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-white/5 pb-4"
                  >
                    <Link
                      href={link.href}
                      className={`text-3xl sm:text-4xl font-black transition-colors uppercase tracking-tight flex items-center justify-between group ${pathname === link.href ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                      <span className="flex flex-col">
                        {link.name}
                        {pathname === link.href && (
                          <motion.span layoutId="mobileNavActiveIndicator" className="block h-1.5 w-12 bg-sunrise-orange mt-2 rounded-full" />
                        )}
                      </span>
                      <span className={`text-2xl ${pathname === link.href ? 'text-sunrise-orange opacity-100' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'} transition-all duration-300`}>
                        &rarr;
                      </span>
                    </Link>
                  </motion.div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="relative z-10 w-full mt-12 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md"
              >
                <div className="flex flex-col gap-3 mb-6">
                  <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    Need Assistance?
                  </div>
                  <a href="tel:+15551234567" className="flex items-center gap-3 text-white hover:text-sunrise-orange transition-colors">
                    <div className="p-2 bg-sunrise-orange/20 rounded-full">
                      <Phone className="w-5 h-5 text-sunrise-orange" />
                    </div>
                    <span className="font-bold text-lg">(555) 123-4567</span>
                  </a>
                </div>

                <Link href="/book" className="block w-full">
                  <Button variant="primary" size="lg" className="w-full justify-center !py-4 shadow-[0_0_20px_rgba(255,138,0,0.3)]">
                    Book Experience
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.nav>);

}