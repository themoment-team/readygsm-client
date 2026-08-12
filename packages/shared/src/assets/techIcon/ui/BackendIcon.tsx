interface IconProps {
  className?: string;
}

const BackendIcon = ({ className }: IconProps) => (
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
      d="M7.353 19V14.5L3.647 16.618L1 12.118L4.706 9.735L1 7.618L3.647 3.118L7.353 5.235V1H12.647V5.235L16.353 3.118L19 7.618L15.294 9.735M15 14.5H35M15 19H35M24.5 9.735H35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BackendIcon;
