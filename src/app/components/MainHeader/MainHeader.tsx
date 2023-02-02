import { NavLink } from 'react-router-dom';

import { RouterPath } from '#navigation';

export const MainHeader: React.ComponentType = () => (
  <header>
    <NavLink to={RouterPath.Home}>Home</NavLink>
    <NavLink to={RouterPath.Posts}>Posts</NavLink>
    <NavLink to={RouterPath.About}>About</NavLink>
  </header>
);
