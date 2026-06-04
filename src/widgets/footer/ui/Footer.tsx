import { cn } from '@/shared/lib';

import { LINKS } from '../model/navigation';
import FooterGSMLogo from './FooterGSMLogo';

const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className={cn('bg-ghost-white flex w-full items-center justify-center')}>
      <div
        className={cn(
          'flex w-full flex-col items-start gap-10',
          'px-12 py-15',
          'lg:flex-row lg:items-center lg:justify-between lg:gap-2 lg:px-20 lg:py-5',
          'min-[1440px]:max-w-360',
        )}
      >
        <FooterGSMLogo />

        <div className={cn('flex w-full flex-col items-end gap-4', 'lg:w-auto')}>
          <div className={cn('flex w-full flex-col items-end gap-2', 'lg:w-auto')}>
            <p
              className={cn(
                'text-neutral-slate text-right text-[1.125rem]/[1.6875rem] font-normal',
              )}
            >
              ©{CURRENT_YEAR} Copyright 광주소프트웨어마이스터고등학교{' '}
              <br className={cn('sm:hidden')} />
              ALL RIGHTS RESERVED.
            </p>

            <div className={cn('flex flex-wrap justify-end gap-6')}>
              {LINKS.map(({ text, link }) => (
                <a
                  key={text}
                  href={link}
                  className={cn('text-[1.125rem]/[1.6875rem]', 'font-bold', 'text-neutral-slate')}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>

          <p className={cn('text-dark-utility text-right text-[0.875rem]/[1.25rem] font-normal')}>
            우) 62423 광주광역시 광산구 상무대로 312
            <br />
            교무실 062)949-6800(08:30~16:30) 행정실 062)949-6806(08:30~16:30)
            <br />
            팩스 062)941-7545 당직실 062)949-6899(평일야간, 휴일)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
