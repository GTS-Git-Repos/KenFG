import {UPDATE_USER_INFO} from '../actions/actionTypes';

const initialState = {
  user_info: null,
};

interface actionShape {
  type: string;
  payload: any;
}

const User = (state = initialState, action: actionShape): any => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        user_info: action.payload,
      };

    default:
      return state;
  }
};

export default User;
