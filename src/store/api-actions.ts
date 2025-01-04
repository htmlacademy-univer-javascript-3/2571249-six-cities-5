import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../models/state.ts';
import {AxiosInstance} from 'axios';
import {Offers} from '../models/offer.ts';
import {ApiRoutes, AuthorizationStatus} from '../const.ts';
import {
  fillOffersAction,
  setAuthorizationStatusAction,
  setLoadingStatusAction,
  setUserDataAction
} from './actions.ts';
import {UserData} from '../models/user-data.ts';


export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('FETCH_OFFERS', async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatusAction(true));
    const { data } = await api.get<Offers>(ApiRoutes.GetOffers);
    dispatch(setLoadingStatusAction(false));
    dispatch(fillOffersAction(data));
  });

export const checkAuthorizationAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('LOGIN', async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<UserData>(ApiRoutes.Login);
      dispatch(setUserDataAction(data));
      dispatch(setAuthorizationStatusAction(AuthorizationStatus.Authorized));
    } catch {
      dispatch(setAuthorizationStatusAction(AuthorizationStatus.Unauthorized));
    }
  });
