import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {SliceName} from '../../const.ts';
import {OfferDetailsData} from '../../models/state.ts';
import {OfferDetails} from '../../models/offer-details.ts';
import {Review} from '../../models/review.ts';


const initialState: OfferDetailsData = {
  offerDetails: undefined,
  isLoading: false,
};

export const offerDetailsData = createSlice({
  name: SliceName.OfferDetails,
  initialState,
  reducers: {
    setOfferDetails: (state: OfferDetailsData, action: PayloadAction<OfferDetails | undefined>)=> {
      state.offerDetails = action.payload;
    },
    setDetailsLoadingStatus: (state: OfferDetailsData, action: PayloadAction<boolean>)=> {
      state.isLoading = action.payload;
    },
    addReview: (state: OfferDetailsData, action: PayloadAction<Review>)=> {
      state.offerDetails?.reviews.unshift(action.payload);
    }
  }
});

export const { setOfferDetails, setDetailsLoadingStatus, addReview } = offerDetailsData.actions;
