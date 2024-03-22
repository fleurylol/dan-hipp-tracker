import prisma from '@/prisma/client';
import { Card } from '@prisma/client';
import Image from 'next/image';
import classnames from 'classnames';

const CardTile = (props: Card) => {
  const { id, img, name, collected } = props;

  return (
    <div className="flex">
      <div className="flex  transform transition-transform hover:scale-105 flex-col items-center py-4 border-4 rounded-lg bg-stone-900 border-slate-500">
        <Image
          className={classnames({
            'filter grayscale': !collected,
            '!filter none ': collected,
          })}
          src={img}
          alt={name}
          width={220}
          height={100}
        />
        <h3 className="scroll-m-20 text-xl font-semibold p-2 rounded-md bg-gray-400 text-stone-100 tracking-tight">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CardTile;
