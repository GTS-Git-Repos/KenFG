// The controller for contest info screen

import React, {useReducer} from 'react';
import {createSelector} from 'reselect';

// States
export const State = {
  allContests: [],
  userId: null,
};

export const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_CONTESTS':
      return {
        ...state,
        allContests: action.payload,
      };
    case 'UPDATE_USER_ID':
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

// Selectors
const AllContestsState = (state: any) => state.allContests;
const UserIdState = (state: any) => state.userId;

export const usersContestsSelector = createSelector(
  AllContestsState,
  UserIdState,
  (allContests, userId) => {
    return allContests.filter((item: any) => item.host === userId);
  },
);

export const allContestsSelector = createSelector(
  AllContestsState,
  allContests => {
    return allContests;
  },
);

// actions

export function updateContests(payload: any) {
  return {
    type: 'UPDATE_CONTESTS',
    payload,
  };
}

export function updateUserId(payload: any) {
  return {
    type: 'UPDATE_USER_ID',
    payload,
  };
}
