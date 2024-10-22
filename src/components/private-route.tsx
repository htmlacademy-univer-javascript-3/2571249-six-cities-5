import {ReactElement} from 'react';
import {LoginScreen} from '../pages/login-screen/login-screen.tsx';


interface PrivateRouteProps {
  isAuthorized?: boolean;
  children: ReactElement;
}


export function PrivateRoute(props: PrivateRouteProps): ReactElement {
  const {isAuthorized, children} = props;

  return isAuthorized ? children : <LoginScreen />;
}
