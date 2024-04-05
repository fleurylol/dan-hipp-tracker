'use client';
import ProgressBar from '@/app/(home)/ProgressBar';
import Menu from '@/app/menu/AddCard';
import React, { useState } from 'react';
import SearchMenu from '../menu/(searchBar)/Search';
import { Card } from '@prisma/client';

interface HeaderProps {
  total: number;
  collected: number;
  cards: Card[];
}

const Header = ({ total, collected, cards }: HeaderProps) => {
  return (
    <div className="flex items-center py-5 space-x-8">
      <ProgressBar total={total} collected={collected} />
      <>
        <SearchMenu cards={cards} />
        <Menu />
      </>
    </div>
  );
};

export default Header;
