'use client';
import ProgressBar from '@/app/(home)/ProgressBar';
import Menu from '@/app/menu/AddCard';
import React, { useState } from 'react';
import SearchMenu from '../menu/(searchBar)/Search';
import { Card } from '@prisma/client';
import { MyContext } from '@/lib/Context';

interface HeaderProps {
  total: number;
  collected: number;
  cards: Card[];
}

const Header = ({ total, collected, cards }: HeaderProps) => {
  const [totalCard, setTotalCard] = useState(total);
  const [collectedCard, setCollectedCard] = useState(collected);
  return (
    <MyContext.Provider
      value={{ totalCard, setTotalCard, collectedCard, setCollectedCard }}
    >
      <div className="flex items-center py-5 space-x-8">
        <ProgressBar total={total} collected={collected} />
        <>
          <SearchMenu cards={cards} />
          <Menu />
        </>
      </div>
    </MyContext.Provider>
  );
};

export default Header;
