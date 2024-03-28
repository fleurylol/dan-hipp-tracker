import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface ResultBoxProps {
  id: number;
  name: string;
  img: string;
}

const ResultBox: React.FC<ResultBoxProps> = ({ name, img }: ResultBoxProps) => {
  return (
    <>
      <div className="flex flex-col border-b-2 px-2 transition-colors last:border-b-0 hover:bg-slate-200">
        <Image src={img} alt={name} height={50} width={50} />
        <div className="font-bold">{name}</div>
      </div>
    </>
  );
};

export default ResultBox;
