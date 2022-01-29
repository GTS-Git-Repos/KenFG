import {getUserRemote} from '../../remote/userRemote';
import {UPDATE_USER_INFO} from './actionTypes';
import {updateAppError} from './appActions';

export const updateUserInfoAction = (payload: string) => ({
  type: UPDATE_USER_INFO,
  payload,
});

export const updateUserInfo = (mobile: any) => {
  return async (dispatch: any) => {
    try {
      const userInfo = await getUserRemote({mobile});
      if (userInfo.data) {
        dispatch(updateUserInfoAction(userInfo.data));
      } else {
        throw 'failed to user ';
      }
    } catch (err) {
      dispatch(updateAppError(`updateUserInfo()`));
    }
  };
};
