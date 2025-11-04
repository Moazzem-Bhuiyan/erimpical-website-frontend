import ArticlesSection from '@/component/Home/ArticleSection';
import CreativeGallery from '@/component/Home/CreativeGallery';
import Hero from '@/component/Home/Hero';
import PhilosophySection from '@/component/Home/Philosophy-section';
import EventsSection from '@/component/Home/RecentEventSection';
import ProductsSection from '@/component/Home/RecentThreeProduct';

export const metadata = {
  title: 'Empirical -website| Home',
  description: 'PL Tech  Website by using this platfrom you can book electrical services',
};

export default function Home() {
  return (
    <div className=" z-10 !min-h-screen !overflow-hidden px-5 md:px-10 lg:mx-auto lg:w-[90%] lg:space-y-40 lg:px-0 !w-full !max-w-2xl:w-3/4 2xl:!max-w-[1920px] 2xl:px-10 ">
      <Hero />
      <ProductsSection />
      <PhilosophySection />
      <EventsSection />
      <CreativeGallery />
      <ArticlesSection />
    </div>
  );
}
