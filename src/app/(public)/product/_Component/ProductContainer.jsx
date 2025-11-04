'use client';

import ProductCard from '@/component/shared/ProductCard/ProductCard';
import { motion } from 'framer-motion';

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

const ProductContainer = () => {
  return (
    <section className="w-full !px-4 md:!px-8 bg-background ">
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
  );
};

export default ProductContainer;
