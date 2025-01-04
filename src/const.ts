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
  GetOffers = '/six-cities/offers',
}

export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_ACTIVE = '/img/pin-active.svg';
