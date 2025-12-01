'use client';
import Animatetext from '@/component/AnimatedText/AnimatedText';
import { containerVariants } from '@/component/Home/ArticleSection';
import ArticleCard from '@/component/shared/ArticleCard/Articlecard';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UsegetAllArticle from '@/Hooks/UsegetAllArticle';

export default function AricleContainer() {
  const [searchText, setSearchText] = useState('');
  // get products from api
  const { article, loading, error } = UsegetAllArticle({ limit: 10, page: 1, searchText });
  if (loading) {
    // <SkeletonCard />;
    <h1>loading....</h1>;
  }

  return (
    <div>
      <div className="!px-4 sm:!px-6 lg:!px-8 !mt-20">
        <div className=" !my-10 !space-y-10">
          <Animatetext x={20} duration={1}>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground text-center">
              Insights for a Better Financial Future
            </h1>
          </Animatetext>
          <Animatetext x={-20} duration={1}>
            <h1 className=" !mt-2 text-center text-pretty text-gray-400">
              Explore expert advice, in-depth articles, and practical tips to help you make smarter
              financial decisions
            </h1>
          </Animatetext>
          <div className="flex justify-center">
            <Input
              placeholder="Search articles"
              className={'mt-4 w-[20%] !mx-auto'}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>

        {/* ==============article section========== */}
        <section className="w-full !py-20 !px-4 md:!px-8 bg-background !my-10">
          <motion.div
            className="max-w-[80%] !mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Articles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {article?.data?.length === 0 && <h1>No article found</h1>}{' '}
              {article?.data?.map((article, index) => (
                <ArticleCard key={article.id} {...article} index={index} />
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
