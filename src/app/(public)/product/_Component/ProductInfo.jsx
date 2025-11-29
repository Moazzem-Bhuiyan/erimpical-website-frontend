'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function ProductInfo({ info }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  // const sizes = ['XS', 'S', 'M', 'L'];
  const sizes = info.sizes;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col gap-6"
    >
      {/* Product Title and Price */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold !mb-3">{info?.title || 'Product Title'}</h1>
        <p className="text-3xl font-semibold">$ {info?.price || '00.00'}</p>
      </div>

      {/* Description */}
      <div className="!space-y-3 text-muted-foreground">
        <div
          className="pro-description text-sm text-foreground"
          dangerouslySetInnerHTML={{ __html: info?.description || 'Product Description' }}
        />
      </div>

      {/* Size Selection */}
      <div>
        <label className="block text-sm font-semibold !mb-3">Size</label>
        <div className="flex gap-2">
          {info.size?.map((sizeItem) => (
            <motion.button
              key={sizeItem.type}
              onClick={() => setSelectedSize(sizeItem.type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`!px-4 !py-2 rounded-lg border-2 font-medium transition-all cursor-pointer ${
                selectedSize === sizeItem.type
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border hover:border-foreground'
              }`}
            >
              {sizeItem.type.toUpperCase()} ({sizeItem.quantity})
            </motion.button>
          ))}
        </div>
      </div>

      {/* Quantity and Buy Button */}
      <div className="flex gap-4">
        <div className="flex items-center border border-border rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="!px-4 !py-2 hover:bg-muted transition-colors cursor-pointer"
          >
            −
          </button>
          <span className="!px-6 !py-2 font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="!px-4 !py-2 hover:bg-muted transition-colors cursor-pointer"
          >
            +
          </button>
        </div>
        <Button
          onClick={() => {
            router.push('/cart');
          }}
          className="flex-1 bg-foreground text-background hover:bg-foreground/90 rounded-full !py-6 text-lg font-semibold cursor-pointer"
        >
          Buy Now
        </Button>
      </div>
    </motion.div>
  );
}
