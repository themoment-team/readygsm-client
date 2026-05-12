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
} from '@/shared/assets/';
import { cn } from '@/shared/lib';
import { AnimateOnView } from '@/shared/ui';

const HomeSection3 = () => {
  return (
    <div className={cn('flex flex-col justify-center pt-[10.56rem] xl:w-7xl xl:pt-[23.06rem]')}>
      <section className={cn('flex flex-col items-start gap-9')}>
        <AnimateOnView>
          <p className={cn('text-neutr al-dark w-232 text-[2.25rem] leading-normal font-bold')}>
            책 속 이론이 아닌
            <br />
            현장의 실전을 배우는 진짜 소프트웨어 교육
          </p>
        </AnimateOnView>
        <AnimateOnView>
          <div className={cn('flex items-center gap-0.5')}>
            <span
              className={cn(
                'bg-brand-primary px-1 text-[1.75rem] leading-[1.2] font-semibold text-white',
              )}
            >
              광주소프트웨어마이스터고
            </span>
            <span className={cn('text-neutral-dark text-[1.75rem] leading-[1.2] font-semibold')}>
              가 여러분의 코드를 완성합니다
            </span>
          </div>
        </AnimateOnView>
        <AnimateOnView>
          <div
            className={cn('text-brand-primary flex flex-wrap items-center gap-[1.3125rem_2.25rem]')}
          >
            <GitIcon />
            <MergeIcon />
            <CodeIcon />
            <LinkIcon />
            <BackendIcon />
            <DesignIcon />
            <AndroidIcon />
            <IOSIcon />
            <CloudIcon />
          </div>
        </AnimateOnView>
      </section>
    </div>
  );
};

export default HomeSection3;
