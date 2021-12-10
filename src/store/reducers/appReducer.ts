import {
  HANDLE_ERROR,
  SAVE_IP,
  UPDATE_SELECTED_MATCH,
  UPDATE_SELECTED_CONTEST,
} from '../actions/actionTypes';

const initialState = {
  error: null,
  ip: null,
  selected_match: null,
  selected_contest: null,
};

interface actionShape {
  type: string;
  payload: any;
}

const App = (state = initialState, action: actionShape): any => {
  switch (action.type) {
    case HANDLE_ERROR:
      console.log('State anomoly -->', action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SAVE_IP:
      return {
        ...state,
        ip: action.payload,
      };
    case UPDATE_SELECTED_MATCH:
      return {
        ...state,
        selected_match: action.payload,
      };
    case UPDATE_SELECTED_CONTEST: {
      return {
        ...state,
        selected_contest: action.payload,
      };
    }
    default:
      return state;
  }
};

export default App;

/**
 * selected_match:
 * ---
 * {
 *    mathch_key:1123,
 *    teams:AUS vs ENG
 * }
 * selected_contest:
 * ---
 * 23456a
 */
