import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../models/state.ts';
import {AxiosInstance} from 'axios';
import {Offers} from '../models/offer.ts';
import {ApiRoutes} from '../const.ts';
import {fillOffersAction, setLoadingStatus} from './actions.ts';


export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('FETCH_OFFERS', async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const { data } = await api.get<Offers>(ApiRoutes.GetOffers);
    dispatch(setLoadingStatus(false));
    dispatch(fillOffersAction(data));
  });

