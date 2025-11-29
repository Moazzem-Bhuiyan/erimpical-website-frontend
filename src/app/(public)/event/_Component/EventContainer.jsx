'use client';
import Animatetext from '@/component/AnimatedText/AnimatedText';
import EventCard from '@/component/EventCard/EventCard';
import { containerVariants } from '@/component/Home/ArticleSection';
import { Input } from '@/components/ui/input';
import UsegetAllEvent from '@/Hooks/UseGetAllEvent';
import { motion } from 'framer-motion';

export default function EventContainer() {
  const { event, loading } = UsegetAllEvent({ limit: 10, page: 1, searchtext: '' });

  return (
    <div className="!px-4 sm:!px-6 lg:!px-8 !mt-20">
      <div className=" !my-10 !space-y-10">
        <Animatetext x={20} duration={1}>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground text-center">
            Discover Amazing Events
          </h1>
        </Animatetext>
        <Animatetext x={-20} duration={1}>
          <h1 className=" !mt-2 text-center text-pretty text-gray-400">
            From creative workshops to networking events, find experiences that inspire and connect
            you with our vibrant community.s
          </h1>
        </Animatetext>
        <div className="flex justify-center">
          <Input placeholder="Search Events" className={'mt-4 w-[20%] !mx-auto'} />
        </div>
      </div>

      {/* ==============event section========== */}
      <section className="!py-20 !px-4 sm:!px-6 lg:!px-8 bg-background !my-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-[80%] !mx-auto"
        >
          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event?.data?.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
