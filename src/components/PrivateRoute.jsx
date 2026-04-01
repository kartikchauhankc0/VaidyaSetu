import { Navigate } from 'react-router';
import AuthenticationContext from '../context/AuthenticationContext';
import { useContext } from 'react';

export default function PrivateRoute({ children }) {
  
  const {isAuthenticated} = useContext(AuthenticationContext);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}