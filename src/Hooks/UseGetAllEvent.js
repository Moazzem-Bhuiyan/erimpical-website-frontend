'use client';

import { useEffect, useState } from 'react';

const UsegetAllEvent = ({ limit, page, searchtext }) => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/events?limit=${limit}&page=${page}&searchTerm=${searchtext}`,
          {
            // cache: 'force-cache',
            next: { revalidate: 5 },
          }
        );

        if (!res.ok) throw new Error('Failed to fetch services');
        const data = await res.json();
        setEvent(data);
        setTotalPages(data?.meta?.totalPage);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [limit, page, searchtext]);

  return { event, loading, error, totalPages };
};

export default UsegetAllEvent;
