import {
  UPDATE_MY_CONTESTS,
  UPDATE_MY_TEAMS,
  UPDATE_MATCH_PLAYERS,
} from '../actions/actionTypes';

const initialState = {
  mycontest: [],
  myteams: [],
  match_players: [],
};

interface actionShape {
  type: string;
  payload: any;
}

const Match = (state = initialState, action: actionShape): any => {
  switch (action.type) {
    case UPDATE_MY_CONTESTS:
      return {
        ...state,
        mycontest: action.payload,
      };
    case UPDATE_MY_TEAMS:
      return {
        ...state,
        myteams: action.payload,
      };
    case UPDATE_MATCH_PLAYERS:
      return {
        ...state,
        match_players: action.payload,
      };
    default:
      return state;
  }
};

export default Match;
