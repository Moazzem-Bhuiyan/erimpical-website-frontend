'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import EventCard from '../EventCard/EventCard';
import Animatetext from '../AnimatedText/AnimatedText';
import { useRouter } from 'next/navigation';

export const events = [
  {
    id: 1,
    title: 'Fashion Launch Night',
    location: 'Dhaka Art Gallery',
    description:
      'A night of creativity, style, and art. Join us for an exclusive fashion showcase featuring emerging designers.',
    date: 'November 12, 2025',
    time: '6:00 PM',
    image: '/event/event1.png',
  },
  {
    id: 2,
    title: 'Creative Art Workshop',
    location: 'Creative Studio Dhaka',
    description:
      'Hands-on workshop for artists of all levels. Learn new techniques and create amazing artworks with expert guidance.',
    date: 'November 12, 2025',
    time: '6:00 PM',
    image: '/event/event2.png',
  },
  {
    id: 3,
    title: 'Live Music Concert',
    location: 'Dhaka Concert Hall',
    description:
      'An unforgettable night of live music featuring local and international artists. Dance, sing, and celebrate!',
    date: 'November 12, 2025',
    time: '6:00 PM',
    image: '/event/event3.png',
  },
];

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
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
