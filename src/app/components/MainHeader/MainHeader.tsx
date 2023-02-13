import { NavLink } from 'react-router-dom';

import { RouterPath } from '#navigation/RootRouter/RootRouter.types';
import { classNames } from '#utils/classNames';

import styles from './MainHeader.module.scss';

export const MainHeader: React.ComponentType = () => {
  const linkStyles = ({ isActive }: { isActive: boolean; isPending: boolean }) =>
    classNames(styles.link, isActive && styles.linkActive);

  return (
    <header className={styles.header}>
      <h3 className={styles.title}>Beyond Codeline</h3>
      <nav className={styles.links}>
        <NavLink
          className={linkStyles}
          to={RouterPath.Root}
        >
          Home
        </NavLink>

        <NavLink
          className={linkStyles}
          to={RouterPath.Login}
        >
          Login
        </NavLink>

        <NavLink
          className={linkStyles}
          to={RouterPath.Dashboard}
        >
          Dashboard
        </NavLink>

        <NavLink
          className={linkStyles}
          to={RouterPath.Settings}
        >
          Settings
        </NavLink>
      </nav>
    </header>
  );
};
