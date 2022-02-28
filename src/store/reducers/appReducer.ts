import {
  UPDATE_SELECTED_MATCH,
  UPDATE_JOINCONTEST_REQUEST,
  UPDATE_FULL_MATCH,
  UPDATE_DARK_MODE,
} from '../actions/actionTypes';

const initialState = {
  darkModeEnabled: true,
  error: null,
  ip: null,
  selected_match: null,
  joinContestRequest: null,
  isFullMatch: true,
  cashFreeAppId: '122224715b8a570ce3b9253a922221',
  sessionClosed: false,
};

interface actionShape {
  type: string;
  payload: any;
}

const App = (state = initialState, action: actionShape): any => {
  switch (action.type) {
    case UPDATE_DARK_MODE:
      return {
        ...state,
        darkModeEnabled: action.payload,
      };
    case UPDATE_FULL_MATCH:
      return {
        ...state,
        isFullMatch: action.payload,
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
