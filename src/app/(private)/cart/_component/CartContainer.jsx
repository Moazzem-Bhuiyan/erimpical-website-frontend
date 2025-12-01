'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import OrderSummary from './OrderSummary';
import CartItem from './CartItem';
import { useDeleteCartMutation, useGetCartQuery } from '@/redux/api/cartApi';
import { toast } from 'sonner';

export default function CartPage() {
  // get cart product from api
  const { data, isLoading, error } = useGetCartQuery();

  // delte cart item
  const [deleteCart, { isLoading: isDeleteLoading }] = useDeleteCartMutation();

  const handleRemoveItem = async (itemId) => {
    try {
      const res = await deleteCart(itemId).unwrap();
      if (res?.success) {
        toast.success('Product removed from cart successfully');
      }
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  // Calculate totals

  const subtotal = data?.data?.reduce(
    (total, item) => total + item.discountPrice * item.quantity,
    0
  );
  const deliveryFee = 15;
  const total = subtotal + deliveryFee;

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

  return (
    <main className="min-h-screen w-full">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="!mx-auto max-w-full !px-4 !py-6 sm:!px-6 lg:!px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-sm text-gray-600 !mb-4"
          >
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-medium">Cart</span>
          </motion.div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="!mx-auto max-w-full !px-4 !py-12 sm:!px-6 lg:!px-8">
        {data?.data?.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center !py-12"
          >
            <p className="text-gray-600 text-lg">Your cart is empty</p>
            <Link
              href="/product"
              className="!mt-4 inline-block text-black font-semibold hover:underline"
            >
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 lg:grid-cols-3"
          >
            {/* Cart Items */}
            <motion.div className="lg:col-span-2 !space-y-4">
              {data?.data?.map((item, index) => (
                <CartItem key={item.id} item={item} index={index} onRemove={handleRemoveItem} />
              ))}
            </motion.div>

            {/* Order Summary */}
            <div>
              <OrderSummary
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                total={total}
                items={data?.data}
              />
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
