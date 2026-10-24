'use client';

import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { useDebounce } from '@shared/lib';

import { getSchools } from '../api/getSchools';
import type { SchoolType } from './types';

const searchSchoolQueryKeys = {
  search: (keyword: string) => ['schoolSearch', keyword] as const,
} as const;

export const useSearchSchool = (onSchoolSelect?: (school: SchoolType) => void) => {
  const [keyword, setKeyword] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [isSearchDismissed, setIsSearchDismissed] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const debouncedKeyword = useDebounce(keyword, 400);
  const { data: schools = [] } = useQuery({
    queryKey: searchSchoolQueryKeys.search(keyword),
    queryFn: ({ queryKey, signal }) => getSchools(queryKey[1].trim(), signal),
    enabled: Boolean(keyword.trim()) && keyword === debouncedKeyword && !isSelected,
  });

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setIsSelected(false);
    setIsSearchDismissed(false);
    setFocusedIndex(-1);
  };

  const handleSchoolSelect = (school: SchoolType) => {
    setKeyword(school.SCHUL_NM);
    setIsSelected(true);
    setFocusedIndex(-1);
    onSchoolSelect?.(school);
  };

  const displaySchools =
    !isSelected && !isSearchDismissed && keyword === debouncedKeyword && keyword.trim()
      ? schools
      : [];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      if (displaySchools.length > 0) {
        setIsSearchDismissed(true);
        setFocusedIndex(-1);
      }
      return;
    }

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
