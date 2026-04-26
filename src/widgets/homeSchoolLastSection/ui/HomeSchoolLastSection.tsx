import Link from 'next/link';

const HomeSchoolLastSection = () => {
  return (
    <div className="text-neutral-dark flex w-7xl flex-col justify-center gap-30 py-90 text-[2.25rem] leading-[2.7rem] font-bold">
      <div>
        <div>아직 잘 모르겠다면...</div>
        <div>
          <span className="bg-brand-primary px-1 leading-[1.2] text-white">
            광주소프트웨어마이스터고
          </span>
          에서 학과 체험은 어떨까요?
        </div>
      </div>
      <div className="flex flex-row gap-9">
        <div>
          내가 정말&nbsp;
          <span className="bg-brand-primary px-1 leading-[1.2] text-white">개발자</span>
          &nbsp;가 적성일까?
        </div>
        <Link href="/programs" className="text-brand-primary cursor-pointer underline">
          학과 체험을 통해 확인해보세요!
        </Link>
      </div>
    </div>
  );
};

export default HomeSchoolLastSection;
