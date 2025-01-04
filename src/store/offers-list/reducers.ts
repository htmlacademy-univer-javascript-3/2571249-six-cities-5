import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {DEFAULT_CITY, SliceName, SortingType} from '../../const.ts';
import {OffersListData} from '../../models/state.ts';
import {Offers} from '../../models/offer.ts';
import {City} from '../../models/city.ts';
import {OfferDetailed} from '../../models/offer-detailed.ts';


const initialState: OffersListData = {
  offers: [],
  favoriteOffers: [],
  activeCity: DEFAULT_CITY,
  activeSortingType: SortingType.Popular,
  isLoading: false,
};

export const offersListData = createSlice({
  name: SliceName.OffersList,
  initialState,
  reducers: {
    setOffers: (state: OffersListData, action: PayloadAction<Offers>)=> {
      state.offers = action.payload;
    },
    setFavoriteOffers: (state: OffersListData, action: PayloadAction<Offers>)=> {
      state.favoriteOffers = action.payload;
    },
    setFavoriteStatus: (state: OffersListData, action: PayloadAction<OfferDetailed>)=> {
      state.offers
        .filter((o) => o.id === action.payload.id)
        .map((o) => {
          o.isFavorite = action.payload.isFavorite;
          return o;
        });
    },
    setActiveCity: (state: OffersListData, action: PayloadAction<City>)=> {
      state.activeCity = action.payload;
    },
    setActiveSortingType: (state: OffersListData, action: PayloadAction<SortingType>)=> {
      state.activeSortingType = action.payload;
    },
    setListLoadingStatus: (state: OffersListData, action: PayloadAction<boolean>)=> {
      state.isLoading = action.payload;
    },
  }
});

export const {
  setOffers,
  setFavoriteOffers,
  setFavoriteStatus,
  setActiveCity,
  setActiveSortingType,
  setListLoadingStatus
} = offersListData.actions;
