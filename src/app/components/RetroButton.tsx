interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function RetroButton({ children, onClick, variant = 'primary', type = 'button', disabled }: RetroButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3
        border-2
        ${variant === 'primary' ? 'bg-[#C0C0C0]' : 'bg-[#000080] text-white'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        transition-none
        active:translate-x-[2px] active:translate-y-[2px]
      `}
      style={{
        borderTopColor: '#FFFFFF',
        borderLeftColor: '#FFFFFF',
        borderRightColor: '#000000',
        borderBottomColor: '#000000',
        boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #DFDFDF',
      }}
    >
      <span className="font-bold uppercase tracking-wide">{children}</span>
    </button>
  );
}
