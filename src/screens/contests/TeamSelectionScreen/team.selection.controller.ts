// The controller for team selection

import {orderBy, sortBy} from 'lodash';
import {createSelector} from 'reselect';

// States
export const selectTeamsState = {
  maxTeamCount: 0,
  joinedContest: null,
  availableTeams: [],
  unavailableTeams: [],
  selectedTeams: [],
};

export const selectTeamsReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_MAX_TEAM_COUNT':
      return {
        ...state,
        maxTeamCount: action.payload,
      };
    case 'UPDATE_AVAILABLE_TEAMS':
      return {
        ...state,
        availableTeams: action.payload,
      };
    case 'UPDATE_UNAVAILABLE_TEAMS':
      return {
        ...state,
        unavailableTeams: action.payload,
      };
    case 'UPDATE_JOINED_CONTEST':
      return {
        ...state,
        joinedContest: action.payload,
      };
    case 'UPDATE_SELECTED_TEAMS':
      return {
        ...state,
        selectedTeams: action.payload,
      };
    default:
      return state;
  }
};

// Selectors
const MaxTeamsState = (state: any) => state.maxTeamCount;
const AvailableTeamsState = (state: any) => state.sortByHighPrice;
const UnavailableTeamsState = (state: any) => state.sortByHighEntryFee;
const SelectedTeamsState = (state: any) => state.selectedTeams;

export const teamSelectTextSelector = createSelector(
  [MaxTeamsState],
  max_teams => {
    if (max_teams > 1) {
      return `You can select upto ${max_teams} for joining this Contest`;
    } else {
      return `You can enter 1 team in this contest`;
    }
  },
);

export const availableTeamsSelector = createSelector(
  [AvailableTeamsState],
  avail_teams => {
    return avail_teams;
  },
);

export const unAvailableTeamsSelector = createSelector(
  [UnavailableTeamsState],
  unavail_teams => {
    return unavail_teams;
  },
);

export const selectedTeamsSelector = createSelector(
  [SelectedTeamsState],
  selected_teams => {
    return selected_teams;
  },
);
