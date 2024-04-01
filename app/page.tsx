import prisma from '@/prisma/client';
import { Card } from '@prisma/client';
import CardTile from './collection/CardTile';
import { Progress } from '@/components/ui/progress';
import Menu from './menu/AddCard';
import SearchMenu from './menu/(searchBar)/Search';

export default async function Home(card: Card) {
  const cards = await prisma.card.findMany();

  const total = cards.length;
  const collected = cards.filter((card) => card.collected).length;
  const progressValue = (collected / total) * 100;

  return (
    <main className="flex flex-col">
      <div className="text-center">
        <div className="m-auto w-7/12">
          <h1 className="text-xl font-bold pt-5">
            Dan Hipp Collection Tracker
          </h1>
          <div className="flex items-center py-5 space-x-8">
            <Progress value={progressValue} />
            <div>
              {collected}/{total}
            </div>
            <>
              <SearchMenu cards={cards} />
              <Menu />
            </>
          </div>
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
    </main>
  );
}
