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
    if (allPlayers.length === 0) {
      return [];
    }
    const keeper = allPlayers[0].keeper;
    const batsman = allPlayers[0].batsman;
    const all_rounder = allPlayers[0].all_rounder;
    const bowler = allPlayers[0].bowler;
    if (sortByPoints) {
      const sortedKeepers = sortBy(keeper, 'points');
      const sortedBatsman = sortBy(batsman, 'points');
      const sortedAR = sortBy(all_rounder, 'points');
      const sortedBowler = sortBy(bowler, 'points');
      // console.log(sortedKeepers);

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
    } else if (sortByCredits) {
      const sortedKeepers = sortBy(keeper, 'credits');
      const sortedBatsman = sortBy(batsman, 'credits');
      const sortedAR = sortBy(all_rounder, 'credits');
      const sortedBowler = sortBy(bowler, 'credits');
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
      return allPlayers;
    }
  },
);

export const sortStatusSelector = createSelector(
  [SortByPointsState, SortByCreditsState],
  (sortByPoints, sortByCredits) => {
    return {sortByPoints, sortByCredits};
  },
);

// function joinPlayers(){

// }
