interface IconProps {
  className?: string;
}

const LinkIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 34 20"
    width="34"
    height="20"
    fill="none"
    overflow="visible"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <ellipse cx="8" cy="9.785" rx="7" ry="6.698" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 14.39L10.601 15.959L8.875 18.994"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.25 0.994L4.591 3.891L7.562 5.599"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ellipse cx="26" cy="9.752" rx="7" ry="6.811" stroke="currentColor" strokeWidth="2" />
    <path
      d="M26.22 14.605L23.044 16.174L24.866 18.996"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.378 0.995L30.45 4.233L27.122 5.386"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LinkIcon;
