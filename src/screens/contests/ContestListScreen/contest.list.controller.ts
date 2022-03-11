// The controller for contest list screen
import {orderBy, sortBy} from 'lodash';
import {createSelector} from 'reselect';
import {
  CONTESTFILTERS,
  MORECONTESTFILTER,
} from '../../../constants/appContants';

// States
export const matchContestsState = {
  filters: CONTESTFILTERS,
  activeFilter: {
    id: '1',
    name: 'All',
  },
  contestLoading: true,
  allContests: [],
  sortPrice: null,
  sortEntry: null,
};

export const contestReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_CONTEST_LOADING':
      return {
        ...state,
        contestLoading: action.payload,
      };
    case 'UPDATE_CONTESTS':
      return {
        ...state,
        allContests: action.payload,
      };
    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: action.payload,
      };
    case 'UPDATE_ACTIVE_FILTER':
      return {
        ...state,
        activeFilter: action.payload,
      };
    case 'UPDATE_SORT':
      return {
        ...state,
        sortPrice: action.payload.price,
        sortEntry: action.payload.entry,
      };
    default:
      return state;
  }
};

// Selectors
const AllContestsState = (state: any) => state.allContests;
const activeFilterSTate = (state: any) => state.activeFilter;
const sortPriceState = (state: any) => state.sortPrice;
const sortEntryState = (state: any) => state.sortEntry;
const ContestLoadingState = (state: any) => state.contestLoading;
const contestFilterState = (state: any) => state.filters;

export const contestLoadingSelector = createSelector(
  ContestLoadingState,
  cLoding => {
    return cLoding;
  },
);

export const contestFilterSelector = createSelector(
  contestFilterState,
  activeFilterSTate,
  (allFilters: any, activeFilter: any) => {
    const filters: any = [];
    for (const filter of allFilters) {
      if (filter.id === activeFilter.id) {
        filters.push({...filter, selected: true});
      } else {
        filters.push({...filter, selected: false});
      }
    }
    return filters;
  },
);

export const allContestsSelector = createSelector(
  [AllContestsState, sortPriceState, sortEntryState, activeFilterSTate],
  (all_contests, sortPrice, sortEntry, activeFilter) => {
    let contests = all_contests;
    // if active filter other than All
    if (activeFilter.name !== 'All') {
      const filterContests = all_contests.filter(
        (item: any) => item.group === activeFilter.name.toLowerCase(),
      );
      contests = filterContests;
    }
    // [] to sortPrice   after backend confirms the type
    if (sortEntry !== null) {
      return sortContests(contests, 'entry', sortEntry);
    }

    return contests;
  },
);

export const sortStatusSelector = createSelector(
  [sortPriceState, sortEntryState],
  (price, entry) => {
    return {price, entry};
  },
);

// cotests list reducer actions

export function updateLoading(payload: boolean) {
  return {
    type: 'UPDATE_CONTEST_LOADING',
    payload,
  };
}

export function updateContests(payload: any) {
  return {
    type: 'UPDATE_CONTESTS',
    payload,
  };
}

export function updateFilter(id: string) {
  // if its id is 9 add some extra filters
  const AllFilters = [...CONTESTFILTERS, ...MORECONTESTFILTER];
  if (id === '8') {
    // remove the id "8" filter
    const newFilters = AllFilters.filter((item: any) => item.id !== '8');
    return {
      type: 'UPDATE_FILTERS',
      payload: newFilters,
    };
  }
  const filter = AllFilters.find((item: any) => item.id === id);
  if (filter) {
    return {
      type: 'UPDATE_ACTIVE_FILTER',
      payload: filter,
    };
  }
  return {
    type: 'ERROR',
  };
}
export function updateSort(payload: any) {
  return {
    type: 'UPDATE_SORT',
    payload,
  };
}

// functions

function sortContests(contests: Array<any>, field: string, order: boolean) {
  return orderBy(contests, [field], order ? ['asc'] : ['desc']);
}
