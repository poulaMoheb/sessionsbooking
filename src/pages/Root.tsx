import { Outlet } from 'react-router-dom';
import MainHeader from '../Components/navigation/MainHeader';

export default function Root() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
