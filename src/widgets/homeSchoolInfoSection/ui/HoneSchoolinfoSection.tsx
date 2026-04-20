import { InfoCard } from '@/entities/schoolInfo';

import { schoolInfoSections } from '../model/schoolInfoData';

const HomeSchoolInfoSection = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="text-brand-primary text-4xl leading-[120%] font-bold">Curriculum</div>
      <div className="flex w-full flex-col gap-20">
        {schoolInfoSections.map((section, index) => (
          <section key={index} className="flex flex-col gap-6">
            <h2 className="text-neutral-dark text-[2.25rem] leading-normal font-bold">
              {section.title}
            </h2>
            <div className="flex gap-[1.44rem]">
              {section.cards.map((card, index) => (
                <InfoCard key={index} category={card.category} descriptions={card.descriptions} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HomeSchoolInfoSection;
