import { UseFormSetValue } from 'react-hook-form';

import { Button, Modal } from '@/shared/ui';

import type { SchoolFormFieldsType, SchoolType } from '../model/types';
import { useSearchSchool } from '../model/useSearchSchool';
import SchoolSearchInput from './SchoolSearchInput';

interface SearchSchoolModalProps {
  isOpen: boolean;
  onClose: () => void;
  setValue?: UseFormSetValue<SchoolFormFieldsType>;
}

const SearchSchoolModal = ({ isOpen, onClose, setValue }: SearchSchoolModalProps) => {
  const handleSelectFormValues = (school: SchoolType) => {
    setValue?.('schoolName', school.SCHUL_NM, { shouldValidate: true, shouldDirty: true });
    setValue?.('schoolAddress', school.ORG_RDNMA, { shouldValidate: true, shouldDirty: true });
  };

  const { keyword, displaySchools, handleKeywordChange, handleSchoolSelect, isSelected } =
    useSearchSchool(handleSelectFormValues);

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-120 p-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-neutral-dark text-base leading-[1.4] font-medium">학교 찾기</h2>
        <SchoolSearchInput
          value={keyword}
          onChange={handleKeywordChange}
          schools={displaySchools}
          onSelect={handleSchoolSelect}
        />
        <div className="flex justify-end gap-2">
          <Button variant="outlinePrimary" size="sm" onClick={onClose}>
            취소
          </Button>
          <Button
            variant={isSelected ? 'default' : 'neutral'}
            size="sm"
            onClick={isSelected ? onClose : undefined}
          >
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SearchSchoolModal;
