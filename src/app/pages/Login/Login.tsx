import { useState } from 'react';

import { useAppDispatch } from '#hooks';
import { userSlice } from '#redux/slices';
import { classNames } from '#utils/classNames';

import styles from './Login.module.scss';

export const LoginPage: React.ComponentType = () => {
  // const state = useLocationState<ILoginState>();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    dispatch(userSlice.actions.login({ name, password }));
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        id="name "
        name="name"
        placeholder="username"
        type="text"
        onChange={handleChangeName}
      />
      <input
        className={styles.input}
        id="password"
        name="password"
        placeholder="password"
        type="password"
        onChange={handleChangePassword}
      />
      <button
        className={classNames(styles.input, styles.button)}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
