type RoundelProps = {
  color?: string;
  size?: number;
};

export const Roundel = ({ color = '#E32017', size = 120 }: RoundelProps) => {
  const barHeight = size * 0.22;
  const ringStroke = size * 0.08;
  const ringRadius = size * 0.38;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TfL Roundel"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={ringRadius}
        stroke={color}
        strokeWidth={ringStroke}
        fill="none"
      />
      <rect
        x={0}
        y={(size - barHeight) / 2}
        width={size}
        height={barHeight}
        fill={color}
        rx={barHeight * 0.15}
      />
    </svg>
  );
};
