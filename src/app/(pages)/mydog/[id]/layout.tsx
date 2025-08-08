'use client';
import { useParams } from 'next/navigation';
import MyDogLayout from '@/components/mydogPage/MyDogLayout';

const layout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  if (!params || !params.id) {
    return <div>잘못된 접근입니다.</div>;
  }

  return <MyDogLayout params={{ id: params.id as string }}>{children}</MyDogLayout>;
};

export default layout;
