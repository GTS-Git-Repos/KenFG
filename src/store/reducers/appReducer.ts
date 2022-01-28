import {
  SAVE_IP,
  UPDATE_SELECTED_MATCH,
  UPDATE_JOINCONTEST_REQUEST,
} from '../actions/actionTypes';

const initialState = {
  error: null,
  ip: null,
  selected_match: null,
  joinContestRequest: null,
  cashFreeAppId: '122224715b8a570ce3b9253a922221',
};

interface actionShape {
  type: string;
  payload: any;
}

const App = (state = initialState, action: actionShape): any => {
  switch (action.type) {
    case SAVE_IP:
      return {
        ...state,
        ip: action.payload,
      };
    case UPDATE_JOINCONTEST_REQUEST: {
      return {
        ...state,
        joinContestRequest: action.payload,
      };
    }
    case UPDATE_SELECTED_MATCH:
      return {
        ...state,
        selected_match: action.payload,
      };
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
