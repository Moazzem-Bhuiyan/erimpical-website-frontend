'use client';
import Animatetext from '@/component/AnimatedText/AnimatedText';
import EventCard from '@/component/EventCard/EventCard';
import { containerVariants } from '@/component/Home/ArticleSection';
import { Input } from '@/components/ui/input';
import UsegetAllEvent from '@/Hooks/UseGetAllEvent';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function EventContainer() {
  const [searchtext, setSearchtext] = useState('');
  const { event, loading } = UsegetAllEvent({ limit: 10, page: 1, searchtext });

  if (loading) {
    <h1>loading....</h1>;
  }

  return (
    <div className="md:!px-4 lg:!px-8 !mt-20">
      <div className=" !my-10 md:!space-y-10 !space-y-3 !px-4">
        <Animatetext x={20} duration={1}>
          <h1 className="text-xl md:text-5xl font-bold text-foreground text-center">
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
          <Input
            onChange={(e) => setSearchtext(e.target.value)}
            placeholder="Search Events"
            className={'!mt-4 md:w-[20%] !mx-auto'}
          />
        </div>
      </div>

      {/* ==============event section========== */}
      <section className="md:!py-20 lg:!px-8 bg-background md:!my-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="md:max-w-[80%] !p-4 md:!p-0 !mx-auto"
        >
          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event?.data?.length === 0 && <h1>No Events Found</h1>}{' '}
            {event?.data?.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
