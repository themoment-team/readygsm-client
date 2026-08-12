interface IconProps {
  className?: string;
}

const DesignIcon = ({ className }: IconProps) => (
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
      d="M25 8L29 19L30 14H35L25 8Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 19H1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 1H1V14H22V1Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="4 4"
    />
    <path d="M8 4.5C8 3.672 8.672 3 9.5 3H11V6H9.5C8.672 6 8 5.328 8 4.5Z" fill="currentColor" />
    <path d="M8 7.5C8 6.672 8.672 6 9.5 6H11V9H9.5C8.672 9 8 8.328 8 7.5Z" fill="currentColor" />
    <path
      d="M8 10.5C8 9.672 8.672 9 9.5 9H11V10.5C11 11.328 10.328 12 9.5 12C8.672 12 8 11.328 8 10.5Z"
      fill="currentColor"
    />
    <path
      d="M11 3H12.5C13.328 3 14 3.672 14 4.5C14 5.328 13.328 6 12.5 6H11V3Z"
      fill="currentColor"
    />
    <path
      d="M11 7.5C11 6.672 11.672 6 12.5 6C13.328 6 14 6.672 14 7.5C14 8.328 13.328 9 12.5 9C11.672 9 11 8.328 11 7.5Z"
      fill="currentColor"
    />
  </svg>
);

export default DesignIcon;
