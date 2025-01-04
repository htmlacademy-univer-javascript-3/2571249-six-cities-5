import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthorizationStatus, SliceName} from '../../const.ts';
import {UserData} from '../../models/state.ts';
import {UserInfo} from '../../models/user-info.ts';


const initialState: UserData = {
  authStatus: AuthorizationStatus.Unknown,
  userInfo: undefined,
  userEmail: '',
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
  }
});

export const { setAuthStatus, setUserInfo, setUserEmail } = userData.actions;
