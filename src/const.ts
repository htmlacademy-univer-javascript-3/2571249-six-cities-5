import {Offer as OfferToSort} from './models/offer.ts';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*',
}


export enum CardType {
  Main,
  Favorite,
  Nearby,
}

export enum SortingType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}


export const SORTERS = {
  'Popular' : () => 0,
  'Price: low to high': (a: OfferToSort, b: OfferToSort) => a.price - b.price,
  'Price: high to low': (a: OfferToSort, b: OfferToSort) => b.price - a.price,
  'Top rated first': (a: OfferToSort, b: OfferToSort) => b.rating - a.rating,
};

export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_ACTIVE = '/img/pin-active.svg';
