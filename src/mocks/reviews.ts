import {Review} from '../models/review.ts';


export const REVIEW_LIST_MOCK: Review[] = [
  {
    id: '0',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'ReviewUser0',
      avatarUrl: '/img/avatar.svg',
      isPro: true
    },
    comment: '0000000000_0000000000_0000000000_0000000000_0000000000',
    rating: 1,
  },
  {
    id: '1',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'ReviewUser1',
      avatarUrl: '/img/avatar.svg',
      isPro: true
    },
    comment: '1111111111_1111111111_1111111111_1111111111_1111111111',
    rating: 2,
  },
  {
    id: '2',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'ReviewUser2',
      avatarUrl: '/img/avatar.svg',
      isPro: false
    },
    comment: '2222222222_2222222222_2222222222_2222222222_2222222222',
    rating: 3,
  },
  {
    id: '3',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'ReviewUser3',
      avatarUrl: '/img/avatar.svg',
      isPro: false
    },
    comment: '3333333333_3333333333_3333333333_3333333333_3333333333',
    rating: 4,
  },
];
