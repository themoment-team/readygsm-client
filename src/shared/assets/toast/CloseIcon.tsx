import { cn } from '@/shared/lib';

interface CloseIconProps {
  closeToast?: (dismiss?: boolean) => void;
}

const CloseIcon = ({ closeToast }: CloseIconProps) => (
  <svg
    role="button"
    tabIndex={0}
    aria-label="닫기"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('Toastify__Close-Button', 'cursor-pointer')}
    onClick={(event) => {
      event.stopPropagation();
      closeToast?.(true);
    }}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.stopPropagation();
        closeToast?.(true);
      }
    }}
  >
    <path
      d="M6 18L18 6M6 6L18 18"
      stroke="#64748B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
