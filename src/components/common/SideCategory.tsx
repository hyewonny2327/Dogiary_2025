import Link from 'next/link';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

type SideCategoryProps = {
  menus: { name: string; path: string; icon?: IconType }[];
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
};
const SideCategory = ({ menus, activeMenu, setActiveMenu }: SideCategoryProps) => {
  return (
    <div>
      {menus.map(({ name, path, icon: Icon }) => (
        <Link
          href={path}
          key={name}
          className={`flex cursor-pointer items-center p-2 ${activeMenu === name ? 'rounded-2xl border-[var(--color-border)] bg-[#FAEEDD] text-[var(--color-text-title)] shadow-sm' : 'border-b border-[var(--color-border)] text-[var(--color-text-base)]'}`}
          onClick={() => setActiveMenu(name)}
        >
          {Icon && <Icon className="mr-2" />}
          {name}
        </Link>
      ))}
    </div>
  );
};

export default SideCategory;
