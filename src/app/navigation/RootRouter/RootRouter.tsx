import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '#components';
import { HomePage, NotFoundPage } from '#pages';

import { RouterPath } from './RootRouter.types';

export const RootRouter: React.ComponentType = () => (
  <BrowserRouter>
    <Routes>
      <Route
        element={<Layout />}
        path={RouterPath.Root}
      >
        <Route
          index
          element={<HomePage />}
        />
      </Route>
      <Route
        element={<NotFoundPage />}
        path="*"
      />
    </Routes>
  </BrowserRouter>
);
