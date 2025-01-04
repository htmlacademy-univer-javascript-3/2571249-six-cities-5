import {combineReducers} from '@reduxjs/toolkit';

import {SliceName} from '../const.ts';
import {offersListData} from './offers-list/reducers.ts';
import {offerDetailsData} from './offer-details/reducers.ts';
import {userData} from './user/reducers.ts';


export const rootReducer = combineReducers({
  [SliceName.OffersList]: offersListData.reducer,
  [SliceName.OfferDetails]: offerDetailsData.reducer,
  [SliceName.User]: userData.reducer,
});
