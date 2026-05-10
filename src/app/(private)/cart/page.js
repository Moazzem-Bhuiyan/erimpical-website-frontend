import React from 'react';
import CartPage from './_component/CartContainer';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';

export const metadata = {
  title: 'Cart',
  description:
    'Building fashion that speaks to you, while respecting the planet and empowering communities through ethical practices',
};

export default function page() {
  return (
    <ResponsiveContainer>
      <CartPage />
    </ResponsiveContainer>
  );
}
