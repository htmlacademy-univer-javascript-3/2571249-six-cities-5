import {Offer} from './offer.ts';
import {City} from './city.ts';


export type StoreState = {
  activeCity: City;
  offers: Offer[];
};
