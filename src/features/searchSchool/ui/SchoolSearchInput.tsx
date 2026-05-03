import { cn } from '@/shared/lib';

import type { SchoolType } from '../model/types';

interface SchoolSearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  schools: SchoolType[];
  onSelect: (school: SchoolType) => void;
}

const SchoolSearchInput = ({ value, onChange, schools, onSelect }: SchoolSearchInputProps) => {
  return (
    <div className="relative">
      <div
        className={cn(
          'bg-pure-white flex w-full items-center rounded-lg border py-2 pr-4 pl-3',
          value ? 'border-brand-primary' : 'border-border-variant',
        )}
      >
        <input
          className="text-neutral-dark placeholder:text-slate-utility w-full bg-transparent text-sm outline-none"
          placeholder="학교명을 입력하세요"
          value={value}
          onChange={onChange}
        />
      </div>
      {schools.length > 0 && (
        <div className="border-border-variant bg-pure-white absolute top-full left-0 z-60 mt-1 w-full rounded-lg border p-1 shadow-md">
          <div className="max-h-40 overflow-y-auto">
            {schools.map((school) => (
              <button
                key={school.SD_SCHUL_CODE}
                type="button"
                className="hover:bg-base-fill text-neutral-dark flex w-full items-center rounded-lg py-1.5 pr-2 pl-3 text-left text-sm"
                onClick={() => onSelect(school)}
              >
                {school.SCHUL_NM}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolSearchInput;
