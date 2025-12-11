'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProductImageGallery({ images = [], Productimages }) {
  console.log('Productimages', Productimages);
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = images.length > 0 ? images : Productimages;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-muted rounded-lg overflow-hidden aspect-[4/5] md:h-[550px] group cursor-pointer"
      >
        <Image
          src={galleryImages[selectedImage] || '/placeholder.svg'}
          alt="Product"
          fill
          className="object-cover  group-hover:scale-105 transition-transform duration-500 ease-in-out"
          priority
        />
      </motion.div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-3 overflow-x-auto !pb-2">
        {galleryImages.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedImage(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
              selectedImage === index ? 'border-foreground' : 'border-border'
            }`}
          >
            <Image
              src={image || '/placeholder.svg'}
              alt={`View ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
