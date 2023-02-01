import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '#pages';

import { RootRouterPath } from './RootRouter.types';

export const RootRouter: React.ComponentType = () => (
  <BrowserRouter>
    <Routes>
      <Route
        element={<HomePage />}
        path={RootRouterPath.Root}
      />
    </Routes>
  </BrowserRouter>
);
