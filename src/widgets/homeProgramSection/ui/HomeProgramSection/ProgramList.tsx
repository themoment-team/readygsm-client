'use client';

import { useState } from 'react';

import type { ActivityType } from '@/entities/activity';
import { ProgramCard } from '@/entities/program';

interface ProgramListProps {
  programs: ActivityType[];
}

const ProgramList = ({ programs }: ProgramListProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      {programs.map((program, index) => (
        <ProgramCard
          key={program.id}
          content={[program.description]}
          date={program.activityDate}
          isSelected={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
          personnel={program.maxApplicant}
          title={program.name}
        />
      ))}
    </>
  );
};

export default ProgramList;
