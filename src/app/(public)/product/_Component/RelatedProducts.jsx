'use client';

import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import React from 'react';
import { motion } from 'framer-motion';
import Animatetext from '@/component/AnimatedText/AnimatedText';
import ProductCard from '@/component/shared/ProductCard/ProductCard';

const products = [
  {
    id: 1,
    name: 'Premium Cotton Tee',
    price: 25.0,
    originalPrice: 30.0,
    image: '/product/product1.png',
  },
  {
    id: 2,
    name: 'Urban Hoodie',
    price: 25.0,
    originalPrice: 30.0,
    image: '/product/product2.png',
  },
  {
    id: 3,
    name: 'Comfort Sweats',
    price: 25.0,
    originalPrice: 50.0,
    image: '/product/product3.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function RelatedProducts() {
  return (
    <ResponsiveContainer className={' !my-[115px]  '}>
      {/* Header */}
      <div className="w-full">
        <Animatetext x={-20} duration={1}>
          {' '}
          <motion.p className="text-sm text-center uppercase font-medium text-muted-foreground !mb-3 tracking-wide">
            Product
          </motion.p>
        </Animatetext>
        <Animatetext x={20} duration={1}>
          <h2 className="text-4xl md:text-5xl text-center font-bold text-foreground !mb-6 max-w-6xl !mx-auto">
            You Might Also Like
          </h2>
        </Animatetext>

        {/*------------------------- products------------------- */}
        <section className="w-full !px-4 md:!px-8 bg-background !mt-10">
          <motion.div
            className="max-w-full !mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={product.id} {...product} index={index} />
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </ResponsiveContainer>
  );
}
