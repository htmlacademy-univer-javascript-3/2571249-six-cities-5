import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {CreateAPI} from '../api.ts';


const api = CreateAPI();


export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});
