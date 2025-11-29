'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProductCard({ images, title, discountPrice, price, index, _id }) {
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.1 + 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1 + 0.3,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-3 border border-stone-200 rounded-lg !p-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '100px' }}
      onClick={() => router.push(`/product/${_id}`)}
    >
      {/* Product Image Container */}
      <motion.div
        className="w-full h-56 bg-stone-200 rounded-lg overflow-hidden"
        variants={imageVariants}
        whileHover="hover"
      >
        <Image
          width={5000}
          height={5000}
          src={images?.[0] || '/placeholder.svg'}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Product Info */}
      <motion.div className="flex flex-col gap-1" variants={textVariants}>
        <h3 className="font-semibold text-foreground text-sm">{title}</h3>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground">${discountPrice?.toFixed(2)}</span>
          {price > discountPrice && (
            <span className="text-xs text-muted-foreground line-through">${price.toFixed(2)}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
