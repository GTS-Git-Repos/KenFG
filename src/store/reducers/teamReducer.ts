import {
  UPDATE_PLAYERS,
  UPDATE_TEAM_COUNT,
  UPDATE_CREDITS,
} from '../actions/actionTypes';

const initialState = {
  teams: ['aus', 'eng'],
  players: [],
  credits_left: 100,
  teams_count: null,
};

interface actionShape {
  type: string;
  payload: any;
}

const Team = (state = initialState, action: actionShape): any => {
  switch (action.type) {
    case UPDATE_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };
    case UPDATE_TEAM_COUNT:
      return {
        ...state,
        team_count: action.payload,
      };
    case UPDATE_CREDITS:
      return {
        ...state,
        credits_left: action.payload,
      };

    default:
      return state;
  }
};

export default Team;
