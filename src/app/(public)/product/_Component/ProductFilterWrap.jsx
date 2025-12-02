'use client';

import { useState } from 'react';
import FilterSection from './ProductFilter';
import ProductContainer from './ProductContainer';

const ProductFilterWrapper = () => {
  const [filters, setFilters] = useState({
    search: '',
    size: '',
    priceRange: [0, 100],
  });

  return (
    <div className="!mt-10 flex flex-col lg:flex-row lg:gap-x-10 w-full">
      {/* Filter */}
      <div className="w-full lg:w-1/4 !mb-8 lg:!mb-0">
        <FilterSection filters={filters} setFilters={setFilters} />
      </div>

      {/* Products */}
      <div className="w-full lg:w-3/4">
        <ProductContainer filters={filters} />
      </div>
    </div>
  );
};

export default ProductFilterWrapper;
