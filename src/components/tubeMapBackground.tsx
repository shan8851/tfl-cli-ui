export const TubeMapBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="tube-grid"
        width="60"
        height="60"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line x1="0" y1="0" x2="0" y2="60" stroke="#e8e8ec" strokeWidth="0.5" opacity="0.04" />
        <line x1="0" y1="0" x2="60" y2="0" stroke="#e8e8ec" strokeWidth="0.5" opacity="0.04" />
        <circle cx="0" cy="0" r="1.5" fill="#e8e8ec" opacity="0.03" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#tube-grid)" />
  </svg>
);
