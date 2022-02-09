// The controller for cap selection screen

import {sortBy} from 'lodash';
import {createSelector} from 'reselect';

// States
export const capSelectionState = {
  allPlayers: [],
  sortByPoints: null,
};

export const capSelectionReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_PLAYERS':
      return {
        ...state,
        allPlayers: action.payload,
      };
    case 'UPDATE_SORT': {
      return {
        ...state,
        sortByPoints: action.payload,
      };
    }
    default:
      return state;
  }
};

// Selectors
const AllPlayersState = (state: any) => state.allPlayers;
const SortByPointsState = (state: any) => state.sortByPoints;

export const allPlayersSelector = createSelector(
  [AllPlayersState, SortByPointsState],
  (allPlayers, sortFromMaxPoints) => {
    return allPlayers;
  },
);
