import {ReactElement} from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const.ts';


function NotFoundPage(): ReactElement {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>-- Go to main page --</Link>
    </>
  );
}

export default NotFoundPage;
