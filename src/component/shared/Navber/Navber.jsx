'use client';
import AnimateTextOnHover from '@/component/AnimateTextOnHover/AnimateTextOnHover';
import Link from 'next/link';
import logo from '@/assets/Logo/logo.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectToken } from '@/redux/slices/authSlice';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useMyProfileQuery } from '@/redux/api/authApi';

// Links
const LINKS = [
  {
    key: 'home',
    label: 'Home',
    route: '/',
  },
  {
    key: 'Shop',
    label: 'Shop',
    route: '/product',
  },
  {
    key: 'Philosophy',
    label: 'Philosophy',
    route: '/philosophy',
  },
  {
    key: 'Events',
    label: 'Events',
    route: '/event',
  },
  {
    key: 'Finance Articel',
    label: 'Finance Articel',
    route: '/financeArticle',
  },
  {
    key: 'Gellary',
    label: 'Gallery',
    route: '/gallery',
  },
  {
    key: 'contact ',
    label: 'Contact Us',
    route: '/contact',
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const token = useSelector(selectToken);

  // get user info from api
  const { data } = useMyProfileQuery({
    skip: !token,
  });
  const user = data?.data;

  return (
    <div className="!mt-2  flex items-center justify-center  !w-full top-0 z-50">
      {/* Desktop Version */}
      <div
        className={`!mx-auto hidden items-center !justify-between gap-x-10  bg-white text-black !px-4 !py-3 lg:flex lg:w-[95%] !2xl:w-full 
         `}
      >
        {/* Left ----- Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="mx-auto" width={50} height={1000} />
        </Link>

        {/* Center ------ Links */}
        <div className="flex flex-grow items-center justify-center gap-x-10">
          {LINKS.map((link) => (
            <Link key={link.key} href={link.route} className={`font-medium !text-black uppercase`}>
              <AnimateTextOnHover path={link.route}>{link.label}</AnimateTextOnHover>
            </Link>
          ))}
        </div>

        {/*=============================Right ----- Buttons================ */}

        {token ? (
          <Button
            className="bg-white rounded-full cursor-pointer hover:bg-white/90 transition duration-300 ease-in-out"
            onClick={() => router.push('/profile')}
          >
            {' '}
            <Avatar>
              <AvatarImage src={user?.photoUrl} alt="@shadcn" />
              <AvatarFallback className="text-2xl text-orange-400 border border-orange-400 !p-2">
                {user?.name[0]}
              </AvatarFallback>
            </Avatar>
          </Button>
        ) : (
          <Button
            onClick={() => {
              router.push('/login');
            }}
            className=" !bg-black !text-white w-[100px] cursor-pointer !py-2 !px-4 !rounded-full !text-center !text-sm"
          >
            Sing In / Up
          </Button>
        )}
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden w-full fixed top-0 left-0 bg-white/100 !z-50 border">
        <div className="flex items-center justify-between !p-4 bg-white/100">
          <Link href="/">
            <Image src={logo} alt="Logo" className="mx-auto" width={60} height={60} />
          </Link>
          <motion.div
            className="text-black cursor-pointer"
            initial={{ rotate: 0 }}
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.8 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'bounce', stiffness: 300 }}
            className="bg-black/90 text-white w-full absolute top-16 left-0 flex flex-col items-center !py-4"
          >
            {LINKS.map((link) => (
              <Link
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                key={link.key}
                href={link.route}
                className="font-medium text-lg !py-2"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => router.push('/contact')}
              type="button"
              className="w-full !py-2 !mt-5 bg-gradient-to-r from-[#156A7E] to-[#26C0E4] text-white rounded-full"
            >
              Contact
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
