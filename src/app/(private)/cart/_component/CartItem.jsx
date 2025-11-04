'use client';

import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function CartItem({ item, index, onRemove }) {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={itemVariants}
      className="flex gap-4 border-b border-gray-200 !pb-4"
    >
      {/* Product Image */}
      <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <Image
          width={100}
          height={100}
          src={item.image || '/placeholder.svg'}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-900">{item.name}</h3>
        <p className="!mt-1 text-sm text-gray-600">{item.size}</p>
        <p className="!mt-2 text-lg font-bold text-gray-900">${item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleQuantityChange(quantity - 1)}
          className="rounded border border-gray-300 !px-2 !py-1 text-gray-600 hover:bg-gray-50 cursor-pointer"
        >
          −
        </motion.button>
        <span className="w-6 text-center text-sm font-medium">{quantity}</span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleQuantityChange(quantity + 1)}
          className="rounded border border-gray-300 !px-2 !py-1 text-gray-600 hover:bg-gray-50 cursor-pointer"
        >
          +
        </motion.button>
      </div>

      {/* Delete Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onRemove(item.id)}
        className="flex-shrink-0 text-red-500 hover:text-red-700 cursor-pointer"
      >
        <Trash2 size={20} />
      </motion.button>
    </motion.div>
  );
}
