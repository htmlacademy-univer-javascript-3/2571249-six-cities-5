import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchOffersAction} from './store/api-actions.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(fetchOffersAction);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
