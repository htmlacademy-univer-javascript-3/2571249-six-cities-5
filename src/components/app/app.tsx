import {ReactElement} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {AppRoute} from '../../const.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {checkAuthorizationAction, fetchFavoriteOffersAction, fetchOffersAction} from '../../store/api-actions.ts';

import Layout from '../layout.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import MainPage from '../../pages/main-page/main-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';


function App(): ReactElement {
  const dispatch = useAppDispatch();
  dispatch(fetchOffersAction());
  dispatch(fetchFavoriteOffersAction());
  dispatch(checkAuthorizationAction());

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer} element={
            <OfferPage />
          }
          />
        </Route>
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
