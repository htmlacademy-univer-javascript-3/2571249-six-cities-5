import {createReducer} from '@reduxjs/toolkit';
import {
  fillOffersAction,
  setActiveCityAction,
  setActiveSortingTypeAction,
  setAuthorizationStatusAction,
  setUserDataAction
} from './actions.ts';
import {Offers} from '../models/offer.ts';
import {City} from '../models/city.ts';
import {AuthorizationStatus, DEFAULT_CITY, SortingType} from '../const.ts';
import {UserData} from '../models/user-data.ts';


type StoreState = {
  offers: Offers;
  activeCity: City;
  activeSortingType: SortingType;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | undefined;
};


const initialState: StoreState = {
  offers: [],
  activeCity: DEFAULT_CITY,
  activeSortingType: SortingType.Popular,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: undefined,
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
    })
    .addCase(setAuthorizationStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserDataAction, (state, action) => {
      state.userData = action.payload;
    });
});
