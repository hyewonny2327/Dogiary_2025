type ChipProps = {
  children: React.ReactNode;
  className?: string;
};
const Chip = ({ children, className }: ChipProps) => {
  const chipStyle = className ? className : '';
  return (
    <div
      className={`flex items-center justify-center rounded-full border border-[var(--color-text-muted)] bg-[var(--color-button-sand)] px-4 py-2 text-lg font-medium text-[var(--color-text-muted)] ${chipStyle}`}
    >
      {children}
    </div>
  );
};

export default Chip;
