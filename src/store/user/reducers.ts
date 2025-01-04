import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthorizationStatus, SliceName} from '../../const.ts';
import {UserData} from '../../models/state.ts';
import {UserInfo} from '../../models/user-info.ts';


const initialState: UserData = {
  authStatus: AuthorizationStatus.Unknown,
  userInfo: undefined,
  userEmail: '',
  favoriteCount: 0,
};

export const userData = createSlice({
  name: SliceName.User,
  initialState,
  reducers: {
    setAuthStatus: (state: UserData, action: PayloadAction<AuthorizationStatus>)=> {
      state.authStatus = action.payload;
    },
    setUserInfo: (state: UserData, action: PayloadAction<UserInfo | undefined>)=> {
      state.userInfo = action.payload;
    },
    setUserEmail: (state: UserData, action: PayloadAction<string>)=> {
      state.userEmail = action.payload;
    },
    setFavoriteCount: (state: UserData, action: PayloadAction<number>)=> {
      state.favoriteCount = action.payload;
    },
    incFavoriteCount: (state: UserData)=> {
      state.favoriteCount++;
    },
    decFavoriteCount: (state: UserData)=> {
      state.favoriteCount--;
    },
  }
});

export const {
  setAuthStatus,
  setUserInfo,
  setUserEmail,
  setFavoriteCount,
  incFavoriteCount,
  decFavoriteCount
} = userData.actions;
