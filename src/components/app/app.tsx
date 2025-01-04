import {ReactElement} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {MainPage} from '../../pages/main-page/main-page.tsx';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route.tsx';
import {Layout} from '../layout.tsx';
import {store} from '../../store';
import {fetchOffersAction} from '../../store/api-actions.ts';


export function App(): ReactElement {
  store.dispatch(fetchOffersAction());

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute isAuthorized>
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
