import {SliceName} from '../../const.ts';
import {State} from '../../models/state.ts';
import {OfferDetails} from '../../models/offer-details.ts';


export const getOfferDetails = (state: State): OfferDetails | undefined => state[SliceName.OfferDetails].offerDetails;
export const getDetailsLoadingStatus = (state: State): boolean => state[SliceName.OfferDetails].isLoading;
