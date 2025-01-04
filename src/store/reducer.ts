import {createReducer} from '@reduxjs/toolkit';
import {fillOffersAction, setActiveCityAction, setActiveSortingTypeAction} from './actions.ts';
import {Offers} from '../models/offer.ts';
import {City} from '../models/city.ts';
import {DEFAULT_CITY, SortingType} from '../const.ts';


type StoreState = {
  offers: Offers;
  activeCity: City;
  activeSortingType: SortingType;
};


const initialState: StoreState = {
  offers: [],
  activeCity: DEFAULT_CITY,
  activeSortingType: SortingType.Popular,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fillOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setActiveCityAction, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setActiveSortingTypeAction, (state, action) => {
      state.activeSortingType = action.payload;
    });
});
