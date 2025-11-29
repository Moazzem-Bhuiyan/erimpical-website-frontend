'use client';

import { motion } from 'framer-motion';
import ArticleCard from '../shared/ArticleCard/Articlecard';
import Animatetext from '../AnimatedText/AnimatedText';
import { useRouter } from 'next/navigation';
import UsegetAllArticle from '@/Hooks/UsegetAllArticle';

export const articles = [
  {
    id: 1,
    title: 'The Ultimate Guide to Budgeting',
    date: 'April 10, 2025',
    description:
      'Master your finances with our comprehensive budgeting strategies that help you save more while...',
    image: '/article/article1.png',
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Budgeting',
    date: 'April 10, 2025',
    description:
      'Master your finances with our comprehensive budgeting strategies that help you save more while...',
    image: '/article/article4.png',
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Budgeting',
    date: 'April 10, 2025',
    description:
      'Master your finances with our comprehensive budgeting strategies that help you save more while...',
    image: '/article/article5.png',
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

export default function ArticlesSection() {
  const router = useRouter();

  // get products from api
  const { article, loading, error } = UsegetAllArticle({ limit: 3, page: 1, searchtext: '' });

  console.log(article);
  return (
    <section className="w-full !py-20 !px-4 md:!px-8 bg-background !my-20">
      <motion.div
        className="max-w-[80%] !mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header with Title and View More Button */}
        <div className="flex items-center justify-between !mb-12 border-b-2 border-dashed border-muted !pb-6">
          <div>
            <Animatetext x={-20} duration={1}>
              <motion.span
                className="text-xs text-muted-foreground tracking-widest uppercase font-medium"
                variants={titleVariants}
              >
                Finance Article
              </motion.span>
            </Animatetext>
            <Animatetext x={20} duration={1}>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-foreground !mt-2"
                variants={titleVariants}
              >
                Articles and Insights
              </motion.h2>
            </Animatetext>
          </div>

          {/* View More Button */}
          <motion.button
            className="flex items-center gap-2 !px-5 !py-2 bg-foreground text-background rounded-full text-sm font-medium hover:bg-muted-foreground transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => {
              router.push('/financeArticle');
            }}
          >
            View More
            <span className="text-lg">↗</span>
          </motion.button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {article?.data?.map((article, index) => (
            <ArticleCard key={article.id} {...article} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
