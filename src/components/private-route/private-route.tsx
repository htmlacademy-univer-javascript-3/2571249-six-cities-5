import {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';


type PrivateRouteProps = {
  children: ReactElement;
}


function PrivateRoute({children}: PrivateRouteProps): ReactElement {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return authorizationStatus === AuthorizationStatus.Authorized
    ? children
    : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
