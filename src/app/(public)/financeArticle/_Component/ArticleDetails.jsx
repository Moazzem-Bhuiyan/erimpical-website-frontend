'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

export default function ArticleDetailsPage({ ArticleDetails }) {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl !mx-auto !px-4 md:!px-8 !py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="!space-y-8"
        >
          {/* Breadcrumb */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-foreground">
              <span>Home</span>
            </Link>

            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Event details</span>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={imageVariants}
            className="rounded-lg overflow-hidden h-64 md:h-80 relative"
          >
            <Image
              src={ArticleDetails?.data?.thumbnail || '/fashion-launch-night.jpg'}
              alt="Fashion Launch Night Event"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Location and Date Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span>📅 {moment(ArticleDetails?.data?.createdAt).fromNow()}</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            {ArticleDetails?.data?.title || ''}
          </motion.h1>

          {/* Introduction */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: ArticleDetails?.data?.description || 'Article Description',
              }}
            ></div>
          </motion.p>

          {/* About Section */}
          {/* <motion.div variants={itemVariants} className="!space-y-6 !mt-12">
            <h2 className="text-3xl font-bold text-foreground">About This Event</h2>
            <div className="!space-y-4">
              {aboutParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </main>
  );
}
