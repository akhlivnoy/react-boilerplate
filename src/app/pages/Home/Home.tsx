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
      <button
        className={classNames(styles.button, isActive && styles.active)}
        onClick={handleActive}
      >
        class names
      </button>
    </div>
  );
};
