// The controller for contest info screen

import React, {useReducer} from 'react';
import {createSelector} from 'reselect';

// States
export const contestInfoState = {
  maxWinningsList: null,
  activeFilter: null,
  sortByPrice: false,
  sortByEntryFee: false,
};

export const contestReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_CONTESTS':
      return {
        ...state,
        contests: action.payload,
      };
    case 'UPDATE_FILTER':
      return {
        ...state,
        activeFilter: action.payload,
      };
    case 'UPDATE_SORTBY_PRICE':
      return {
        ...state,
        sortByPrice: action.payload,
      };
    case 'UPDATE_SORTBY_ENTRY':
      return {
        ...state,
        sortByEntryFee: action.payload,
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
