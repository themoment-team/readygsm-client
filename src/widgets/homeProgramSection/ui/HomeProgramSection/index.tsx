'use client';

import { useState } from 'react';

import { ActivityType } from '@/entities/activity';
import { ProgramCard } from '@/entities/program';
import { cn } from '@/shared/lib';

interface HomeProgramSectionProps {
  activities: ActivityType[];
}

const HomeProgramSection = ({ activities }: HomeProgramSectionProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <main
      className={cn(
        'flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-4 py-8 md:py-12',
      )}
    >
      {activities.map((activity, index) => (
        <ProgramCard
          key={activity.id}
          title={activity.name}
          content={[activity.description]}
          date={activity.activityDate}
          personnel={activity.maxApplicant}
          isSelected={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
        />
      ))}
    </main>
  );
};

export default HomeProgramSection;
