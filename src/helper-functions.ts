import {SortingType} from './const.ts';
import {Offer, Offers} from './models/offer.ts';
import {Location} from './models/location.ts';


export const capitalize = (str: string): string => {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const getSorter = (sortingType: SortingType) => {
  switch (sortingType) {
    case SortingType.Popular:
      return () => 0;
    case SortingType.PriceLowToHigh:
      return (a: Offer, b: Offer) => a.price - b.price;
    case SortingType.PriceHighToLow:
      return (a: Offer, b: Offer) => b.price - a.price;
    case SortingType.TopRatedFirst:
      return (a: Offer, b: Offer) => b.rating - a.rating;
    default:
      return () => 0;
  }
};

export const getMiddleLocation = (offers: Offers): Location => {
  const loc1 = offers[0].location;
  const loc2 = offers[1].location;
  const loc3 = offers[2].location;
  return {
    latitude: (loc1.latitude + loc2.latitude + loc3.latitude) / 3.0,
    longitude: (loc1.longitude + loc2.longitude + loc3.longitude) / 3.0,
    zoom: (loc1.zoom + loc2.zoom + loc3.zoom) / 3.0 - 3.0,
  };
};
