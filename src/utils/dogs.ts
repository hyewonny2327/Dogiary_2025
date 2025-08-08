export const getDogInfo = async (dogId?: string) => {
  const userDogs = [
    {
      id: '1',
      name: '뭉이',
      breed: '시바견',
      image: '/images/dog-profile.png',
      additionalInfo: '활발하고 장난한 시바견',
    },
    {
      id: '2',
      name: '바둑이',
      breed: '푸들',
      image: '/images/dog-profile.png',
      additionalInfo: '온순하고 사랑스러운 푸들',
    },
  ];

  if (!dogId) {
    return userDogs;
  }

  const dogInfo = userDogs.find((dog) => dog.id === dogId);
  if (!dogInfo) {
    throw new Error('Dog not found');
  }
  return dogInfo;
};
