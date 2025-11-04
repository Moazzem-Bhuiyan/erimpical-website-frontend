'use client';
import Animatetext from '../AnimatedText/AnimatedText';
import CustomCountUp from '../CustomCountUp/CustomCountUp';
import { TypeAnimation } from 'react-type-animation';
import ImageSlider from './HeroImageSlide';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sliderImages = ['/hero.png', '/hero1.jpg', '/hero3.jpg', '/hero2.webp', '/hero1.jpg'];

export default function Hero() {
  return (
    <div className="max-w-[95%] !mx-auto h-[calc(100vh-70px)] flex justify-center bg-[#F4EBD3] rounded-[100px] overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full">
        {/* Top Text */}
        <div className="!p-6 md:!p-10">
          <Animatetext y={20} duration={1}>
            <h1
              className="text-5xl md:text-7xl lg:text-9xl font-bold text-foreground !mb-2 text-center !mt-10"
              style={{ letterSpacing: '0.2em' }}
            >
              EMPIRICAL
            </h1>
          </Animatetext>
          <Animatetext x={-70} duration={1}>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
          </Animatetext>
        </div>

        {/* Image & Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4 md:!px-8">
          {/* Left Text */}
          <div className="flex justify-center items-center !p-6 md:!p-10 space-y-5">
            <div className="!space-y-4">
              <Animatetext duration={1} x={-20}>
                <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold text-foreground">
                  Shop Your Perfect Style
                </h1>
              </Animatetext>
              <Animatetext duration={1} x={20}>
                <TypeAnimation
                  sequence={[
                    'Discover premium clothing that makes you feel confident and comfortable in every moment',
                    2000,
                  ]}
                  speed={50}
                  wrapper="p"
                  repeat={Infinity}
                  className="text-sm md:text-base text-muted-foreground"
                />
              </Animatetext>

              {/* button*/}
              <Link href="/product" className="!z-20">
                <button
                  className="flex group !bg-primary text-white gap-5  border !justify-between items-center  rounded-full text-lg  !px-4 !py-2 z-10"
                  id="request-quote-btn"
                >
                  Shop Now
                  <div className=" group-hover:rotate-45 transform ease-linear duration-300 rounded-full  bg-gradient-to-r from-[#FF8E53] to-[#FF6B6B] !p-[6px]">
                    <ArrowRight size={20} className="-rotate-45" color="#fff" />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Center: Image Slider with Stats */}
          <div className="relative flex justify-center items-center">
            {/* Top-left Stats */}

            <motion.div
              className={`animate-pulse hover:animate-none hover:scale-105 transition-all duration-700 
                        !px-4 md:!px-6 absolute top-1/3 left-0 -translate-x-1/2 -translate-y-1/2 z-20 
                        flex flex-col items-center justify-center gap-1 !py-3 md:!py-4 
                        rounded-2xl bg-gradient-to-r from-[#F5F3F2] to-[#E0E0E0] border border-white shadow-lg`}
              initial={{ x: -2000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              exit={{ x: -200, opacity: 0 }}
              viewport={{ once: false }}
            >
              <h1 className="text-5xl md:text-6xl !mt-3 font-bold text-foreground">
                <CustomCountUp start={0} end={125} />
                K+
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">Products Sold</p>
            </motion.div>

            {/* Bottom-right Stats */}
            <motion.div
              initial={{ x: 2000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              exit={{ x: -200, opacity: 0 }}
              className={`!px-4 md:!px-6 animate-pulse hover:animate-none hover:scale-105 transition-all duration-700 
                absolute bottom-1/3 right-0 translate-x-1/2 translate-y-1/2 z-20 
                flex flex-col items-center justify-center gap-1 !py-3 md:!py-4 
                rounded-2xl bg-gradient-to-r from-[#F5F3F2] to-[#E0E0E0] border-white shadow-lg`}
            >
              <h1 className="text-5xl md:text-6xl !mt-3 font-bold text-foreground">
                <CustomCountUp start={0} end={100} />
                K+
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">
                Happy Customers
              </p>
            </motion.div>

            {/* Image Slider */}
            <div className="w-full max-w-xl !mx-auto !-mt-[90px]">
              <ImageSlider images={sliderImages} />
            </div>
          </div>

          {/* Empty column for balance on large screens */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
}
