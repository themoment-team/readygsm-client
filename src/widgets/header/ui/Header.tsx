'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';
import { X } from 'lucide-react';
import { toast } from 'react-toastify';

import { usePostSignOut } from '@/entities/auth';
import { checkIsAdmin, useGetMyInfo, userQueryKeys } from '@/entities/user';
import { LoginModal } from '@/features/auth';
import { HamburgerIcon, Logo } from '@/shared/assets';
import { cn } from '@/shared/lib';
import { Button, buttonVariants } from '@/shared/ui';

import { NAV_LINKS } from '../model/navigation';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const queryClient = useQueryClient();
  const { data: user } = useGetMyInfo();
  const { mutate: signOut } = usePostSignOut();

  const isAdminRole = checkIsAdmin(user?.role);
  const isAdmin = pathname.startsWith('/admin') && isAdminRole;
  const links = isAdmin ? NAV_LINKS.admin : NAV_LINKS.client;

  const handleSignOut = () => {
    signOut(undefined, {
      onSuccess: () => {
        queryClient.removeQueries({ queryKey: userQueryKeys.getMyInfo() });
        toast.success('로그아웃 되었습니다.');
        router.replace('/');
      },
    });
  };

  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <header className={cn('relative w-full bg-white')}>
      <div
        className={cn(
          'mx-auto flex h-25 max-w-480 items-center justify-between',
          'px-8',
          isAdminRole && !isAdmin
            ? 'lg:px-12 xl:px-20 2xl:pr-[6.69rem] 2xl:pl-80'
            : 'lg:px-12 xl:px-20 2xl:px-80',
        )}
      >
        <Link href="/" className={cn('flex items-center gap-3')}>
          <Logo />
          <span className={cn('text-neutral-dark text-[1.5rem] font-bold')}>Ready, GSM</span>
        </Link>

        <nav className={cn('hidden items-center gap-12 lg:flex')}>
          {links.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative flex flex-col items-center text-2xl leading-[120%] font-semibold transition-colors',
                  isActive ? 'text-neutral-dark' : 'text-soft-gray hover:text-dark-utility',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'bg-brand-primary absolute -bottom-2 h-1 rounded-lg transition-[width] duration-300 ease-in-out',
                    isActive ? 'w-5' : 'w-0',
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className={cn('hidden items-center gap-4 lg:flex')}>
          {user ? (
            <Button onClick={handleSignOut} variant="outlinePrimary" size="md">
              로그아웃
            </Button>
          ) : (
            <Button onClick={() => setIsLoginModalOpen(true)} variant="default" size="md">
              로그인
            </Button>
          )}
          {isAdminRole && !isAdmin && (
            <Link href="/admin" className={cn(buttonVariants({ variant: 'default', size: 'md' }))}>
              어드민 페이지로 이동
            </Link>
          )}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn('flex items-center justify-center lg:hidden')}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMenuOpen ? <X size={32} /> : <HamburgerIcon />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={cn(
            'border-border-variant absolute top-full left-0 z-50 w-full border-t bg-white lg:hidden',
          )}
        >
          <div className={cn('mx-auto flex max-w-480 flex-col px-8 py-6')}>
            <nav className={cn('flex flex-col gap-6')}>
              {links.map((link) => {
                const isActive =
                  link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleMenuClose}
                    className={cn(
                      'text-2xl leading-[120%] font-semibold transition-colors',
                      isActive ? 'text-neutral-dark' : 'text-soft-gray',
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className={cn('mt-8 flex flex-col gap-3')}>
              {user ? (
                <Button
                  onClick={() => {
                    handleSignOut();
                    handleMenuClose();
                  }}
                  variant="outlinePrimary"
                  size="md"
                >
                  로그아웃
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    handleMenuClose();
                  }}
                  variant="default"
                  size="md"
                >
                  로그인
                </Button>
              )}
              {isAdminRole && !isAdmin && (
                <Link
                  href="/admin"
                  onClick={handleMenuClose}
                  className={cn(buttonVariants({ variant: 'default', size: 'md' }))}
                >
                  어드민 페이지로 이동
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </header>
  );
};

export default Header;
