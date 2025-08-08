'use client';
import Profile from '../mydogPage/Profile';
import { getDogInfo } from '@/utils/dogs';
import { useEffect, useState } from 'react';
type Dog = {
  id: string;
  name: string;
  image?: string;
  additionalInfo?: string;
};

const MyFamilyList = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  useEffect(() => {
    async function fetchDogs() {
      try {
        const dogsInfo = await getDogInfo();
        setDogs(Array.isArray(dogsInfo) ? dogsInfo : [dogsInfo]);
      } catch (error) {
        console.error('Failed to fetch dog information:', error);
      }
    }
    fetchDogs();
  }, []);

  return (
    <div>
      {dogs.map((dog: Dog) => (
        <Profile
          key={dog.id}
          id={dog.id}
          name={dog.name}
          image={dog.image}
          additionalInfo={dog.additionalInfo}
        />
      ))}
    </div>
  );
};

export default MyFamilyList;
