import Link from 'next/link';

import { cn } from '@/shared/lib';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  withHover?: boolean;
}

const NavLink = ({ href, label, isActive, onClick, withHover = false }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      'relative flex flex-col items-center text-2xl leading-[120%] font-semibold transition-colors',
      isActive ? 'text-neutral-dark' : cn('text-soft-gray', withHover && 'hover:text-dark-utility'),
    )}
  >
    {label}
    <span
      className={cn(
        'bg-brand-primary absolute -bottom-2 h-1 rounded-lg transition-[width] duration-300 ease-in-out',
        isActive ? 'w-5' : 'w-0',
      )}
    />
  </Link>
);

export default NavLink;
