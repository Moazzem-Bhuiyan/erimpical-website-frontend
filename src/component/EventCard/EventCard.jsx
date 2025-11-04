'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function EventCard({ event }) {
  const router = useRouter();
  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300"
      onClick={() => router.push(`/event/${event.id}`)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <motion.img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="!p-6">
        <div className="flex items-start justify-between gap-4 !mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1" />
        </div>

        <div className="flex items-center gap-2 !mb-4 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>{event.location}</span>
        </div>

        <p className="text-sm text-muted-foreground !mb-5 !line-clamp-2">{event.description}</p>

        <div className="flex items-center justify-between !pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
