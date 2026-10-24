'use client';

import { useEffect, useRef, useState } from 'react';

import { useDebounce } from '@shared/lib';

import { getSchools } from '../api/getSchools';
import type { SchoolType } from './types';

export const useSearchSchool = (onSchoolSelect?: (school: SchoolType) => void) => {
  const [keyword, setKeyword] = useState('');
  const [schools, setSchools] = useState<SchoolType[]>([]);
  const [isSelected, setIsSelected] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const abortControllerRef = useRef<AbortController | null>(null);

  const debouncedKeyword = useDebounce(keyword, 400);

  useEffect(() => {
    if (!debouncedKeyword.trim() || keyword !== debouncedKeyword || isSelected) return;

    const controller = new AbortController();
    abortControllerRef.current = controller;

    void (async () => {
      try {
        const results = await getSchools(debouncedKeyword.trim(), controller.signal);
        if (!controller.signal.aborted) setSchools(results);
      } catch {
        if (!controller.signal.aborted) setSchools([]);
      }
    })();

    return () => controller.abort();
  }, [debouncedKeyword, keyword, isSelected]);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    abortControllerRef.current?.abort();
    setKeyword(e.target.value);
    setSchools([]);
    setIsSelected(false);
    setFocusedIndex(-1);
  };

  const handleSchoolSelect = (school: SchoolType) => {
    abortControllerRef.current?.abort();
    setKeyword(school.SCHUL_NM);
    setSchools([]);
    setIsSelected(true);
    setFocusedIndex(-1);
    onSchoolSelect?.(school);
  };

  const displaySchools =
    !isSelected && keyword === debouncedKeyword && keyword.trim() ? schools : [];

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
        abortControllerRef.current?.abort();
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
