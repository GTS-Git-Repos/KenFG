// The controller for cap selection screen

import {orderBy, sortBy} from 'lodash';
import {createSelector} from 'reselect';

// States
export const capSelectionState = {
  allPlayers: [],
  sortByCategory: null,
  sortByPoints: null,
  sortByC: null,
  sortByVC: null,
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
        sortByCategory: action.payload.sortByCategory,
        sortByPoints: action.payload.sortByPoints,
        sortByC: action.payload.sortByC,
        sortByVC: action.payload.sortByVC,
      };
    }
    default:
      return state;
  }
};

// Selectors
const AllPlayersState = (state: any) => state.allPlayers;
const SortByCategoryState = (state: any) => state.sortByCategory;
const SortByPointsState = (state: any) => state.sortByPoints;
const SortByCState = (state: any) => state.sortByC;
const SortByVCState = (state: any) => state.sortByVC;

export const allPlayersSelector = createSelector(
  [AllPlayersState, SortByPointsState, SortByCState, SortByVCState],
  (allPlayers, sortbyPoints, sortByC, sortByVC) => {
    if (sortbyPoints !== null) {
      const flatenPlayers = combinePlayers(allPlayers);
      return sortPlayers(flatenPlayers, 'points', sortbyPoints);
    }
    if (sortByC !== null) {
      const flatenPlayers = combinePlayers(allPlayers);
      return sortPlayers(flatenPlayers, 'selCap', sortByC);
    }
    if (sortByVC !== null) {
      const flatenPlayers = combinePlayers(allPlayers);
      return sortPlayers(flatenPlayers, 'selVc', sortByVC);
    }
    return allPlayers;
  },
);

export const sortStatusSelector = createSelector(
  [SortByPointsState, SortByCState, SortByVCState],
  (sortByPoints, sortByC, sortByVc) => {
    return {sortByPoints, sortByC, sortByVc};
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

// is team is diffrent, team_b from api

// it has a huge risk when an API teams formatted data "keepers" key changes to
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

function sortPlayers(players: any, field: string, order: boolean) {
  const sortedPlayers = orderBy(players, [field], order ? ['asc'] : ['desc']);
  return {
    keeper: sortedPlayers,
    batsman: [],
    all_rounder: [],
    bowler: [],
  };
}
