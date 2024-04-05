import prisma from '@/prisma/client';
import { Card } from '@prisma/client';
import Main from './Main';

export default async function Home(card: Card) {
  const cards = await prisma.card.findMany();

  const total = cards.length;
  const collected = cards.filter((card) => card.collected).length;

  return (
    <main className="flex flex-col pb-5">
      <Main cards={cards} total={total} collected={collected} />
    </main>
  );
}
