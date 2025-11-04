'use client';

import Animatetext from '@/component/AnimatedText/AnimatedText';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="!py-16 !px-4 md:!px-8 lg:!px-16">
      <div className="max-w-7xl !mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Content */}
          <div className="!space-y-6">
            <div className="!space-y-6">
              <Animatetext x={20} duration={1}>
                <motion.h1
                  className="text-4xl md:text-4xl font-bold text-foreground"
                  variants={itemVariants}
                >
                  About Us
                </motion.h1>
              </Animatetext>

              <motion.p
                className="text-base text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                At StyleCraft, we believe that great products are not just about what you wear, but
                the story behind them. Founded on the principles of quality, sustainability, and
                ethical craftsmanship, we are driven to create more than just apparel—we create an
                experience.
              </motion.p>
              <Animatetext x={-20} duration={1}>
                <motion.p
                  className="text-base text-muted-foreground leading-relaxed"
                  variants={itemVariants}
                >
                  We are a team of dreamers, creators, and innovators who are committed to breaking
                  stereotypes and crafting products that inspire. From hand-picking the finest
                  materials to ensuring sustainable practices, every detail matters. Our mission is
                  simple: to deliver clothing that makes you feel good, confident, and unique on the
                  inside and out.
                </motion.p>
              </Animatetext>
            </div>
            {/* =================our mission ---------------- */}
            <div className="!space-y-6">
              <Animatetext x={20} duration={1}>
                <motion.h1
                  className="text-4xl md:text-4xl font-bold text-foreground"
                  variants={itemVariants}
                >
                  Our Mission
                </motion.h1>
              </Animatetext>

              <Animatetext x={-20} duration={1}>
                <motion.p
                  className="text-base text-muted-foreground leading-relaxed"
                  variants={itemVariants}
                >
                  At StyleCraft, we believe that great products are not just about what you wear,
                  but the story behind them. Founded on the principles of quality, sustainability,
                  and ethical craftsmanship, we are driven to create more than just apparel—we
                  create an experience.
                </motion.p>
              </Animatetext>
            </div>
            {/* =================Our Story ---------------- */}
            <div className="!space-y-6">
              <Animatetext x={20} duration={1}>
                <motion.h1
                  className="text-4xl md:text-4xl font-bold text-foreground"
                  variants={itemVariants}
                >
                  Our Story
                </motion.h1>
              </Animatetext>

              <Animatetext x={-20} duration={1}>
                <motion.p
                  className="text-base text-muted-foreground leading-relaxed"
                  variants={itemVariants}
                >
                  At StyleCraft, we believe that great products are not just about what you wear,
                  but the story behind them. Founded on the principles of quality, sustainability,
                  and ethical craftsmanship, we are driven to create more than just apparel—we
                  create an experience.
                </motion.p>
              </Animatetext>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            variants={itemVariants}
          >
            <Image
              src="/gellary/gallery5.png"
              alt="About Us - Modern clothing store"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
