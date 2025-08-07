import { IconType } from 'react-icons';
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  size?: 'fit' | 'full';
  onClick: () => void;
  isDisabled?: boolean;
  icon?: IconType;
};
const Button = ({ children, variant, size, onClick, isDisabled, icon: Icon }: ButtonProps) => {
  const getButtonStyle = () => {
    if (isDisabled) {
      return 'bg-gray-200 text-gray-50 cursor-not-allowed';
    }
    switch (variant) {
      case 'dark':
        return 'bg-[var(--color-button-dark)] text-[var(--color-button-light)] hover:bg-[var(--color-button-dark-hover)] font-semibold text-lg shadow-sm';
      case 'light':
        return 'bg-[var(--color-button-light)] text-[var(--color-text-base)] hover:bg-[var(--color-button-light-hover)] font-semibold text-lg shadow-sm';
      default:
        return 'bg-gray-100 text-gray-700 font-semibold text-lg shadow-sm';
    }
  };
  return (
    <button
      disabled={isDisabled}
      className={`flex items-center justify-center ${getButtonStyle()} ${size === 'full' ? 'w-full' : 'w-fit'} cursor-pointer rounded-lg px-4 py-2`}
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
