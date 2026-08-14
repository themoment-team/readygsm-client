interface IconProps {
  className?: string;
}

const MergeIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 36 20"
    width="36"
    height="20"
    fill="none"
    overflow="visible"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 12L19 19M19 12L12 19M8 8L1 1M1 8L8 1M23 15.5H29V4.5H35M35 4.5L33 2M35 4.5L33 7M19 8V1H12V8H19ZM8 19V12H1V19H8Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MergeIcon;
