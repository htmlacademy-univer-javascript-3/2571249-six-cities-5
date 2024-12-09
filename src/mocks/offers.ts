import {Offer} from '../models/offer.ts';
import {OfferDetailed} from '../models/offer-detailed.ts';


export const OFFER_LIST_MOCK: Offer[] = [
  {
    id: '0',
    title: 'House0',
    type: 'house',
    price: 0,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
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
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
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
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
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
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
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
    city: {
      name: 'City0',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 8
      }
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 8
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
    city: {
      name: 'City1',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 8
      }
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 8
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
    city: {
      name: 'Cool City',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 8
      }
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 8
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
    city: {
      name: 'Cool City',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 8
      }
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 8
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
