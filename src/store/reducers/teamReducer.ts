import {UPDATE_PLAYERS} from '../actions/actionTypes';

const initialState = {
  teams: ['AUS', 'PAK'],
  players: [],
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

    default:
      return state;
  }
};

export default Team;
