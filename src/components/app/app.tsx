import {ReactElement} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {MainScreen} from '../../pages/main-screen/main-screen.tsx';
import {LoginScreen} from '../../pages/login-screen/login-screen.tsx';
import {FavoritesScreen} from '../../pages/favorites-screen/favorites-screen.tsx';
import {OfferScreen} from '../../pages/offer-screen/offer-screen.tsx';
import {NotFoundScreen} from '../../pages/not-found-screen/not-found-screen.tsx';
import {PrivateRoute} from '../private-route.tsx';
import {Layout} from '../layout.tsx';


type AppProps = {
  placesCount: number;
}


export function App({placesCount}: AppProps): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainScreen placesCount={placesCount} />} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute isAuthorized={false}>
              <FavoritesScreen />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer} element={<OfferScreen />} />
        </Route>
        <Route path={AppRoute.NotFound} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
