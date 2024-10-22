import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';


export function NotFoundScreen(): ReactElement {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>-- Go to main page --</Link>
    </>
  );
}
