import {OfferType} from './offer-type.ts';
import {City} from './city.ts';
import {Location} from './location.ts';


export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};
