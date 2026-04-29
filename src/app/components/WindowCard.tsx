interface WindowCardProps {
  title: string;
  children: React.ReactNode;
  badge?: string;
}

export function WindowCard({ title, children, badge }: WindowCardProps) {
  return (
    <div
      className="border-2 bg-[#C0C0C0] relative"
      style={{
        borderTopColor: '#FFFFFF',
        borderLeftColor: '#FFFFFF',
        borderRightColor: '#000000',
        borderBottomColor: '#000000',
      }}
    >
      <div
        className="h-8 flex items-center px-2 text-white relative"
        style={{
          background: 'linear-gradient(to right, #000080, #1084D0)',
        }}
      >
        <span className="font-bold">{title}</span>
        {badge && (
          <span
            className="ml-2 px-2 py-0.5 bg-[#FF0000] text-[#FFFF00] font-bold text-xs animate-pulse"
            style={{
              border: '2px solid #FFFF00',
            }}
          >
            {badge}
          </span>
        )}
      </div>
      <div
        className="p-4 bg-white border-2"
        style={{
          borderTopColor: '#808080',
          borderLeftColor: '#808080',
          borderRightColor: '#DFDFDF',
          borderBottomColor: '#DFDFDF',
        }}
      >
        {children}
      </div>
    </div>
  );
}
