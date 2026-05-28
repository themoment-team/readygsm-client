'use client';

import { useEffect, useState } from 'react';

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
import NavLink from './NavLink';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [menuOpenPathname, setMenuOpenPathname] = useState<string | null>(null);
  const isMenuOpen = menuOpenPathname === pathname;

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleMenuClose = () => setMenuOpenPathname(null);

  const getIsActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className={cn('sticky top-0 z-50 w-full bg-white')}>
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
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={getIsActive(link.href)}
              withHover
            />
          ))}
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
          onClick={() => setMenuOpenPathname(isMenuOpen ? null : pathname)}
          className={cn('flex items-center justify-center lg:hidden')}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMenuOpen ? <X size={32} /> : <HamburgerIcon />}
        </button>
      </div>

      {isMenuOpen && (
        <>
          <div
            className={cn('fixed inset-x-0 top-25 bottom-0 z-40 lg:hidden')}
            onClick={handleMenuClose}
          />
          <div
            className={cn(
              'fixed top-25 right-0 bottom-0 z-40 bg-white lg:hidden',
              'inline-flex flex-col items-end pt-9 pr-6 pb-34.25 pl-12.75',
            )}
          >
            <div className={cn('flex flex-col items-end gap-12')}>
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={getIsActive(link.href)}
                  onClick={handleMenuClose}
                />
              ))}
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
        </>
      )}

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </header>
  );
};

export default Header;
