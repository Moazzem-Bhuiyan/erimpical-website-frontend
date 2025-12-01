'use client';

import React, { useState } from 'react';

import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmail('');
  };

  return (
    <footer className="w-full relative border !mt-[220px]">
      {/* Newsletter Subscription Section */}
      <div className="!px-4 !py-12 md:!py-16 absolute !bottom-80 !z-10  !left-0 !right-0">
        <div className="!mx-auto max-w-5xl   ]">
          <div className="rounded-3xl bg-black !px-8 !py-12 md:!px-12 md:!py-16">
            <h2 className="text-center font-sans text-2xl md:text-3xl font-light text-white !mb-8">
              Subscribe for updates and promotions
            </h2>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center w-1/2 !mx-auto"
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="!px-6 !py-3 rounded-full bg-stone-700 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-white flex-1 min-w-64 sm:min-w-0"
              />
              <Button
                type="submit"
                className="rounded-full bg-white text-stone-900 hover:bg-stone-100 cursor-pointer !px-8 !py-5.5 font-bold whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-[#F3EAD3] !px-4 !py-12 md:!py-16 relative">
        <div className="!mx-auto max-w-7xl !mt-10 ">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 !mb-12">
            {/* Left Column - Navigation */}
            <div className="!space-y-4">
              <ul className="!space-y-3 text-sm md:text-base text-stone-900">
                <li>
                  <a href="/home" className="hover:text-stone-600 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-stone-600 transition">
                    Shops
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-stone-600 transition">
                    Philosophy
                  </a>
                </li>
              </ul>
            </div>

            {/* Center Column - More Navigation */}
            <div className="!space-y-4">
              <ul className="!space-y-3 text-sm md:text-base text-stone-900">
                <li>
                  <a href="#" className="hover:text-stone-600 transition">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-stone-600 transition">
                    Finance Article
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-stone-600 transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column - Contact Info & Social */}
            <div className="!space-y-4">
              <div className="!space-y-3 text-sm md:text-base text-stone-900 !mb-6">
                <p className="font-medium">(105) 115-2920</p>
                <p className="text-sm">115 Palm Forest, Australia</p>
                <p className="text-sm">hello@empirical6728.com</p>
              </div>

              <p className="text-sm text-stone-700 !mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="!p-2 rounded-full bg-stone-200 hover:bg-stone-300 transition"
                >
                  <Facebook size={16} className="text-stone-900" />
                </a>
                <a
                  href="#"
                  className="!p-2 rounded-full bg-stone-200 hover:bg-stone-300 transition"
                >
                  <Linkedin size={16} className="text-stone-900" />
                </a>
                <a
                  href="#"
                  className="!p-2 rounded-full bg-stone-200 hover:bg-stone-300 transition"
                >
                  <Twitter size={16} className="text-stone-900" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-stone-500 !mb-6"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-stone-700 gap-4">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <a href="/terms" className="hover:text-stone-900 transition">
                Terms Conditions
              </a>
              <a href="/privacy" className="hover:text-stone-900 transition">
                Privacy Policy
              </a>
              {/* <a href="#" className="hover:text-stone-900 transition">
                Support
              </a> */}
            </div>
            <p className="text-center md:text-right">© 2025 EMPIRICAL. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
