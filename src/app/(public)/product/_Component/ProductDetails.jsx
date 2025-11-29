import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import React from 'react';
import ProductImageGallery from './ProductImageGallery';
import ProductInfo from './ProductInfo';

export default async function ProductDetails({ ProductDetails }) {
  console.log('details', ProductDetails);
  return (
    <ResponsiveContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
        <ProductImageGallery Productimages={ProductDetails?.data?.images} />
        <ProductInfo info={ProductDetails?.data} />
      </div>
    </ResponsiveContainer>
  );
}
