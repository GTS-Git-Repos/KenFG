import {UPDATE_TEAM_A, UPDATE_TEAM_B, ADD_PLAYERS} from './actions';

export const initialState = {
  teams: ['AUS', 'PAK'],
  players: [],
};

export const reducer = function (state: any, action: any) {
  switch (action.type) {
    case ADD_PLAYERS: {
      return {
        ...state,
        players: action.payload,
      };
    }
    default:
      return state;
  }
};
