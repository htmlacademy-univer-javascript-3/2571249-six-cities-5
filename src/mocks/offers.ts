import {Offer, OfferType} from '../interfaces/offer.ts';


export const OfferMocks: Offer[] = [
  {
    id: '0',
    title: 'House0',
    type: OfferType.House,
    price: 100,
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
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'apartment-01.jpg',
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
];
