import ProductDetails from '../_Component/ProductDetails';
import { fetchProductDetails } from '@/Hooks/UsegetProductDetails';

export async function generateMetadata({ params }) {
  const { id } = params;
  try {
    const service = await fetchProductDetails(id);
    return {
      title: `${service?.data?.title || 'Product Details'} - Empirical-Website`,
      description:
        service?.data?.description || 'Discover detailed information about our services...',
    };
  } catch (error) {
    return {
      title: 'Product Details - Empirical-Website',
      description: 'Discover detailed information about our services...',
    };
  }
}

export default async function ProductDetailsPage({ params }) {
  const { id } = params;
  let service = null;
  let error = null;

  try {
    service = await fetchProductDetails(id);
  } catch (err) {
    error = err.message;
  }

  return (
    <div>
      <ProductDetails ProductDetails={service} error={error} />
      {/* <RelatedProducts /> */}
    </div>
  );
}
