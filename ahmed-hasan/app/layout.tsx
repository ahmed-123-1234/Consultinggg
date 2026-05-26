import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, Cinzel } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: 'Ahmed Hasan | Supply Chain · Operations · Compliance Consultant',
  description:
    'Senior Supply Chain, Operations, Procurement & Compliance Consultant based in Erbil, Iraq. 20+ years of experience across Iraq and internationally.',
  keywords:
    'Supply Chain Consultant Iraq, Procurement Consultant, Logistics Consultant Iraq, Compliance Specialist, Operations Management Consultant, Internal Controls Consultant',
  openGraph: {
    title: 'Ahmed Hasan | Supply Chain · Operations · Compliance',
    description:
      'Senior consultant with 20+ years of experience in supply chain, logistics, procurement, and compliance. Based in Erbil, Kurdistan Region, Iraq.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${cinzel.variable} font-dm bg-navy text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
