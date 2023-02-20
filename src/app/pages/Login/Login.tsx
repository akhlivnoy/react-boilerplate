import { useLocationState } from '#hooks/useLocationState';

import { ILoginState } from './Login.types';

export const LoginPage: React.ComponentType = () => {
  const state = useLocationState<ILoginState>();

  const handleLogin = () => {
    console.log(state);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
