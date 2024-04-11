import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'store';

const PrivateOutlet = () => {
  const isAuthenticated = useAppSelector((state) => state.auth?.authenticated);
  console.log('🚀 ~ PrivateOut ~ isAuthenticated:', isAuthenticated);

  return isAuthenticated ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to='/login' replace />
  );
};

export default PrivateOutlet;
