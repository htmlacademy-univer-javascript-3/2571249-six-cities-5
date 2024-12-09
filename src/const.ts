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

export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_ACTIVE = '/img/pin-active.svg';
