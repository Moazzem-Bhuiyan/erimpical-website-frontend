'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import EventCard from '../EventCard/EventCard';
import Animatetext from '../AnimatedText/AnimatedText';
import { useRouter } from 'next/navigation';
import UsegetAllEvent from '@/Hooks/UseGetAllEvent';

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function EventsSection() {
  const router = useRouter();
  const { event, loading } = UsegetAllEvent({ limit: 3, page: 1, searchtext: '' });
  return (
    <section className="!py-20 !px-4 sm:!px-6 lg:!px-8 bg-background !my-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-[80%] !mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center !mb-16"
        >
          <Animatetext x={-20} duration={1}>
            {' '}
            <motion.p className="text-sm font-medium text-muted-foreground !mb-3 tracking-wide">
              DISCOVER EVENTS
            </motion.p>
          </Animatetext>
          <Animatetext x={20} duration={1}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground !mb-6 max-w-4xl !mx-auto">
              Find experiences that inspire and connect you
            </h2>
          </Animatetext>

          {/* View More Button */}
          <motion.button
            onClick={() => {
              router.push('/event');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex cursor-pointer items-center justify-center gap-2 !px-6 !py-3 rounded-full bg-foreground text-background font-medium hover:shadow-lg transition-shadow"
          >
            View More
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {event?.data?.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
