import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {OFFER_LIST_MOCK, OFFER_DETAILED_MOCKS} from './mocks/offers.ts';
import {REVIEW_LIST_MOCK} from './mocks/reviews.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App
    offerList={OFFER_LIST_MOCK}
    offersDetailed={OFFER_DETAILED_MOCKS}
    reviewList={REVIEW_LIST_MOCK}
  />
);
