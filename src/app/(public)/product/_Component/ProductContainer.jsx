'use client';

import ReusablePagination from '@/component/shared/CustomPagination/CustomPagination';
import ProductCard from '@/component/shared/ProductCard/ProductCard';
import { AnimatedSkeletonCard } from '@/component/shared/Skeleton/SkeletonLoader';
import UsegetAllProduct from '@/Hooks/UsegetAllProduct';
import { motion } from 'framer-motion';
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

const ProductContainer = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  // get products from api
  const { product, totalPages, loading, error } = UsegetAllProduct({
    limit,
    page: currentPage,
    searchText: filters.search,
    priceRange: filters.priceRange,
  });
  if (loading) {
    return (
      <div>
        <AnimatedSkeletonCard />
      </div>
    );
  }
  return (
    <section className="w-full md:!px-4 md:!px-8 bg-background ">
      <motion.div
        className="max-w-full !mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product?.data?.length == 0 ? (
            <h1>No Product Found</h1>
          ) : (
            product?.data?.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))
          )}
        </div>
        <div>
          <ReusablePagination
            meta={product?.meta}
            onPageChange={(newPage) => setCurrentPage(newPage)}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ProductContainer;
