'use client';
import React, { useEffect } from 'react';
import MainLayout from '@/components/common/MainLayout';
import { useState } from 'react';
import { createMyDogMenus } from '@/utils/myDogMenus';
import MyDogSidebar from './MyDogSidebar';
import { getDogInfo } from '@/utils/dogs';
import Loading from '../common/Loading';

type myDogLayoutProps = {
  params: { id: string };
  children: React.ReactNode;
};
const MyDogLayout = ({ params, children }: myDogLayoutProps) => {
  const [activeMenu, setActiveMenu] = useState(createMyDogMenus(params.id)[0].name);
  const [dogName, setDogName] = useState<null | string>(null);
  useEffect(() => {
    async function fetchDogName() {
      try {
        const dogInfo = await getDogInfo(params.id);
        if (Array.isArray(dogInfo) || !dogInfo) {
          throw new Error('잘못된 강아지 정보 반환');
        }
        const { name } = dogInfo;
        if (!name) {
          throw new Error('강아지 이름 가져오기 실패');
        }
        setDogName(name);
        setActiveMenu(createMyDogMenus(params.id)[0].name);
      } catch (error) {
        console.error('강아지 이름을 가져오기 실패:', error);
      }
    }
    fetchDogName();
  }, []);

  if (dogName === null) {
    return <Loading />;
  }
  return (
    <MainLayout
      title={`${dogName}의 페이지`}
      subtitle={activeMenu}
      sidebar={
        <MyDogSidebar dogId={params.id} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      }
    >
      {children}
    </MainLayout>
  );
};

export default MyDogLayout;
