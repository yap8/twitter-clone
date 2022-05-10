import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.user);

  return user ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
