'use client';

import { motion } from 'framer-motion';

export default function ImpactCard({ icon, title, description, index }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: index * 0.15,
      },
    },
  };

  return (
    <motion.div
      className="text-center !space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-primary/10 rounded-lg !p-6 cursor-pointer"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Icon Circle */}
      <motion.div
        className="flex justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-2xl text-amber-700 font-bold">
          {icon}
        </div>
      </motion.div>

      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
