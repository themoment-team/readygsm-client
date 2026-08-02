import Link from 'next/link';

import { cn } from '@/shared/lib';

type NavLinkSizeType = 'sm' | 'lg';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  withHover?: boolean;
  size?: NavLinkSizeType;
}

const NavLink = ({
  href,
  label,
  isActive,
  onClick,
  withHover = false,
  size = 'lg',
}: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      'relative flex flex-col items-center leading-[120%] font-semibold transition-colors',
      size === 'sm' ? 'text-base' : 'text-2xl',
      isActive ? 'text-neutral-dark' : cn('text-soft-gray', withHover && 'hover:text-dark-utility'),
    )}
  >
    {label}
    <span
      className={cn(
        'bg-brand-primary absolute h-1 rounded-lg transition-[width] duration-300 ease-in-out',
        size === 'sm' ? '-bottom-1' : '-bottom-2',
        isActive ? 'w-5' : 'w-0',
      )}
    />
  </Link>
);

export default NavLink;
