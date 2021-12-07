import {UPDATE_TEAM_A, UPDATE_TEAM_B} from './actions';

export const initialState = {
  teams: ['AUS', 'PAK'],
  players: [
    {
      key: 'f_0',
      name: 'Player 1',
      jersey_name: 'Ball',
      legal_name: 'Jake Ball',
      gender: 'male',
      nationality_short_code: 'PAK',
      team_key: 'eng',
      seasonal_role: 'bowler',
      selected_by: '96%',
      points: 3,
      credits: 9,
    },
  ],
};

export const reducer = function (state: any, action: any) {
  switch (action.type) {
    case UPDATE_TEAM_A: {
      return {
        ...state,
        team_a: action.payload,
      };
    }
    case UPDATE_TEAM_B: {
      return {
        ...state,
        team_b: action.payload,
      };
    }
  }
};
