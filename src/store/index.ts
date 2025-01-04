import {configureStore} from '@reduxjs/toolkit';

import {rootReducer} from './root-reducer.ts';
import {CreateAPI} from '../services/api.ts';


const api = CreateAPI();


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});
