import {createReducer} from '@reduxjs/toolkit';
import {fillOffersAction, setActiveCityAction} from './action.ts';
import {OFFER_LIST_MOCK} from '../mocks/offers.ts';
import {Offers} from '../models/offer.ts';
import {CITY_LIST_MOCK} from '../mocks/cities.ts';
import {City} from '../models/city.ts';


type StoreState = {
  activeCity: City;
  offers: Offers;
};


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
