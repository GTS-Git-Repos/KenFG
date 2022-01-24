import {
  SAVE_IP,
  UPDATE_SELECTED_MATCH,
  UPDATE_SELECTED_CONTEST,
  UPDATE_JOINCONTEST_REQUEST,
} from '../actions/actionTypes';

const initialState = {
  error: null,
  ip: null,
  selected_match: null,
  // need to remove that, join contest request is an alternate
  selected_contest: null,
  joinContestRequest: null,
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
    case UPDATE_SELECTED_CONTEST: {
      console.log('DEPRECATED UPDATE_SELECTED_CONTEST');
      return {
        ...state,
        selected_contest: action.payload,
      };
    }
    case UPDATE_JOINCONTEST_REQUEST: {
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
