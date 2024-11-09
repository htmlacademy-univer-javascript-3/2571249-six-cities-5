import {Offer} from '../models/offer.ts';


export const OfferMocks: Offer[] = [
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
    rating: 5,
    previewImage: '../public/img/apartment-01.jpg',
    description: 'Cool house 0',
    bedrooms: 1,
    goods: ['Shower', 'Kitchen'],
    host: {
      name: 'User0',
      avatarUrl: 'avatar.svg',
      isPro: true
    },
    images: ['apartment-01.jpg'],
    maxAdults: 1,
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
    rating: 5,
    previewImage: '../public/img/apartment-01.jpg',
    description: 'Cool house 1',
    bedrooms: 1,
    goods: ['Shower', 'Kitchen'],
    host: {
      name: 'User0',
      avatarUrl: 'avatar.svg',
      isPro: true
    },
    images: ['apartment-01.jpg'],
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
    rating: 5,
    previewImage: '../public/img/apartment-01.jpg',
    description: 'Cool house 2',
    bedrooms: 1,
    goods: ['Shower', 'Kitchen'],
    host: {
      name: 'User0',
      avatarUrl: 'avatar.svg',
      isPro: true
    },
    images: ['apartment-01.jpg'],
    maxAdults: 1,
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
    rating: 2,
    previewImage: '../public/img/room.jpg',
    description: 'Very cool apartment',
    bedrooms: 1,
    goods: ['Shower', 'Kitchen'],
    host: {
      name: 'User0',
      avatarUrl: 'avatar.svg',
      isPro: true
    },
    images: ['apartment-01.jpg'],
    maxAdults: 1,
  },
];
