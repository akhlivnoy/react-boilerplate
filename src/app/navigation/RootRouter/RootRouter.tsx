import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from './RootRouter.data';

export const RootRouter: React.ComponentType = () => {
  const router = createBrowserRouter(ROUTES);

  return <RouterProvider router={router} />;
};
