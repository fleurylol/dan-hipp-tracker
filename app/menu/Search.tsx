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

const SearchMenu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Sheet>
      <SheetTrigger>
        <Search />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-stone-100">Search</SheetTitle>
        </SheetHeader>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SheetContent>
    </Sheet>
  );
};

export default SearchMenu;
