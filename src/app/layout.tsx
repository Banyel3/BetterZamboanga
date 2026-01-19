import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import { Header, Footer, HotlineBar } from '@/components/layout';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Better Zamboanga | Civic Portal for Zamboanga City',
    template: '%s | Better Zamboanga',
  },
  description: 'Access government services, information, and resources for the people of Zamboanga City. Your gateway to transparent and efficient civic services.',
  keywords: ['Zamboanga City', 'government services', 'civic portal', 'Philippines', 'LGU services'],
  authors: [{ name: 'Better Zamboanga Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://betterzamboanga.org',
    siteName: 'Better Zamboanga',
    images: [
      {
        url: '/images/banners/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Better Zamboanga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/images/logo/favicon.svg',
    shortcut: '/images/logo/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <HotlineBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
