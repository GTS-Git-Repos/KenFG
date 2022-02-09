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
    if (!allPlayers) return [];

    if (sortFromMaxPoints === null) {
      return allPlayers;
    }
    const flatenPlayers = combinePlayers(allPlayers);
    const sortPlayers = sortBy(flatenPlayers, 'points');
    if (sortFromMaxPoints) {
      return {
        keeper: sortPlayers,
        batsman: [],
        all_rounder: [],
        bowler: [],
      };
    } else {
      return {keeper: sortPlayers.reverse(), batsman: [], all_rounder: [], bowler: []};
    }
  },
);

export const sortStatusSelector = createSelector(
  [SortByPointsState],
  sortByPoints => {
    return {sortByPoints};
  },
);

function combinePlayers(playersByRole: any) {
  return [
    ...playersByRole.keeper,
    ...playersByRole.all_rounder,
    ...playersByRole.batsman,
    ...playersByRole.bowler,
  ];
}

// function splitPlayers(flatenPlayers: any) {
//   return [
//     ...playersByRole.keeper,
//     ...playersByRole.all_rounder,
//     ...playersByRole.batsman,
//     ...playersByRole.bowler,
//   ];
// }
