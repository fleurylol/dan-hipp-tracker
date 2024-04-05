'use client';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Search } from 'lucide-react';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@prisma/client';
import ResultBox from './ResultBox';

interface SearchBarProps {
  cards: Card[];
}

const SearchMenu = ({ cards }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Card[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    if (event.target.value !== '' && cards) {
      setResults(
        cards.filter((card) =>
          card.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    } else {
      setResults([]);
    }
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Search />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-stone-100">Search</SheetTitle>
        </SheetHeader>
        <Input value={searchTerm} onChange={handleInputChange} />
        {results.length > 0 && (
          <div className="grid grid-cols-2 gap-1 py-2">
            {results.map((result) => (
              <ResultBox
                key={result.id}
                id={result.id}
                name={result.name}
                img={result.img}
                goldStatus={result.gold}
                collectStatus={result.collected}
              />
            ))}
          </div>
        )}
        {results.length === 0 && searchTerm && (
          <div className="absolute z-10 w-fit rounded-bl-md rounded-br-md border-2 bg-slate-500">
            <p className="p-2">No results found</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
export default SearchMenu;
