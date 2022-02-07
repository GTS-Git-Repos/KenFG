// The controller for Contest Live Match
import React, {useReducer} from 'react';
import {createSelector} from 'reselect';

// State
export const ContestLiveMatchState = {
  selectedTab: 0,
};

export const ContestliveMatchReducer = (state: any, action: any) => {
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
