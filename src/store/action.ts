import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../models/offer.ts';
import {City} from '../models/city.ts';
import {SortingType} from '../const.ts';


export const fillOffersAction = createAction<Offers>('FILL_OFFERS');
export const setActiveCityAction = createAction<City>('SET_ACTIVE_CITY');
export const setActiveSortingTypeAction = createAction<SortingType>('SET_SORTING_TYPE');
