import { Button, Modal } from '@/shared/ui';

interface DuplicatePhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DuplicatePhoneModal = ({ isOpen, onClose }: DuplicatePhoneModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} className="w-120 px-6 py-5">
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-neutral-dark text-2xl font-semibold">전화번호 중복</h2>
        <div className="text-secondary-slate text-sm leading-relaxed">
          <p>전화번호 중복으로 인하여 학과 체험 신청이 불가합니다.</p>
          <p>학과 체험을 신청한 적이 없다면 교무실로 문의해주세요.</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant="default" size="sm" onClick={onClose}>
          확인
        </Button>
      </div>
    </div>
  </Modal>
);

export default DuplicatePhoneModal;
