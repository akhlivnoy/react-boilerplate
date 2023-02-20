import { Navigate, useLocation } from 'react-router-dom';

import { Paths } from '#navigation/routes';
import { ILoginState } from '#pages';

export const RequireAuth: React.ComponentType<{ children: JSX.Element }> = ({ children }) => {
  const isAuthorized = false;
  const location = useLocation();
  const state: ILoginState = {
    from: location,
  };

  return isAuthorized ? (
    children
  ) : (
    <Navigate
      state={state}
      to={`${Paths.Root}${Paths.Login}`}
    />
  );
};
