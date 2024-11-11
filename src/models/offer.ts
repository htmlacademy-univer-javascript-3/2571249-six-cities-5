import {OfferType} from './offer-type.ts';


export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: {
    name: string;
    location: {
      longitude: number;
      latitude: number;
      zoom: number;
    };
  };
  location: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}
