import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../models/offer.ts';
import {City} from '../models/city.ts';


export const fillOffersAction = createAction<Offers>('FILL_OFFERS');
export const setActiveCityAction = createAction<City>('SET_ACTIVE_CITY');
