'use client';

import { motion } from 'framer-motion';
import { BillingDetailsFormModal } from './BillingDetailsFormModal';

export default function OrderSummary({ subtotal, deliveryFee, total, items }) {
  const summaryVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
      },
    }),
  };

  // handle payment method

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={summaryVariants}
      className="rounded-lg border border-gray-200 bg-white !p-6"
    >
      <h2 className="!mb-6 text-xl font-bold text-gray-900">Order Summary</h2>

      <div className="!space-y-4">
        <motion.div
          custom={0}
          variants={itemVariants}
          className="flex justify-between text-sm text-gray-600"
        >
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </motion.div>

        {/* <motion.div custom={1} variants={itemVariants} className="flex justify-between text-sm">
          <span className="text-gray-600">Discount (20%)</span>
          <span className="text-red-500 font-semibold">-${discount}</span>
        </motion.div> */}

        <motion.div
          custom={2}
          variants={itemVariants}
          className="flex justify-between text-sm text-gray-600"
        >
          <span>Delivery Fee</span>
          <span>${deliveryFee}</span>
        </motion.div>

        <motion.div
          custom={3}
          variants={itemVariants}
          className="border-t border-gray-200 !pt-4 flex justify-between text-base font-bold text-gray-900"
        >
          <span>Total</span>
          <span>${total}</span>
        </motion.div>

        {/* ⬇⬇⬇ Checkout opens modal */}
        <BillingDetailsFormModal items={items} total={total}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="!mt-6 w-full rounded-full bg-black !py-3 text-white font-semibold"
          >
            Go to Checkout →
          </motion.button>
        </BillingDetailsFormModal>
      </div>
    </motion.div>
  );
}
