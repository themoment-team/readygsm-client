'use client';

import { useEffect, useRef, useState } from 'react';

import { useDebounce } from '@/shared/lib';

import type { SchoolType } from './types';

export const useSearchSchool = (onSchoolSelect?: (school: SchoolType) => void) => {
  const [keyword, setKeyword] = useState('');
  const [schools, setSchools] = useState<SchoolType[]>([]);
  const [isSelected, setIsSelected] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
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
    setFocusedIndex(-1);
  };

  const handleSchoolSelect = (school: SchoolType) => {
    skipFetchRef.current = true;
    setKeyword(school.SCHUL_NM);
    setSchools([]);
    setIsSelected(true);
    setFocusedIndex(-1);
    onSchoolSelect?.(school);
  };

  const displaySchools = debouncedKeyword.trim() ? schools : [];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (displaySchools.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((prev) => Math.min(prev + 1, displaySchools.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        if (focusedIndex >= 0) {
          e.preventDefault();
          handleSchoolSelect(displaySchools[focusedIndex]);
        }
        break;
      case 'Escape':
        setSchools([]);
        setFocusedIndex(-1);
        break;
    }
  };

  return {
    keyword,
    displaySchools,
    focusedIndex,
    handleKeywordChange,
    handleKeyDown,
    handleSchoolSelect,
    isSelected,
  };
};
