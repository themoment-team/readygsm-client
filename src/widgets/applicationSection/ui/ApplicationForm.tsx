'use client';

import { useState } from 'react';

import { cn } from '@/shared/lib';
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui';

type GuardianRelationType = '부' | '모' | '기타';

const GUARDIAN_RELATIONS: { value: GuardianRelationType; label: string }[] = [
  { value: '부', label: '부' },
  { value: '모', label: '모' },
  { value: '기타', label: '기타(직접 입력)' },
];

const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [classNum, setClassNum] = useState('');
  const [number, setNumber] = useState('');
  const [school, setSchool] = useState('');
  const [phone, setPhone] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');
  const [guardianRelation, setGuardianRelation] = useState<GuardianRelationType>('부');
  const [agreed, setAgreed] = useState(false);

  const isFormComplete = Boolean(
    name && grade && classNum && number && school && phone && guardianPhone && agreed,
  );

  const handleSchoolSearch = () => {
    // TODO: 학교 검색 모달 연동 후 setSchool(selectedSchool) 호출
    setSchool('');
  };

  return (
    <div className={cn('flex w-full flex-col gap-4')}>
      <div className={cn('flex flex-col gap-1')}>
        <label className={cn('text-neutral-dark text-sm leading-[1.4] font-medium')}>이름</label>
        <Input
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={cn('w-full')}
        />
      </div>

      <div className={cn('flex flex-col gap-1')}>
        <label className={cn('text-neutral-dark text-sm leading-[1.4] font-medium')}>
          학년 반 번호 입력
        </label>
        <div className={cn('flex w-full gap-2')}>
          <Select value={grade} onValueChange={(value) => setGrade(value ?? '')}>
            <SelectTrigger className={cn('w-auto flex-1')}>
              <SelectValue placeholder="학년을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1학년</SelectItem>
              <SelectItem value="2">2학년</SelectItem>
              <SelectItem value="3">3학년</SelectItem>
            </SelectContent>
          </Select>
          <Select value={classNum} onValueChange={(value) => setClassNum(value ?? '')}>
            <SelectTrigger className={cn('w-auto flex-1')}>
              <SelectValue placeholder="반을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 4 }, (_, i) => (
                <SelectItem key={i + 1} value={String(i + 1)}>
                  {i + 1}반
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            placeholder="번호를 입력해주세요"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className={cn('flex-1')}
          />
        </div>
      </div>

      <div className={cn('flex flex-col gap-1')}>
        <label className={cn('text-neutral-dark text-sm leading-5 font-medium')}>학교명</label>
        <div className={cn('flex w-full items-center gap-2')}>
          <Input
            placeholder="학교 찾기를 통해 내 학교명을 입력해주세요"
            value={school}
            readOnly
            className={cn('flex-1')}
          />
          <Button variant="default" size="sm" onClick={handleSchoolSearch}>
            학교 찾기
          </Button>
        </div>
      </div>

      <div className={cn('flex flex-col gap-1')}>
        <label className={cn('text-neutral-dark text-sm leading-[1.4] font-medium')}>
          전화번호
        </label>
        <Input
          placeholder="전화번호를 입력해주세요"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={cn('w-full')}
        />
      </div>

      <div className={cn('flex flex-col gap-1')}>
        <label className={cn('text-neutral-dark text-sm leading-[1.4] font-medium')}>
          보호자 전화번호
        </label>
        <Input
          placeholder="보호자 전화번호를 입력해주세요"
          value={guardianPhone}
          onChange={(e) => setGuardianPhone(e.target.value)}
          className={cn('w-full')}
        />
      </div>

      <div className={cn('flex flex-col gap-3')}>
        <p className={cn('text-neutral-dark text-sm leading-5 font-medium')}>보호자 관계</p>
        <div className={cn('flex items-center gap-10')}>
          {GUARDIAN_RELATIONS.map(({ value, label }) => (
            <label key={value} className={cn('flex cursor-pointer items-center gap-2')}>
              <input
                type="radio"
                name="guardianRelation"
                value={value}
                checked={guardianRelation === value}
                onChange={() => setGuardianRelation(value)}
                className={cn('sr-only')}
              />
              <div
                className={cn(
                  'flex size-4 items-center justify-center rounded-full border-2',
                  guardianRelation === value
                    ? 'border-brand-primary'
                    : 'border-border-variant bg-pure-white',
                )}
              >
                {guardianRelation === value && (
                  <div className={cn('bg-brand-primary size-1.5 rounded-full')} />
                )}
              </div>
              <span className={cn('text-neutral-dark text-sm leading-5 font-medium')}>{label}</span>
            </label>
          ))}
        </div>
      </div>

      <label className={cn('flex cursor-pointer items-center gap-2 py-3')}>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className={cn('sr-only')}
        />
        <div
          className={cn(
            'flex size-4.5 shrink-0 items-center justify-center rounded border',
            agreed
              ? 'border-brand-primary bg-brand-primary'
              : 'border-border-variant bg-pure-white',
          )}
        >
          {agreed && (
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <span className={cn('text-cool-neutral text-sm leading-5')}>
          [필수] 개인정보 수집 및 이용에 동의합니다.
        </span>
      </label>

      <Button variant={isFormComplete ? 'default' : 'neutral'} size="full">
        학과 체험 신청
      </Button>
    </div>
  );
};

export default ApplicationForm;
