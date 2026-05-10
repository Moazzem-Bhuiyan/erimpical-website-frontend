import { Geist, Geist_Mono, Merriweather } from 'next/font/google';
import './globals.css';
import Navber from '@/component/shared/Navber/Navber';
import { Footer } from '@/component/shared/Footer/Footer';
import ScrollTop from '@/component/ScrollTop/ScrollTop';
import ReduxProviders from '@/redux/lib/Providers';
import { Toaster } from 'sonner';
import NextJsTopLoader from '@/component/shared/NextTopLoader/NextTopLoader';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'Empirical -  Website',
    template: '%s | Empirical -  Website',
  },
  description:
    'Empirical is a cutting-edge platform that leverages advanced technologies to provide innovative solutions for data analysis, visualization, and decision-making. Our mission is to empower businesses and individuals with the tools they need to harness the power of their data effectively.',
  keywords: [
    'Empirical, data analysis, data visualization, decision-making, innovative solutions, cutting-edge platform, data-driven insights, business intelligence, data science, machine learning',
  ],
  authors: [{ name: 'Empirical Team', url: 'https://imperialempirical.com' }],
  openGraph: {
    title: 'Empirical -  Website',
    description:
      'Empirical is a Building fashion that speaks to you, while respecting the planet and empowering communities through ethical practices.',
    url: 'https://imperialempirical.com',
    siteName: 'Empirical',
    images: [
      {
        url: 'https://i.ibb.co/fzjJ8WxQ/image.png',
        width: 1200,
        height: 630,
        alt: 'Empirical Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empirical -  Website',
    description:
      'Empirical is a Building fashion that speaks to you, while respecting the planet and empowering communities through ethical practices.',
    images: ['https://i.ibb.co/fzjJ8WxQ/image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${geistSans.variable} ${geistMono.variable}`}>
        {/* global Top bar */}
        <h1 className="text-xl text-center !bg-black !text-white !p-2 border">
          YOUR REALITY ISN&nbsp;T MINE
        </h1>
        <NextJsTopLoader />
        <Toaster richColors position="top-center" />
        <ReduxProviders>
          <Navber />
          <main className="min-h-[100vh] !z-0 w-full top-0 relative">{children}</main>
        </ReduxProviders>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
