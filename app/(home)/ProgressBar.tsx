'use client';
import React, { useContext } from 'react';
import { Progress } from '@/components/ui/progress';
import { MyContext } from '@/lib/Context';

interface ProgressBarProps {
  total: number;
  collected: number;
}

const ProgressBar = ({ total, collected }: ProgressBarProps) => {
  const { totalCard, collectedCard } = useContext(MyContext);
  const progressValue = (collectedCard / totalCard) * 100;

  return (
    <>
      <Progress value={progressValue} />
      <div>
        {collectedCard}/{totalCard}
      </div>
    </>
  );
};

export default ProgressBar;
