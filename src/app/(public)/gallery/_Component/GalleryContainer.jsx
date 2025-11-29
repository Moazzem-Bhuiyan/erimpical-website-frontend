'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Animatetext from '@/component/AnimatedText/AnimatedText';
import { useGetGalleryQuery } from '@/redux/api/galleryApi';
import Image from 'next/image';

const SPAN_PATTERN = [
  'col-span-1 row-span-2 ',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
];

const ITEMS_PER_PAGE = 8;
const TOTAL_PAGES = 30;

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // get gellary from api

  const { data, isLoading, isError } = useGetGalleryQuery();

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background w-full">
        <div className="!px-4 md:!px-8 !py-12">
          <div className="grid grid-cols-4 gap-4 auto-rows-[250px]">
            {Array(ITEMS_PER_PAGE)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`${SPAN_PATTERN[index % SPAN_PATTERN.length]} 
                relative overflow-hidden rounded-lg`}
                >
                  <div className="w-full h-full bg-muted rounded-lg animate-pulse" />
                </div>
              ))}
          </div>
        </div>
      </main>
    );
  }

  if (isError) {
    return <div className="flex h-screen items-center justify-center">Something went wrong</div>;
  }

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 1 ? TOTAL_PAGES : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === TOTAL_PAGES ? 1 : prev + 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="min-h-screen bg-background w-full">
      {/* Header */}
      <motion.div
        className="!py-10 !px-4 md:!px-8 text-center"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <Animatetext x={20} duration={1}>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground !mb-4">
            Artistry in Every Frame
          </h1>
        </Animatetext>
        <Animatetext x={-20} duration={1}>
          <p className="text-muted-foreground max-w-2xl !mx-auto text-lg">
            Immerse yourself in a gallery of vibrant, thought-provoking art and creative projects
            that spark imagination
          </p>
        </Animatetext>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="!px-4 md:!px-8 !py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-4 gap-4 auto-rows-[250px]">
          {data?.data?.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${SPAN_PATTERN[index % SPAN_PATTERN.length]} 
                                                  relative group overflow-hidden rounded-lg`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                fill
                src={item.image || '/placeholder.svg'}
                alt={`Gallery item ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <motion.div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pagination */}
      <motion.div
        className="flex items-center justify-center gap-8 !py-12 !px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button
          onClick={handlePrevious}
          className="!p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <span className="text-muted-foreground text-sm">
          Page {currentPage} of {TOTAL_PAGES}
        </span>

        <button
          onClick={handleNext}
          className="!p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </motion.div>
    </main>
  );
}
