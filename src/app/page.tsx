'use client';
import React, { useState } from 'react';
import MainLayout from '@/components/common/MainLayout';
import SideCategory from '@/components/common/SideCategory';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const menus = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'About', path: '/about', icon: FaInfoCircle },
  { name: 'Contact', path: '/contact', icon: FaEnvelope },
];
export default function Home() {
  const [activeMenu, setActiveMenu] = useState(menus[0].name);

  return (
    <MainLayout
      title="Create Next App"
      subtitle="Welcome to your Next.js app"
      sidebar={
        <SideCategory
          menus={menus}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        ></SideCategory>
      }
    >
      <div>홈 페이지</div>
    </MainLayout>
  );
}
