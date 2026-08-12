interface IconProps {
  className?: string;
}

const CodeIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 34 18"
    width="34"
    height="18"
    fill="none"
    overflow="visible"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 17L19 1M11 1L2 9L11 17M23 1L32 9L23 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CodeIcon;
