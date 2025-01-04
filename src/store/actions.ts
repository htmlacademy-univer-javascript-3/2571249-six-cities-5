﻿import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../models/offer.ts';
import {City} from '../models/city.ts';
import {AuthorizationStatus, SortingType} from '../const.ts';
import {UserData} from '../models/user-data.ts';


export const fillOffersAction = createAction<Offers>('FILL_OFFERS');
export const setActiveCityAction = createAction<City>('SET_ACTIVE_CITY');
export const setActiveSortingTypeAction = createAction<SortingType>('SET_SORTING_TYPE');
export const setLoadingStatusAction = createAction<boolean>('SET_LOADING_STATUS');
export const setAuthorizationStatusAction = createAction<AuthorizationStatus>('SET_AUTH_STATUS');
export const setUserEmailAction = createAction<string>('SET_USER_EMAIL');
export const setUserDataAction = createAction<UserData | undefined>('SET_USER_DATA');
