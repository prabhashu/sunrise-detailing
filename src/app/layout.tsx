import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookingPopup } from '@/components/BookingPopup';

export const metadata: Metadata = {
  title: 'Sunrise Detailing',
  description: 'Premium mobile car detailing services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-sunrise-white font-sans text-sunrise-navy selection:bg-sunrise-orange selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BookingPopup />
      </body>
    </html>
  );
}
