type inputProps = {
  children?: React.ReactNode;
  placeholder?: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  type: 'text' | 'email' | 'password' | 'number' | 'search';
};
const Input = ({ placeholder, inputValue, setInputValue, type }: inputProps) => {
  return (
    <input
      placeholder={placeholder}
      value={inputValue}
      type={type}
      onChange={(e) => setInputValue(e.target.value)}
      className="w-full rounded-lg border-2 border-[var(--color-border)] px-4 py-2 invalid:border-red-500 focus:border-2 focus:border-[var(--color-button-dark)] focus:outline-none"
    />
  );
};

export default Input;
