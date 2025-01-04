import {createReducer} from '@reduxjs/toolkit';
import {fillOffersAction, setActiveCityAction, setActiveSortingTypeAction} from './action.ts';
import {OFFER_LIST_MOCK} from '../mocks/offers.ts';
import {Offers} from '../models/offer.ts';
import {CITY_LIST_MOCK} from '../mocks/cities.ts';
import {City} from '../models/city.ts';
import {SortingType} from '../const.ts';


type StoreState = {
  activeCity: City;
  offers: Offers;
  activeSortingType: SortingType;
};


const initialState: StoreState = {
  activeCity: CITY_LIST_MOCK[0],
  offers: [],
  activeSortingType: SortingType.Popular,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCityAction, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fillOffersAction, (state) => {
      state.offers = OFFER_LIST_MOCK;
    })
    .addCase(setActiveSortingTypeAction, (state, action) => {
      state.activeSortingType = action.payload;
    });
});
