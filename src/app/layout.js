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
