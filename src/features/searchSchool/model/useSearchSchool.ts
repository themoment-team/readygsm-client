'use client';

import { useEffect, useRef, useState } from 'react';

import { useDebounce } from '@/shared/lib';

import type { SchoolType } from './types';

export const useSearchSchool = (onSchoolSelect?: (school: SchoolType) => void) => {
  const [keyword, setKeyword] = useState('');
  const [schools, setSchools] = useState<SchoolType[]>([]);
  const [isSelected, setIsSelected] = useState(false);
  const skipFetchRef = useRef(false);

  const debouncedKeyword = useDebounce(keyword, 400);

  useEffect(() => {
    if (skipFetchRef.current) {
      skipFetchRef.current = false;
      return;
    }

    if (!debouncedKeyword.trim()) return;

    void (async () => {
      try {
        const res = await fetch(
          `https://open.neis.go.kr/hub/schoolInfo?KEY=${process.env.NEXT_PUBLIC_NEIS_API_KEY}&Type=json&SCHUL_NM=${encodeURIComponent(debouncedKeyword)}&SCHUL_KND_SC_NM=${encodeURIComponent('중학교')}`,
        );
        if (!res.ok) return;
        const data = await res.json();
        setSchools(data?.schoolInfo?.[1]?.row ?? []);
      } catch {
        setSchools([]);
      }
    })();
  }, [debouncedKeyword]);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setIsSelected(false);
  };

  const handleSchoolSelect = (school: SchoolType) => {
    skipFetchRef.current = true;
    setKeyword(school.SCHUL_NM);
    setSchools([]);
    setIsSelected(true);
    onSchoolSelect?.(school);
  };

  // 키워드가 없으면 이전 결과를 표시하지 않음
  const displaySchools = debouncedKeyword.trim() ? schools : [];

  return { keyword, displaySchools, handleKeywordChange, handleSchoolSelect, isSelected };
};
