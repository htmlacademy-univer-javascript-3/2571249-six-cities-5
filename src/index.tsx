import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const PLACES_COUNT: number = 6;

root.render(
  <App placesCount={PLACES_COUNT}/>
);
