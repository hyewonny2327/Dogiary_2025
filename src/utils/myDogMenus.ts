import { FaDog, FaWeightHanging, FaStethoscope, FaBone, FaPenFancy } from 'react-icons/fa';

export const createMyDogMenus = (dogId: string) => [
  { name: '프로필', path: `/mydog/${dogId}/profile`, icon: FaDog },
  { name: '몸무게 기록', path: `/mydog/${dogId}/weight`, icon: FaWeightHanging },
  { name: '진료 기록', path: `/mydog/${dogId}/treatment`, icon: FaStethoscope },
  { name: '사료/영양제/간식', path: `/mydog/${dogId}/food`, icon: FaBone },
  { name: '메모', path: `/mydog/${dogId}/memo`, icon: FaPenFancy },
];
