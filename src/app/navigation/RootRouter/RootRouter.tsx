import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '#components';
import { HomePage } from '#pages';

import { RouterPath } from './RootRouter.types';

export const RootRouter: React.ComponentType = () => (
  <BrowserRouter>
    <Routes>
      <Route
        element={<Layout />}
        path={RouterPath.Root}
      >
        <Route
          element={<HomePage />}
          path={RouterPath.Home}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
