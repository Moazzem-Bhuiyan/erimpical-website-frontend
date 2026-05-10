import React from 'react';
import GalleryPage from './_Component/GalleryContainer';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';

export const metadata = {
  title: 'Gallery',
  description:
    'Building fashion that speaks to you, while respecting the planet and empowering communities through ethical practices.',
};

export default function page() {
  return (
    <ResponsiveContainer className={'w-full !p-0'}>
      <GalleryPage />
    </ResponsiveContainer>
  );
}
