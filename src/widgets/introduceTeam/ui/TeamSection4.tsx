'use client';

import React from 'react';

import Image from 'next/image';

import { MemberType } from '@/entities/teamMember';
import { cn } from '@/shared/lib';

const GITHUB_URL = 'https://github.com';

const ALLOWED_IDS = new Set([
  'seoxeon09',
  'yeondon125',
  'junjuny0227',
  'h-0y28',
  'LeeSangHyeok0731',
  'snowykte0426',
  'wwwcomcomcomcom',
  'ZaMan-O',
  'hongjm0912',
  'KIEYU5',
]);

const roleColors: Record<string, string> = {
  Server: 'text-orange-500',
  Frontend: 'text-sky-600',
  Design: 'text-pink-600',
  DevOps: 'text-teal-500',
};

const MemberCard = ({ name, githubId, avatarUrl, role }: MemberType) => {
  return (
    <a
      href={`${GITHUB_URL}/${githubId}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex',
        'items-center',
        'w-73.75',
        'h-28',
        'rounded-xl',
        'border',
        'border-[#B2B2B2]',
        'bg-white',
        'p-5',
        'gap-1',
        'space-x-4',
        'shrink-0',
        'cursor-pointer',
      )}
    >
      <Image
        src={avatarUrl}
        width={72}
        height={72}
        alt={name}
        className={cn('rounded-full')}
        unoptimized
      />
      <div>
        <p className={cn('text-2xl', 'leading-8', 'font-medium')}>{name}</p>
        <p className={cn(['text-xl', 'leading-7', 'font-normal', roleColors[role]])}>{role}</p>
      </div>
    </a>
  );
};

interface TeamSection4Props {
  data: MemberType[];
}

const TeamSection4 = ({ data }: TeamSection4Props) => {
  const filtered = data.filter((m) => ALLOWED_IDS.has(m.githubId));
  const itemWidth = 18.4375;
  const itemSpacing = 1;

  const totalItemWidth = filtered.length * itemWidth;
  const totalSpacingWidth = (filtered.length - 1) * itemSpacing;
  const totalWidth = totalItemWidth + totalSpacingWidth;

  const memberListDoubled = [...filtered, ...filtered];

  if (filtered.length === 0) return null;

  return (
    <div
      className={cn(
        'flex',
        'flex-col',
        'overflow-hidden',
        'w-full',
        'bg-white',
        'py-60',
        'items-center',
        'gap-25',
      )}
    >
      <h3
        className={cn(
          'text-[#0F0921]',
          'text-5xl',
          'leading-[3.85rem]',
          'font-bold',
          'text-center',
        )}
      >
        &quot;학과 체험 서비스, <br className={cn('block', 'sm:hidden')} />
        누가 만들었을까요?&quot;
      </h3>
      <div className={cn('flex', 'flex-col', 'relative', 'w-full', 'overflow-hidden', 'gap-6')}>
        <div
          className={cn('flex', 'space-x-4', 'whitespace-nowrap')}
          style={
            {
              width: `${totalWidth * 2}rem`,
              animation: 'scrollRight 25s linear infinite',
              '--scroll-end': `-${totalWidth + 1}rem`,
            } as React.CSSProperties
          }
        >
          {memberListDoubled.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
        <div
          className={cn('flex', 'space-x-4', 'whitespace-nowrap')}
          style={
            {
              width: `${totalWidth * 2}rem`,
              animation: 'scrollLeft 25s linear infinite',
              '--scroll-end': `-${totalWidth + 1}rem`,
            } as React.CSSProperties
          }
        >
          {memberListDoubled.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection4;
