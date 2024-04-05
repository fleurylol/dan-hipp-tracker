'use client';
import React, { useEffect, useState } from 'react';
import Header from './(home)/Header';
import CardTile from './collection/CardTile';
import { Card } from '@prisma/client';
import { MyContext } from '@/lib/Context';

interface MainPageProps {
  cards: Card[];
  total: number;
  collected: number;
}

const Main = ({ total, collected, cards }: MainPageProps) => {
  const [totalCard, setTotalCard] = useState(total);
  const [collectedCard, setCollectedCard] = useState(collected);

  return (
    <>
      <MyContext.Provider
        value={{ totalCard, setTotalCard, collectedCard, setCollectedCard }}
      >
        <div className="bg-neutral-800 sticky top-0 z-50">
          <div className="m-auto w-7/12 text-center">
            <h1 className="text-xl font-bold pt-5">
              Dan Hipp Collection Tracker
            </h1>
            <Header total={total} collected={collected} cards={cards} />
          </div>
        </div>
        <div className="m-auto">
          <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-4">
            {cards
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((card) => (
                <CardTile key={card.id} {...card} />
              ))}
          </div>
        </div>
      </MyContext.Provider>
    </>
  );
};

export default Main;
