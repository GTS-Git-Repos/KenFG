// The controller for contest list screen
import {orderBy, sortBy} from 'lodash';
import {createSelector} from 'reselect';

// States
export const matchContestsState = {
  allContests: [],
  contestFilter: null,
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
        contestFilter: action.payload,
      };
    case 'UPDATE_SORT':
      return {
        ...state,
        sortByHighPrice: action.payload.max_price,
        sortByHighEntryFee: action.payload.max_entry,
      };
    default:
      return state;
  }
};

// Selectors
const AllContestsState = (state: any) => state.allContests;
const ContestFilterState = (state: any) => state.contestFilter;
const SortByMaxPriceState = (state: any) => state.sortByHighPrice;
const SortByMaxEntryState = (state: any) => state.sortByHighEntryFee;

export const allContestsSelector = createSelector(
  [
    AllContestsState,
    SortByMaxPriceState,
    SortByMaxEntryState,
    ContestFilterState,
  ],
  (all_contests, sortMaxPrice, sortMaxEntry, contestFilter) => {
    // filter not implemented yet
    if (contestFilter !== null) {
      return [];
    }
    if (sortMaxEntry) {
      const contests = sortBy(all_contests, 'entry');
      return contests.reverse();
    } else if (sortMaxPrice) {
      const contests = orderBy(all_contests, contest => contest.prize.amount, [
        'desc',
      ]);
      if (sortMaxPrice === true) {
        return contests.reverse();
      } else {
        return contests;
      }
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

// actions

export function updateContests(payload: any) {
  // if (payload.length === 0) {
  //   return {
  //     type: 'UPDATE_CONTESTS',
  //     payload: null,
  //   };
  // }
  return {
    type: 'UPDATE_CONTESTS',
    payload,
  };
}

export function updateContestFilter(payload: any) {
  return {
    type: 'UPDATE_FILTER',
    payload,
  };
}
