import {store} from '../store';
import {AuthorizationStatus, SortingType} from '../const.ts';
import {Offers} from './offer.ts';
import {City} from './city.ts';
import {UserInfo} from './user-info.ts';
import {OfferDetails} from './offer-details.ts';


export type OffersListData = {
  offers: Offers;
  favoriteOffers: Offers;
  activeCity: City;
  activeSortingType: SortingType;
  isLoading: boolean;
}

export type OfferDetailsData = {
  offerDetails: OfferDetails | undefined;
  isLoading: boolean;
}

export type UserData = {
  authStatus: AuthorizationStatus;
  userInfo: UserInfo | undefined;
  userEmail: string;
  favoriteCount: number;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
