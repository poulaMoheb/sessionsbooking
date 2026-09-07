import { Outlet } from 'react-router-dom';
import Button from '../Components/UI/Button';
import MainHeader from '../Components/navigation/MainHeader';

export default function Root() {
  return (
    <>
      {/* Todo: Add Header */}
      <MainHeader />
      <Outlet />
    </>
  );
}
