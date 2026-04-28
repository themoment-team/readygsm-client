import SearchIcon from '@/shared/assets/SearchIcon';
import { Button, Modal } from '@/shared/ui';

import { useSearchSchool } from '../model/useSearchSchool';

interface SearchSchoolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchSchoolModal = ({ isOpen, onClose }: SearchSchoolModalProps) => {
  const { searchQuery, setSearchQuery, handleConfirm } = useSearchSchool();

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-120 p-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-neutral-dark text-base leading-[1.4] font-medium">학교 찾기</h2>
        <div className="border-border-variant bg-pure-white flex w-full items-center gap-2 rounded-lg border py-2 pr-4 pl-3">
          <input
            className="text-neutral-dark placeholder:text-slate-utility w-full bg-transparent text-sm outline-none"
            placeholder="입력"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outlinePrimary" size="sm" onClick={onClose}>
            취소
          </Button>
          <Button variant={searchQuery ? 'default' : 'neutral'} size="sm" onClick={handleConfirm}>
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SearchSchoolModal;
