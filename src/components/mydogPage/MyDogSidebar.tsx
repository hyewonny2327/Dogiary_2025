import SideCategory from '@/components/common/SideCategory';
import MyFamilyList from '../common/MyFamilyList';
import { createMyDogMenus } from '@/utils/myDogMenus';

type MyDogSidebarProps = {
  dogId: string;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
};
const MyDogSidebar = ({ dogId, activeMenu, setActiveMenu }: MyDogSidebarProps) => {
  return (
    <div className="flex flex-col gap-4">
      <SideCategory
        menus={createMyDogMenus(dogId)}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <MyFamilyList />
    </div>
  );
};

export default MyDogSidebar;
