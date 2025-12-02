'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

export function AnimatedSkeletonCard({ count = 3 }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="!grid !grid-cols-1 !sm:!grid-cols-2 !lg:!grid-cols-3 !gap-6 !w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Array.from({ length: count }).map((_, index) => (
        <motion.div key={index} className="!flex !flex-col !gap-3" variants={itemVariants}>
          <Skeleton className="!h-56 !w-full !rounded-xl" />
          <div className="!space-y-2">
            <Skeleton className="!h-4 !w-full" />
            <Skeleton className="!h-4 !w-3/4" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
