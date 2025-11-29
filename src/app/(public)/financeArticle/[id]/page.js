import { fetchArticleDetails } from '@/Hooks/UsegetArticle';
import ArticleDetailsPage from '../_Component/ArticleDetails';

export async function generateMetadata({ params }) {
  const { id } = params;
  try {
    const service = await fetchArticleDetails(id);
    return {
      title: `${service?.data?.title || 'Article Details'} - Empirical-Website`,
      description:
        service?.data?.description || 'Discover detailed information about our services...',
    };
  } catch (error) {
    return {
      title: 'Article Details - Empirical-Website',
      description: 'Discover detailed information about our Article...',
    };
  }
}
export default async function page({ params }) {
  const { id } = params;
  let service = null;
  let error = null;

  try {
    service = await fetchArticleDetails(id);
  } catch (err) {
    error = err.message;
  }
  return (
    <div>
      <ArticleDetailsPage ArticleDetails={service} error={error} />
    </div>
  );
}
