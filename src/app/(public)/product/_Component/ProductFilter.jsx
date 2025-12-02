'use client';

import { useState, useEffect } from 'react';
import { Sliders } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

const sizes = [
  'XS-Small',
  'S-Small',
  'Small',
  'Medium',
  'Large',
  'X-Large',
  'XX-Large',
  '3X-Large',
  '4X-Large',
];

export default function FilterSection({ filters, setFilters }) {
  const [selectedSize, setSelectedSize] = useState(filters.size || 'Large');
  const [priceRange, setPriceRange] = useState(filters.priceRange);
  const [searchTerm, setSearchTerm] = useState(filters.search);

  // 🔥 Auto-update filters whenever search, size or price changes
  useEffect(() => {
    setFilters({
      search: searchTerm,
      size: selectedSize,
      priceRange: priceRange,
    });
  }, [searchTerm, selectedSize, priceRange, setFilters]);

  return (
    <div className="!px-4 !w-[350px] bg-card rounded-lg border border-border !p-6">
      <div className="flex items-center justify-between !mb-6">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        <Sliders className="w-5 h-5 text-muted-foreground" />
      </div>

      <Accordion type="multiple" className="w-full" defaultValue={['price']}>
        {/* 🔍 Search */}
        <div>
          <Input
            placeholder="Search"
            className="!mt-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* 💵 Price Range */}
        <AccordionItem value="price" className="border-b-0 !mt-5">
          <AccordionTrigger className="!py-3 text-foreground font-medium hover:no-underline">
            Price Range
          </AccordionTrigger>
          <AccordionContent className="!pb-4">
            <div className="!space-y-4">
              <div className="!px-5 !mt-2">
                <Slider
                  min={0}
                  max={5000}
                  step={50}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="w-full"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground font-medium">
                  ${priceRange[0].toLocaleString()}
                </span>
                <span className="text-muted-foreground">-</span>
                <span className="text-foreground font-medium">
                  ${priceRange[1].toLocaleString()}
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
