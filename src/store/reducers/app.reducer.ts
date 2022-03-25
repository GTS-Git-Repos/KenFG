import {
  UPDATE_SELECTED_MATCH,
  UPDATE_JOINCONTEST_REQUEST,
  UPDATE_FULL_MATCH,
  UPDATE_DARK_MODE,
  UPDATE_JOIN_MODAL,
  UPDATE_CREATED_TEAM,
} from '../actions/actionTypes';

const initialState = {
  darkModeEnabled: false,
  error: null,
  ip: null,
  // the match meta will be set when user opened a match,
  selected_match: null,
  // when user choose join (entry) button
  joinContestRequest: null,
  // created team key to auto join flow
  createdTeamKey: null,
  // is joincontest modal open or not
  openjoinModal: false,

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
    case UPDATE_CREATED_TEAM: {
      return {
        ...state,
        createdTeamKey: action.payload,
      };
    }
    case UPDATE_JOIN_MODAL: {
      return {
        ...state,
        openjoinModal: action.payload,
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
