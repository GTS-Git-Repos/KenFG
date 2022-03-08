/**
 * The controller for Live Match
 * not utilized still
 */

import React, {useReducer} from 'react';
import {createSelector} from 'reselect';

// State
export const LiveMatchState = {
  selectedTab: 0,
  matchPlayers: [],
};

export const MatchReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_TAB':
      return {
        ...state,
        selectedTab: action.payload,
      };
    case 'UPDATE_MATCH_PLAYERS':
      return {
        ...state,
        matchPlayers: action.payload,
      };
    default:
      return state;
  }
};

// Match actions
export const updateSelTab = (payload: number) => ({
  type: 'UPDATE_SELECTED_TAB',
  payload,
});

export const updateMatchPlayer = (payload: any) => ({
  type: 'UPDATE_MATCH_PLAYERS',
  payload,
});

// Selectors
// const FantasyPlayersState = (state: any) => state.fantasyPlayers;

// export const fpSelector = createSelector(FantasyPlayersState, f_players => {
//   return f_players;
// });
