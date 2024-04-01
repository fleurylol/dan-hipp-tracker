'use client';

import { Card } from '@prisma/client';
import Image from 'next/image';
import classnames from 'classnames';
import axios from 'axios';
import { useState } from 'react';

const CardTile = (props: Card) => {
  const { id, img, name, collected, gold } = props;

  const [collect, setCollected] = useState(collected);

  const handleClick = async () => {
    try {
      setCollected(!collect); // optimistic update
      await axios.patch(`api/collect/${id}`, { collected: !collect });
      // setCollected(!collect); // toggle the collected state
    } catch (error) {
      console.error(error);
      setCollected(collected); // revert back to original state
    }
  };

  return (
    <div className="flex">
      <div
        className={classnames({
          'flex transform transition-transform hover:scale-105 flex-col items-center py-4 border-4 rounded-lg ':
            true,
          'bg-stone-900 border-slate-500 transition-colors duration-900 ease-in-out':
            !collect && !gold,
          'bg-stone-700 border-violet-700 transition-colors duration-900 ease-in-out':
            collect && !gold,
          'bg-yellow-700 border-yellow-500 transition-colors duration-900 ease-in-out':
            gold,
        })}
      >
        <Image
          className={classnames({
            'filter grayscale transition-filter duration-500 ease-in-out':
              !collect,
            '!filter none transition-filter duration-500 ease-in-out': collect,
          })}
          src={img}
          alt={name}
          width={220}
          height={100}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default CardTile;
