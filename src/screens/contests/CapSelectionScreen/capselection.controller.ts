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
      return {
        keeper: sortPlayers.reverse(),
        batsman: [],
        all_rounder: [],
        bowler: [],
      };
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

// is team is diffrent, team_b from api

// it has a huge risk when an API keepers key changes
export function isTeamsIsDiffrent(new_team: any, existed_team: any) {
  if (new_team.team.cap_key !== existed_team.cap.key) {
    return true;
  }
  if (new_team.team.vc_key !== existed_team.vc.key) {
    return true;
  }

  const e_keep = existed_team.keepers;
  const e_bat = existed_team.batsman;
  const e_bwl = existed_team.bowler;
  const e_ar = existed_team.all_rounder;

  const e_players = [...e_keep, ...e_bat, ...e_bwl, ...e_ar];
  for (let e_player of e_players) {
    // is existing player in new team
    const isExist = new_team.team.players.find(
      (item: any) => item.key === e_player.key,
    );
    if (!isExist) {
      return true;
    }
  }
  return false;
}
