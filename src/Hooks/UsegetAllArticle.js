'use client';

import { useEffect, useState } from 'react';

const UsegetAllArticle = ({ limit, page, searchtext }) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/articles?limit=${limit}&page=${page}&searchTerm=${searchtext}`,
          {
            // cache: 'force-cache',
            next: { revalidate: 5 },
          }
        );

        if (!res.ok) throw new Error('Failed to fetch articles');
        const data = await res.json();
        setArticle(data);
        setTotalPages(data?.meta?.totalPage);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [limit, page, searchtext]);

  return { article, loading, error, totalPages };
};

export default UsegetAllArticle;
