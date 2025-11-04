'use client';

import { useState } from 'react';
import { Sliders } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';

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

export default function FilterSection() {
  const [selectedSize, setSelectedSize] = useState('Large');
  const [priceRange, setPriceRange] = useState([2000, 3500]);

  const handleApplyFilter = () => {
    console.log('Applied filters:', {
      size: selectedSize,
      priceRange: priceRange,
    });
  };

  return (
    <div className="!px-4 !w-[350px]  bg-card rounded-lg border border-border !p-6 ">
      {/* Header */}
      <div className="flex items-center justify-between !mb-6">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        <Sliders className="w-5 h-5 text-muted-foreground" />
      </div>

      <Accordion type="multiple" className="w-full" defaultValue={['size', 'price']}>
        {/* Size Filter */}
        <AccordionItem value="size" className="border-b border-border">
          <AccordionTrigger className="!py-3 text-foreground font-medium hover:no-underline">
            Size
          </AccordionTrigger>
          <AccordionContent className="!pb-4">
            <div className="grid grid-cols-2 gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`!py-2 !px-3 rounded-md text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-muted'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range Filter */}
        <AccordionItem value="price" className="border-b-0 !mt-5">
          <AccordionTrigger className="!py-3 text-foreground font-medium hover:no-underline">
            Price Range
          </AccordionTrigger>
          <AccordionContent className="!pb-4">
            <div className="!space-y-4">
              {/* Price Range Slider */}
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

              {/* Price Display */}
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

      {/* Apply Filter Button */}
      <Button
        onClick={handleApplyFilter}
        className="w-full !mt-6 bg-primary text-primary-foreground rounded-full !py-2 font-semibold hover:opacity-90 transition-opacity"
      >
        Apply Filter
      </Button>
    </div>
  );
}
