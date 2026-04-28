import { useState } from 'react';

export const useSearchSchool = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleConfirm = () => {
    // stub: API 명세 보고 수정 필요
  };

  return { searchQuery, setSearchQuery, handleConfirm };
};
