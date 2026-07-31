import { Fragment } from 'react';

import {
  AndroidIcon,
  BackendIcon,
  CloudIcon,
  CodeIcon,
  DesignIcon,
  GitIcon,
  IOSIcon,
  LinkIcon,
  MergeIcon,
} from '@/shared/assets';
import { cn } from '@/shared/lib';

const RAIL_ICONS = [
  GitIcon,
  MergeIcon,
  CodeIcon,
  LinkIcon,
  BackendIcon,
  DesignIcon,
  AndroidIcon,
  IOSIcon,
  CloudIcon,
];

const JourneyRail = () => {
  return (
    <div
      aria-hidden
      className={cn(
        'text-brand-primary absolute inset-y-0 left-[10.3125rem] hidden w-[2.1875rem] flex-col items-center gap-10 py-12 xl:flex 2xl:left-[9.5625rem]',
        'drop-shadow-[0_0.25rem_0.625rem_rgba(0,5,28,0.08)]',
      )}
    >
      {RAIL_ICONS.map((Icon, index) => (
        <Fragment key={index}>
          {index > 0 && <div className={cn('bg-brand-primary w-0.5 flex-1 rounded-full')} />}
          <Icon />
        </Fragment>
      ))}
    </div>
  );
};

export default JourneyRail;
