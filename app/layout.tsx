import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import BottomNav from '@/components/layout/BottomNav';
import TelegramBanner from '@/components/layout/TelegramBanner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SarkariKarnataka - Karnataka Govt Jobs & Scholarships',
  description:
    'Your one-stop portal for the latest Karnataka government job notifications, exam results, scholarships, and career opportunities. Browse 10,000+ verified listings from KPSC, KEA, KSP, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <main className="min-h-screen pb-20">{children}</main>
        <BottomNav />
        <TelegramBanner />
      </body>
    </html>
  );
}
