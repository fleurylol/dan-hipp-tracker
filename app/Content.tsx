import prisma from '@/prisma/client';
import Main from './Main';

const Home = async () => {
  const cards = await prisma.card.findMany();

  const total = cards.length;
  const collected = cards.filter((card) => card.collected).length;

  return (
    <main className="flex flex-col pb-5 h-full">
      <Main cards={cards} total={total} collected={collected} />
    </main>
  );
};
export default Home;
