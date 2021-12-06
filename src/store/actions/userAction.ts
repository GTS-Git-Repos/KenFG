import {UPDATE_USER_INFO} from './actionTypes';

export const updateUserInfoAction = (payload: string) => ({
  type: UPDATE_USER_INFO,
  payload,
});
