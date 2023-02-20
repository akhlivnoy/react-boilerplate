import { Navigate } from 'react-router-dom';

import { RouterPath } from '#navigation';

export const RequireAuth: React.ComponentType<{ children: JSX.Element }> = ({ children }) => {
  const isAuthorized = true;

  return isAuthorized ? children : <Navigate to={RouterPath.Root} />;
};
