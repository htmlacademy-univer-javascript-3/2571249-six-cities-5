import {Cities} from './models/city.ts';


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

export enum ApiRoutes {
  GetOffers = '/offers',
}


export const CITIES: Cities = [
  {
    name: 'Paris',
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 12,
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 12,
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.85045,
      longitude: 4.34878,
      zoom: 12,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.377956,
      longitude: 4.897070,
      zoom: 12,
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 12,
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 12,
    }
  },
];

export const DEFAULT_CITY = CITIES.find((c) => c.name === 'Paris') || CITIES[0];

export const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
export const TIMEOUT = 5000;

export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_ACTIVE = '/img/pin-active.svg';
