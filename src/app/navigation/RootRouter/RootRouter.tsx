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
          index
          element={<HomePage />}
        />
        <Route
          element={<div>Login</div>}
          path={RouterPath.Login}
        />
        <Route
          element={<div>Dashboard</div>}
          path={RouterPath.Dashboard}
        />
        <Route
          element={<div>Settings</div>}
          path={RouterPath.Settings}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
