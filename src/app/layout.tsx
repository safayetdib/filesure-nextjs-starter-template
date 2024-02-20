import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'FileSure - Simplifying RoC Compliance for Companies in India',
    template: '%s | FileSure',
  },
  description:
    "India's first platform dedicated to simplifying RoC Compliance for company owners and compliance professionals.",
  twitter: {
    title: 'FileSure - Simplifying RoC Compliance for Companies in India',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
