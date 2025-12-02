'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function ReusablePagination({ meta, onPageChange }) {
  const { page, totalPage } = meta || {};

  if (!meta || totalPage <= 1) return null;

  const pages = [];

  // Build pagination pages (1 ... last)
  for (let i = 1; i <= totalPage; i++) {
    if (i === 1 || i === totalPage || (i >= page - 1 && i <= page + 1)) {
      pages.push(i);
    } else if (i === page - 2 || i === page + 2) {
      pages.push('ellipsis-' + i);
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious href="#" onClick={() => page > 1 && onPageChange(page - 1)} />
        </PaginationItem>

        {/* Numbers */}
        {pages.map((p, i) =>
          typeof p === 'string' ? (
            <PaginationItem key={i}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={i}>
              <PaginationLink href="#" isActive={p === page} onClick={() => onPageChange(p)}>
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* Next */}
        <PaginationItem>
          <PaginationNext href="#" onClick={() => page < totalPage && onPageChange(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
