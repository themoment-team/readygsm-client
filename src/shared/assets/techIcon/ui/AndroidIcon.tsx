interface IconProps {
  className?: string;
}

const AndroidIcon = ({ className }: IconProps) => (
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
      d="M1 18C1 8.611 8.611 1 18 1C27.389 1 35 8.611 35 18V19H1V18Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="11.5" cy="10.5" r="1.5" fill="currentColor" />
    <circle cx="24.5" cy="10.5" r="1.5" fill="currentColor" />
    <path
      d="M30.5 5.5L35 1M5.5 5.5L1 1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AndroidIcon;
