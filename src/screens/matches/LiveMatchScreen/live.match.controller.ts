// The controller for live match

import React, {useReducer} from 'react';
import {createSelector} from 'reselect';

const TEMPDATA = [
  {
    id: '1',
    name: 'Player 1',
    teamCode: 'T1',
    points: 23,
    rank: '23,232,123',
  },
  {
    id: '2',
    name: 'Player 2',
    teamCode: 'T1',
    points: 313,
    rank: '23,232,123',
  },
  {
    id: '3',
    name: 'Player 3',
    teamCode: 'T1',
    points: 132,
    rank: '23,232,123',
  },
];

// States
export const liveMatchState = {
  fantasyPlayers: TEMPDATA,
  isComparitionActive: false,
};

export const liveMatchReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FANTASY_PLAYERS':
      return {
        ...state,
        fantasyPlayers: action.payload,
      };
    case 'UPDATE_COMPARE_STATE':
      return {
        ...state,
        isComparitionActive: action.payload,
      };
    default:
      return state;
  }
};

// Selectors
const FantasyPlayersState = (state: any) => state.fantasyPlayers;

export const fpSelector = createSelector(FantasyPlayersState, f_players => {
  return f_players;
});
