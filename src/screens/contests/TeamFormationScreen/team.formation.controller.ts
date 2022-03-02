// The controller for contest list screen
import {orderBy, sortBy} from 'lodash';
import React, {useReducer} from 'react';
import {createSelector} from 'reselect';

// States
export const teamFormationState = {
  players: [],
  filterTeam: null,
  sortByPoints: null,
  sortByCredits: null,
  sortBySel: null,
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
        sortBySel: action.payload.sortBySel,
      };
    case 'UPDATE_TEAM_FILTER':
      return {
        ...state,
        filterTeam: action.payload,
      };
    default:
      return state;
  }
};

// Selectors
const AllPlayersState = (state: any) => state.players;
const SortByPointsState = (state: any) => state.sortByPoints;
const SortByCreditsState = (state: any) => state.sortByCredits;
const FilterTeamState = (state: any) => state.filterTeam;
const SortBySelState = (state: any) => state.sortBySel;

export const allPlayersSelector = createSelector(
  [AllPlayersState, SortByPointsState, SortByCreditsState, FilterTeamState],
  (allPlayers, sortByPoints, sortByCredits, filterTeam) => {
    // in case of null players
    if (!allPlayers) {
      return [];
    }
    if (allPlayers.length === 0) {
      return [];
    }
    // extract players
    let keeper = allPlayers[0].keeper;
    let batsman = allPlayers[0].batsman;
    let all_rounder = allPlayers[0].all_rounder;
    let bowler = allPlayers[0].bowler;

    // filter by team enabled, it has a team key
    if (filterTeam) {
      const {fkeeper, fbatsman, fall_rounder, fbowler} = filterByTeam(
        keeper,
        batsman,
        all_rounder,
        bowler,
        filterTeam,
      );
      keeper = fkeeper;
      batsman = fbatsman;
      all_rounder = fall_rounder;
      bowler = fbowler;
    }

    // if sort points filter applied
    if (sortByPoints !== null) {
      return sortPlayers(
        keeper,
        batsman,
        all_rounder,
        bowler,
        'points',
        sortByPoints,
      );
    }
    // sort by credits applied
    if (sortByCredits !== null) {
      return sortPlayers(
        keeper,
        batsman,
        all_rounder,
        bowler,
        'credits',
        sortByCredits,
      );
    }
    // no filters applied
    return [
      {
        keeper,
        batsman,
        all_rounder,
        bowler,
      },
    ];
  },
);

export const sortStatusSelector = createSelector(
  [SortByPointsState, SortByCreditsState, SortBySelState],
  (sortByPoints, sortByCredits, sortBySel) => {
    return {sortByPoints, sortByCredits, sortBySel};
  },
);

export const filerTeamSelector = createSelector(
  [FilterTeamState],
  filterTeam => {
    return filterTeam;
  },
);

// filter players by team
function filterByTeam(
  keeper: any,
  batsman: any,
  all_rounder: any,
  bowler: any,
  filterTeam: string,
) {
  const filterKeep = keeper.filter((item: any) => item.team_key === filterTeam);
  const filterBat = batsman.filter((item: any) => item.team_key === filterTeam);
  const filterAr = all_rounder.filter(
    (item: any) => item.team_key === filterTeam,
  );
  const filterBow = bowler.filter((item: any) => item.team_key === filterTeam);
  return {
    fkeeper: filterKeep,
    fbatsman: filterBat,
    fall_rounder: filterAr,
    fbowler: filterBow,
  };
}

function sortPlayers(
  keeper: any,
  batsman: any,
  all_rounder: any,
  bowler: any,
  field: string,
  order: boolean,
) {
  const sKeepers = orderBy(keeper, [field], order ? ['asc'] : ['desc']);
  const sBatsman = orderBy(batsman, [field], order ? ['asc'] : ['desc']);
  const sAll_rounder = orderBy(
    all_rounder,
    [field],
    order ? ['asc'] : ['desc'],
  );
  const sBowler = orderBy(bowler, [field], order ? ['asc'] : ['desc']);
  return [
    {
      keeper: sKeepers,
      batsman: sBatsman,
      all_rounder: sAll_rounder,
      bowler: sBowler,
    },
  ];
}

// function sortPlayersByCredits(
//   keeper: any,
//   batsman: any,
//   all_rounder: any,
//   bowler: any,
//   Order: boolean,
// ) {
//   const sKeepers = orderBy(
//     keeper,
//     ['credits'],
//     Order ? ['asc'] : ['desc'],
//   );
//   const sBatsman = orderBy(
//     batsman,
//     ['credits'],
//     Order ? ['asc'] : ['desc'],
//   );
//   const sAll_rounder = orderBy(
//     all_rounder,
//     ['credits'],
//     Order ? ['asc'] : ['desc'],
//   );
//   const sBowler = orderBy(bowler, ['credits'], Order ? ['asc'] : ['desc']);
//   return [
//     {
//       keeper: sKeepers,
//       batsman: sBatsman,
//       all_rounder: sAll_rounder,
//       bowler: sBowler,
//     },
//   ];
// }
