// The controller for contest list screen
import {sortBy} from 'lodash';
import React, {useReducer} from 'react';
import {createSelector} from 'reselect';

// States
export const teamFormationState = {
  players: [],
  sortByPoints: null,
  sortByCredits: null,
};

export const teamFormationReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_PLAYERS':
      return {
        ...state,
        players: action.payload,
      };
    case 'UPDATE_SORT':
      return {
        ...state,
        sortByPoints: action.payload.sortByPoints,
        sortByCredits: action.payload.sortByCredits,
      };
    default:
      return state;
  }
};

// Selectors
const AllPlayersState = (state: any) => state.players;
const SortByPointsState = (state: any) => state.sortByPoints;
const SortByCreditsState = (state: any) => state.sortByCredits;

export const allPlayersSelector = createSelector(
  [AllPlayersState, SortByPointsState, SortByCreditsState],
  (allPlayers, sortByPoints, sortByCredits) => {
    return allPlayers;
  },
);

export const sortStatusSelector = createSelector(
  [SortByPointsState, SortByCreditsState],
  (sortByPoints, sortByCredits) => {
    return {sortByPoints, sortByCredits};
  },
);
