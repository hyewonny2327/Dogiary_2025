import { IconType } from 'react-icons';
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'dark' | 'light' | `sand`;
  size?: 'fit' | 'full';
  onClick: () => void;
  isDisabled?: boolean;
  icon?: IconType;
  isRound?: boolean;
};
const Button = ({
  children,
  variant,
  size,
  onClick,
  isDisabled,
  isRound,
  icon: Icon,
}: ButtonProps) => {
  const getButtonStyle = () => {
    if (isDisabled) {
      return 'bg-gray-200 text-gray-50 cursor-not-allowed';
    }
    switch (variant) {
      case 'dark':
        return 'bg-[var(--color-button-dark)] text-[var(--color-button-light)] hover:bg-[var(--color-button-dark-hover)] font-semibold text-lg shadow-sm';
      case 'light':
        return 'bg-[var(--color-button-light)] text-[var(--color-text-base)] hover:bg-[var(--color-button-light-hover)] font-semibold text-lg shadow-sm';
      case 'sand':
        return 'bg-[var(--color-button-sand)] text-[var(--color-text-muted)] hover:bg-[var(--color-button-sand-hover)] font-semibold text-lg shadow-sm';
      default:
        return 'bg-gray-100 text-gray-700 font-semibold text-lg shadow-sm';
    }
  };
  return (
    <button
      disabled={isDisabled}
      className={`flex items-center justify-center ${getButtonStyle()} ${size === 'full' ? 'w-full' : 'w-fit'} cursor-pointer px-4 py-2 ${isRound ? 'rounded-full' : 'rounded-lg'} `}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="mr-2" />}
        <div>{children}</div>
      </div>
    </button>
  );
};

export default Button;
