import { cn } from '@/shared/lib';

import type { InfoCardType } from '../model/types';

const InfoCard = ({ category, descriptions }: InfoCardType) => {
  return (
    <div
      className={cn(
        'border-border-variant flex flex-1 flex-col gap-[0.62rem] rounded-lg border px-6 py-5',
      )}
    >
      <p className={cn('text-brand-primary text-[1.75rem] leading-[1.2] font-bold')}>{category}</p>
      <ul
        className={cn(
          'text-secondary-slate flex flex-col text-[1.5rem] leading-normal font-medium',
        )}
      >
        {descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
