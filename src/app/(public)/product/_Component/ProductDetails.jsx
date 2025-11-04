'use client';
import { useParams } from 'next/navigation';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import React from 'react';
import ProductImageGallery from './ProductImageGallery';
import ProductInfo from './ProductInfo';

export default function ProductDetails() {
  const params = useParams();
  return (
    <ResponsiveContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
        <ProductImageGallery />
        <ProductInfo />
      </div>
    </ResponsiveContainer>
  );
}
