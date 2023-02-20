import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { Layout, RequireAuth } from '#components';
import { HomePage, NotFoundPage, PostPage } from '#pages';
import { rp } from '#utils/routeParam';

import { RouterParams, RouterPath } from './RootRouter.types';

export const RootRouter: React.ComponentType = () => (
  <BrowserRouter>
    <Routes>
      <Route
        element={<Layout />}
        errorElement={<NotFoundPage />}
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
          element={
            <RequireAuth>
              <div>
                <div>Posts</div>
                <Outlet />
              </div>
            </RequireAuth>
          }
          path={RouterPath.Posts}
        >
          <Route
            element={<PostPage />}
            path={rp(RouterParams.PostId)}
          />
        </Route>
      </Route>
      <Route
        element={<NotFoundPage />}
        path="*"
      />
    </Routes>
  </BrowserRouter>
);
