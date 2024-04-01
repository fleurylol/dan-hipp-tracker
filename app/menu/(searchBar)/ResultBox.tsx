import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import classnames from 'classnames';
import axios from 'axios';

interface ResultBoxProps {
  id: number;
  name: string;
  img: string;
  goldStatus: boolean;
  collectStatus: boolean;
}

const ResultBox: React.FC<ResultBoxProps> = ({
  name,
  img,
  goldStatus,
  collectStatus,
  id,
}: ResultBoxProps) => {
  const [collect, setCollected] = useState(collectStatus);
  const [gold, setGold] = useState(goldStatus);

  const handleCollect = async () => {
    try {
      setCollected(!collect); // optimistic update
      await axios.patch(`api/collect/${id}`, { collected: !collect });
      // setCollected(!collect); // toggle the collected state
    } catch (error) {
      console.error(error);
      setCollected(collect); // revert back to original state
    }
  };

  const handleGold = async () => {
    try {
      setGold(!gold); // optimistic update
      await axios.patch(`api/gold/${id}`, { gold: !gold });
      // setGold(!gold); // toggle the gold state
    } catch (error) {
      console.error(error);
      setGold(gold); // revert back to original state
    }
  };

  return (
    <>
      <div
        className={classnames({
          'py-4 border-4 rounded-lg ': true,
          'bg-stone-900 border-slate-500 transition-colors duration-900 ease-in-out':
            !collect && !gold,
          'bg-stone-700 border-violet-700 transition-colors duration-900 ease-in-out':
            collect && !gold,
          'bg-yellow-700 border-yellow-500 transition-colors duration-900 ease-in-out':
            gold,
        })}
      >
        <Image
          src={img}
          alt={name}
          height={150}
          width={150}
          className={classnames({
            'filter grayscale transition-filter duration-500 ease-in-out':
              !collect,
            '!filter none transition-filter duration-500 ease-in-out': collect,
          })}
        />
        <div className="flex items-center space-x-3 w-fit m-auto">
          <Checkbox
            id="collect"
            className="bg-white"
            onClick={handleCollect}
            checked={collect}
          />
          Collected
          <Checkbox
            id="gold"
            className="bg-white"
            onClick={handleGold}
            checked={gold}
          />
          Gold
        </div>
      </div>
    </>
  );
};

export default ResultBox;
