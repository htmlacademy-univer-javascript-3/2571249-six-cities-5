import {SliceName, SortingType} from '../../const.ts';
import {State} from '../../models/state.ts';
import {City} from '../../models/city.ts';
import {Offers} from '../../models/offer.ts';


export const getOffers = (state: State): Offers => state[SliceName.OffersList].offers;
export const getFavoriteOffers = (state: State): Offers => state[SliceName.OffersList].favoriteOffers;
export const getActiveCity = (state: State): City => state[SliceName.OffersList].activeCity;
export const getActiveSortingType = (state: State): SortingType => state[SliceName.OffersList].activeSortingType;
export const getListLoadingStatus = (state: State): boolean => state[SliceName.OffersList].isLoading;
