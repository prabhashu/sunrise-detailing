"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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
    href: '/services',
    dropdownItems: [
      { name: 'View All Services', href: '/services' },
      { name: 'Exterior Detailing', href: '/services/exterior' },
      { name: 'Interior Detailing', href: '/services/interior' },
      { name: 'Full Detail Packages', href: '/services/full' },
      { name: 'Paint Correction', href: '/services/paint' },
      { name: 'Ceramic Coating', href: '/services/ceramic' },
      { name: 'Headlight Restoration', href: '/services/headlight' },
      { name: 'Mold Remediation', href: '/services/mold' },
      { name: 'Maintenance Membership', href: '/services/maintenance-membership' }
    ]
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
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={`font-semibold transition-all duration-300 text-[13px] uppercase tracking-[0.15em] flex items-center gap-1.5 ${pathname === link.href || pathname.startsWith(link.href + '/') && link.href !== '/' ? 'text-sunrise-orange drop-shadow-[0_0_8px_rgba(255,138,0,0.5)]' : 'text-gray-300 hover:text-white'}`}>
                {link.name}
                {link.dropdownItems && <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />}
              </Link>
              
              {link.dropdownItems && (
                <div className="absolute top-full left-0 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 min-w-[260px] z-50">
                  <div className="bg-[#0A111A]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 overflow-hidden">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${pathname === item.href ? 'bg-sunrise-orange/10 text-sunrise-orange' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          <Link href="?booking=true">
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

              <div className="flex flex-col gap-4 relative z-10 w-full mt-4">
                {navLinks.map((link, i) =>
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-white/5 pb-4"
                  >
                    <div className="flex items-center justify-between w-full">
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-3xl sm:text-4xl font-black transition-colors uppercase tracking-tight flex-1 group ${pathname === link.href || pathname.startsWith(link.href + '/') && link.href !== '/' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                        <span className="flex flex-col">
                          {link.name}
                          {(pathname === link.href || (pathname.startsWith(link.href + '/') && link.href !== '/')) && (
                            <motion.span layoutId="mobileNavActiveIndicator" className="block h-1.5 w-12 bg-sunrise-orange mt-2 rounded-full" />
                          )}
                        </span>
                      </Link>
                      {link.dropdownItems && (
                        <button 
                          onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                          className="p-2 ml-4 text-gray-400 hover:text-white bg-white/5 rounded-full"
                        >
                          <ChevronDown size={28} className={`transition-transform duration-300 ${mobileExpanded === link.name ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    
                    {link.dropdownItems && (
                      <AnimatePresence>
                        {mobileExpanded === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-4 pt-6 pl-4 border-l-2 border-white/10 ml-2 mt-2">
                              {link.dropdownItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`text-xl font-bold transition-colors ${pathname === item.href ? 'text-sunrise-orange' : 'text-gray-400 hover:text-white'}`}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
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

                <Link href="?booking=true" className="block w-full">
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