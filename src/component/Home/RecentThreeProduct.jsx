'use client';

import { motion } from 'framer-motion';
import ProductCard from '../shared/ProductCard/ProductCard';
import Animatetext from '../AnimatedText/AnimatedText';
import { useRouter } from 'next/navigation';
import UsegetAllProduct from '@/Hooks/UsegetAllProduct';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

const bannerVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' },
  },
  hover: {
    y: -5,
    transition: { duration: 0.3 },
  },
};

export default function ProductsSection() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  // get products from api
  const { product, totalPages, loading, error } = UsegetAllProduct({
    limit,
    page: currentPage,
  });

  return (
    <section className="w-full !py-20 !my-10 !px-4 md:!px-8 bg-background">
      <motion.div
        className="max-w-7xl !mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header with Title and View All Button */}
        <div className="flex items-center justify-between !mb-12 border-b-2 !pb-6">
          <div>
            <Animatetext x={20} duration={1}>
              <span className="text-xs text-muted-foreground tracking-widest uppercase font-medium">
                Products
              </span>
            </Animatetext>
            <Animatetext x={-20} duration={1}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground !mt-2">Our Product</h2>
            </Animatetext>
          </div>

          {/* View All Button */}
          <motion.button
            className="flex items-center gap-2 !px-5 !py-2 border border-foreground rounded-full text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => {
              router.push('/product');
            }}
          >
            View All
            <span className="text-lg">↗</span>
          </motion.button>
        </div>

        {/* Products Grid and Featured Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product?.data?.map((product, index) => (
                <ProductCard key={product.id} {...product} index={index} />
              ))}
            </div>
          </div>

          {/* Featured Collections Banner */}
          <motion.div
            className="lg:col-span-1 h-full min-h-96 bg-gradient-to-br from-stone-700 to-stone-900 rounded-2xl !p-6 flex flex-col justify-between overflow-hidden relative group"
            variants={bannerVariants}
            whileHover="hover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            onClick={() => {
              router.push('/product');
            }}
          >
            {/* Background Image Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-300"
              style={{
                backgroundImage:
                  'url(/hero2.webp), linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))',
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex-1" />

              <motion.div
                className="text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 text-white font-medium hover:gap-3 transition-all cursor-pointer">
                  <span className="text-lg">All Collections</span>
                  <span className="text-xl">↗</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
