'use client';
import React, { useState } from 'react';
import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  total: number;
  collected: number;
}

const ProgressBar = ({ total, collected }: ProgressBarProps) => {
  const [totalCard, setTotalCard] = useState(total);
  const [collectedCard, setCollectedCard] = useState(collected);
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
