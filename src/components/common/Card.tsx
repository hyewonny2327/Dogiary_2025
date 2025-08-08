type CardProps = {
  children: React.ReactNode;
  size?: 'default' | 'compact';
  subtitle?: string;
  isColored?: boolean;
};
const Card = ({ children, size, subtitle, isColored }: CardProps) => {
  const getPaddingSize = () => {
    switch (size) {
      case 'compact':
        return 'px-6 py-4';
      case 'default':
        return 'px-20 py-8';
      default:
        return 'px-20 py-8';
    }
  };
  const getBackgroundColor = () => (isColored ? 'bg-[var(--color-card)]' : 'bg-white');
  const getSubtitleColor = () =>
    isColored ? 'text-[var(--color-text-base)]' : 'text-[var(--color-text-subtitle)]';
  return (
    <div
      className={`flex flex-col ${getPaddingSize()} ${getBackgroundColor()} rounded-2xl border border-[var(--color-border)] shadow-sm`}
    >
      {subtitle && <div className={`text-2xl ${getSubtitleColor()} font-semibold`}>{subtitle}</div>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
