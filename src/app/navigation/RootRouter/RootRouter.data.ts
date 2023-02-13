import { RouteObject } from 'react-router-dom';

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    children: [{ path: 'home' }],
  },
];
