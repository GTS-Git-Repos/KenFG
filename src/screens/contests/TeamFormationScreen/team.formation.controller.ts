// The controller for contest list screen
import {sortBy} from 'lodash';
import React, {useReducer} from 'react';
import {createSelector} from 'reselect';

// States
export const teamFormationState = {
  players: [],
  filterTeam: null,
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
      const filterKeep = keeper.filter(
        (item: any) => item.team_key === filterTeam,
      );

      const filterBat = batsman.filter(
        (item: any) => item.team_key === filterTeam,
      );
      const filterAr = all_rounder.filter(
        (item: any) => item.team_key === filterTeam,
      );
      const filterBow = bowler.filter(
        (item: any) => item.team_key === filterTeam,
      );
      keeper = filterKeep;
      batsman = filterBat;
      all_rounder = filterAr;
      bowler = filterBow;
    }

    // if sort points filter applied
    if (sortByPoints !== null) {
      const sortedKeepers = sortBy(keeper, 'points');
      const sortedBatsman = sortBy(batsman, 'points');
      const sortedAR = sortBy(all_rounder, 'points');
      const sortedBowler = sortBy(bowler, 'points');
      // console.log(sortedKeepers);

      // from low to high
      if (sortByPoints === true) {
        const players = [
          {
            keeper: sortedKeepers,
            batsman: sortedBatsman,
            all_rounder: sortedAR,
            bowler: sortedBowler,
          },
        ];
        return players;
      } else {
        // from high to low
        const players = [
          {
            keeper: sortedKeepers.reverse(),
            batsman: sortedBatsman.reverse(),
            all_rounder: sortedAR.reverse(),
            bowler: sortedBowler.reverse(),
          },
        ];
        return players;
      }
    }
    // sort by credits active
    else if (sortByCredits !== null) {
      const sortedKeepers = sortBy(keeper, 'credits');
      const sortedBatsman = sortBy(batsman, 'credits');
      const sortedAR = sortBy(all_rounder, 'credits');
      const sortedBowler = sortBy(bowler, 'credits');
      // low to high
      if (sortByCredits === true) {
        const players = [
          {
            keeper: sortedKeepers,
            batsman: sortedBatsman,
            all_rounder: sortedAR,
            bowler: sortedBowler,
          },
        ];
        return players;
      } else {
        // high to low
        const players = [
          {
            keeper: sortedKeepers.reverse(),
            batsman: sortedBatsman.reverse(),
            all_rounder: sortedAR.reverse(),
            bowler: sortedBowler.reverse(),
          },
        ];
        return players;
      }
    } else {
      return [
        {
          keeper,
          batsman,
          all_rounder,
          bowler,
        },
      ];
    }
  },
);

export const sortStatusSelector = createSelector(
  [SortByPointsState, SortByCreditsState],
  (sortByPoints, sortByCredits) => {
    return {sortByPoints, sortByCredits};
  },
);

export const filerTeamSelector = createSelector(
  [FilterTeamState],
  filterTeam => {
    return filterTeam;
  },
);
