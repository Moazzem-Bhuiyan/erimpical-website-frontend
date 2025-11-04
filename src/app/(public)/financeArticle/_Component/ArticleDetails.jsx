'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
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

export default function ArticleDetailsPage() {
  const aboutParagraphs = [
    'The Finance Growth Summit 2025 was conceived to address the rapidly evolving landscape of financial services in an era of digital transformation and sustainability consciousness. Organized by the Bangladesh Finance Institute in collaboration with leading industry partners, this summit represents a pivotal moment for financial professionals to understand and shape the future of finance.',
    'Our mission extends beyond traditional finance discourse. We aim to bridge the gap between established financial institutions and emerging fintech solutions, while emphasizing the critical importance of sustainable practices. The summit serves as a catalyst for meaningful discussions about financial inclusion, digital banking innovations, and the future of ethical finance.',
    'Through interactive sessions, panel discussions, and networking opportunities, attendees will gain invaluable insights into market trends, regulatory changes, and technological advancements that are reshaping the financial sector. This event is designed to inspire collaboration and drive positive change in the financial industry.',
  ];

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
              src="/article/cover.png"
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
              <span>📍 Delhi Concert Hall</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅 November 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🕐 6:00 PM</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Fashion Launch Night
          </motion.h1>

          {/* Introduction */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Join us for an extraordinary gathering of finance professionals, innovators, and thought
            leaders as we explore the future of financial services. This summit brings together
            industry experts to discuss emerging trends, sustainable finance practices, and
            technological innovations shaping tomorrow's financial landscape.
          </motion.p>

          {/* About Section */}
          <motion.div variants={itemVariants} className="!space-y-6 !mt-12">
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
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
