import {UPDATE_TEAM_A, UPDATE_TEAM_B} from './actions';

export const initialState = {
  players: [
    {
      name: 't 1',
      team: 'a',
    },
    {
      name: 't 2',
      team: 'b',
    },
    {
      name: 't 3',
      team: 'a',
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
