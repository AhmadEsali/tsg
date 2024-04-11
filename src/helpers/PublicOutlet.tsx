import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'store';

const PublicOutlet = () => {
  const isAuthenticated = useAppSelector((state) => state.auth?.authenticated);

  // if (isAuthenticated) {
  //   persistor.purge();
  //   window.location.replace('/login');
  // }

  return !isAuthenticated ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to='/' replace />
  );
};

export default PublicOutlet;
