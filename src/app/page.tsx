'use client';
import React, { useState } from 'react';
import MainLayout from '@/components/common/MainLayout';
import SideCategory from '@/components/common/SideCategory';
import Image from 'next/image';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

export default function Home() {
  const menus = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'About', path: '/about', icon: FaInfoCircle },
    { name: 'Contact', path: '/contact', icon: FaEnvelope },
  ];
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
      <Card size="default" subtitle="Card Subtitle" isColored={false}>
        <div className="flex flex-col items-center">
          <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} className="mb-4" />
          <div>안녕하세요 카드입니다.</div>
        </div>
      </Card>
    </MainLayout>
  );
}
