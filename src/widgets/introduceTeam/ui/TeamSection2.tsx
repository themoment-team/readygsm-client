import { TheMomentIcon } from '@/shared/assets';
import { cn } from '@/shared/lib';
const TeamSection2 = () => {
  return (
    <div
      id="section2"
      className={cn(
        'fhd:px-[20rem] uhd:px-[22.5rem] flex w-full flex-col-reverse items-center justify-between gap-20 bg-white px-6 py-60 md:flex-row md:gap-0 md:px-25 xl:px-50',
      )}
    >
      <div className={cn('flex w-fit flex-col gap-6')}>
        <h1
          className={cn(
            'text-center text-7xl leading-[5.525rem] font-bold text-[#473B6B] md:text-left',
          )}
        >
          <span className={cn('text-[#7C58E9]')}>더모먼트</span>는
          <br />
          어떤 팀 인가요?
        </h1>
        <span
          className={cn('text-center text-base leading-8 font-normal text-[#5D5B64] md:text-left')}
        >
          더모먼트팀은 광주소프트웨어마이스터고등학교의 전공 동아리입니다. <br />
          약 30명의 재학생, 졸업생들이 모여서 활동하고, <br
            className={cn('block sm:hidden')}
          />{' '}
          주로 학교에 필요한 서비스를 개발합니다.
          <br />
          학교에 필요한 서비스를 함께 개발하고 싶나요?{' '}
          <br className={cn('block sm:hidden md:block')} />
          지금 바로 SW 마이스터고에 지원하세요!
        </span>
      </div>
      <div
        className={cn(
          'relative flex h-71.5 w-71.5 items-center justify-center rounded-[3rem] shadow-[0px_8.171px_44.5px_rgba(59,48,126,0.10)]',
        )}
      >
        <div
          className={cn(
            'shadow-[10px_-10px_20px_#C8B6FF, -10px_10px_20px_#B6C2FF] absolute inset-0 rounded-[3rem]',
          )}
        />
        <TheMomentIcon />
      </div>
    </div>
  );
};

export default TeamSection2;
