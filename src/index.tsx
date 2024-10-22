import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {OfferMocks} from './mocks/offers.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App
    offers={OfferMocks}
  />
);
