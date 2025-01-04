import {SortingType} from './const.ts';
import {Offer} from './models/offer.ts';


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
  }
};
