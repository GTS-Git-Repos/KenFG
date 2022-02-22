/**
 * The controller for Live Match
 * not utilized still
 */

import React, {useReducer} from 'react';
import {createSelector} from 'reselect';

// State
export const LiveMatchState = {
  selectedTab: 0,
};

export const MatchReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_TAB':
      return {
        ...state,
        selectedTab: action.payload,
      };
    default:
      return state;
  }
};

// Selectors
// const FantasyPlayersState = (state: any) => state.fantasyPlayers;

// export const fpSelector = createSelector(FantasyPlayersState, f_players => {
//   return f_players;
// });
