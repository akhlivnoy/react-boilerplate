import { RouterPath } from '#navigation/RootRouter/RootRouter.types';

import { ILink } from './MainHeader.types';

export const LINKS: ReadonlyArray<ILink> = [
  {
    title: 'Home',
    path: RouterPath.Root,
  },
  {
    title: 'Login',
    path: RouterPath.Login,
  },
  {
    title: 'Posts',
    path: RouterPath.Posts,
  },
];
