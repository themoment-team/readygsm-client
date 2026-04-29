'use client';

import Image from 'next/image';

import { MemberType } from '@/entities/teamMember';
import { cn } from '@/shared/lib';

const GITHUB_URL = 'https://github.com';

const HIGHLIGHTED_IDS = new Set(['seoxeon09', 'yeondon125', 'hongjm0912', 'ZaMan-O', 'KIEYU5']);

const roleColors: Record<string, string> = {
  Server: 'text-orange-500',
  Frontend: 'text-sky-600',
  Design: 'text-pink-600',
  DevOps: 'text-teal-500',
};

const MemberCard = ({ name, githubId, avatarUrl, role }: MemberType) => {
  const isHighlighted = HIGHLIGHTED_IDS.has(githubId);

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
        'bg-white',
        'p-5',
        'gap-1',
        'space-x-4',
        'shrink-0',
        'cursor-pointer',
        isHighlighted
          ? 'border-[#7C58E9] shadow-[0_0_20px_0_rgba(65,49,113,0.12)]'
          : 'border-[#B2B2B2]',
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
        <p className={cn('text-[1.5rem]/[2rem]', 'font-medium')}>{name}</p>
        <p className={cn(['text-[1.375rem]/[1.75rem]', 'font-normal', roleColors[role]])}>{role}</p>
      </div>
    </a>
  );
};

interface TeamSection4Props {
  data: MemberType[];
}

const TeamSection4 = ({ data }: TeamSection4Props) => {
  const itemWidth = 18.4375;
  const itemSpacing = 1;

  const totalItemWidth = data.length * itemWidth;
  const totalSpacingWidth = (data.length - 1) * itemSpacing;
  const totalWidth = totalItemWidth + totalSpacingWidth;

  const memberListDoubled = [...data, ...data];

  if (data.length === 0) return null;

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
      <h3 className={cn('text-[#0F0921]', 'text-[1.75rem]/[2.75rem]', 'font-bold', 'text-center')}>
        &quot;학과체험 서비스, <br className={cn('block', 'sm:hidden')} />
        누가 만들었을까요?&quot;
      </h3>
      <div className={cn('flex', 'flex-col', 'relative', 'w-full', 'overflow-hidden', 'gap-6')}>
        <div
          className={cn('flex', 'space-x-4', 'whitespace-nowrap')}
          style={{
            width: `${totalWidth * 2}rem`,
            animation: 'scrollRight 25s linear infinite',
          }}
        >
          {memberListDoubled.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
        <div
          className={cn('flex', 'space-x-4', 'whitespace-nowrap')}
          style={{
            width: `${totalWidth * 2}rem`,
            animation: 'scrollLeft 25s linear infinite',
          }}
        >
          {memberListDoubled.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth + 1}rem);
          }
        }
        @keyframes scrollLeft {
          0% {
            transform: translateX(-${totalWidth + 1}rem);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TeamSection4;
