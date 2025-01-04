import {Offers} from '../models/offer.ts';
import {OfferDetailed} from '../models/offer-detailed.ts';
import {CITY_LIST_MOCK} from './cities.ts';


export const OFFER_LIST_MOCK: Offers = [
  {
    id: '0',
    title: 'House0',
    type: 'house',
    price: 0,
    city: CITY_LIST_MOCK[3],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: false,
    rating: 1,
    previewImage: '/img/apartment-01.jpg',
  },
  {
    id: '1',
    title: 'House1',
    type: 'house',
    price: 100,
    city: CITY_LIST_MOCK[3],
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.1,
    previewImage: '/img/apartment-02.jpg',
  },
  {
    id: '2',
    title: 'House2',
    type: 'house',
    price: 200,
    city: CITY_LIST_MOCK[3],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.5,
    previewImage: '/img/apartment-03.jpg',
  },
  {
    id: '3',
    title: 'Cool Apartment!!!',
    type: 'apartment',
    price: 777,
    city: CITY_LIST_MOCK[3],
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: '/img/room.jpg',
  },
];

export const OFFER_DETAILED_MOCKS: OfferDetailed[] = [
  {
    id: '0',
    title: 'House0',
    type: 'house',
    price: 0,
    city: CITY_LIST_MOCK[3],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: false,
    rating: 1,
    description: 'Cool house 0',
    bedrooms: 0,
    goods: ['good0'],
    host: {
      name: 'User0',
      avatarUrl: '/img/avatar.svg',
      isPro: true
    },
    images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
    maxAdults: 0,
  },
  {
    id: '1',
    title: 'House1',
    type: 'house',
    price: 100,
    city: CITY_LIST_MOCK[3],
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.1,
    description: 'Cool house 1',
    bedrooms: 1,
    goods: ['good0', 'good1'],
    host: {
      name: 'User1',
      avatarUrl: '/img/avatar.svg',
      isPro: true
    },
    images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
    maxAdults: 1,
  },
  {
    id: '2',
    title: 'House2',
    type: 'house',
    price: 200,
    city: CITY_LIST_MOCK[3],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.5,
    description: 'Cool house 2',
    bedrooms: 2,
    goods: ['good0', 'good1', 'good2'],
    host: {
      name: 'User2',
      avatarUrl: '/img/avatar.svg',
      isPro: true
    },
    images: ['/img/apartment-01.jpg', '/img/apartment-02.jpg', '/img/apartment-03.jpg'],
    maxAdults: 2,
  },
  {
    id: '3',
    title: 'Cool Apartment!!!',
    type: 'apartment',
    price: 777,
    city: CITY_LIST_MOCK[3],
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    description: 'Very cool apartment',
    bedrooms: 777,
    goods: ['Cool stuff'],
    host: {
      name: 'User777',
      avatarUrl: '/img/avatar.svg',
      isPro: true
    },
    images: [
      '/img/room.jpg',
      '/img/room.jpg',
      '/img/room.jpg',
      '/img/room.jpg',
      '/img/room.jpg',
      '/img/room.jpg',
      '/img/room.jpg',
      '/img/room.jpg',
    ],
    maxAdults: 777,
  },
];
