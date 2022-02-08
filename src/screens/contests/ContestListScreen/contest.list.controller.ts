// The controller for contest list screen

import {sortBy} from 'lodash';
import React, {useReducer} from 'react';
import {createSelector} from 'reselect';

// States
export const matchContestsState = {
  allContests: null,
  activeFilter: null,
  sortByHighPrice: null,
  sortByHighEntryFee: null,
};

export const contestReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_CONTESTS':
      return {
        ...state,
        allContests: action.payload,
      };
    case 'UPDATE_FILTER':
      return {
        ...state,
        activeFilter: action.payload,
      };
    case "UPDATE_SORT":
      return {
        ...state,
        sortByHighPrice: action.payload.max_price,
        sortByHighEntryFee:action.payload.max_entry,
      };
    
    default:
      return state;
  }
};

// Selectors
const AllContestsState = (state: any) => state.allContests;
const SortByMaxPriceState = (state: any) => state.sortByHighPrice;
const SortByMaxEntryState = (state: any) => state.sortByHighEntryFee;

export const allContestsSelector = createSelector(
  [AllContestsState, SortByMaxPriceState, SortByMaxEntryState],
  (all_contests, sortMaxPrice, sortMaxEntry) => {
    if (sortMaxEntry) {
      const contests = sortBy(all_contests, 'entry');
        return contests.reverse()
    } else if (sortMaxPrice) {
      const contests = sortBy(all_contests, [(obj: any) => parseInt(obj.prize.amount)]);
      return contests.reverse()
    } else {
      return all_contests;
    }
  },
);

export const sortStatusSelector = createSelector(
  [SortByMaxPriceState, SortByMaxEntryState],
  (max_price, max_entry) => {
    return {max_price, max_entry};
  },
);
