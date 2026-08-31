import Link from 'next/link';

import { ExternalLinkIcon } from '@shared/assets';
import { cn } from '@shared/lib';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  withHover?: boolean;
  icon?: boolean;
  isExternal?: boolean;
}

const NavLink = ({
  href,
  label,
  isActive,
  onClick,
  withHover = false,
  icon = false,
  isExternal = false,
}: NavLinkProps) => {
  const className = cn(
    'relative flex flex-col items-center px-[0.21875rem] text-base leading-[120%] font-semibold whitespace-nowrap transition-colors',
    isActive ? 'text-neutral-dark' : cn('text-soft-gray', withHover && 'hover:text-dark-utility'),
  );

  const content = (
    <>
      <span className={cn('flex items-center gap-1')}>
        {label}
        {icon && <ExternalLinkIcon />}
      </span>
      <span
        className={cn(
          'bg-brand-primary absolute -bottom-1 h-1 rounded-lg transition-[width] duration-300 ease-in-out',
          isActive ? 'w-5' : 'w-0',
        )}
      />
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {content}
    </Link>
  );
};

export default NavLink;
