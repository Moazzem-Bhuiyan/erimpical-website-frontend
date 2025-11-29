'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const getDescriptionPreview = (html) => {
  if (!html) return 'No description available';
  const text = html.replace(/<[^>]+>/g, '');
  return text.length > 80 ? text.slice(0, 80) + '...' : text;
};

export default function EventCard({ event, index }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-xl bg-card border border-border cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary/30"
      onClick={() => router.push(`/event/${event?._id}`)}
    >
      {/* Optimized Image */}
      <div className="relative !h-56 overflow-hidden !bg-muted">
        <Image
          src={event?.thumbnail || '/placeholder.jpg'}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="!p-5 !space-y-4">
        <div className="flex items-start justify-between !gap-3">
          <h3 className="text-lg font-semibold text-foreground !line-clamp-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <ArrowRight className="!w-5 !!h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>

        <div className="flex items-center !gap-2 text-sm text-muted-foreground">
          <MapPin className="!w-4 !h-4" />
          <span className="truncate">{event.location}</span>
        </div>

        <p className="!text-sm text-muted-foreground line-clamp-2">
          {getDescriptionPreview(event?.description)}
        </p>

        <div className="flex items-center justify-between !pt-3 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="!w-4 !h-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="!w-4 !h-4" />
            <span>{event.time}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
