type ChipProps = {
  children: React.ReactNode;
  background?: string;
  textColor?: string;
  borderColor?: string;
};
const Chip = ({
  children,
  background = 'var(--color-button-sand)',
  textColor = 'var(--color-text-muted)',
  borderColor = 'var(--color-border)',
}: ChipProps) => {
  return (
    <div
      className={`bg-[${background}] text-[${textColor}] flex items-center justify-center rounded-full border border-[var(--color-text-muted)] px-4 py-2 text-lg font-medium border-[${borderColor}]`}
    >
      {children}
    </div>
  );
};

export default Chip;
