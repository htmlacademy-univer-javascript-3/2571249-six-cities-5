import {createReducer} from '@reduxjs/toolkit';

import {AuthorizationStatus, DEFAULT_CITY, SortingType} from '../const.ts';
import {Offers} from '../models/offer.ts';
import {City} from '../models/city.ts';
import {UserData} from '../models/user-data.ts';
import {OfferDetailed} from '../models/offer-detailed.ts';
import {Reviews} from '../models/review.ts';
import {
  loadOfferAction,
  loadOffersAction,
  setActiveCityAction,
  setActiveSortingTypeAction,
  setAuthorizationStatusAction, setLoadingStatusAction, addOfferReviewAction,
  setUserDataAction, setUserEmailAction
} from './actions.ts';


type StoreState = {
  offers: Offers;
  activeCity: City;
  activeSortingType: SortingType;
  isLoading: boolean;
  offerDetailed: {
    offer: OfferDetailed;
    offersNearby: Offers;
    reviews: Reviews;
  } | undefined;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | undefined;
  email: string;
};


const initialState: StoreState = {
  offers: [],
  activeCity: DEFAULT_CITY,
  activeSortingType: SortingType.Popular,
  isLoading: false,
  offerDetailed: undefined,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: undefined,
  email: '',
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setActiveCityAction, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setActiveSortingTypeAction, (state, action) => {
      state.activeSortingType = action.payload;
    })
    .addCase(setLoadingStatusAction, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(loadOfferAction, (state, action) => {
      state.offerDetailed = action.payload;
    })
    .addCase(addOfferReviewAction, (state, action) => {
      state.offerDetailed!.reviews.unshift(action.payload);
    })
    .addCase(setAuthorizationStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmailAction, (state, action) => {
      state.email = action.payload;
    })
    .addCase(setUserDataAction, (state, action) => {
      state.userData = action.payload;
    });
});
