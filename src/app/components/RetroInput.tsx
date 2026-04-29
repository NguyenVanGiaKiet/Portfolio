interface RetroInputProps {
  type?: 'text' | 'email' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name?: string;
  rows?: number;
  required?: boolean;
}

export function RetroInput({ type = 'text', placeholder, value, onChange, name, rows = 4, required }: RetroInputProps) {
  const className = `
    w-full px-3 py-2
    bg-white
    border-2
    focus:outline-none
    font-mono
  `;

  const style = {
    borderTopColor: '#808080',
    borderLeftColor: '#808080',
    borderRightColor: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
  };

  if (type === 'textarea') {
    return (
      <textarea
        className={className}
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        rows={rows}
        required={required}
      />
    );
  }

  return (
    <input
      type={type}
      className={className}
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
    />
  );
}
