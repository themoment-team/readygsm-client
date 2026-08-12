interface IconProps {
  className?: string;
}

const CloudIcon = ({ className }: IconProps) => (
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
      d="M24 10H35V5.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 14H30V19H35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.25 1C19.959 1 22.203 3.065 22.603 5.762C25.145 6.541 27 8.983 27 11.875C27 15.396 24.252 18.25 20.861 18.25C19.156 18.25 17.613 17.527 16.501 16.361C15.819 17.918 14.31 19 12.556 19C10.493 19 8.767 17.503 8.33 15.498C7.552 16.273 6.496 16.75 5.333 16.75C2.94 16.75 1 14.735 1 12.25C1 9.765 2.94 7.75 5.333 7.75C5.333 5.265 7.274 3.25 9.667 3.25C10.682 3.25 11.614 3.613 12.353 4.22C13.221 2.316 15.087 1 17.25 1Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloudIcon;
