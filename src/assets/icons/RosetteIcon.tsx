export function RosetteIcon(props: 
  { className: string | undefined; }
) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      aria-hidden="true"
      className = {props.className}
    >
      {[...Array(16)].map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="50"
          rx="18"
          ry="44"
          transform={`rotate(${i * 11.25} 50 50)`}
          stroke="white"
          strokeWidth="0.45"
          opacity="0.65"
        />
      ))}
      <circle cx="50" cy="50" r="12" stroke="white" strokeWidth="0.75" opacity="0.6" />
    </svg>
  );
}