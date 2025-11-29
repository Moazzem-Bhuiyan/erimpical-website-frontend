'use client';

import { motion } from 'framer-motion';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ArticleCard({ thumbnail, createdAt, title, description, index, _id }) {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.1 + 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1 + 0.3,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1 + 0.4,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      x: 5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-50px' }}
      onClick={() => router.push(`/financeArticle/${_id}`)}
    >
      {/* Article Image Container */}
      <motion.div
        className="w-full h-48 bg-stone-200 rounded-xl overflow-hidden"
        variants={imageVariants}
        whileHover="hover"
      >
        <Image
          src={thumbnail || '/placeholder.svg'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
          width={500}
          height={500}
        />
      </motion.div>

      {/* Article Info */}
      <motion.div className="flex flex-col gap-3" variants={textVariants}>
        {/* Date */}
        <span className="text-xs text-muted-foreground">{moment(createdAt).fromNow()}</span>

        {/* Title */}
        <h3 className="font-bold text-lg text-foreground">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          <div
            className="pro-description text-sm text-gray-500"
            dangerouslySetInnerHTML={{
              __html: description
                ? (() => {
                    // Strip HTML tags
                    const text = description.replace(/<[^>]+>/g, '');
                    // Take first 100 chars and add ...
                    const preview = text.length > 100 ? text.slice(0, 60) + '...' : text;
                    return preview;
                  })()
                : 'Product Description',
            }}
          />
        </p>

        {/* Read More Link */}
        <motion.a
          href="#"
          className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors flex items-center gap-1"
          variants={linkVariants}
          whileHover="hover"
        >
          Read More
          <span>↗</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
