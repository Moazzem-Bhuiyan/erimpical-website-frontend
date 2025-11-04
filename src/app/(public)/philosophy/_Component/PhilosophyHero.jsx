'use client';

import Animatetext from '@/component/AnimatedText/AnimatedText';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PhilosophyheroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-200px)] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/philosophy.png)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content container */}
      <motion.div
        className="relative z-10 max-w-[80%] !mx-auto !px-6 !py-20 !space-y-8 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <Animatetext x={-20} duration={1}>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-pretty text-center">
            Our Philosophy
          </motion.h2>
        </Animatetext>

        {/* First paragraph */}
        <Animatetext x={20} duration={1}>
          <motion.p className="text-lg text-white/90 mb-6 leading-relaxed text-pretty text-center">
            Building fashion that speaks to you, while respecting the planet and empowering
            communities through ethical practices.
          </motion.p>
        </Animatetext>
      </motion.div>
    </section>
  );
}
