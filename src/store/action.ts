import {createAction} from '@reduxjs/toolkit';
import {City} from '../models/city.ts';


export const fillOffersAction = createAction('FILL_OFFERS');

export const setActiveCityAction = createAction(
  'SET_ACTIVE_CITY', (value: City) => ({
    payload: value
  })
);
