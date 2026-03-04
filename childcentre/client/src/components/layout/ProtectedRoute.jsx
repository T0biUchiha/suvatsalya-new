import { useAuth } from '../../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    // Redirect them to the /admin/login page, but save the current location
    // they were trying to go to.
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}