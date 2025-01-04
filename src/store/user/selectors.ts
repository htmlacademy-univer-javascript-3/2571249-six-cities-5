import {AuthorizationStatus, SliceName} from '../../const.ts';
import {State} from '../../models/state.ts';
import {UserInfo} from '../../models/user-info.ts';


export const getAuthStatus = (state: State): AuthorizationStatus => state[SliceName.User].authStatus;
export const getUserInfo = (state: State): UserInfo | undefined => state[SliceName.User].userInfo;
export const getUserEmail = (state: State): string => state[SliceName.User].userEmail;
