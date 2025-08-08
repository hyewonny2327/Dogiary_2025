import MainLayout from './MainLayout';
import Image from 'next/image';
const Loading = () => {
  return (
    <MainLayout>
      <div className="flex h-screen flex-col items-center justify-center">
        <Image src="/images/dog-loading.png" alt="로딩 중" width={100} height={100} />
        <div className="text-2xl text-gray-500">로딩중...</div>
      </div>
    </MainLayout>
  );
};

export default Loading;
