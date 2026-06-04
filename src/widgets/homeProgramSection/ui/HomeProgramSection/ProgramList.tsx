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
          name={program.name}
          description={program.description}
          activityDate={program.activityDate}
          maxApplicant={program.maxApplicant}
          currentApplicant={program.currentApplicant}
          isSelected={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
        />
      ))}
    </>
  );
};

export default ProgramList;
