import {ReactElement} from 'react';
import {Outlet} from 'react-router-dom';


export function Layout(): ReactElement {
  return (
    <Outlet/>
  );
}
