import React from 'react';
import {MainScreen} from '../../pages/main-screen/main-screen.tsx';


type AppProps = {
  placesCount: number;
}


export function App({placesCount}: AppProps): React.ReactElement {
  return (
    <MainScreen placesCount={placesCount} />
  );
}
