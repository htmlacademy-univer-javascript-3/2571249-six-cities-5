import {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../const.ts';


interface PrivateRouteProps {
  isAuthorized?: boolean;
  children: ReactElement;
}


export function PrivateRoute(props: PrivateRouteProps): ReactElement {
  const {isAuthorized, children} = props;

  return isAuthorized
    ? children
    : <Navigate to={AppRoute.Login} />;
}
