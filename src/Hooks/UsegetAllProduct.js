'use client';

import { useEffect, useState } from 'react';

const UsegetAllProduct = ({ limit, page, searchText, priceRange }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products?limit=${limit}&page=${page}&searchTerm=${searchText}&priceRange=${priceRange}`,
          {
            // cache: 'force-cache',
            next: { revalidate: 5 },
          }
        );

        if (!res.ok) throw new Error('Failed to fetch services');
        const data = await res.json();
        setProduct(data);
        setTotalPages(data?.meta?.totalPage);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [limit, page, searchText, priceRange]);

  return { product, loading, error, totalPages };
};

export default UsegetAllProduct;
