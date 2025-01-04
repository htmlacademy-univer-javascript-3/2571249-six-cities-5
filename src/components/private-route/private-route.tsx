import {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getAuthStatus} from '../../store/user/selectors.ts';


type PrivateRouteProps = {
  children: ReactElement;
}


function PrivateRoute({children}: PrivateRouteProps): ReactElement {
  const authStatus = useAppSelector(getAuthStatus);

  return authStatus === AuthorizationStatus.Authorized
    ? children
    : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
