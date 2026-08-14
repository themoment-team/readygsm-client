interface IconProps {
  className?: string;
}

const GitIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 35 20"
    width="35"
    height="20"
    fill="none"
    overflow="visible"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 7.5V4H7.5M4 7.5V12.5M4 7.5H1M4 12.5V16H7.5M4 12.5H1M7.5 16H12.5M7.5 16V19M12.5 16H16V12.5M12.5 16V19M7.5 4H12.5M7.5 4V1M12.5 4H16V7.5M12.5 4V1M16 7.5V12.5M16 7.5H28V4H32.5M16 12.5H22M28 12.5H22M6.5 12L6.875 11L7.25 10L8 8L8.75 10L9.125 11M9.5 12L9.125 11M13 12V8M9.125 11H7M22 12.5V19H32.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 12.5C32 13.8807 30.8807 15 29.5 15C28.1193 15 27 13.8807 27 12.5C27 11.1193 28.1193 10 29.5 10C30.8807 10 32 11.1193 32 12.5Z"
      fill="currentColor"
    />
    <path
      d="M35 4C35 5.38071 33.8807 6.5 32.5 6.5C31.1193 6.5 30 5.38071 30 4C30 2.61929 31.1193 1.5 32.5 1.5C33.8807 1.5 35 2.61929 35 4Z"
      fill="currentColor"
    />
  </svg>
);

export default GitIcon;
