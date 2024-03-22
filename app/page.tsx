import prisma from '@/prisma/client';
import { Card } from '@prisma/client';
import CardTile from './collection/CardTile';
import TabSelect from './home/TabSelect';
export default async function Home(card: Card) {
  const cards = await prisma.card.findMany();
  return (
    <main className="flex flex-col">
      <div className="text-center">
        <h1 className="text-xl font-bold py-5">Dan Hipp Collection Tracker</h1>
        <div className="m-auto">
          <TabSelect />
        </div>
      </div>
      <div className="m-auto">
        <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-4">
          {cards.map((card) => (
            <CardTile key={card.id} {...card} />
          ))}
        </div>
      </div>
    </main>
  );
}
