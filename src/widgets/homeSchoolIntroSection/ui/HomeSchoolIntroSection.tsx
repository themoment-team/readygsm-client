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
} from '@/shared/assets/techIcon';

const HomeSchoolIntroSection = () => {
  return (
    <div className="flex h-screen w-7xl flex-col justify-center">
      <section className="flex flex-col items-start gap-9">
        <p className="text-neutral-dark text-[36px] leading-normal font-bold">
          책 속 이론이 아닌
          <br />
          현장의 실전을 배우는 진짜 소프트웨어 교육
        </p>
        <div className="flex items-center gap-0.5">
          <span className="bg-brand-primary px-1 text-[28px] leading-[1.2] font-semibold text-white">
            광주소프트웨어마이스터고
          </span>
          <span className="text-neutral-dark text-[28px] leading-[1.2] font-semibold">
            가 여러분의 코드를 완성합니다
          </span>
        </div>
        <div className="text-brand-primary flex flex-wrap items-center gap-[21px_36px] shadow-[0px_4px_20px_0px_rgba(0,5,28,0.08)]">
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
      </section>
    </div>
  );
};

export default HomeSchoolIntroSection;
