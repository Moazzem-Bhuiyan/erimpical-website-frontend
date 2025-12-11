'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Animatetext from '../AnimatedText/AnimatedText';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useGetGalleryQuery } from '@/redux/api/galleryApi';

export default function CreativeGallery() {
  const router = useRouter();
  const { data, isLoading, isError } = useGetGalleryQuery();
  return (
    <div className="md:!py-20 !px-4 sm:!px-6 lg:!px-8 bg-background md:!my-10">
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
          <motion.p className="text-sm uppercase font-medium text-muted-foreground !mb-3 tracking-wide">
            Creative Gallery
          </motion.p>
        </Animatetext>
        <Animatetext x={20} duration={1}>
          <h2 className="text-xl md:text-5xl font-bold text-foreground !mb-6 max-w-6xl !mx-auto">
            Explore our artistic vision and creative works
          </h2>
        </Animatetext>

        {/* View More Button */}
        <motion.button
          onClick={() => {
            router.push('/gallery');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex text-sm cursor-pointer items-center justify-center gap-2 rounded-full !px-6 !py-3  bg-foreground text-background font-medium hover:shadow-lg transition-shadow"
        >
          View More
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Creative Gallery carousel */}
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-full !mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {data?.data?.map((item, index) => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden  shadow-lg cursor-pointer"
              >
                <Card className="border-0 overflow-hidden rounded-none   h-full">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`Gallery ${item.id}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Overlay on hover */}
                    {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <p className="text-white font-semibold text-lg">View</p>
                    </div> */}
                  </div>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden  -left-12 bg-white/80 hover:bg-white shadow-md " />
        <CarouselNext className="hidden  -right-12 bg-white/80 hover:bg-white shadow-md" />
      </Carousel>
    </div>
  );
}
