import { useState } from 'react';

import { classNames } from '#utils/classNames';

import styles from './Home.module.scss';

export const HomePage: React.ComponentType = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Home Page</p>
      <button
        className={classNames(styles.button, isActive && styles.active)}
        onClick={handleActive}
      >
        {isActive ? 'Active' : 'Not active'}
      </button>
    </div>
  );
};
