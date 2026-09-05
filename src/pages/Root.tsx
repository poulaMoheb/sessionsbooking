import { Outlet } from 'react-router-dom';
import Button from '../Components/Button';

export default function Root() {
  return (
    <>
      {/* Todo: Add Header */}
      <nav>
        <Button textOnly={true} to='/sessions'>Click me </Button>
      </nav>
      <Outlet />
    </>
  );
}
