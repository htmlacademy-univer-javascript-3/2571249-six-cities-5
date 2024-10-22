import {ReactElement} from 'react';
import {Outlet} from 'react-router-dom';


export function Layout(): ReactElement {
  return (
    <>
      <h2>* В будущем здесь появится правильная общая шапка</h2>
      <hr />
      <Outlet />
    </>
  );
}
