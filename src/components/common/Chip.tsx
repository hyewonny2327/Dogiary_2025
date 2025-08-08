type ChipProps = {
  children: React.ReactNode;
  className?: string;
};
const Chip = ({ children, className = '' }: ChipProps) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full border border-[var(--color-text-muted)] bg-[var(--color-button-sand)] px-4 py-2 text-lg font-medium text-[var(--color-text-muted)] ${className}`}
    >
      {children}
    </div>
  );
};

export default Chip;
