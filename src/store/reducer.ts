import {createReducer} from '@reduxjs/toolkit';
import {StoreState} from '../models/store-state.ts';
import {fillOffersAction, setActiveCityAction} from './action.ts';
import {CITY_LIST_MOCK} from '../mocks/cities.ts';
import {OFFER_LIST_MOCK} from '../mocks/offers.ts';


const initialState: StoreState = {
  activeCity: CITY_LIST_MOCK[0],
  offers: [],
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCityAction, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fillOffersAction, (state) => {
      state.offers = OFFER_LIST_MOCK;
    });
});
