type selectProps = {
  options: { label: string; value: string }[];
  selectedItem?: string;
  setSelectedItem?: (value: string) => void;
};
const Select = ({ options, selectedItem, setSelectedItem }: selectProps) => {
  return (
    <select
      value={selectedItem}
      onChange={(e) => setSelectedItem?.(e.target.value)}
      className="w-full rounded-lg border-2 border-[var(--color-border)] px-4 py-2 focus:border-2 focus:border-[var(--color-button-dark)] focus:outline-none"
    >
      {options.map((option, index) => (
        <option key={`${option.value}_${index}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
