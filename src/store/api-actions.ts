import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {ApiRoutes, AuthorizationStatus} from '../const.ts';
import {Offers} from '../models/offer.ts';
import {AppDispatch, State} from '../models/state.ts';
import {UserInfoPrivate} from '../models/user-info.ts';
import {UserCredentials} from '../models/user-credentials.ts';
import {OfferDetailed} from '../models/offer-detailed.ts';
import {Review, Reviews} from '../models/review.ts';
import {removeToken, setToken} from '../services/tokens.ts';
import {setOffers, setListLoadingStatus, setFavoriteOffers, setFavoriteStatus} from './offers-list/reducers.ts';
import {addReview, setDetailsLoadingStatus, setOfferDetails} from './offer-details/reducers.ts';
import {
  decFavoriteCount,
  incFavoriteCount,
  setAuthStatus,
  setFavoriteCount,
  setUserEmail,
  setUserInfo
} from './user/reducers.ts';


export const fetchOffersAction = createAsyncThunk<
  void, undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('FETCH_OFFERS', async (_arg, {dispatch, extra: api}) => {
    dispatch(setListLoadingStatus(true));
    const { data } = await api.get<Offers>(ApiRoutes.Offers);
    dispatch(setListLoadingStatus(false));
    dispatch(setOffers(data));
  });

export const fetchFavoriteOffersAction = createAsyncThunk<
  void, undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('FETCH_FAVORITE_OFFERS', async (_arg, {dispatch, extra: api}) => {
    dispatch(setListLoadingStatus(true));
    const { data } = await api.get<Offers>(ApiRoutes.Favorite);
    dispatch(setListLoadingStatus(false));
    dispatch(setFavoriteOffers(data));
    dispatch(setFavoriteCount(data.length));
  });

export const toggleFavoriteStatusAction = createAsyncThunk<
  void, { offerId: string; status: boolean },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('TOGGLE_FAVORITE_STATUS', async ({offerId, status}, {dispatch, extra: api}) => {
    const url = `${ApiRoutes.Favorite}/${offerId}/${+status}`;
    const { data } = await api.post<OfferDetailed>(url, { status: +status });
    dispatch(setFavoriteStatus(data));
    dispatch(status ? incFavoriteCount() : decFavoriteCount());
  });

export const fetchOfferAction = createAsyncThunk<
  void, string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('FETCH_OFFER', async (offerId, {dispatch, extra: api}) => {
    try {
      dispatch(setDetailsLoadingStatus(true));
      const offerUrl = `${ApiRoutes.Offers}/${offerId}`;
      const reviewsUrl = `${ApiRoutes.Reviews}/${offerId}`;
      const { data: offer } = await api.get<OfferDetailed>(offerUrl);
      const { data: offersNearby } = await api.get<Offers>(`${offerUrl}/nearby`);
      const { data: reviews } = await api.get<Reviews>(reviewsUrl);
      dispatch(setDetailsLoadingStatus(false));
      dispatch(setOfferDetails({
        offer: offer,
        offersNearby: offersNearby,
        reviews: reviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
      }));
    } catch {
      dispatch(setDetailsLoadingStatus(false));
      dispatch(setOfferDetails(undefined));
    }
  });

export const postReviewAction = createAsyncThunk<
  void, { offerId: string; comment: string; rating: number },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('POST_COMMENT', async ({ offerId, comment, rating }, {dispatch, extra: api}) => {
    try {
      const reviewsUrl = `${ApiRoutes.Reviews}/${offerId}`;
      const { data } = await api.post<Review>(reviewsUrl, { comment: comment, rating: +rating });
      dispatch(addReview(data));
    } catch { /* empty */ }
  });

export const checkAuthorizationAction = createAsyncThunk<
  void, undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('CHECK_AUTH', async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<UserInfoPrivate>(ApiRoutes.Login);
      dispatch(setUserInfo({
        name: data.name,
        avatarUrl: data.avatarUrl,
        isPro: data.isPro,
      }));
      dispatch(setUserEmail(data.email));
      dispatch(setAuthStatus(AuthorizationStatus.Authorized));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.Unauthorized));
    }
  });

export const loginAction = createAsyncThunk<
  void, UserCredentials,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('LOGIN', async ({email, password}, {dispatch, extra: api}) => {
    const { data } = await api.post<UserInfoPrivate>(ApiRoutes.Login, {email, password});
    setToken(data.token);
    dispatch(setUserInfo({
      name: data.name,
      avatarUrl: data.avatarUrl,
      isPro: data.isPro,
    }));
    dispatch(setUserEmail(email));
    dispatch(setAuthStatus(AuthorizationStatus.Authorized));
  });

export const logoutAction = createAsyncThunk<
  void, undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('LOGOUT', async (_arg, {dispatch, extra: api}) => {
    await api.delete<UserInfoPrivate>(ApiRoutes.Logout);
    removeToken();
    dispatch(setUserInfo(undefined));
    dispatch(setUserEmail(''));
    dispatch(setAuthStatus(AuthorizationStatus.Unauthorized));
  });
