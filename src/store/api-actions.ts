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
import {UserDataFull} from '../models/user-data.ts';
import {UserCredentials} from '../models/user-credentials.ts';
import {removeToken, setToken} from '../services/tokens.ts';


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
  }>('CHECK_AUTH', async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<UserDataFull>(ApiRoutes.Login);
      dispatch(setUserDataAction({
        name: data.name,
        avatarUrl: data.avatarUrl,
        isPro: data.isPro,
      }));
      dispatch(setAuthorizationStatusAction(AuthorizationStatus.Authorized));
    } catch {
      dispatch(setAuthorizationStatusAction(AuthorizationStatus.Unauthorized));
    }
  });

export const loginAction = createAsyncThunk<
  void,
  UserCredentials,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('LOGIN', async ({email, password}, {dispatch, extra: api}) => {
    const { data } = await api.post<UserDataFull>(ApiRoutes.Login, {email, password});
    setToken(data.token);
    dispatch(setUserDataAction({
      name: data.name,
      avatarUrl: data.avatarUrl,
      isPro: data.isPro,
    }));
    dispatch(setAuthorizationStatusAction(AuthorizationStatus.Authorized));
  });

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('LOGOUT', async (_arg, {dispatch, extra: api}) => {
    await api.delete<UserDataFull>(ApiRoutes.Logout);
    removeToken();
    dispatch(setUserDataAction(undefined));
    dispatch(setAuthorizationStatusAction(AuthorizationStatus.Unauthorized));
  });
