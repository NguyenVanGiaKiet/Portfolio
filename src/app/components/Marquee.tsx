interface MarqueeProps {
  children: React.ReactNode;
}

export function Marquee({ children }: MarqueeProps) {
  return (
    <div className="overflow-hidden bg-[#FFFF00] text-[#FF0000] py-2 border-y-4 border-[#000000]">
      <div
        className="whitespace-nowrap animate-marquee inline-block"
        style={{
          animation: 'marquee 20s linear infinite',
        }}
      >
        <span className="font-bold text-lg mx-8">{children}</span>
        <span className="font-bold text-lg mx-8">{children}</span>
        <span className="font-bold text-lg mx-8">{children}</span>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-66.666%); }
          }
        `}</style>
      </div>
    </div>
  );
}
