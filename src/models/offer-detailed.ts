import {OfferType} from './offer-type.ts';


export type OfferDetailed = {
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
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
};
