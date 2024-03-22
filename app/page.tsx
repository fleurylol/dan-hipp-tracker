import prisma from '@/prisma/client';
import { Card } from '@prisma/client';
import CardTile from './collection/CardTile';
import Image from 'next/image';
import classnames from 'classnames';
export default async function Home(card: Card) {
  const cards = await prisma.card.findMany();
  return (
    <main className="flex ">
      {/* <h1>Dan Hipp Collection Tracker</h1> */}
      <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-4">
        {cards.map((card) => (
          <CardTile key={card.id} {...card} />
        ))}
      </div>
    </main>
  );
}
