interface RainbowTextProps {
  children: React.ReactNode;
  className?: string;
}

export function RainbowText({ children, className = '' }: RainbowTextProps) {
  return (
    <span
      className={`inline-block font-bold ${className}`}
      style={{
        backgroundImage: 'linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'rainbow 3s linear infinite',
      }}
    >
      {children}
      <style>{`
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `}</style>
    </span>
  );
}
