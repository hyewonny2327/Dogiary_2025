'use client';
import Link from 'next/link';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 h-[var(--header-height)] w-full items-center bg-[var(--color-header)]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">
        {/* 로고 */}
        <Link href="/" className="text-heading text-2xl font-bold">
          Dogiary
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden text-xl font-semibold md:flex md:items-center md:space-x-8">
          <div>메뉴</div>
          <div>메뉴</div>
          <div>메뉴</div>
        </nav>
        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-foreground/70 hover:text-foreground md:hidden"
          aria-label="메뉴 열기"
        >
          {isMenuOpen ? <RiCloseLine className="h-7 w-7" /> : <RiMenu3Line className="h-7 w-7" />}
        </button>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[var(--header-height)] z-50 h-fit w-full bg-[var(--color-header)] md:hidden">
            <nav className="border-border border-t px-4 py-4 text-xl font-semibold">
              <div>메뉴</div>
              <div>메뉴</div>
              <div>메뉴</div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
